"use strict";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// Sections B: Anatomy, vs Vending, Menu, Calculator, Locations

function Anatomy() {
  // 12 callouts — pinned positions over the central machine
  var callouts = [{
    n: 1,
    x: "8%",
    y: "8%",
    t: "Aparat profesional",
    d: "Espressor cu boiler dual și grinder integrat.",
    side: "L"
  }, {
    n: 2,
    x: "8%",
    y: "30%",
    t: "Frigider lapte",
    d: "Lapte natural păstrat la 4°C, monitorizat.",
    side: "L"
  }, {
    n: 3,
    x: "8%",
    y: "52%",
    t: "Dispenser pahare 130 buc",
    d: "Capacitate mare pentru o săptămână.",
    side: "L"
  }, {
    n: 4,
    x: "8%",
    y: "74%",
    t: "Validator numerar",
    d: "Bancnote și monede, cu rest automat.",
    side: "L"
  }, {
    n: 5,
    x: "76%",
    y: "8%",
    t: "Iluminare LED + neon",
    d: "Vizibilitate maximă, atrage clienții.",
    side: "R"
  }, {
    n: 6,
    x: "76%",
    y: "30%",
    t: "Touchscreen + 18 rețete",
    d: "Selecție rapidă, M și L, opțiuni de zahăr.",
    side: "R"
  }, {
    n: 7,
    x: "76%",
    y: "52%",
    t: "POS bancă parteneră",
    d: "Card, contactless, Apple Pay & Google Pay.",
    side: "R"
  }, {
    n: 8,
    x: "76%",
    y: "74%",
    t: "Fiscalizare ANAF",
    d: "Casa de marcat integrată. Bon la cerere.",
    side: "R"
  }, {
    n: 9,
    x: "30%",
    y: "92%",
    t: "Siropuri anti-vandalic",
    d: "3 arome, dispenser sigilat.",
    side: "B"
  }, {
    n: 10,
    x: "62%",
    y: "92%",
    t: "Organizator servețele",
    d: "Pahare M/L, capace, agitatoare.",
    side: "B"
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "anatomy-section",
    id: "aparat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      maxWidth: 720,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow light"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "Anatomia aparatului"), /*#__PURE__*/React.createElement("h2", {
    className: "display",
    style: {
      marginTop: 18,
      color: "#FFFCFA"
    }
  }, "Tot ce intr\u0103 pe u\u0219\u0103.", /*#__PURE__*/React.createElement("br", null), "Asamblat, testat, livrat."), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      margin: "22px auto 0"
    }
  }, "Un singur aparat. Zece subsisteme care lucreaz\u0103 \xEEmpreun\u0103. Tu deschizi u\u0219a magazinului \u2014 restul ruleaz\u0103 singur.")), /*#__PURE__*/React.createElement("div", {
    className: "anatomy-stage"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
      width: "min(360px, 36%)",
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement(Machine, null)), callouts.map(function (c) {
    return /*#__PURE__*/React.createElement("div", {
      key: c.n,
      className: "callout",
      style: {
        left: c.x,
        top: c.y,
        textAlign: c.side === "R" ? "left" : c.side === "L" ? "right" : "center",
        maxWidth: c.side === "B" ? 160 : 200
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "cnum"
    }, c.n), /*#__PURE__*/React.createElement("div", {
      className: "ctitle"
    }, c.t), /*#__PURE__*/React.createElement("div", {
      className: "cdesc"
    }, c.d));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
      gap: 24,
      marginTop: 80,
      paddingTop: 40,
      borderTop: "1px solid rgba(255,252,250,.12)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "num",
    style: {
      fontSize: 56,
      color: "#52C4B6"
    }
  }, "18"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "rgba(255,252,250,.55)"
    }
  }, "re\u021Bete pe touchscreen")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "num",
    style: {
      fontSize: 56,
      color: "#FFFC9C"
    }
  }, "1m\xB2"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "rgba(255,252,250,.55)"
    }
  }, "amprent\u0103 la sol")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "num",
    style: {
      fontSize: 56,
      color: "#FFB878"
    }
  }, "130"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "rgba(255,252,250,.55)"
    }
  }, "pahare \xEEn dispenser")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "num",
    style: {
      fontSize: 56
    }
  }, "remote"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "rgba(255,252,250,.55)"
    }
  }, "diagnostic din birou")))));
}
function VsVending() {
  return /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "Comparativ"), /*#__PURE__*/React.createElement("h2", {
    className: "display",
    style: {
      marginTop: 18
    }
  }, "Latte \u2260 vending obi\u0219nuit."), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 22
    }
  }, "Suntem aceea\u0219i categorie, dar nu acela\u0219i produs. Diferen\u021Ba nu e \xEEn logo \u2014 e \xEEn can\u0103.")), /*#__PURE__*/React.createElement("div", {
    className: "vs-grid",
    style: {
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "vs-col latte"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Bricolage Grotesque",
      fontSize: 14,
      letterSpacing: ".14em",
      textTransform: "uppercase",
      fontWeight: 700
    }
  }, "Latte"), /*#__PURE__*/React.createElement("h3", {
    className: "display",
    style: {
      marginTop: 8
    }
  }, "Cafea de specialitate. La buton."), /*#__PURE__*/React.createElement("ul", {
    className: "vs-list"
  }, [["Lapte natural, păstrat la 4°C", "Beandrops — cafea 100% Arabica, prăjire premium"], ["Design modern, brand recunoscut", "250+ aparate în lanț"], ["Cantități mari: 200—300ml M / L", "Pahar gros, capac, agitator incluse"], ["18 rețete + 3 siropuri + ciocolată", "Produs gourmet, nu instant"]].map(function (_ref, i) {
    var _ref2 = _slicedToArray(_ref, 2),
      a = _ref2[0],
      b = _ref2[1];
    return /*#__PURE__*/React.createElement("li", {
      key: i
    }, /*#__PURE__*/React.createElement("span", {
      className: "check"
    }, "\u2713"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, a), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        color: "var(--ink-soft)",
        marginTop: 2
      }
    }, b)));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "vs-col vend"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Bricolage Grotesque",
      fontSize: 14,
      letterSpacing: ".14em",
      textTransform: "uppercase",
      fontWeight: 700
    }
  }, "Vending obi\u0219nuit"), /*#__PURE__*/React.createElement("h3", {
    className: "display",
    style: {
      marginTop: 8,
      color: "#6B6B68"
    }
  }, "Cafea din obi\u0219nuin\u021B\u0103."), /*#__PURE__*/React.createElement("ul", {
    className: "vs-list"
  }, [["Lapte praf, calitate scăzută", "Surogat ieftin, gust artificial"], ["Design învechit, fără identitate", "Cutie metalică anonimă"], ["100—150ml, pahar subțire", "Fără capac, fără agitator"], ["Fără siropuri, opțiuni minime", "3—5 rețete, fără personalizare"]].map(function (_ref3, i) {
    var _ref4 = _slicedToArray(_ref3, 2),
      a = _ref4[0],
      b = _ref4[1];
    return /*#__PURE__*/React.createElement("li", {
      key: i
    }, /*#__PURE__*/React.createElement("span", {
      className: "check"
    }, "\xB7"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, a), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        marginTop: 2
      }
    }, b)));
  }))))));
}
function Menu() {
  var mDrinks = [{
    name: "Espresso",
    ml: "50 ml",
    price: 5
  }, {
    name: "Espresso dublu",
    ml: "100 ml",
    price: 7
  }, {
    name: "Espresso Lungo",
    ml: "80 ml",
    price: 6
  }, {
    name: "Espresso cu lapte",
    ml: "100 ml",
    price: 6
  }, {
    name: "Americano",
    ml: "150 ml",
    price: 6
  }, {
    name: "Cappuccino",
    ml: "180 ml",
    price: 6
  }, {
    name: "Latte",
    ml: "220 ml",
    price: 6
  }, {
    name: "Flat White",
    ml: "230 ml",
    price: 7
  }, {
    name: "Ciocolată caldă",
    ml: "200 ml",
    price: 5
  }];
  var lDrinks = [{
    name: "Barista",
    ml: "260 ml",
    price: 7
  }, {
    name: "Latte Macchiato",
    ml: "250 ml",
    price: 8
  }, {
    name: "Mocha",
    ml: "270 ml",
    price: 7
  }, {
    name: "Ceai",
    ml: "250 ml",
    price: 5
  }, {
    name: "Americano cu lapte",
    ml: "220 ml",
    price: 7
  }, {
    name: "Cappuccino",
    ml: "270 ml",
    price: 8
  }, {
    name: "Latte",
    ml: "290 ml",
    price: 8
  }, {
    name: "Flat White",
    ml: "300 ml",
    price: 8
  }, {
    name: "Ciocolată caldă cu lapte",
    ml: "240 ml",
    price: 6
  }];
  var Col = function Col(_ref5) {
    var label = _ref5.label,
      sub = _ref5.sub,
      drinks = _ref5.drinks,
      accent = _ref5.accent;
    return /*#__PURE__*/React.createElement("div", {
      className: "menu-col-v2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "menu-col-head"
    }, /*#__PURE__*/React.createElement("div", {
      className: "cup-badge-v2",
      style: {
        "--cup-fill": accent
      }
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "menu-col-title"
    }, "DIMENSIUNE PAHAR ", label), /*#__PURE__*/React.createElement("div", {
      className: "menu-col-sub"
    }, sub))), drinks.map(function (d, i) {
      return /*#__PURE__*/React.createElement("div", {
        className: "menu-row-v2",
        key: i
      }, /*#__PURE__*/React.createElement("span", {
        className: "cup-mini",
        style: {
          "--cup-fill": accent
        }
      }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("div", {
        className: "menu-name-v2"
      }, /*#__PURE__*/React.createElement("strong", null, d.name), /*#__PURE__*/React.createElement("span", {
        className: "menu-ml-v2"
      }, d.ml)), /*#__PURE__*/React.createElement("div", {
        className: "menu-price-v2"
      }, d.price, /*#__PURE__*/React.createElement("small", null, "lei")));
    }));
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "menu-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow light"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "Meniu \u2022 18 re\u021Bete"), /*#__PURE__*/React.createElement("h2", {
    className: "display",
    style: {
      marginTop: 18,
      color: "#FFFCFA"
    }
  }, "Tot meniul.", /*#__PURE__*/React.createElement("br", null), "Toate pre\u021Burile."), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 22
    }
  }, "9 b\u0103uturi \xEEn pahar M (espresso & ce\u0219ti). 9 b\u0103uturi \xEEn pahar L (to-go). Marja medie pe pahar e 60\u201470% \u2014 vezi banii pe telefon, \xEEn timp real.")), /*#__PURE__*/React.createElement("div", {
    className: "menu-board-v2"
  }, /*#__PURE__*/React.createElement(Col, {
    label: "M",
    sub: "50\u2014230 ml \xB7 ce\u0219ti mici, espresso & shot-uri",
    drinks: mDrinks,
    accent: "#FFB878"
  }), /*#__PURE__*/React.createElement(Col, {
    label: "L",
    sub: "220\u2014300 ml \xB7 pahare to-go, ideal pentru pe drum",
    drinks: lDrinks,
    accent: "#52C4B6"
  }))));
}
function Calculator() {
  var _React$useState = React.useState(50),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    cups = _React$useState2[0],
    setCups = _React$useState2[1];
  var _React$useState3 = React.useState(6.7),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    price = _React$useState4[0],
    setPrice = _React$useState4[1];
  var _React$useState5 = React.useState(150),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    rent = _React$useState6[0],
    setRent = _React$useState6[1];
  var days = 30;
  var ca = cups * price * days; // RON
  var cogs = Math.round(cups * 2.9 * days); // 2.9 RON cost / cup
  var royalty = Math.max(500, Math.round(ca * 0.05)) * 1.19; // +TVA
  var rentRon = rent * 5; // EUR→RON approx
  var profit = Math.round(ca - cogs - royalty - rentRon);
  var profitLow = Math.max(0, Math.round(profit * 0.9));
  var profitHigh = Math.max(0, Math.round(profit * 1.0));
  var fmt = function fmt(n) {
    return Math.round(n).toLocaleString("ro-RO");
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "calc-section",
    id: "calculator"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "Calculator \u2022 estimativ"), /*#__PURE__*/React.createElement("h2", {
    className: "display",
    style: {
      marginTop: 18
    }
  }, "C\xE2t sco\u021Bi pe lun\u0103?", /*#__PURE__*/React.createElement("br", null), "Pune cifrele tale."), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 22,
      color: "var(--ink-soft)"
    }
  }, "Mut\u0103 slider-urile. Calculul se face \xEEn timp real. Rezultatul: ", /*#__PURE__*/React.createElement("strong", null, "cifr\u0103 de afaceri estimat\u0103"), " \u0219i ", /*#__PURE__*/React.createElement("strong", null, "profit estimativ"), " \u2014 nu o promisiune.")), /*#__PURE__*/React.createElement("div", {
    className: "calc-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "calc-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "slider-row"
  }, /*#__PURE__*/React.createElement("label", null, "Pahare v\xE2ndute / zi ", /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, cups)), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "10",
    max: "200",
    value: cups,
    onChange: function onChange(e) {
      return setCups(+e.target.value);
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: 11,
      color: "var(--mute)",
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("span", null, "10"), /*#__PURE__*/React.createElement("span", null, "50"), /*#__PURE__*/React.createElement("span", null, "100"), /*#__PURE__*/React.createElement("span", null, "200"))), /*#__PURE__*/React.createElement("div", {
    className: "slider-row"
  }, /*#__PURE__*/React.createElement("label", null, "Pre\u021B mediu / pahar ", /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, price, " lei")), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "5",
    max: "8",
    step: "0.1",
    value: price,
    onChange: function onChange(e) {
      return setPrice(+e.target.value);
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: 11,
      color: "var(--mute)",
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("span", null, "5 lei"), /*#__PURE__*/React.createElement("span", null, "6.7 lei"), /*#__PURE__*/React.createElement("span", null, "8 lei"))), /*#__PURE__*/React.createElement("div", {
    className: "slider-row",
    style: {
      marginBottom: 0
    }
  }, /*#__PURE__*/React.createElement("label", null, "Chirie loca\u021Bie / lun\u0103 ", /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, rent, "\u20AC")), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "0",
    max: "500",
    step: "25",
    value: rent,
    onChange: function onChange(e) {
      return setRent(+e.target.value);
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: 11,
      color: "var(--mute)",
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("span", null, "0\u20AC"), /*#__PURE__*/React.createElement("span", null, "150\u20AC"), /*#__PURE__*/React.createElement("span", null, "350\u20AC"), /*#__PURE__*/React.createElement("span", null, "500\u20AC"))), /*#__PURE__*/React.createElement("p", {
    className: "disclaimer"
  }, "Estim\u0103rile sunt pentru o lun\u0103 medie, f\u0103r\u0103 sezonalitate. Costul materiei prime mediu: ~2,9 lei/pahar. Chiria convertit\u0103 la curs ~5 lei/\u20AC.")), /*#__PURE__*/React.createElement("div", {
    className: "calc-result"
  }, /*#__PURE__*/React.createElement("div", {
    className: "result-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, "Cifr\u0103 de afaceri estimat\u0103"), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, fmt(ca), " lei")), /*#__PURE__*/React.createElement("div", {
    className: "result-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, "Cost materie prim\u0103"), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, "\u2212", fmt(cogs), " lei")), /*#__PURE__*/React.createElement("div", {
    className: "result-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, "Redeven\u021B\u0103 5% (min. 500 lei +TVA)"), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, "\u2212", fmt(royalty), " lei")), /*#__PURE__*/React.createElement("div", {
    className: "result-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, "Chirie"), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, "\u2212", fmt(rentRon), " lei")), /*#__PURE__*/React.createElement("div", {
    className: "result-row profit"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lbl",
    style: {
      color: "#FFFCFA",
      fontSize: 15
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700
    }
  }, "Profit net estimativ"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "rgba(255,252,250,.55)",
      fontWeight: 400,
      marginTop: 2
    }
  }, "Indicativ 30\u201440% din CA, \xEEn func\u021Bie de chirie")), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, fmt(profitLow), "\u2014", fmt(profitHigh), " lei")), /*#__PURE__*/React.createElement("a", {
    href: "#aplica",
    className: "btn btn-turq",
    style: {
      marginTop: 12,
      justifyContent: "center"
    }
  }, "Aplic\u0103 pentru franciz\u0103 ", /*#__PURE__*/React.createElement(IcArrow, {
    size: 18
  }))))));
}
function Locations() {
  var cards = [{
    type: "Clădiri de birouri",
    chirie: "0—100€",
    vanzari: "20—80 / zi",
    I: IcShop,
    featured: true
  }, {
    type: "Mall-uri",
    chirie: "100—350€",
    vanzari: "20—100 / zi",
    I: IcStar
  }, {
    type: "Supermarketuri",
    chirie: "50—200€",
    vanzari: "20—80 / zi",
    I: IcShop
  }, {
    type: "Facultăți",
    chirie: "50—150€",
    vanzari: "30—100 / zi",
    I: IcUsers
  }, {
    type: "Benzinării",
    chirie: "100—250€",
    vanzari: "30—80 / zi",
    I: IcBolt
  }, {
    type: "Bănci & corporate",
    chirie: "0—150€",
    vanzari: "20—60 / zi",
    I: IcLock
  }, {
    type: "Săli de forță",
    chirie: "50—150€",
    vanzari: "15—50 / zi",
    I: IcSpark
  }, {
    type: "Hoteluri & spitale",
    chirie: "0—200€",
    vanzari: "20—60 / zi",
    I: IcShield
  }, {
    type: "Gări & aeroporturi",
    chirie: "150—400€",
    vanzari: "40—120 / zi",
    I: IcTruck
  }];
  return /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "Loca\u021Bii potrivite"), /*#__PURE__*/React.createElement("h2", {
    className: "display",
    style: {
      marginTop: 18
    }
  }, "Practic, oriunde", /*#__PURE__*/React.createElement("br", null), "trec oameni."), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 22
    }
  }, "1m\xB2 liber, o priz\u0103 \u0219i 5.000 de locuitori. At\xE2t. Restul \u021Bine de tine \u2014 \u0219i de instinctul t\u0103u pentru loca\u021Bii.")), /*#__PURE__*/React.createElement("div", {
    className: "loc-grid"
  }, cards.map(function (_ref6, i) {
    var type = _ref6.type,
      chirie = _ref6.chirie,
      vanzari = _ref6.vanzari,
      I = _ref6.I,
      featured = _ref6.featured;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "loc-card ".concat(featured ? "featured" : "")
    }, /*#__PURE__*/React.createElement("div", {
      className: "icn"
    }, /*#__PURE__*/React.createElement(I, {
      size: 22,
      color: featured ? "#1D1D1C" : "#1D1D1C"
    })), /*#__PURE__*/React.createElement("div", {
      className: "ttl"
    }, type), /*#__PURE__*/React.createElement("div", {
      className: "meta"
    }, /*#__PURE__*/React.createElement("div", null, "Chirie: ", chirie), /*#__PURE__*/React.createElement("div", null, "V\xE2nz\u0103ri tipice: ", vanzari)));
  })), /*#__PURE__*/React.createElement("div", {
    className: "loc-stats"
  }, /*#__PURE__*/React.createElement("div", {
    className: "loc-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "num-big"
  }, "1m\xB2"), /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, "spa\u021Biu necesar")), /*#__PURE__*/React.createElement("div", {
    className: "loc-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "num-big"
  }, "220V"), /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, "priz\u0103 standard, f\u0103r\u0103 linie dedicat\u0103")), /*#__PURE__*/React.createElement("div", {
    className: "loc-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "num-big"
  }, "5.000+"), /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, "locuitori \xEEn ora\u0219, minim")), /*#__PURE__*/React.createElement("div", {
    className: "loc-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "num-big",
    style: {
      color: "#52C4B6"
    }
  }, "129"), /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, "ora\u0219e potrivite \xEEn Rom\xE2nia")))));
}
Object.assign(window, {
  Anatomy: Anatomy,
  VsVending: VsVending,
  Menu: Menu,
  Calculator: Calculator,
  Locations: Locations
});