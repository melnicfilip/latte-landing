"use strict";

// Sections A: Ticker, Nav, Hero, Concept, Price

function Ticker() {
  var items = ["250+ cafenele active în România", "Lapte natural • Nu praf", "18 rețete + 3 siropuri • Cafea 100% Arabica", "Brand românesc, fondat 2022", "Fii propriul tău șef", "129 orașe potrivite"];
  var all = [].concat(items, items, items);
  return /*#__PURE__*/React.createElement("div", {
    className: "ticker",
    role: "marquee"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ticker-track"
  }, all.map(function (t, i) {
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      className: "ticker-item"
    }, /*#__PURE__*/React.createElement("span", {
      className: "dot"
    }), t);
  })));
}
function Nav() {
  return /*#__PURE__*/React.createElement("nav", {
    className: "nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap nav-inner"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    className: "logo"
  }, /*#__PURE__*/React.createElement("img", {
    src: "/assets/logo.webp",
    alt: "latte",
    style: {
      height: 38,
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "nav-links"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#concept"
  }, "Concept"), /*#__PURE__*/React.createElement("a", {
    href: "#pret"
  }, "Pre\u021B"), /*#__PURE__*/React.createElement("a", {
    href: "#aparat"
  }, "Aparat"), /*#__PURE__*/React.createElement("a", {
    href: "#calculator"
  }, "Calculator"), /*#__PURE__*/React.createElement("a", {
    href: "#rezultate"
  }, "Rezultate"), /*#__PURE__*/React.createElement("a", {
    href: "#faq"
  }, "FAQ")), /*#__PURE__*/React.createElement("a", {
    href: "#aplica",
    className: "btn btn-turq",
    style: {
      padding: "10px 18px",
      fontSize: 14
    }
  }, "Aplic\u0103 ", /*#__PURE__*/React.createElement(IcArrow, {
    size: 16
  }))));
}
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    className: "hero",
    id: "top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap hero-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "Franciz\u0103 activ\u0103 \xEEn 2026"), /*#__PURE__*/React.createElement("h1", {
    className: "display",
    style: {
      marginTop: 24
    }
  }, "Deschide-\u021Bi", /*#__PURE__*/React.createElement("br", null), "cafeneaua", /*#__PURE__*/React.createElement("br", null), "ta \xEEn ", /*#__PURE__*/React.createElement("span", {
    className: "hl"
  }, "30 zile"), "."), /*#__PURE__*/React.createElement("p", {
    className: "hero-sub"
  }, "Cu ", /*#__PURE__*/React.createElement("strong", null, "3.000\u20AC"), " porne\u0219ti o cafenea self-service Latte cu lapte natural, \xEEn 1m\xB2. F\u0103r\u0103 angaja\u021Bi, f\u0103r\u0103 buc\u0103t\u0103rie. Tu cau\u021Bi loca\u021Bia \u2014 noi facem restul."), /*#__PURE__*/React.createElement("div", {
    className: "hero-ctas"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#aplica",
    className: "btn btn-primary"
  }, "Aplic\u0103 pentru franciz\u0103 ", /*#__PURE__*/React.createElement(IcArrow, {
    size: 18,
    className: "btn-arrow"
  })), /*#__PURE__*/React.createElement("a", {
    href: "#calculator",
    className: "btn btn-ghost"
  }, "Vezi calculatorul de profit")), /*#__PURE__*/React.createElement("div", {
    className: "hero-trust"
  }, /*#__PURE__*/React.createElement("div", {
    className: "trust-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "trust-num"
  }, "250+"), /*#__PURE__*/React.createElement("div", {
    className: "trust-label"
  }, "cafenele active")), /*#__PURE__*/React.createElement("div", {
    className: "trust-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "trust-num"
  }, "100%"), /*#__PURE__*/React.createElement("div", {
    className: "trust-label"
  }, "Arabica")), /*#__PURE__*/React.createElement("div", {
    className: "trust-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "trust-num"
  }, "Natural"), /*#__PURE__*/React.createElement("div", {
    className: "trust-label"
  }, "lapte, nu praf")), /*#__PURE__*/React.createElement("div", {
    className: "trust-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "trust-num"
  }, "RO"), /*#__PURE__*/React.createElement("div", {
    className: "trust-label"
  }, "brand rom\xE2nesc")))), /*#__PURE__*/React.createElement("div", {
    className: "machine-stage"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stage-bg"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement(Machine, null)), /*#__PURE__*/React.createElement("div", {
    className: "stage-tag",
    style: {
      top: "8%",
      right: "-2%"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      background: "#52C4B6"
    }
  }), " 1m\xB2 spa\u021Biu"), /*#__PURE__*/React.createElement("div", {
    className: "stage-tag",
    style: {
      bottom: "14%",
      left: "-4%"
    }
  }, "200\u2014300 ml"))));
}
function Concept() {
  return /*#__PURE__*/React.createElement("section", {
    id: "concept"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap split"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "Ce este Latte"), /*#__PURE__*/React.createElement("h2", {
    className: "display",
    style: {
      marginTop: 18
    }
  }, "Cafenea \xEEn 1m\xB2.", /*#__PURE__*/React.createElement("br", null), "Brand cu 250 de loca\u021Bii."), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 22
    }
  }, "Latte e o franciz\u0103 self-service de cafea, fondat\u0103 \xEEn 2022 \xEEn Rom\xE2nia. \xCEn 2025 am f\u0103cut upgrade complet la ", /*#__PURE__*/React.createElement("strong", null, "lapte natural"), " \u2014 nu praf, nu surogat. Ast\u0103zi sunt peste 250 de aparate \xEEn \u021Bar\u0103, \xEEn birouri, mall-uri, supermarket-uri \u0219i facult\u0103\u021Bi."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      display: "flex",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "big-num",
    style: {
      fontSize: "clamp(56px,8vw,96px)"
    }
  }, "2022"), /*#__PURE__*/React.createElement("div", {
    className: "trust-label"
  }, "fondat")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "big-num",
    style: {
      fontSize: "clamp(56px,8vw,96px)",
      color: "#52C4B6"
    }
  }, "2025"), /*#__PURE__*/React.createElement("div", {
    className: "trust-label"
  }, "upgrade lapte natural")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "Pia\u021Ba din Rom\xE2nia"), /*#__PURE__*/React.createElement("h3", {
    className: "display",
    style: {
      marginTop: 18,
      fontSize: "clamp(24px,3vw,32px)"
    }
  }, "Rom\xE2nii beau cafea. Doar 15% o iau dintr-o cafenea."), /*#__PURE__*/React.createElement("div", {
    className: "market-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat-card yellow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "big-num",
    style: {
      fontSize: 64
    }
  }, "300", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 32
    }
  }, "M\u20AC")), /*#__PURE__*/React.createElement("div", {
    className: "stat-label"
  }, "pia\u021B\u0103 anual\u0103 \xEEn Rom\xE2nia")), /*#__PURE__*/React.createElement("div", {
    className: "stat-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "big-num",
    style: {
      fontSize: 64
    }
  }, "85%"), /*#__PURE__*/React.createElement("div", {
    className: "stat-label"
  }, "consum acas\u0103 sau la automat")), /*#__PURE__*/React.createElement("div", {
    className: "stat-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "big-num",
    style: {
      fontSize: 64
    }
  }, "2,4", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 32
    }
  }, "kg")), /*#__PURE__*/React.createElement("div", {
    className: "stat-label"
  }, "cafea / persoan\u0103 / an")), /*#__PURE__*/React.createElement("div", {
    className: "stat-card",
    style: {
      background: "#1D1D1C",
      color: "#FFFCFA",
      borderColor: "transparent"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "big-num",
    style: {
      fontSize: 64,
      color: "#52C4B6"
    }
  }, "+12%"), /*#__PURE__*/React.createElement("div", {
    className: "stat-label",
    style: {
      color: "rgba(255,252,250,.6)"
    }
  }, "cre\u0219tere consum / an"))))));
}
function Price() {
  var items = [{
    n: "01",
    t: "Cafenea în comodat",
    d: "Aparatul Latte echipat complet, fără să-l cumperi.",
    I: IcCoffee
  }, {
    n: "02",
    t: "Brand & identitate",
    d: "Folosești marca Latte, ai dreptul exclusiv pe locația ta.",
    I: IcStar
  }, {
    n: "03",
    t: "Livrare + training",
    d: "Aducem aparatul, îl montăm, te instruim 1 zi.",
    I: IcTruck
  }, {
    n: "04",
    t: "Platformă comenzi",
    d: "App-ul Latte cu plata digitală și comenzi mobile.",
    I: IcPhone
  }, {
    n: "05",
    t: "Telemetrie fiscalizată",
    d: "Vezi încasările live, pe telefon. Toate raportate ANAF.",
    I: IcChart
  }, {
    n: "06",
    t: "Account manager",
    d: "O persoană dedicată ție. Răspunde pe WhatsApp.",
    I: IcUsers
  }, {
    n: "07",
    t: "Materie primă pentru 300 pahare",
    d: "Cafea, lapte, siropuri — pentru primele zile.",
    I: IcMilk
  }, {
    n: "08",
    t: "Service & mentenanță",
    d: "Tehnicieni în toată țara. Diagnostic remote.",
    I: IcWrench
  }, {
    n: "09",
    t: "Comunitate WhatsApp",
    d: "Acces la grupul partenerilor, sfaturi, locații.",
    I: IcWhats
  }, {
    n: "10",
    t: "Ghid de locație",
    d: "Modelul nostru de evaluare locații + checklist.",
    I: IcDoc
  }, {
    n: "11",
    t: "Parteneriate cu lanțuri mari",
    d: "Acces la contractele existente cu rețele comerciale + viitoarele parteneriate.",
    I: IcShop
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "price-section",
    id: "pret"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      maxWidth: 720,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      background: "#1D1D1C"
    }
  }), "Investi\u021Bia"), /*#__PURE__*/React.createElement("h2", {
    className: "display",
    style: {
      marginTop: 18
    }
  }, "Tot ce prime\u0219ti pentru ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#1D1D1C"
    }
  }, "3.000\u20AC"), ".")), /*#__PURE__*/React.createElement("div", {
    className: "price-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "price-strike"
  }, /*#__PURE__*/React.createElement("s", null, "franciz\u0103 cafenea clasic\u0103 min. 15.000\u20AC")), /*#__PURE__*/React.createElement("div", {
    className: "price-amount"
  }, "3.000", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.45em",
      verticalAlign: "0.6em",
      marginLeft: 6
    }
  }, "\u20AC")), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--mute)",
      marginTop: 4,
      fontSize: 15
    }
  }, "investi\u021Bie ini\u021Bial\u0103 unic\u0103 \u2022 redeven\u021B\u0103 5% CA")), /*#__PURE__*/React.createElement("div", {
    className: "includes-grid"
  }, items.map(function (_ref) {
    var n = _ref.n,
      t = _ref.t,
      d = _ref.d,
      I = _ref.I;
    return /*#__PURE__*/React.createElement("div", {
      className: "include-item",
      key: n
    }, /*#__PURE__*/React.createElement("div", {
      className: "icn"
    }, /*#__PURE__*/React.createElement(I, {
      size: 20,
      color: "#1D1D1C"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "include-num"
    }, n), /*#__PURE__*/React.createElement("div", {
      className: "include-title"
    }, t), /*#__PURE__*/React.createElement("div", {
      className: "include-desc"
    }, d)));
  })), /*#__PURE__*/React.createElement("div", {
    className: "royalty-note"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      letterSpacing: ".12em",
      textTransform: "uppercase",
      color: "#52C4B6",
      fontWeight: 600,
      marginBottom: 4
    }
  }, "Redeven\u021B\u0103 \u2022 clarificat\u0103"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 600
    }
  }, "5% din cifra de afaceri lunar\u0103. Minim 500 lei + TVA / lun\u0103.")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "rgba(255,252,250,.65)",
      maxWidth: 360
    }
  }, "E parte din contract \u0219i acoper\u0103 platform\u0103, brand, suport. Tot ce c\xE2\u0219tigi peste asta e al t\u0103u."))));
}
Object.assign(window, {
  Ticker: Ticker,
  Nav: Nav,
  Hero: Hero,
  Concept: Concept,
  Price: Price
});
