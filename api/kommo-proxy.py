#!/usr/bin/env python3
"""Tiny HTTP server that receives landing form submissions and creates leads in Kommo CRM."""

import json
import http.server
import urllib.request
import urllib.error
import os
import sys
from datetime import datetime

PORT = 4500
KOMMO_API = "https://lattero.kommo.com"
KOMMO_TOKEN = os.environ.get("KOMMO_TOKEN", "")

class FormHandler(http.server.BaseHTTPRequestHandler):
    def _cors(self):
        self.send_header("Access-Control-Allow-Origin", "https://partners.latte.ro")
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

        note_lines = [
            f"Ocupație: {data.get('ocupatie', '-')}",
            f"Domeniu: {data.get('domeniu', '-')}",
            f"Cunoștințe franciză: {data.get('cunostinte_franciza', '-')}",
            f"Motiv: {data.get('motiv', '-')}",
            f"Buget: {data.get('buget', '-')}",
            f"Oraș: {oras}",
            f"Spațiu găsit: {data.get('spatiu', '-')}",
            f"Așteptări profit: {data.get('asteptari_profit', '-')}",
            f"Recuperare investiție: {data.get('recuperare_investitie', '-')}",
            f"Sursă: {data.get('sursa', '-')}",
        ]

        now = int(datetime.now().timestamp())

        payload = {
            "source_name": "Landing Page",
            "source_uid": "latte-landing-form",
            "created_at": now,
            "_embedded": {
                "leads": [{
                    "name": f"Franciză — {nome} — {oras}" if oras else f"Franciză — {nome}",
                    "_embedded": {
                        "tags": [{"name": "landing-page"}, {"name": "formular-franciza"}]
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
                "form_page": "https://partners.latte.ro/landing",
                "form_sent_at": now,
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
                self._add_note(lead_uid, "\n".join(note_lines))

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

    def _add_note(self, unsorted_uid, text):
        """Try to add a note. Non-critical — if it fails we still have the lead."""
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

            if lead_id:
                note_payload = [{"note_type": "common", "params": {"text": text}}]
                self._kommo_post(f"/api/v4/leads/{lead_id}/notes", note_payload)
        except Exception as e:
            print(f"[{datetime.now().isoformat()}] Note/accept warning: {e}", file=sys.stderr)

    def _respond(self, code, data):
        self.send_response(code)
        self._cors()
        self.send_header("Content-Type", "application/json")
        self.end_headers()
        self.wfile.write(json.dumps(data).encode())

    def log_message(self, fmt, *args):
        print(f"[{datetime.now().isoformat()}] {fmt % args}")


if __name__ == "__main__":
    if not KOMMO_TOKEN:
        print("ERROR: KOMMO_TOKEN env variable not set", file=sys.stderr)
        sys.exit(1)
    server = http.server.HTTPServer(("127.0.0.1", PORT), FormHandler)
    print(f"Kommo proxy listening on 127.0.0.1:{PORT}")
    server.serve_forever()
