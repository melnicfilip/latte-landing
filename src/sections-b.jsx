// Sections B: Anatomy, vs Vending, Menu, Calculator, Locations

function Anatomy() {
  // 12 callouts — pinned positions over the central machine
  const callouts = [
    { n: 1, x: "8%",  y: "8%",  t: "Aparat profesional", d: "Espressor cu boiler dual și grinder integrat." , side:"L"},
    { n: 2, x: "8%",  y: "30%", t: "Frigider lapte", d: "Lapte natural păstrat la 4°C, monitorizat.", side:"L" },
    { n: 3, x: "8%",  y: "52%", t: "Dispenser pahare 130 buc", d: "Capacitate mare pentru o săptămână.", side:"L" },
    { n: 4, x: "8%",  y: "74%", t: "Validator numerar", d: "Bancnote și monede, cu rest automat.", side:"L" },
    { n: 5, x: "76%", y: "8%",  t: "Iluminare LED + neon", d: "Vizibilitate maximă, atrage clienții.", side:"R" },
    { n: 6, x: "76%", y: "30%", t: "Touchscreen + 18 rețete", d: "Selecție rapidă, M și L, opțiuni de zahăr.", side:"R" },
    { n: 7, x: "76%", y: "52%", t: "POS bancă parteneră", d: "Card, contactless, Apple Pay & Google Pay.", side:"R" },
    { n: 8, x: "76%", y: "74%", t: "Fiscalizare ANAF", d: "Casa de marcat integrată. Bon la cerere.", side:"R" },
    { n: 9, x: "30%", y: "92%", t: "Siropuri anti-vandalic", d: "5 arome, dispenser sigilat.", side:"B" },
    { n: 10, x: "62%", y: "92%", t: "Organizator servețele", d: "Pahare M/L, capace, agitatoare.", side:"B" },
  ];

  return (
    <section className="anatomy-section" id="aparat">
      <div className="wrap">
        <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
          <span className="eyebrow light"><span className="dot"></span>Anatomia aparatului</span>
          <h2 className="display" style={{ marginTop: 18, color: "#FFFCFA" }}>
            Tot ce intră pe ușă.<br/>Asamblat, testat, livrat.
          </h2>
          <p className="lede" style={{ margin: "22px auto 0" }}>
            Un singur aparat. Zece subsisteme care lucrează împreună.
            Tu deschizi ușa magazinului — restul rulează singur.
          </p>
        </div>

        <div className="anatomy-stage">
          {/* Center machine */}
          <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", width: "min(360px, 36%)", zIndex: 2 }}>
            <Machine />
          </div>

          {/* Callouts */}
          {callouts.map(c => (
            <div key={c.n} className="callout" style={{ left: c.x, top: c.y, textAlign: c.side === "R" ? "left" : (c.side === "L" ? "right" : "center"), maxWidth: c.side === "B" ? 160 : 200 }}>
              <div className="cnum">{c.n}</div>
              <div className="ctitle">{c.t}</div>
              <div className="cdesc">{c.d}</div>
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 24, marginTop: 80, paddingTop: 40, borderTop: "1px solid rgba(255,252,250,.12)" }}>
          <div>
            <div className="num" style={{ fontSize: 56, color: "#52C4B6" }}>18</div>
            <div style={{ fontSize: 13, color: "rgba(255,252,250,.55)" }}>rețete pe touchscreen</div>
          </div>
          <div>
            <div className="num" style={{ fontSize: 56, color: "#FFFC9C" }}>1m²</div>
            <div style={{ fontSize: 13, color: "rgba(255,252,250,.55)" }}>amprentă la sol</div>
          </div>
          <div>
            <div className="num" style={{ fontSize: 56, color: "#FFB878" }}>130</div>
            <div style={{ fontSize: 13, color: "rgba(255,252,250,.55)" }}>pahare în dispenser</div>
          </div>
          <div>
            <div className="num" style={{ fontSize: 56 }}>remote</div>
            <div style={{ fontSize: 13, color: "rgba(255,252,250,.55)" }}>diagnostic din birou</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VsVending() {
  return (
    <section>
      <div className="wrap">
        <div style={{ maxWidth: 720 }}>
          <span className="eyebrow"><span className="dot"></span>Comparativ</span>
          <h2 className="display" style={{ marginTop: 18 }}>
            Latte ≠ vending obișnuit.
          </h2>
          <p className="lede" style={{ marginTop: 22 }}>
            Suntem aceeași categorie, dar nu același produs. Diferența nu e în logo — e în cană.
          </p>
        </div>

        <div className="vs-grid" style={{ marginTop: 48 }}>
          <div className="vs-col latte">
            <div style={{ fontFamily: "Bricolage Grotesque", fontSize: 14, letterSpacing: ".14em", textTransform: "uppercase", fontWeight: 700 }}>Latte</div>
            <h3 className="display" style={{ marginTop: 8 }}>Cafenea în miniatură.</h3>
            <ul className="vs-list">
              {[
                ["Lapte natural, păstrat la 4°C", "Beandrops — cafea 100% Arabica, prăjire premium"],
                ["Design modern, brand recunoscut", "250+ aparate în lanț"],
                ["Cantități mari: 200—300ml M / L", "Pahar gros, capac, agitator incluse"],
                ["18 rețete + 5 siropuri + ciocolată", "Produs gourmet, nu instant"],
              ].map(([a,b], i) => (
                <li key={i}><span className="check">✓</span><div><strong>{a}</strong><div style={{ fontSize: 13.5, color: "var(--ink-soft)", marginTop: 2 }}>{b}</div></div></li>
              ))}
            </ul>
          </div>

          <div className="vs-col vend">
            <div style={{ fontFamily: "Bricolage Grotesque", fontSize: 14, letterSpacing: ".14em", textTransform: "uppercase", fontWeight: 700 }}>Vending obișnuit</div>
            <h3 className="display" style={{ marginTop: 8, color: "#6B6B68" }}>Cafea ca să nu mori.</h3>
            <ul className="vs-list">
              {[
                ["Lapte praf, calitate scăzută", "Surogat ieftin, gust artificial"],
                ["Design învechit, fără identitate", "Cutie metalică anonimă"],
                ["100—150ml, pahar subțire", "Fără capac, fără agitator"],
                ["Fără siropuri, opțiuni minime", "3—5 rețete, fără personalizare"],
              ].map(([a,b], i) => (
                <li key={i}><span className="check">·</span><div><strong>{a}</strong><div style={{ fontSize: 13.5, marginTop: 2 }}>{b}</div></div></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Menu() {
  const mDrinks = [
    { name: "Espresso", ml: "50 ml", price: 5 },
    { name: "Espresso dublu", ml: "100 ml", price: 7 },
    { name: "Espresso Lungo", ml: "80 ml", price: 6 },
    { name: "Espresso cu lapte", ml: "100 ml", price: 6 },
    { name: "Americano", ml: "150 ml", price: 6 },
    { name: "Cappuccino", ml: "180 ml", price: 6 },
    { name: "Latte", ml: "220 ml", price: 6 },
    { name: "Flat White", ml: "230 ml", price: 7 },
    { name: "Ciocolată caldă", ml: "200 ml", price: 5 },
  ];
  const lDrinks = [
    { name: "Barista", ml: "260 ml", price: 7 },
    { name: "Latte Macchiato", ml: "250 ml", price: 8 },
    { name: "Mocha", ml: "270 ml", price: 7 },
    { name: "Ceai", ml: "250 ml", price: 5 },
    { name: "Americano cu lapte", ml: "220 ml", price: 7 },
    { name: "Cappuccino", ml: "270 ml", price: 8 },
    { name: "Latte", ml: "290 ml", price: 8 },
    { name: "Flat White", ml: "300 ml", price: 8 },
    { name: "Ciocolată caldă cu lapte", ml: "240 ml", price: 6 },
  ];

  const Col = ({ label, sub, drinks, accent }) => (
    <div className="menu-col-v2">
      <div className="menu-col-head">
        <div className="cup-badge-v2" style={{ "--cup-fill": accent }}>
          <span>{label}</span>
        </div>
        <div>
          <div className="menu-col-title">DIMENSIUNE PAHAR {label}</div>
          <div className="menu-col-sub">{sub}</div>
        </div>
      </div>
      {drinks.map((d, i) => (
        <div className="menu-row-v2" key={i}>
          <span className="cup-mini" style={{ "--cup-fill": accent }}><span>{label}</span></span>
          <div className="menu-name-v2">
            <strong>{d.name}</strong>
            <span className="menu-ml-v2">{d.ml}</span>
          </div>
          <div className="menu-price-v2">{d.price}<small>lei</small></div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="menu-section">
      <div className="wrap">
        <div style={{ maxWidth: 720 }}>
          <span className="eyebrow light"><span className="dot"></span>Meniu • 18 rețete</span>
          <h2 className="display" style={{ marginTop: 18, color: "#FFFCFA" }}>
            Tot meniul.<br/>Toate prețurile.
          </h2>
          <p className="lede" style={{ marginTop: 22 }}>
            9 băuturi în pahar M (espresso & cești). 9 băuturi în pahar L (to-go). Marja medie pe pahar e 60—70% — vezi banii pe telefon, în timp real.
          </p>
        </div>

        <div className="menu-board-v2">
          <Col label="M" sub="50—230 ml · cești mici, espresso & shot-uri" drinks={mDrinks} accent="#FFB878" />
          <Col label="L" sub="220—300 ml · pahare to-go, ideal pentru pe drum" drinks={lDrinks} accent="#52C4B6" />
        </div>
      </div>
    </section>
  );
}

function Calculator() {
  const [cups, setCups] = React.useState(50);
  const [price, setPrice] = React.useState(7);
  const [rent, setRent] = React.useState(150);

  const days = 30;
  const ca = cups * price * days; // RON
  const cogs = Math.round(cups * 2.9 * days); // 2.9 RON cost / cup
  const royalty = Math.max(500, Math.round(ca * 0.05)) * 1.19; // +TVA
  const rentRon = rent * 5; // EUR→RON approx
  const profit = Math.round(ca - cogs - royalty - rentRon);
  const profitLow = Math.max(0, Math.round(profit * 0.9));
  const profitHigh = Math.max(0, Math.round(profit * 1.0));

  const fmt = (n) => Math.round(n).toLocaleString("ro-RO");

  return (
    <section className="calc-section" id="calculator">
      <div className="wrap">
        <div style={{ maxWidth: 760 }}>
          <span className="eyebrow"><span className="dot"></span>Calculator • estimativ</span>
          <h2 className="display" style={{ marginTop: 18 }}>
            Cât scoți pe lună?<br/>Pune cifrele tale.
          </h2>
          <p className="lede" style={{ marginTop: 22, color: "var(--ink-soft)" }}>
            Mută slider-urile. Calculul se face în timp real. Rezultatul: <strong>cifră de afaceri estimată</strong> și <strong>profit estimativ</strong> — nu o promisiune.
          </p>
        </div>

        <div className="calc-grid">
          <div className="calc-card">
            <div className="slider-row">
              <label>Pahare vândute / zi <span className="v">{cups}</span></label>
              <input type="range" min="10" max="200" value={cups} onChange={e => setCups(+e.target.value)} />
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--mute)", marginTop: 6 }}>
                <span>10</span><span>50</span><span>100</span><span>200</span>
              </div>
            </div>
            <div className="slider-row">
              <label>Preț mediu / pahar <span className="v">{price} lei</span></label>
              <input type="range" min="4" max="12" step="0.5" value={price} onChange={e => setPrice(+e.target.value)} />
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--mute)", marginTop: 6 }}>
                <span>4 lei</span><span>7 lei</span><span>12 lei</span>
              </div>
            </div>
            <div className="slider-row" style={{ marginBottom: 0 }}>
              <label>Chirie locație / lună <span className="v">{rent}€</span></label>
              <input type="range" min="0" max="500" step="25" value={rent} onChange={e => setRent(+e.target.value)} />
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--mute)", marginTop: 6 }}>
                <span>0€</span><span>150€</span><span>350€</span><span>500€</span>
              </div>
            </div>
            <p className="disclaimer">
              Estimările sunt pentru o lună medie, fără sezonalitate. Costul materiei prime mediu: ~2,9 lei/pahar. Chiria convertită la curs ~5 lei/€.
            </p>
          </div>

          <div className="calc-result">
            <div className="result-row">
              <div className="lbl">Cifră de afaceri estimată</div>
              <div className="v">{fmt(ca)} lei</div>
            </div>
            <div className="result-row">
              <div className="lbl">Cost materie primă</div>
              <div className="v">−{fmt(cogs)} lei</div>
            </div>
            <div className="result-row">
              <div className="lbl">Redevență 5% (min. 500 lei +TVA)</div>
              <div className="v">−{fmt(royalty)} lei</div>
            </div>
            <div className="result-row">
              <div className="lbl">Chirie</div>
              <div className="v">−{fmt(rentRon)} lei</div>
            </div>
            <div className="result-row profit">
              <div className="lbl" style={{ color: "#FFFCFA", fontSize: 15 }}>
                <div style={{ fontWeight: 700 }}>Profit net estimativ</div>
                <div style={{ fontSize: 12, color: "rgba(255,252,250,.55)", fontWeight: 400, marginTop: 2 }}>
                  Indicativ 30—40% din CA, în funcție de chirie
                </div>
              </div>
              <div className="v">{fmt(profitLow)}—{fmt(profitHigh)} lei</div>
            </div>
            <a href="#aplica" className="btn btn-turq" style={{ marginTop: 12, justifyContent: "center" }}>
              Aplică pentru franciză <IcArrow size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Locations() {
  const cards = [
    { type: "Clădiri de birouri", chirie: "0—100€", vanzari: "20—80 / zi", I: IcShop, featured: true },
    { type: "Mall-uri", chirie: "100—350€", vanzari: "20—100 / zi", I: IcStar },
    { type: "Supermarketuri", chirie: "50—200€", vanzari: "20—80 / zi", I: IcShop },
    { type: "Facultăți", chirie: "50—150€", vanzari: "30—100 / zi", I: IcUsers },
    { type: "Benzinării", chirie: "100—250€", vanzari: "30—80 / zi", I: IcBolt },
    { type: "Bănci & corporate", chirie: "0—150€", vanzari: "20—60 / zi", I: IcLock },
    { type: "Săli de forță", chirie: "50—150€", vanzari: "15—50 / zi", I: IcSpark },
    { type: "Hoteluri & spitale", chirie: "0—200€", vanzari: "20—60 / zi", I: IcShield },
    { type: "Gări & aeroporturi", chirie: "150—400€", vanzari: "40—120 / zi", I: IcTruck },
  ];
  return (
    <section>
      <div className="wrap">
        <div style={{ maxWidth: 760 }}>
          <span className="eyebrow"><span className="dot"></span>Locații potrivite</span>
          <h2 className="display" style={{ marginTop: 18 }}>
            Practic, oriunde<br/>trec oameni.
          </h2>
          <p className="lede" style={{ marginTop: 22 }}>
            1m² liber, o priză și 5.000 de locuitori. Atât. Restul ține de tine — și de instinctul tău pentru locații.
          </p>
        </div>

        <div className="loc-grid">
          {cards.map(({ type, chirie, vanzari, I, featured }, i) => (
            <div key={i} className={`loc-card ${featured ? "featured" : ""}`}>
              <div className="icn"><I size={22} color={featured ? "#1D1D1C" : "#1D1D1C"} /></div>
              <div className="ttl">{type}</div>
              <div className="meta">
                <div>Chirie: {chirie}</div>
                <div>Vânzări tipice: {vanzari}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="loc-stats">
          <div className="loc-stat">
            <div className="num-big">1m²</div>
            <div className="lbl">spațiu necesar</div>
          </div>
          <div className="loc-stat">
            <div className="num-big">220V</div>
            <div className="lbl">priză standard, fără linie dedicată</div>
          </div>
          <div className="loc-stat">
            <div className="num-big">5.000+</div>
            <div className="lbl">locuitori în oraș, minim</div>
          </div>
          <div className="loc-stat">
            <div className="num-big" style={{ color: "#52C4B6" }}>129</div>
            <div className="lbl">orașe potrivite în România</div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Anatomy, VsVending, Menu, Calculator, Locations });
