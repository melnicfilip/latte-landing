// Sections A: Ticker, Nav, Hero, Concept, Price

function Ticker() {
  const items = [
    "250+ cafenele active în România",
    "Lapte natural • Nu praf",
    "18 rețete + 3 siropuri • Cafea 100% Arabica",
    "Brand românesc, fondat 2022",
    "Fii propriul tău șef",
    "129 orașe potrivite",
  ];
  const all = [...items, ...items, ...items];
  return (
    <div className="ticker" role="marquee">
      <div className="ticker-track">
        {all.map((t, i) => (
          <span key={i} className="ticker-item"><span className="dot"></span>{t}</span>
        ))}
      </div>
    </div>
  );
}

function Nav() {
  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <a href="#top" className="logo"><img src="/landing/assets/logo.png" alt="latte" style={{ height: 38, display: "block" }} /></a>
        <div className="nav-links">
          <a href="#concept">Concept</a>
          <a href="#pret">Preț</a>
          <a href="#aparat">Aparat</a>
          <a href="#calculator">Calculator</a>
          <a href="#rezultate">Rezultate</a>
          <a href="#faq">FAQ</a>
        </div>
        <a href="#aplica" className="btn btn-turq" style={{ padding: "10px 18px", fontSize: 14 }}>
          Aplică <IcArrow size={16} />
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <span className="eyebrow"><span className="dot"></span>Franciză activă în 2026</span>
          <h1 className="display" style={{ marginTop: 24 }}>
            Deschide-ți<br/>cafeneaua<br/>ta în <span className="hl">30 zile</span>.
          </h1>
          <p className="hero-sub">
            Cu <strong>3.000€</strong> pornești o cafenea self-service Latte cu lapte natural, în 1m². Fără angajați, fără bucătărie. Tu cauți locația — noi facem restul.
          </p>
          <div className="hero-ctas">
            <a href="#aplica" className="btn btn-primary">Aplică pentru franciză <IcArrow size={18} className="btn-arrow" /></a>
            <a href="#calculator" className="btn btn-ghost">Vezi calculatorul de profit</a>
          </div>
          <div className="hero-trust">
            <div className="trust-item"><div className="trust-num">250+</div><div className="trust-label">cafenele active</div></div>
            <div className="trust-item"><div className="trust-num">100%</div><div className="trust-label">Arabica</div></div>
            <div className="trust-item"><div className="trust-num">Natural</div><div className="trust-label">lapte, nu praf</div></div>
            <div className="trust-item"><div className="trust-num">RO</div><div className="trust-label">brand românesc</div></div>
          </div>
        </div>

        <div className="machine-stage">
          <div className="stage-bg"></div>
          <div style={{ position: "relative", zIndex: 2 }}>
            <Machine />
          </div>
          <div className="stage-tag" style={{ top: "8%", right: "-2%" }}><span className="dot" style={{background:"#52C4B6"}}></span> 1m² spațiu</div>
          <div className="stage-tag" style={{ bottom: "14%", left: "-4%" }}>200—300 ml</div>
        </div>
      </div>
    </section>
  );
}

