// Sections C: Process, Phone, Proof, WhyNow, FAQ, Final CTA, Footer

function Process() {
  const steps = [
    { n: "01", w: "Săptămâna 1", t: "Pregătire acte", b: ["Aplici pe WhatsApp", "Discuție 30 min cu account manager", "Semnare contract franciză", "Avans pentru aparat"] },
    { n: "02", w: "Săptămâna 2", t: "Căutare locație", b: ["Primești ghidul de evaluare", "Validăm împreună 2—3 opțiuni", "Negociere contract chirie", "Aprobare finală locație"] },
    { n: "03", w: "Săptămâna 3", t: "Instalare & training", b: ["Livrăm aparatul", "Montaj + setare 1 zi", "Training 4h: meniu, încărcare, app", "Materie primă pentru 300 pahare"] },
    { n: "04", w: "Săptămâna 4", t: "Lansare & operare", b: ["Setare promovare locală", "Primii clienți, primele încasări", "Account manager check zilnic", "Mentenanță remote 24/7 activă"] },
  ];
  return (
    <section>
      <div className="wrap">
        <div style={{ maxWidth: 760 }}>
          <span className="eyebrow"><span className="dot"></span>Procesul</span>
          <h2 className="display" style={{ marginTop: 18 }}>
            Patru săptămâni.<br/>Patru pași. Atât.
          </h2>
          <p className="lede" style={{ marginTop: 22 }}>
            Așa arată drumul de la "vreau" la "primul cappuccino vândut". Fără surprize.
          </p>
        </div>

        <div className="process-grid">
          {steps.map(s => (
            <div className="step-card" key={s.n}>
              <div className="step-num">{s.n}</div>
              <div className="step-week">{s.w}</div>
              <h4>{s.t}</h4>
              <ul>
                {s.b.map((x, i) => <li key={i}>{x}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PhoneSection() {
  return (
    <section className="phone-section">
      <div className="wrap phone-grid">
        <div>
          <span className="eyebrow"><span className="dot"></span>Telemetrie</span>
          <h2 className="display" style={{ marginTop: 18 }}>
            Ai business-ul<br/>în telefon.
          </h2>
          <p className="lede" style={{ marginTop: 22, color: "var(--ink-soft)" }}>
            Vânzări live, stocuri, alerte de reumplere, mentenanță — totul în aplicația partenerului. <strong>3 ore / aparat / săptămână</strong> e tot ce te ocupă.
          </p>

          <div className="phone-feats">
            {[
              { I: IcChart, t: "Vânzări zilnice / lunare / anuale", d: "Pe pahar, pe rețetă, pe oră." },
              { I: IcMilk, t: "Stocuri în timp real", d: "Cafea, lapte, pahare — alertă la 20%." },
              { I: IcBell, t: "Notificări email & WhatsApp", d: "Pentru alarme, bonuri, mentenanță." },
              { I: IcWrench, t: "Diagnostic & service remote", d: "Tehnic resetează din birou. 24/7." },
              { I: IcEye, t: "Control fiscal complet", d: "Bonuri, raport Z, declarații ANAF." },
            ].map((f, i) => (
              <div className="phone-feat" key={i}>
                <div className="icn"><f.I size={20} color="#FFFCFA" /></div>
                <div>
                  <div style={{ fontWeight: 700 }}>{f.t}</div>
                  <div style={{ fontSize: 14, color: "var(--ink-soft)" }}>{f.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="phone">
            <div className="phone-screen">
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--mute)", marginBottom: 16, paddingTop: 4 }}>
                <span>9:41</span>
                <span style={{ fontFamily: "JetBrains Mono" }}>●●● 4G</span>
              </div>

              <div style={{ fontFamily: "Bricolage Grotesque", fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--mute)", fontWeight: 600 }}>
                Astăzi • Cluj BT
              </div>
              <div style={{ fontFamily: "Bricolage Grotesque", fontSize: 44, fontWeight: 800, letterSpacing: "-0.04em", marginTop: 4 }}>
                742 lei
              </div>
              <div style={{ fontSize: 12, color: "#2FA89A", fontWeight: 600 }}>↑ +12% vs. ieri • 98 pahare</div>

              {/* mini chart */}
              <div style={{ display: "flex", gap: 4, alignItems: "flex-end", height: 70, marginTop: 18, padding: "0 2px" }}>
                {[40,60,55,80,72,90,100,85,68,75,92,88,70,65,58].map((h,i) => (
                  <div key={i} style={{ flex: 1, height: `${h}%`, background: i === 6 ? "#52C4B6" : "rgba(82,196,182,.4)", borderRadius: "3px 3px 0 0" }} />
                ))}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 9, color: "var(--mute)", marginTop: 4, fontFamily: "JetBrains Mono" }}>
                <span>06</span><span>10</span><span>14</span><span>18</span><span>22</span>
              </div>

              {/* tiles */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 18 }}>
                <div style={{ background: "var(--yellow)", padding: 12, borderRadius: 12 }}>
                  <div style={{ fontSize: 10, color: "var(--mute)", fontWeight: 600 }}>STOC LAPTE</div>
                  <div style={{ fontFamily: "Bricolage Grotesque", fontSize: 22, fontWeight: 700 }}>68%</div>
                </div>
                <div style={{ background: "var(--peach)", padding: 12, borderRadius: 12 }}>
                  <div style={{ fontSize: 10, color: "var(--mute)", fontWeight: 600 }}>PAHARE</div>
                  <div style={{ fontFamily: "Bricolage Grotesque", fontSize: 22, fontWeight: 700 }}>32 buc</div>
                </div>
                <div style={{ background: "#1D1D1C", color: "#FFFCFA", padding: 12, borderRadius: 12, gridColumn: "span 2" }}>
                  <div style={{ fontSize: 10, color: "rgba(255,252,250,.5)", fontWeight: 600 }}>RECOMANDĂ #1</div>
                  <div style={{ fontFamily: "Bricolage Grotesque", fontSize: 18, fontWeight: 700 }}>Cappuccino L · 24%</div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 20, fontFamily: "JetBrains Mono", fontSize: 12, color: "var(--ink-soft)" }}>
            // venit aproape pasiv • 3h / săpt
          </div>
        </div>
      </div>
    </section>
  );
}

function Proof() {
  // Top 10 partner cafés — April 2026 (anonymized location types)
  const cards = [
    { rank: "01", type: "Locație stradală standalone", city: "București", cups: "3.348 / lună · ~112 / zi", revenue: "22.805", barFill: 99, spotlight: true },
    { rank: "02", type: "Spital județean", city: "Arad", cups: "3.367 / lună · ~112 / zi", revenue: "21.479", barFill: 94, accent: "#FFB878" },
    { rank: "03", type: "Magazin de bricolaj", city: "București · Băneasa", cups: "2.610 / lună · ~87 / zi", revenue: "17.347", barFill: 76, accent: "#FFFC9C" },
    { rank: "04", type: "Magazin de bricolaj", city: "Iași", cups: "2.636 / lună · ~88 / zi", revenue: "17.105", barFill: 75, accent: "#FFFC9C" },
    { rank: "05", type: "Locație stradală standalone", city: "București", cups: "2.451 / lună · ~82 / zi", revenue: "16.577", barFill: 73, accent: "#52C4B6" },
    { rank: "06", type: "Magazin de bricolaj", city: "Giurgiu", cups: "2.498 / lună · ~83 / zi", revenue: "16.382", barFill: 72, accent: "#FFFC9C" },
    { rank: "07", type: "Magazin non-stop de cartier", city: "Nereju", cups: "2.559 / lună · ~85 / zi", revenue: "16.008", barFill: 70, accent: "#A57BD3" },
    { rank: "08", type: "Magazin de bricolaj", city: "București · V. Cascadelor", cups: "2.409 / lună · ~80 / zi", revenue: "15.442", barFill: 68, accent: "#FFFC9C" },
    { rank: "09", type: "Spital județean", city: "Pitești", cups: "2.214 / lună · ~74 / zi", revenue: "14.540", barFill: 64, accent: "#FFB878" },
    { rank: "10", type: "Magazin de bricolaj", city: "Iași", cups: "2.204 / lună · ~73 / zi", revenue: "14.122", barFill: 62, accent: "#FFFC9C" },
  ];
  return (
    <section id="rezultate">
      <div className="wrap">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 32, flexWrap: "wrap" }}>
          <div style={{ maxWidth: 760 }}>
            <span className="eyebrow"><span className="dot"></span>Top 10 cafenele • Aprilie 2026</span>
            <h2 className="display" style={{ marginTop: 18 }}>
              Încasări lunare reale.<br/>Locații reale.
            </h2>
            <p className="lede" style={{ marginTop: 22 }}>
              Cifrele de mai jos sunt <strong>cifră de afaceri</strong> raportată pentru aprilie 2026. Top 10 din 188 locații active. Identitatea partenerilor anonimizată — descriem tipul de locație.
            </p>
          </div>
          <div style={{ textAlign: "right", paddingBottom: 6 }}>
            <div style={{ fontFamily: "JetBrains Mono", fontSize: 12, color: "var(--mute)", letterSpacing: ".14em", textTransform: "uppercase" }}>// Total top 10</div>
            <div className="num" style={{ fontSize: 64, lineHeight: 1, marginTop: 6 }}>171.807<span style={{ fontSize: 22, color: "var(--mute)", marginLeft: 6 }}>lei</span></div>
            <div style={{ fontSize: 13, color: "var(--mute)", marginTop: 6 }}>25.852 pahare · 10 locații</div>
          </div>
        </div>

        <div className="proof-grid">
          {cards.map((c, i) => (
            c.spotlight ? (
              <div key={i} className="proof-card spotlight">
                <div className="proof-loc">
                  <div className="avatar" style={{ background: "#52C4B6", color: "#1D1D1C" }}>{c.rank}</div>
                  <div>
                    <div style={{ fontFamily: "JetBrains Mono", fontSize: 12, color: "rgba(255,252,250,.55)", letterSpacing: ".14em", textTransform: "uppercase", fontWeight: 600 }}>// Locul #1 · Aprilie 2026</div>
                    <div style={{ fontWeight: 700, fontSize: 22, marginTop: 4, lineHeight: 1.2 }}>{c.type}</div>
                    <div className="meta" style={{ marginTop: 2 }}>{c.city} · {c.cups}</div>
                  </div>
                </div>
                <div style={{ flex: 1, height: 8, background: "rgba(255,252,250,.14)", borderRadius: 999, overflow: "hidden", minWidth: 80 }}>
                  <div style={{ width: c.barFill + "%", height: "100%", background: "var(--turq)", borderRadius: 999 }} />
                </div>
                <div style={{ textAlign: "right" }}>
                  <div className="proof-rev">{c.revenue} <span style={{ fontSize: 22, fontWeight: 600 }}>lei</span></div>
                  <div className="lbl">cifră de afaceri • aprilie 2026</div>
                </div>
              </div>
            ) : (
              <div key={i} className="proof-card">
                <div className="proof-loc">
                  <div className="avatar" style={{ background: c.accent || "#52C4B6", color: "#1D1D1C" }}>{c.rank}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 16, lineHeight: 1.25 }}>{c.type}</div>
                    <div className="meta" style={{ marginTop: 2 }}>{c.city}</div>
                  </div>
                </div>
                <div className="proof-rev">{c.revenue} <span style={{ fontSize: 18, fontWeight: 600 }}>lei</span></div>
                <div className="lbl">cifră de afaceri • aprilie 2026</div>
                <div style={{ marginTop: 18, display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ flex: 1, height: 6, background: "rgba(29,29,28,.08)", borderRadius: 999, overflow: "hidden" }}>
                    <div style={{ width: c.barFill + "%", height: "100%", background: "var(--turq)", borderRadius: 999 }} />
                  </div>
                  <div style={{ fontFamily: "JetBrains Mono", fontSize: 12, color: "var(--mute)", whiteSpace: "nowrap" }}>{c.cups.split(' · ')[1]}</div>
                </div>
              </div>
            )
          ))}
        </div>

        <p style={{ textAlign: "center", marginTop: 32, fontSize: 13, color: "var(--mute)" }}>
          Cifrele afișate sunt încasări (cifră de afaceri), nu profit. Profitul partenerilor variază în funcție de chirie și operare.
        </p>
      </div>
    </section>
  );
}

function WhyNow() {
  return (
    <section>
      <div className="wrap">
        <div style={{ maxWidth: 760 }}>
          <span className="eyebrow"><span className="dot"></span>De ce acum</span>
          <h2 className="display" style={{ marginTop: 18 }}>
            Trei motive să nu mai amâni.
          </h2>
        </div>

        <div className="why-grid">
          <div className="why-card a">
            <div>
              <IcFlame size={36} color="#1D1D1C" />
              <h4>Sezonul rece urcă vânzările</h4>
              <p>Toamnă—iarnă—primăvară aduce <strong>+30—50%</strong> consum față de vară. Cine deschide acum prinde sezonul.</p>
            </div>
            <div className="why-num">+50%</div>
          </div>
          <div className="why-card b">
            <div>
              <IcMap size={36} color="#1D1D1C" />
              <h4>Locațiile bune se ocupă zilnic</h4>
              <p>Mall-urile, birourile noi, supermarketurile semnează cu primul venit. Concurența nu doarme.</p>
            </div>
            <div className="why-num">1/zi</div>
          </div>
          <div className="why-card c">
            <div>
              <IcChart size={36} color="#1D1D1C" />
              <h4>Prețul aparatului crește</h4>
              <p>Componentele se scumpesc, EURO-ul fluctuează. Investiția de azi se închide la <strong>3.000€</strong> — mâine, nu mai garantăm.</p>
            </div>
            <div className="why-num">2026</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    { q: "În cât timp îmi recuperez investiția?", a: "Tipic în 2—5 luni, în funcție de locație și volum. La 50 pahare/zi în mediu, recuperarea e sub 4 luni. La locații foarte bune (centre comerciale mari, gări), uneori în 60 de zile." },
    { q: "Cum caut locația — eu sau voi?", a: "Tu cauți, noi validăm. Primești ghidul de evaluare și criteriile. Account managerul aprobă oricâte locații vrei să propui — și negociem împreună chiria, dacă e cazul." },
    { q: "Ce este de fapt inclus în 3.000€?", a: "Aparatul Latte echipat (în comodat), brandul, livrarea + montajul, training, platforma, telemetria fiscalizată, 300 pahare materie primă, account manager dedicat și acces la comunitatea partenerilor. Vezi secțiunea Preț pentru detalii." },
    { q: "De unde cumpăr materia primă după primele 300 pahare?", a: "De la noi, pe platformă. Prețuri negociate la volum mare — cafea Dropshot, lapte natural de la furnizor partener, siropuri și pahare branded." },
    { q: "Ce fac dacă se defectează aparatul?", a: "Diagnostic remote 24/7 — 80% din probleme se rezolvă fără deplasare. Pentru rest, tehnicieni în toată țara cu intervenție în 24—48h. Înlocuim piese din stoc." },
    { q: "E franciză sau cumpăr aparatul?", a: "E franciză. Aparatul rămâne al nostru, ție îți rămâne business-ul (locație, încasări, profit). Asta îți permite să intri cu 3.000€, nu cu 15.000€+ cât costă un aparat profesional cumpărat." },
    { q: "Am nevoie de experiență în HoReCa?", a: "Nu. Majoritatea partenerilor noștri lucrau în alte domenii — IT, vânzări, construcții, profesori. Training-ul nostru e de o zi. Restul e operare simplă: încărcare, golit numerar, curățenie săptămânală." },
    { q: "Câte ore îmi ia să mă ocup săptămânal?", a: "În medie 3 ore / aparat / săptămână: încărcare consumabile, vidare numerar, curățenie. Restul rulează singur — și vezi totul live pe telefon." },
  ];
  const [open, setOpen] = React.useState(0);
  return (
    <section id="faq">
      <div className="wrap" style={{ maxWidth: 880 }}>
        <div style={{ textAlign: "center" }}>
          <span className="eyebrow"><span className="dot"></span>Întrebări frecvente</span>
          <h2 className="display" style={{ marginTop: 18 }}>
            Răspundem direct.
          </h2>
        </div>

        <div className="faq-list">
          {items.map((it, i) => (
            <div key={i} className={`faq-item ${open === i ? "open" : ""}`}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                <span>{it.q}</span>
                <span className="faq-toggle">+</span>
              </button>
              <div className="faq-a">{it.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  const [step, setStep] = React.useState(1);
  const [form, setForm] = React.useState({
    ocupatie: "", domeniu: "", cunostinte_franciza: "",
    motiv: "", buget: "", oras: "",
    spatiu: "", asteptari_profit: "", recuperare_investitie: "", sursa: "",
    nume: "", email: "", tel: "",
  });
  const [sent, setSent] = React.useState(false);
  const [errors, setErrors] = React.useState({});

  const upd = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const pick = (k, v) => () => setForm({ ...form, [k]: v });

  const requiredByStep = {
    1: ["ocupatie", "domeniu", "cunostinte_franciza"],
    2: ["motiv", "buget", "oras"],
    3: ["spatiu", "asteptari_profit", "recuperare_investitie", "sursa"],
    4: ["nume", "email", "tel"],
  };

  const validate = () => {
    const errs = {};
    (requiredByStep[step] || []).forEach(k => {
      if (!form[k].trim()) errs[k] = true;
    });
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const next = () => { if (validate()) setStep(step + 1); };
  const prev = () => { setErrors({}); setStep(step - 1); };
  const submit = (e) => { e.preventDefault(); if (validate()) setSent(true); };

  const RadioGroup = ({ name, options, cols }) => (
    <div className="radio-group" style={cols ? { gridTemplateColumns: `repeat(${cols}, 1fr)` } : {}}>
      {options.map(o => (
        <label key={o} className={`radio-opt ${form[name] === o ? "active" : ""}`} onClick={pick(name, o)}>
          <span className="radio-dot">{form[name] === o && <span className="radio-fill"></span>}</span>
          {o}
        </label>
      ))}
    </div>
  );

  const progressWidth = `${(step / 4) * 100}%`;

  return (
    <section className="final-cta" id="aplica">
      <div className="wrap final-grid">
        <div>
          <span className="eyebrow" style={{ background: "rgba(29,29,28,.12)" }}><span className="dot" style={{background:"#1D1D1C"}}></span>Aplică acum</span>
          <h2 className="display" style={{ marginTop: 18 }}>
            Hai să ne cunoaștem!
          </h2>
          <p className="lede" style={{ marginTop: 22, color: "var(--ink-soft)", maxWidth: 480 }}>
            Completează formularul ca să îți oferim o ofertă personalizată. Durează sub 2 minute.
          </p>
          <div style={{ marginTop: 20, fontFamily: "JetBrains Mono", fontSize: 14, color: "var(--ink-soft)" }}>
            +40 725 965 987 · info@latte.ro
          </div>
        </div>

        <form className="form-card" onSubmit={submit}>
          <div className="form-progress"><div className="form-progress-bar" style={{ width: progressWidth }}></div></div>

          {sent ? (
            <div style={{ textAlign: "center", padding: "32px 16px" }}>
              <div style={{ width: 64, height: 64, borderRadius: 999, background: "var(--turq)", display: "grid", placeItems: "center", margin: "0 auto 20px" }}>
                <IcStar size={32} color="#1D1D1C" />
              </div>
              <h3 className="display" style={{ fontSize: 28 }}>Mulțumim!</h3>
              <p style={{ color: "var(--mute)", marginTop: 12 }}>Te vom contacta în curând cu o ofertă personalizată la <strong>{form.email}</strong>.</p>
            </div>
          ) : (
            <>
              {step === 1 && (
                <div className="form-step">
                  <div className="field">
                    <label>Ocupația actuală {errors.ocupatie && <span className="field-err">* obligatoriu</span>}</label>
                    <RadioGroup name="ocupatie" options={["Angajat full-time", "Angajat part-time", "Antreprenor", "Liber profesionist"]} cols={2} />
                  </div>
                  <div className="field">
                    <label htmlFor="domeniu">Domeniu de activitate {errors.domeniu && <span className="field-err">* obligatoriu</span>}</label>
                    <input id="domeniu" value={form.domeniu} onChange={upd("domeniu")} placeholder="Industria în care activezi" />
                  </div>
                  <div className="field">
                    <label>Cât de bine cunoști conceptul de franciză? {errors.cunostinte_franciza && <span className="field-err">* obligatoriu</span>}</label>
                    <RadioGroup name="cunostinte_franciza" options={["Deloc", "Bine", "Foarte bine"]} cols={3} />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="form-step">
                  <div className="field">
                    <label htmlFor="motiv">Motivul pentru care ai ales franciza Latte {errors.motiv && <span className="field-err">* obligatoriu</span>}</label>
                    <input id="motiv" value={form.motiv} onChange={upd("motiv")} placeholder="Ce te-a atras la Latte?" />
                  </div>
                  <div className="field">
                    <label>Bugetul alocat acestui proiect {errors.buget && <span className="field-err">* obligatoriu</span>}</label>
                    <RadioGroup name="buget" options={["3.000€", "6.000€", "Mai mult de 9.000€"]} cols={3} />
                  </div>
                  <div className="field">
                    <label htmlFor="oras">Oraș {errors.oras && <span className="field-err">* obligatoriu</span>}</label>
                    <input id="oras" value={form.oras} onChange={upd("oras")} placeholder="Orașul în care vrei să deschizi" />
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="form-step">
                  <div className="field">
                    <label>Ai găsit un spațiu? {errors.spatiu && <span className="field-err">* obligatoriu</span>}</label>
                    <RadioGroup name="spatiu" options={["Da", "Nu", "Am pus întrebări", "Nu m-am interesat"]} cols={2} />
                  </div>
                  <div className="field">
                    <label htmlFor="asteptari_profit">Ce așteptări ai de profit? {errors.asteptari_profit && <span className="field-err">* obligatoriu</span>}</label>
                    <input id="asteptari_profit" value={form.asteptari_profit} onChange={upd("asteptari_profit")} placeholder="Ex: 2.000 lei / lună" />
                  </div>
                  <div className="field">
                    <label htmlFor="recuperare_investitie">În cât timp vrei să recuperezi investiția {errors.recuperare_investitie && <span className="field-err">* obligatoriu</span>}</label>
                    <input id="recuperare_investitie" value={form.recuperare_investitie} onChange={upd("recuperare_investitie")} placeholder="Ex: 6 luni" />
                  </div>
                  <div className="field">
                    <label htmlFor="sursa">De unde ai aflat de franciza Latte? {errors.sursa && <span className="field-err">* obligatoriu</span>}</label>
                    <input id="sursa" value={form.sursa} onChange={upd("sursa")} placeholder="Facebook | TikTok | OLX | Articole | Recomandări | Prieteni" />
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="form-step">
                  <div style={{ marginBottom: 20 }}>
                    <h3 className="display" style={{ fontSize: 22, marginBottom: 6 }}>Primește oferta personalizată!</h3>
                    <p style={{ fontSize: 14, color: "var(--mute)" }}>Ultimul pas — completează datele de contact.</p>
                  </div>
                  <div className="field">
                    <label htmlFor="nume">Numele tău {errors.nume && <span className="field-err">* obligatoriu</span>}</label>
                    <input id="nume" value={form.nume} onChange={upd("nume")} placeholder="Alex" />
                  </div>
                  <div className="field">
                    <label htmlFor="email">Email-ul tău {errors.email && <span className="field-err">* obligatoriu</span>}</label>
                    <input id="email" type="email" value={form.email} onChange={upd("email")} placeholder="exemplu@gmail.com" />
                  </div>
                  <div className="field">
                    <label htmlFor="tel">Număr de telefon {errors.tel && <span className="field-err">* obligatoriu</span>}</label>
                    <input id="tel" type="tel" value={form.tel} onChange={upd("tel")} placeholder="07XXXXXXXX" />
                  </div>
                </div>
              )}

              <div className="form-nav">
                <div className="form-step-label">Pas {step} din 4</div>
                <div style={{ display: "flex", gap: 10 }}>
                  {step > 1 && (
                    <button type="button" className="btn btn-ghost" style={{ padding: "12px 20px", fontSize: 15 }} onClick={prev}>
                      ← Înapoi
                    </button>
                  )}
                  {step < 4 ? (
                    <button type="button" className="btn btn-turq" style={{ padding: "12px 24px", fontSize: 15 }} onClick={next}>
                      Următorul <IcArrow size={16} className="btn-arrow" />
                    </button>
                  ) : (
                    <button type="submit" className="btn btn-turq" style={{ padding: "12px 24px", fontSize: 15 }}>
                      Trimite <IcArrow size={16} className="btn-arrow" />
                    </button>
                  )}
                </div>
              </div>

              <div className="form-foot">
                Datele tale nu sunt partajate cu terți. <a href="#" style={{ color: "var(--ink)", textDecoration: "underline" }}>Politica de confidențialitate</a>.
              </div>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <div className="logo" style={{ color: "#FFFCFA" }}>
              <span className="glow"></span>latte<span style={{ color: "#52C4B6" }}>.</span>ro
            </div>
            <p style={{ color: "rgba(255,252,250,.6)", fontSize: 14, marginTop: 16, maxWidth: 320, lineHeight: 1.55 }}>
              Franciză self-service de cafea cu lapte natural. Brand românesc, fondat 2022.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
              <a href="https://instagram.com/latte.romania" aria-label="Instagram" style={{ width: 38, height: 38, borderRadius: 999, border: "1px solid rgba(255,252,250,.2)", display: "grid", placeItems: "center" }}>
                <IcInsta size={18} />
              </a>
              <a href="#" aria-label="Facebook" style={{ width: 38, height: 38, borderRadius: 999, border: "1px solid rgba(255,252,250,.2)", display: "grid", placeItems: "center" }}>
                <IcFb size={18} />
              </a>
              <a href="https://wa.me/40725965987" aria-label="WhatsApp" style={{ width: 38, height: 38, borderRadius: 999, border: "1px solid rgba(255,252,250,.2)", display: "grid", placeItems: "center" }}>
                <IcWhats size={18} />
              </a>
            </div>
          </div>
          <div className="foot-col">
            <h5>Contact</h5>
            <a href="https://wa.me/40725965987">WhatsApp +40 725 965 987</a>
            <a href="mailto:info@latte.ro">info@latte.ro</a>
            <a href="#aplica">Formular aplicare</a>
          </div>
          <div className="foot-col">
            <h5>Pagina</h5>
            <a href="#concept">Despre Latte</a>
            <a href="#pret">Preț franciză</a>
            <a href="#calculator">Calculator profit</a>
            <a href="#faq">Întrebări frecvente</a>
          </div>
          <div className="foot-col">
            <h5>Legal</h5>
            <a href="#">Politica de confidențialitate</a>
            <a href="#">Termeni și condiții</a>
            <a href="https://anpc.ro/">ANPC — SAL / SOL</a>
          </div>
        </div>
        <div className="foot-bot">
          <span>© 2026 Latte Coffee SRL · CUI RO12345678</span>
          <span style={{ fontFamily: "JetBrains Mono" }}>// hai să bem o cafea</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Process, PhoneSection, Proof, WhyNow, FAQ, FinalCTA, Footer });
