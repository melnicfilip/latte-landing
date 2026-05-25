#!/usr/bin/env python3
"""Tiny HTTP server that receives landing form submissions and creates leads in Kommo CRM."""

import json
import hashlib
import http.server
import urllib.request
import urllib.error
import os
import sys
from datetime import datetime

PORT = 4500
KOMMO_API = "https://lattero.kommo.com"
KOMMO_TOKEN = os.environ.get("KOMMO_TOKEN", "")
BREVO_API_KEY = os.environ.get("BREVO_API_KEY", "")
FB_PIXEL_ID = "1756577964676334"
FB_CAPI_TOKEN = os.environ.get("FB_CAPI_TOKEN", "")
TT_PIXEL_ID = "CU78K8JC77UDT30C56HG"
TT_EVENTS_TOKEN = os.environ.get("TT_EVENTS_TOKEN", "")
GA4_MEASUREMENT_ID = "G-64NHM99BZ4"
GA4_API_SECRET = os.environ.get("GA4_API_SECRET", "")

class FormHandler(http.server.BaseHTTPRequestHandler):
    def _cors(self):
        origin = self.headers.get("Origin", "")
        allowed = ("https://latte.ro", "https://www.latte.ro", "https://partners.latte.ro")
        if origin in allowed:
            self.send_header("Access-Control-Allow-Origin", origin)
        else:
            self.send_header("Access-Control-Allow-Origin", "https://latte.ro")
        self.send_header("Access-Control-Allow-Methods", "POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")

    def do_OPTIONS(self):
        self.send_response(204)
        self._cors()
        self.end_headers()

    def do_POST(self):
        if self.path not in ("/submit", "/api/submit"):
            self.send_response(404)
            self.end_headers()
            return

        length = int(self.headers.get("Content-Length", 0))
        body = self.rfile.read(length)

        try:
            data = json.loads(body)
        except json.JSONDecodeError:
            self._respond(400, {"ok": False, "error": "Invalid JSON"})
            return

        nome = data.get("nume", "Necunoscut")
        email = data.get("email", "")
        tel = data.get("tel", "")
        oras = data.get("oras", "")

        now = int(datetime.now().timestamp())

        # Extract UTM params
        utm_source = data.get("utm_source", "")
        utm_medium = data.get("utm_medium", "")
        utm_campaign = data.get("utm_campaign", "")
        utm_term = data.get("utm_term", "")
        utm_content = data.get("utm_content", "")
        gclid = data.get("gclid", "")
        fbclid = data.get("fbclid", "")
        page_url = data.get("page_url", "https://latte.ro")

        tags = [{"name": "landing-page"}, {"name": "formular-franciza"}]

        payload = {
            "source_name": "Landing Page",
            "source_uid": "latte-landing-form",
            "created_at": now,
            "_embedded": {
                "leads": [{
                    "name": f"Franciză — {nome} — {oras}" if oras else f"Franciză — {nome}",
                    "_embedded": {
                        "tags": tags
                    }
                }],
                "contacts": [{
                    "name": nome,
                    "custom_fields_values": []
                }]
            },
            "metadata": {
                "ip": self.client_address[0],
                "form_id": "landing-franciza",
                "form_name": "Formular Franciză Landing",
                "form_page": page_url,
                "form_sent_at": now,
                "referer": data.get("referrer", "") or page_url,
            }
        }

        contact_fields = payload["_embedded"]["contacts"][0]["custom_fields_values"]
        if tel:
            contact_fields.append({"field_code": "PHONE", "values": [{"value": tel}]})
        if email:
            contact_fields.append({"field_code": "EMAIL", "values": [{"value": email}]})

        try:
            result = self._kommo_post("/api/v4/leads/unsorted/forms", [payload])
            unsorted = result.get("_embedded", {}).get("unsorted", [])
            lead_uid = unsorted[0].get("uid", "") if unsorted else ""

            if lead_uid:
                lead_id = self._enrich_lead(lead_uid, data)
                if lead_id:
                    self._add_utm_note(lead_id, utm_source, utm_medium, utm_campaign, utm_term, utm_content, gclid, fbclid, page_url, data.get("referrer", ""))

            self._brevo_sync(data, nome, email, tel, utm_source, utm_medium, utm_campaign)
            self._fb_capi_send("Lead", data)
            self._tt_events_send("SubmitForm", data)
            self._ga4_mp_send("generate_lead", data)

            self._respond(200, {"ok": True, "uid": lead_uid})
            print(f"[{datetime.now().isoformat()}] Lead created: {nome} ({oras}) — uid={lead_uid}")

        except Exception as e:
            print(f"[{datetime.now().isoformat()}] ERROR: {e}", file=sys.stderr)
            self._respond(500, {"ok": False, "error": str(e)})

    def _kommo_post(self, path, data):
        req = urllib.request.Request(
            f"{KOMMO_API}{path}",
            data=json.dumps(data).encode(),
            headers={
                "Authorization": f"Bearer {KOMMO_TOKEN}",
                "Content-Type": "application/json",
            },
        )
        try:
            with urllib.request.urlopen(req, timeout=15) as resp:
                return json.loads(resp.read())
        except urllib.error.HTTPError as e:
            body = e.read().decode()
            raise Exception(f"Kommo API {e.code}: {body}")

    def _kommo_patch(self, path, data):
        req = urllib.request.Request(
            f"{KOMMO_API}{path}",
            data=json.dumps(data).encode(),
            headers={
                "Authorization": f"Bearer {KOMMO_TOKEN}",
                "Content-Type": "application/json",
            },
            method="PATCH",
        )
        try:
            with urllib.request.urlopen(req, timeout=15) as resp:
                return json.loads(resp.read())
        except urllib.error.HTTPError as e:
            body = e.read().decode()
            raise Exception(f"Kommo API PATCH {e.code}: {body}")

    def _enrich_lead(self, unsorted_uid, data):
        """Accept the unsorted lead and fill custom fields. Returns lead_id."""
        try:
            accept_payload = {
                "user_id": 0,
                "status_id": 44382742,
            }
            result = self._kommo_post(f"/api/v4/leads/unsorted/{unsorted_uid}/accept", accept_payload)

            lead_id = None
            if result and "_embedded" in result:
                leads = result["_embedded"].get("leads", [])
                if leads:
                    lead_id = leads[0].get("id")

            if not lead_id:
                return None

            field_map = {
                "ocupatie": 2927931,           # OCUPATIA_ACTUALA
                "cunostinte_franciza": 2927933, # CUNOSTINTE_FRAINCIZA
                "motiv": 2927935,              # MOTIVUL_ALGERII
                "buget": 2927937,              # BUGET_ALOCAT
                "oras": 2927939,               # ORAS
                "spatiu": 2927941,             # AI_GASIT_SPATIU
                "asteptari_profit": 2927943,   # ASTEPTARI_PROFIT
                "recuperare_investitie": 2927945, # RECUPERARE_INVESTITIE
                "sursa": 2927947,              # DE_UNDE_AI_AFLAT
                "domeniu": 2927483,            # Domeniu activitate
            }

            fields = []
            for form_key, field_id in field_map.items():
                val = data.get(form_key, "")
                if val:
                    fields.append({"field_id": field_id, "values": [{"value": val}]})

            if fields:
                patch = [{"id": lead_id, "custom_fields_values": fields}]
                self._kommo_patch("/api/v4/leads", patch)

            return lead_id

        except Exception as e:
            print(f"[{datetime.now().isoformat()}] Enrich warning: {e}", file=sys.stderr)
            return None

    def _add_utm_note(self, lead_id, utm_source, utm_medium, utm_campaign, utm_term, utm_content, gclid, fbclid, page_url, referrer):
        """Set native tracking data fields and add a note with UTM data."""
        # Set native Kommo tracking data fields
        tracking_map = {
            861717: utm_source,       # utm_source
            861713: utm_medium,       # utm_medium
            861715: utm_campaign,     # utm_campaign
            861711: utm_content,      # utm_content
            861719: utm_term,         # utm_term
            861743: gclid,            # gclid
            861747: fbclid,           # fbclid
            861725: referrer,         # referrer
            861721: referrer,         # utm_referrer
        }
        tracking_fields = []
        for field_id, val in tracking_map.items():
            if val:
                tracking_fields.append({"field_id": field_id, "values": [{"value": val}]})

        if tracking_fields:
            try:
                patch = [{"id": lead_id, "custom_fields_values": tracking_fields}]
                self._kommo_patch("/api/v4/leads", patch)
                print(f"[{datetime.now().isoformat()}] Tracking data set on lead {lead_id}")
            except Exception as e:
                print(f"[{datetime.now().isoformat()}] Tracking data warning: {e}", file=sys.stderr)

        # Also add a note for easy visibility
        lines = []
        if utm_source:
            lines.append(f"UTM Source: {utm_source}")
        if utm_medium:
            lines.append(f"UTM Medium: {utm_medium}")
        if utm_campaign:
            lines.append(f"UTM Campaign: {utm_campaign}")
        if utm_term:
            lines.append(f"UTM Term: {utm_term}")
        if utm_content:
            lines.append(f"UTM Content: {utm_content}")
        if gclid:
            lines.append(f"GCLID: {gclid}")
        if fbclid:
            lines.append(f"FBCLID: {fbclid}")
        if page_url:
            lines.append(f"Page: {page_url}")
        if referrer:
            lines.append(f"Referrer: {referrer}")

        if not lines:
            return

        text = "📊 Tracking Data\n" + "\n".join(lines)
        try:
            payload = [{"entity_id": lead_id, "lead_id": lead_id, "note_type": "common", "params": {"text": text}}]
            self._kommo_post("/api/v4/leads/notes", payload)
            print(f"[{datetime.now().isoformat()}] UTM note added to lead {lead_id}")
        except Exception as e:
            print(f"[{datetime.now().isoformat()}] UTM note warning: {e}", file=sys.stderr)

    def _brevo_sync(self, data, name, email, tel, utm_source="", utm_medium="", utm_campaign=""):
        """Add or update contact in Brevo list #2."""
        if not BREVO_API_KEY or not email:
            return
        try:
            payload = {
                "email": email,
                "listIds": [2],
                "updateEnabled": True,
                "attributes": {
                    "FIRSTNAME": name,
                    "TELEFON": tel,
                    "OCUPATIA_ACTUALA": data.get("ocupatie", ""),
                    "DOMENIU_DE_ACTIVITATE": data.get("domeniu", ""),
                    "CAT_DE_BINE_CUNOASTI_CONCEPTUL_DE_FRANCIZA": data.get("cunostinte_franciza", ""),
                    "MOTIVUL_ALGERII": data.get("motiv", ""),
                    "BUGET_ALOCAT": data.get("buget", ""),
                    "ORAS": data.get("oras", ""),
                    "AI_GASIT_SPATIU": data.get("spatiu", ""),
                    "ASTEPTARI_PROFIT": data.get("asteptari_profit", ""),
                    "RECUPERARE_INVESTITIE": data.get("recuperare_investitie", ""),
                    "DE_UNDE_AI_AFLAT": data.get("sursa", ""),
                    "UTM_SOURCE": utm_source,
                    "UTM_MEDIUM": utm_medium,
                    "UTM_CAMPAIGN": utm_campaign,
                },
            }
            req = urllib.request.Request(
                "https://api.brevo.com/v3/contacts",
                data=json.dumps(payload).encode(),
                headers={
                    "api-key": BREVO_API_KEY,
                    "Content-Type": "application/json",
                },
            )
            with urllib.request.urlopen(req, timeout=15) as resp:
                resp.read()
            print(f"[{datetime.now().isoformat()}] Brevo: synced {email}")
        except urllib.error.HTTPError as e:
            body = e.read().decode()
            print(f"[{datetime.now().isoformat()}] Brevo warning: {e.code} {body}", file=sys.stderr)
        except Exception as e:
            print(f"[{datetime.now().isoformat()}] Brevo warning: {e}", file=sys.stderr)

    def _respond(self, code, data):
        self.send_response(code)
        self._cors()
        self.send_header("Content-Type", "application/json")
        self.end_headers()
        self.wfile.write(json.dumps(data).encode())

    def _fb_capi_send(self, event_name, data):
        """Send server-side event to Facebook Conversions API."""
        if not FB_CAPI_TOKEN:
            return
        try:
            def sha256(val):
                return hashlib.sha256(val.strip().lower().encode()).hexdigest() if val else None

            user_data = {}
            if data.get("email"):
                user_data["em"] = [sha256(data["email"])]
            if data.get("tel"):
                phone = data["tel"].strip().replace(" ", "")
                if not phone.startswith("+"):
                    phone = "+40" + phone.lstrip("0")
                user_data["ph"] = [hashlib.sha256(phone.encode()).hexdigest()]
            if data.get("nume"):
                parts = data["nume"].strip().split()
                if parts:
                    user_data["fn"] = [sha256(parts[0])]
                    if len(parts) > 1:
                        user_data["ln"] = [sha256(parts[-1])]
            if data.get("oras"):
                user_data["ct"] = [sha256(data["oras"])]
            user_data["country"] = [sha256("ro")]

            if data.get("fbclid"):
                user_data["fbc"] = f"fb.1.{int(datetime.now().timestamp())}.{data['fbclid']}"
            if data.get("_fbp"):
                user_data["fbp"] = data["_fbp"]

            user_data["client_ip_address"] = self.client_address[0]
            user_data["client_user_agent"] = self.headers.get("User-Agent", "")

            event = {
                "event_name": event_name,
                "event_time": int(datetime.now().timestamp()),
                "event_source_url": data.get("page_url", "https://latte.ro"),
                "action_source": "website",
                "user_data": user_data,
            }

            payload = json.dumps({"data": [event]}).encode()
            url = f"https://graph.facebook.com/v21.0/{FB_PIXEL_ID}/events?access_token={FB_CAPI_TOKEN}"
            req = urllib.request.Request(url, data=payload, headers={"Content-Type": "application/json"})
            with urllib.request.urlopen(req, timeout=10) as resp:
                result = json.loads(resp.read())
            print(f"[{datetime.now().isoformat()}] FB CAPI {event_name}: {result}")
        except Exception as e:
            print(f"[{datetime.now().isoformat()}] FB CAPI error: {e}", file=sys.stderr)

    def _tt_events_send(self, event_name, data):
        """Send server-side event to TikTok Events API."""
        if not TT_EVENTS_TOKEN:
            return
        try:
            def sha256(val):
                return hashlib.sha256(val.strip().lower().encode()).hexdigest() if val else None

            user = {}
            if data.get("email"):
                user["email"] = sha256(data["email"])
            if data.get("tel"):
                phone = data["tel"].strip().replace(" ", "")
                if not phone.startswith("+"):
                    phone = "+40" + phone.lstrip("0")
                user["phone"] = hashlib.sha256(phone.encode()).hexdigest()
            user["ip"] = self.client_address[0]
            user["user_agent"] = self.headers.get("User-Agent", "")

            event = {
                "event": event_name,
                "event_time": int(datetime.now().timestamp()),
                "page": {"url": data.get("page_url", "https://latte.ro")},
                "user": user,
            }

            payload = json.dumps({"event_source": "web", "event_source_id": TT_PIXEL_ID, "data": [event]}).encode()
            url = "https://business-api.tiktok.com/open_api/v1.3/event/track/"
            req = urllib.request.Request(url, data=payload, headers={
                "Content-Type": "application/json",
                "Access-Token": TT_EVENTS_TOKEN,
            })
            with urllib.request.urlopen(req, timeout=10) as resp:
                result = json.loads(resp.read())
            print(f"[{datetime.now().isoformat()}] TT Events {event_name}: code={result.get('code')} msg={result.get('message')}")
        except urllib.error.HTTPError as e:
            body = e.read().decode()
            print(f"[{datetime.now().isoformat()}] TT Events error: {e.code} {body}", file=sys.stderr)
        except Exception as e:
            print(f"[{datetime.now().isoformat()}] TT Events error: {e}", file=sys.stderr)

    def _ga4_mp_send(self, event_name, data):
        """Send server-side event to GA4 Measurement Protocol."""
        if not GA4_API_SECRET:
            return
        try:
            import uuid
            client_id = data.get("_ga_cid", str(uuid.uuid4()))

            event = {"name": event_name, "params": {
                "event_category": "form",
                "event_label": "franciza",
            }}
            if data.get("oras"):
                event["params"]["city"] = data["oras"]
            if data.get("utm_source"):
                event["params"]["source"] = data["utm_source"]
            if data.get("utm_medium"):
                event["params"]["medium"] = data["utm_medium"]
            if data.get("utm_campaign"):
                event["params"]["campaign"] = data["utm_campaign"]

            payload = json.dumps({"client_id": client_id, "events": [event]}).encode()
            url = f"https://www.google-analytics.com/mp/collect?measurement_id={GA4_MEASUREMENT_ID}&api_secret={GA4_API_SECRET}"
            req = urllib.request.Request(url, data=payload, headers={"Content-Type": "application/json"})
            with urllib.request.urlopen(req, timeout=10) as resp:
                resp.read()
            print(f"[{datetime.now().isoformat()}] GA4 MP {event_name}: sent (client_id={client_id[:12]}...)")
        except Exception as e:
            print(f"[{datetime.now().isoformat()}] GA4 MP error: {e}", file=sys.stderr)

    def log_message(self, fmt, *args):
        print(f"[{datetime.now().isoformat()}] {fmt % args}")


if __name__ == "__main__":
    if not KOMMO_TOKEN:
        print("ERROR: KOMMO_TOKEN env variable not set", file=sys.stderr)
        sys.exit(1)
    server = http.server.HTTPServer(("127.0.0.1", PORT), FormHandler)
    print(f"Kommo proxy listening on 127.0.0.1:{PORT}")
    server.serve_forever()