function Concept() {
  return (
    <section id="concept">
      <div className="wrap split">
        <div>
          <span className="eyebrow"><span className="dot"></span>Ce este Latte</span>
          <h2 className="display" style={{ marginTop: 18 }}>
            Cafenea în 1m².<br/>Brand cu 250 de locații.
          </h2>
          <p className="lede" style={{ marginTop: 22 }}>
            Latte e o franciză self-service de cafea, fondată în 2022 în România.
            În 2025 am făcut upgrade complet la <strong>lapte natural</strong> — nu praf, nu surogat.
            Astăzi sunt peste 250 de aparate în țară, în birouri, mall-uri, supermarket-uri și facultăți.
          </p>
          <div style={{ marginTop: 32, display: "flex", gap: 32 }}>
            <div>
              <div className="big-num" style={{ fontSize: "clamp(56px,8vw,96px)" }}>2022</div>
              <div className="trust-label">fondat</div>
            </div>
            <div>
              <div className="big-num" style={{ fontSize: "clamp(56px,8vw,96px)", color: "#52C4B6" }}>2025</div>
              <div className="trust-label">upgrade lapte natural</div>
            </div>
          </div>
        </div>

        <div>
          <span className="eyebrow"><span className="dot"></span>Piața din România</span>
          <h3 className="display" style={{ marginTop: 18, fontSize: "clamp(24px,3vw,32px)" }}>
            Românii beau cafea. Doar 15% o iau dintr-o cafenea.
          </h3>
          <div className="market-grid">
            <div className="stat-card yellow">
              <div className="big-num" style={{ fontSize: 64 }}>300<span style={{ fontSize: 32 }}>M€</span></div>
              <div className="stat-label">piață anuală în România</div>
            </div>
            <div className="stat-card">
              <div className="big-num" style={{ fontSize: 64 }}>85%</div>
              <div className="stat-label">consum acasă sau la automat</div>
            </div>
            <div className="stat-card">
              <div className="big-num" style={{ fontSize: 64 }}>2,4<span style={{ fontSize: 32 }}>kg</span></div>
              <div className="stat-label">cafea / persoană / an</div>
            </div>
            <div className="stat-card" style={{ background: "#1D1D1C", color: "#FFFCFA", borderColor: "transparent" }}>
              <div className="big-num" style={{ fontSize: 64, color: "#52C4B6" }}>+12%</div>
              <div className="stat-label" style={{ color: "rgba(255,252,250,.6)" }}>creștere consum / an</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Price() {
  const items = [
    { n: "01", t: "Cafenea în comodat", d: "Aparatul Latte echipat complet, fără să-l cumperi.", I: IcCoffee },
    { n: "02", t: "Brand & identitate", d: "Folosești marca Latte, ai dreptul exclusiv pe locația ta.", I: IcStar },
    { n: "03", t: "Livrare + training", d: "Aducem aparatul, îl montăm, te instruim 1 zi.", I: IcTruck },
    { n: "04", t: "Platformă comenzi", d: "App-ul Latte cu plata digitală și comenzi mobile.", I: IcPhone },
    { n: "05", t: "Telemetrie fiscalizată", d: "Vezi încasările live, pe telefon. Toate raportate ANAF.", I: IcChart },
    { n: "06", t: "Account manager", d: "O persoană dedicată ție. Răspunde pe WhatsApp.", I: IcUsers },
    { n: "07", t: "Materie primă pentru 300 pahare", d: "Cafea, lapte, siropuri — pentru primele zile.", I: IcMilk },
    { n: "08", t: "Service & mentenanță", d: "Tehnicieni în toată țara. Diagnostic remote.", I: IcWrench },
    { n: "09", t: "Comunitate WhatsApp", d: "Acces la grupul partenerilor, sfaturi, locații.", I: IcWhats },
    { n: "10", t: "Ghid de locație", d: "Modelul nostru de evaluare locații + checklist.", I: IcDoc },
    { n: "11", t: "Parteneriate cu lanțuri mari", d: "Acces la contractele existente cu rețele comerciale + viitoarele parteneriate.", I: IcShop },
  ];
  return (
    <section className="price-section" id="pret">
      <div className="wrap">
        <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
          <span className="eyebrow"><span className="dot" style={{background:"#1D1D1C"}}></span>Investiția</span>
          <h2 className="display" style={{ marginTop: 18 }}>
            Tot ce primești pentru <span style={{ color: "#1D1D1C" }}>3.000€</span>.
          </h2>
        </div>

        <div className="price-card">
          <div className="price-strike">
            <s>franciză cafenea clasică min. 15.000€</s>
          </div>
          <div className="price-amount">3.000<span style={{ fontSize: "0.45em", verticalAlign: "0.6em", marginLeft: 6 }}>€</span></div>
          <div style={{ color: "var(--mute)", marginTop: 4, fontSize: 15 }}>investiție inițială unică • redevență 5% CA</div>
        </div>

        <div className="includes-grid">
          {items.map(({ n, t, d, I }) => (
            <div className="include-item" key={n}>
              <div className="icn"><I size={20} color="#1D1D1C" /></div>
              <div>
                <div className="include-num">{n}</div>
                <div className="include-title">{t}</div>
                <div className="include-desc">{d}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="royalty-note">
          <div>
            <div style={{ fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase", color: "#52C4B6", fontWeight: 600, marginBottom: 4 }}>
              Redevență • clarificată
            </div>
            <div style={{ fontSize: 17, fontWeight: 600 }}>
              5% din cifra de afaceri lunară. Minim 500 lei + TVA / lună.
            </div>
          </div>
          <div style={{ fontSize: 14, color: "rgba(255,252,250,.65)", maxWidth: 360 }}>
            E parte din contract și acoperă platformă, brand, suport. Tot ce câștigi peste asta e al tău.
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Ticker, Nav, Hero, Concept, Price });
