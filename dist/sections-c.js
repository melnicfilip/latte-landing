"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// Sections C: Process, Phone, Proof, WhyNow, FAQ, Final CTA, Footer

function Process() {
  var steps = [{
    n: "01",
    w: "Săptămâna 1",
    t: "Pregătire acte",
    b: ["Aplici pe WhatsApp", "Discuție 30 min cu account manager", "Semnare contract franciză", "Avans pentru aparat"]
  }, {
    n: "02",
    w: "Săptămâna 2",
    t: "Căutare locație",
    b: ["Primești ghidul de evaluare", "Validăm împreună 2—3 opțiuni", "Negociere contract chirie", "Aprobare finală locație"]
  }, {
    n: "03",
    w: "Săptămâna 3",
    t: "Instalare & training",
    b: ["Livrăm aparatul", "Montaj + setare 1 zi", "Training 4h: meniu, încărcare, app", "Materie primă pentru 300 pahare"]
  }, {
    n: "04",
    w: "Săptămâna 4",
    t: "Lansare & operare",
    b: ["Setare promovare locală", "Primii clienți, primele încasări", "Account manager check zilnic", "Mentenanță remote activă"]
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
  }), "Procesul"), /*#__PURE__*/React.createElement("h2", {
    className: "display",
    style: {
      marginTop: 18
    }
  }, "Patru s\u0103pt\u0103m\xE2ni.", /*#__PURE__*/React.createElement("br", null), "Patru pa\u0219i. At\xE2t."), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 22
    }
  }, "A\u0219a arat\u0103 drumul de la \"vreau\" la \"primul cappuccino v\xE2ndut\". F\u0103r\u0103 surprize.")), /*#__PURE__*/React.createElement("div", {
    className: "process-grid"
  }, steps.map(function (s) {
    return /*#__PURE__*/React.createElement("div", {
      className: "step-card",
      key: s.n
    }, /*#__PURE__*/React.createElement("div", {
      className: "step-num"
    }, s.n), /*#__PURE__*/React.createElement("div", {
      className: "step-week"
    }, s.w), /*#__PURE__*/React.createElement("h4", null, s.t), /*#__PURE__*/React.createElement("ul", null, s.b.map(function (x, i) {
      return /*#__PURE__*/React.createElement("li", {
        key: i
      }, x);
    })));
  }))));
}
function PhoneSection() {
  return /*#__PURE__*/React.createElement("section", {
    className: "phone-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap phone-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "Telemetrie"), /*#__PURE__*/React.createElement("h2", {
    className: "display",
    style: {
      marginTop: 18
    }
  }, "Ai business-ul", /*#__PURE__*/React.createElement("br", null), "\xEEn telefon."), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 22,
      color: "var(--ink-soft)"
    }
  }, "V\xE2nz\u0103ri live, stocuri, alerte de reumplere, mentenan\u021B\u0103 \u2014 totul \xEEn aplica\u021Bia partenerului. ", /*#__PURE__*/React.createElement("strong", null, "3 ore / aparat / s\u0103pt\u0103m\xE2n\u0103"), " e tot ce te ocup\u0103."), /*#__PURE__*/React.createElement("div", {
    className: "phone-feats"
  }, [{
    I: IcChart,
    t: "Vânzări zilnice / lunare / anuale",
    d: "Pe pahar, pe rețetă, pe oră."
  }, {
    I: IcMilk,
    t: "Stocuri în timp real",
    d: "Cafea, lapte, pahare — alertă la 20%."
  }, {
    I: IcBell,
    t: "Notificări email & WhatsApp",
    d: "Pentru alarme, bonuri, mentenanță."
  }, {
    I: IcWrench,
    t: "Diagnostic & service remote",
    d: "Tehnic resetează din birou."
  }, {
    I: IcEye,
    t: "Control fiscal complet",
    d: "Bonuri, raport Z, declarații ANAF."
  }].map(function (f, i) {
    return /*#__PURE__*/React.createElement("div", {
      className: "phone-feat",
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      className: "icn"
    }, /*#__PURE__*/React.createElement(f.I, {
      size: 20,
      color: "#FFFCFA"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700
      }
    }, f.t), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: "var(--ink-soft)"
      }
    }, f.d)));
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "phone"
  }, /*#__PURE__*/React.createElement("div", {
    className: "phone-screen"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: 11,
      color: "var(--mute)",
      marginBottom: 16,
      paddingTop: 4
    }
  }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "JetBrains Mono"
    }
  }, "\u25CF\u25CF\u25CF 4G")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Bricolage Grotesque",
      fontSize: 12,
      letterSpacing: ".12em",
      textTransform: "uppercase",
      color: "var(--mute)",
      fontWeight: 600
    }
  }, "Ast\u0103zi \u2022 Cluj BT"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Bricolage Grotesque",
      fontSize: 44,
      fontWeight: 800,
      letterSpacing: "-0.04em",
      marginTop: 4
    }
  }, "742 lei"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#2FA89A",
      fontWeight: 600
    }
  }, "\u2191 +12% vs. ieri \u2022 98 pahare"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4,
      alignItems: "flex-end",
      height: 70,
      marginTop: 18,
      padding: "0 2px"
    }
  }, [40, 60, 55, 80, 72, 90, 100, 85, 68, 75, 92, 88, 70, 65, 58].map(function (h, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        flex: 1,
        height: "".concat(h, "%"),
        background: i === 6 ? "#52C4B6" : "rgba(82,196,182,.4)",
        borderRadius: "3px 3px 0 0"
      }
    });
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: 9,
      color: "var(--mute)",
      marginTop: 4,
      fontFamily: "JetBrains Mono"
    }
  }, /*#__PURE__*/React.createElement("span", null, "06"), /*#__PURE__*/React.createElement("span", null, "10"), /*#__PURE__*/React.createElement("span", null, "14"), /*#__PURE__*/React.createElement("span", null, "18"), /*#__PURE__*/React.createElement("span", null, "22")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 8,
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--yellow)",
      padding: 12,
      borderRadius: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "var(--mute)",
      fontWeight: 600
    }
  }, "STOC LAPTE"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Bricolage Grotesque",
      fontSize: 22,
      fontWeight: 700
    }
  }, "68%")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--peach)",
      padding: 12,
      borderRadius: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "var(--mute)",
      fontWeight: 600
    }
  }, "PAHARE"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Bricolage Grotesque",
      fontSize: 22,
      fontWeight: 700
    }
  }, "32 buc")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#1D1D1C",
      color: "#FFFCFA",
      padding: 12,
      borderRadius: 12,
      gridColumn: "span 2"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "rgba(255,252,250,.5)",
      fontWeight: 600
    }
  }, "RECOMAND\u0102 #1"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Bricolage Grotesque",
      fontSize: 18,
      fontWeight: 700
    }
  }, "Cappuccino L \xB7 24%"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginTop: 20,
      fontFamily: "JetBrains Mono",
      fontSize: 12,
      color: "var(--ink-soft)"
    }
  }, "// venit aproape pasiv \u2022 3h / s\u0103pt"))));
}
function Proof() {
  // Top 10 partner cafés — April 2026 (anonymized location types)
  var cards = [{
    rank: "01",
    type: "Locație stradală standalone",
    city: "București",
    cups: "3.348 / lună · ~112 / zi",
    revenue: "22.805",
    barFill: 99,
    spotlight: true
  }, {
    rank: "02",
    type: "Spital județean",
    city: "Arad",
    cups: "3.367 / lună · ~112 / zi",
    revenue: "21.479",
    barFill: 94,
    accent: "#FFB878"
  }, {
    rank: "03",
    type: "Magazin de bricolaj",
    city: "București · Băneasa",
    cups: "2.610 / lună · ~87 / zi",
    revenue: "17.347",
    barFill: 76,
    accent: "#FFFC9C"
  }, {
    rank: "04",
    type: "Magazin de bricolaj",
    city: "Iași",
    cups: "2.636 / lună · ~88 / zi",
    revenue: "17.105",
    barFill: 75,
    accent: "#FFFC9C"
  }, {
    rank: "05",
    type: "Locație stradală standalone",
    city: "București",
    cups: "2.451 / lună · ~82 / zi",
    revenue: "16.577",
    barFill: 73,
    accent: "#52C4B6"
  }, {
    rank: "06",
    type: "Magazin de bricolaj",
    city: "Giurgiu",
    cups: "2.498 / lună · ~83 / zi",
    revenue: "16.382",
    barFill: 72,
    accent: "#FFFC9C"
  }, {
    rank: "07",
    type: "Magazin non-stop de cartier",
    city: "Nereju",
    cups: "2.559 / lună · ~85 / zi",
    revenue: "16.008",
    barFill: 70,
    accent: "#A57BD3"
  }, {
    rank: "08",
    type: "Magazin de bricolaj",
    city: "București · V. Cascadelor",
    cups: "2.409 / lună · ~80 / zi",
    revenue: "15.442",
    barFill: 68,
    accent: "#FFFC9C"
  }, {
    rank: "09",
    type: "Spital județean",
    city: "Pitești",
    cups: "2.214 / lună · ~74 / zi",
    revenue: "14.540",
    barFill: 64,
    accent: "#FFB878"
  }, {
    rank: "10",
    type: "Magazin de bricolaj",
    city: "Iași",
    cups: "2.204 / lună · ~73 / zi",
    revenue: "14.122",
    barFill: 62,
    accent: "#FFFC9C"
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "rezultate"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      gap: 32,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "Top 10 cafenele \u2022 Aprilie 2026"), /*#__PURE__*/React.createElement("h2", {
    className: "display",
    style: {
      marginTop: 18
    }
  }, "\xCEncas\u0103ri lunare reale.", /*#__PURE__*/React.createElement("br", null), "Loca\u021Bii reale."), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 22
    }
  }, "Cifrele de mai jos sunt ", /*#__PURE__*/React.createElement("strong", null, "cifr\u0103 de afaceri"), " raportat\u0103 pentru aprilie 2026. Top 10 din 188 loca\u021Bii active. Identitatea partenerilor anonimizat\u0103 \u2014 descriem tipul de loca\u021Bie.")), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right",
      paddingBottom: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "JetBrains Mono",
      fontSize: 12,
      color: "var(--mute)",
      letterSpacing: ".14em",
      textTransform: "uppercase"
    }
  }, "// Total top 10"), /*#__PURE__*/React.createElement("div", {
    className: "num",
    style: {
      fontSize: 64,
      lineHeight: 1,
      marginTop: 6
    }
  }, "171.807", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22,
      color: "var(--mute)",
      marginLeft: 6
    }
  }, "lei")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--mute)",
      marginTop: 6
    }
  }, "25.852 pahare \xB7 10 loca\u021Bii"))), /*#__PURE__*/React.createElement("div", {
    className: "proof-grid"
  }, cards.map(function (c, i) {
    return c.spotlight ? /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "proof-card spotlight"
    }, /*#__PURE__*/React.createElement("div", {
      className: "proof-loc"
    }, /*#__PURE__*/React.createElement("div", {
      className: "avatar",
      style: {
        background: "#52C4B6",
        color: "#1D1D1C"
      }
    }, c.rank), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "JetBrains Mono",
        fontSize: 12,
        color: "rgba(255,252,250,.55)",
        letterSpacing: ".14em",
        textTransform: "uppercase",
        fontWeight: 600
      }
    }, "// Locul #1 \xB7 Aprilie 2026"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 22,
        marginTop: 4,
        lineHeight: 1.2
      }
    }, c.type), /*#__PURE__*/React.createElement("div", {
      className: "meta",
      style: {
        marginTop: 2
      }
    }, c.city, " \xB7 ", c.cups))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: 8,
        background: "rgba(255,252,250,.14)",
        borderRadius: 999,
        overflow: "hidden",
        minWidth: 80
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: c.barFill + "%",
        height: "100%",
        background: "var(--turq)",
        borderRadius: 999
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "right"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "proof-rev"
    }, c.revenue, " ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 22,
        fontWeight: 600
      }
    }, "lei")), /*#__PURE__*/React.createElement("div", {
      className: "lbl"
    }, "cifr\u0103 de afaceri \u2022 aprilie 2026"))) : /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "proof-card"
    }, /*#__PURE__*/React.createElement("div", {
      className: "proof-loc"
    }, /*#__PURE__*/React.createElement("div", {
      className: "avatar",
      style: {
        background: c.accent || "#52C4B6",
        color: "#1D1D1C"
      }
    }, c.rank), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 16,
        lineHeight: 1.25
      }
    }, c.type), /*#__PURE__*/React.createElement("div", {
      className: "meta",
      style: {
        marginTop: 2
      }
    }, c.city))), /*#__PURE__*/React.createElement("div", {
      className: "proof-rev"
    }, c.revenue, " ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 18,
        fontWeight: 600
      }
    }, "lei")), /*#__PURE__*/React.createElement("div", {
      className: "lbl"
    }, "cifr\u0103 de afaceri \u2022 aprilie 2026"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 18,
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: 6,
        background: "rgba(29,29,28,.08)",
        borderRadius: 999,
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: c.barFill + "%",
        height: "100%",
        background: "var(--turq)",
        borderRadius: 999
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "JetBrains Mono",
        fontSize: 12,
        color: "var(--mute)",
        whiteSpace: "nowrap"
      }
    }, c.cups.split(' · ')[1])));
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: "center",
      marginTop: 32,
      fontSize: 13,
      color: "var(--mute)"
    }
  }, "Cifrele afi\u0219ate sunt \xEEncas\u0103ri (cifr\u0103 de afaceri), nu profit. Profitul partenerilor variaz\u0103 \xEEn func\u021Bie de chirie \u0219i operare.")));
}
function WhyNow() {
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
  }), "De ce acum"), /*#__PURE__*/React.createElement("h2", {
    className: "display",
    style: {
      marginTop: 18
    }
  }, "Trei motive s\u0103 nu mai am\xE2ni.")), /*#__PURE__*/React.createElement("div", {
    className: "why-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "why-card a"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(IcFlame, {
    size: 36,
    color: "#1D1D1C"
  }), /*#__PURE__*/React.createElement("h4", null, "Sezonul rece urc\u0103 v\xE2nz\u0103rile"), /*#__PURE__*/React.createElement("p", null, "Toamn\u0103\u2014iarn\u0103\u2014prim\u0103var\u0103 aduce ", /*#__PURE__*/React.createElement("strong", null, "+30\u201450%"), " consum fa\u021B\u0103 de var\u0103. Cine deschide acum prinde sezonul.")), /*#__PURE__*/React.createElement("div", {
    className: "why-num"
  }, "+50%")), /*#__PURE__*/React.createElement("div", {
    className: "why-card b"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(IcMap, {
    size: 36,
    color: "#1D1D1C"
  }), /*#__PURE__*/React.createElement("h4", null, "Loca\u021Biile bune se ocup\u0103 zilnic"), /*#__PURE__*/React.createElement("p", null, "Mall-urile, birourile noi, supermarketurile semneaz\u0103 cu primul venit. Concuren\u021Ba nu doarme.")), /*#__PURE__*/React.createElement("div", {
    className: "why-num"
  }, "1/zi")), /*#__PURE__*/React.createElement("div", {
    className: "why-card c"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(IcChart, {
    size: 36,
    color: "#1D1D1C"
  }), /*#__PURE__*/React.createElement("h4", null, "Pre\u021Bul aparatului cre\u0219te"), /*#__PURE__*/React.createElement("p", null, "Componentele se scumpesc, EURO-ul fluctueaz\u0103. Investi\u021Bia de azi se \xEEnchide la ", /*#__PURE__*/React.createElement("strong", null, "3.000\u20AC"), " \u2014 m\xE2ine, nu mai garant\u0103m.")), /*#__PURE__*/React.createElement("div", {
    className: "why-num"
  }, "2026")))));
}
function FAQ() {
  var items = [{
    q: "În cât timp îmi recuperez investiția?",
    a: "Tipic în 2—5 luni, în funcție de locație și volum. La 50 pahare/zi în mediu, recuperarea e sub 4 luni. La locații foarte bune (centre comerciale mari, gări), uneori în 60 de zile."
  }, {
    q: "Cum caut locația — eu sau voi?",
    a: "Tu cauți, noi validăm. Primești ghidul de evaluare și criteriile. Account managerul aprobă oricâte locații vrei să propui — și negociem împreună chiria, dacă e cazul."
  }, {
    q: "Ce este de fapt inclus în 3.000€?",
    a: "Aparatul Latte echipat (în comodat), brandul, livrarea + montajul, training, platforma, telemetria fiscalizată, 300 pahare materie primă, account manager dedicat și acces la comunitatea partenerilor. Vezi secțiunea Preț pentru detalii."
  }, {
    q: "De unde cumpăr materia primă după primele 300 pahare?",
    a: "De la noi, pe platformă. Prețuri negociate la volum mare — cafea Beandrops, siropuri și pahare branded."
  }, {
    q: "Ce fac dacă se defectează aparatul?",
    a: "Diagnostic remote — 80% din probleme se rezolvă fără deplasare. Pentru rest, tehnicieni în toată țara cu intervenție în 24—48h. Înlocuim piese din stoc."
  }, {
    q: "E franciză sau cumpăr aparatul?",
    a: "E franciză. Aparatul rămâne al nostru, ție îți rămâne business-ul (locație, încasări, profit). Asta îți permite să intri cu 3.000€, nu cu 15.000€+ cât costă un aparat profesional cumpărat."
  }, {
    q: "Am nevoie de experiență în HoReCa?",
    a: "Nu. Majoritatea partenerilor noștri lucrau în alte domenii — IT, vânzări, construcții, profesori. Training-ul nostru e de o zi. Restul e operare simplă: încărcare, golit numerar, curățenie săptămânală."
  }, {
    q: "Câte ore îmi ia să mă ocup săptămânal?",
    a: "În medie 3 ore / aparat / săptămână: încărcare consumabile, vidare numerar, curățenie. Restul rulează singur — și vezi totul live pe telefon."
  }];
  var _React$useState = React.useState(0),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    open = _React$useState2[0],
    setOpen = _React$useState2[1];
  return /*#__PURE__*/React.createElement("section", {
    id: "faq"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      maxWidth: 880
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "\xCEntreb\u0103ri frecvente"), /*#__PURE__*/React.createElement("h2", {
    className: "display",
    style: {
      marginTop: 18
    }
  }, "R\u0103spundem direct.")), /*#__PURE__*/React.createElement("div", {
    className: "faq-list"
  }, items.map(function (it, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "faq-item ".concat(open === i ? "open" : "")
    }, /*#__PURE__*/React.createElement("button", {
      className: "faq-q",
      onClick: function onClick() {
        return setOpen(open === i ? -1 : i);
      },
      "aria-expanded": open === i
    }, /*#__PURE__*/React.createElement("span", null, it.q), /*#__PURE__*/React.createElement("span", {
      className: "faq-toggle"
    }, "+")), /*#__PURE__*/React.createElement("div", {
      className: "faq-a"
    }, it.a));
  }))));
}
function getUtmParams() {
  var params = new URLSearchParams(window.location.search);
  var utm = {};
  ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid"].forEach(function (k) {
    var v = params.get(k);
    if (v) utm[k] = v;
  });
  return utm;
}
function FinalCTA() {
  var _React$useState3 = React.useState(1),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    step = _React$useState4[0],
    setStep = _React$useState4[1];
  var _React$useState5 = React.useState(function () {
      return getUtmParams();
    }),
    _React$useState6 = _slicedToArray(_React$useState5, 1),
    utmData = _React$useState6[0];
  var _React$useState7 = React.useState({
      ocupatie: "",
      domeniu: "",
      cunostinte_franciza: "",
      motiv: "",
      buget: "",
      oras: "",
      spatiu: "",
      asteptari_profit: "",
      recuperare_investitie: "",
      sursa: "",
      nume: "",
      email: "",
      tel: "",
      gdpr: ""
    }),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    form = _React$useState8[0],
    setForm = _React$useState8[1];
  var _React$useState9 = React.useState(false),
    _React$useState0 = _slicedToArray(_React$useState9, 2),
    sent = _React$useState0[0],
    setSent = _React$useState0[1];
  var _React$useState1 = React.useState(false),
    _React$useState10 = _slicedToArray(_React$useState1, 2),
    sending = _React$useState10[0],
    setSending = _React$useState10[1];
  var _React$useState11 = React.useState({}),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    errors = _React$useState12[0],
    setErrors = _React$useState12[1];
  var upd = function upd(k) {
    return function (e) {
      return setForm(_objectSpread(_objectSpread({}, form), {}, _defineProperty({}, k, e.target.value)));
    };
  };
  var pick = function pick(k, v) {
    return function () {
      return setForm(_objectSpread(_objectSpread({}, form), {}, _defineProperty({}, k, v)));
    };
  };
  var requiredByStep = {
    1: ["ocupatie", "domeniu", "cunostinte_franciza"],
    2: ["motiv", "buget", "oras"],
    3: ["spatiu", "asteptari_profit", "recuperare_investitie", "sursa"],
    4: ["nume", "email", "tel", "gdpr"]
  };
  var validate = function validate() {
    var errs = {};
    (requiredByStep[step] || []).forEach(function (k) {
      if (!form[k].trim()) errs[k] = true;
    });
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };
  var next = function next() {
    if (validate()) setStep(step + 1);
  };
  var prev = function prev() {
    setErrors({});
    setStep(step - 1);
  };
  var submit = function submit(e) {
    e.preventDefault();
    if (!validate()) return;
    setSending(true);
    fetch("/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(_objectSpread(_objectSpread(_objectSpread({}, form), utmData), {}, {
        page_url: window.location.href,
        referrer: document.referrer
      }))
    }).then(function (r) {
      return r.json();
    }).then(function () {
      window.location.href = "/success";
    })["catch"](function () {
      window.location.href = "/success";
    });
  };
  var RadioGroup = function RadioGroup(_ref) {
    var name = _ref.name,
      options = _ref.options,
      cols = _ref.cols;
    return /*#__PURE__*/React.createElement("div", {
      className: "radio-group",
      style: cols ? {
        gridTemplateColumns: "repeat(".concat(cols, ", 1fr)")
      } : {}
    }, options.map(function (o) {
      return /*#__PURE__*/React.createElement("label", {
        key: o,
        className: "radio-opt ".concat(form[name] === o ? "active" : ""),
        onClick: pick(name, o)
      }, /*#__PURE__*/React.createElement("span", {
        className: "radio-dot"
      }, form[name] === o && /*#__PURE__*/React.createElement("span", {
        className: "radio-fill"
      })), o);
    }));
  };
  var progressWidth = "".concat(step / 4 * 100, "%");
  return /*#__PURE__*/React.createElement("section", {
    className: "final-cta",
    id: "aplica"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap final-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      background: "rgba(29,29,28,.12)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      background: "#1D1D1C"
    }
  }), "Aplic\u0103 acum"), /*#__PURE__*/React.createElement("h2", {
    className: "display",
    style: {
      marginTop: 18
    }
  }, "Hai s\u0103 ne cunoa\u0219tem!"), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 22,
      color: "var(--ink-soft)",
      maxWidth: 480
    }
  }, "Completeaz\u0103 formularul ca s\u0103 \xEE\u021Bi oferim o ofert\u0103 personalizat\u0103. Dureaz\u0103 sub 2 minute."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      fontFamily: "JetBrains Mono",
      fontSize: 14,
      color: "var(--ink-soft)"
    }
  }, "+40 725 965 987 \xB7 info@latte.ro")), /*#__PURE__*/React.createElement("form", {
    className: "form-card",
    onSubmit: submit
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-progress"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-progress-bar",
    style: {
      width: progressWidth
    }
  })), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "32px 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: 999,
      background: "var(--turq)",
      display: "grid",
      placeItems: "center",
      margin: "0 auto 20px"
    }
  }, /*#__PURE__*/React.createElement(IcStar, {
    size: 32,
    color: "#1D1D1C"
  })), /*#__PURE__*/React.createElement("h3", {
    className: "display",
    style: {
      fontSize: 28
    }
  }, "Mul\u021Bumim!"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--mute)",
      marginTop: 12
    }
  }, "Te vom contacta \xEEn cur\xE2nd cu o ofert\u0103 personalizat\u0103 la ", /*#__PURE__*/React.createElement("strong", null, form.email), ".")) : /*#__PURE__*/React.createElement(React.Fragment, null, step === 1 && /*#__PURE__*/React.createElement("div", {
    className: "form-step"
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Ocupa\u021Bia actual\u0103 ", errors.ocupatie && /*#__PURE__*/React.createElement("span", {
    className: "field-err"
  }, "* obligatoriu")), /*#__PURE__*/React.createElement(RadioGroup, {
    name: "ocupatie",
    options: ["Angajat full-time", "Angajat part-time", "Antreprenor", "Liber profesionist"],
    cols: 2
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "domeniu"
  }, "Domeniu de activitate ", errors.domeniu && /*#__PURE__*/React.createElement("span", {
    className: "field-err"
  }, "* obligatoriu")), /*#__PURE__*/React.createElement("input", {
    id: "domeniu",
    value: form.domeniu,
    onChange: upd("domeniu"),
    placeholder: "Industria \xEEn care activezi"
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "C\xE2t de bine cuno\u0219ti conceptul de franciz\u0103? ", errors.cunostinte_franciza && /*#__PURE__*/React.createElement("span", {
    className: "field-err"
  }, "* obligatoriu")), /*#__PURE__*/React.createElement(RadioGroup, {
    name: "cunostinte_franciza",
    options: ["Deloc", "Bine", "Foarte bine"],
    cols: 3
  }))), step === 2 && /*#__PURE__*/React.createElement("div", {
    className: "form-step"
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "motiv"
  }, "Motivul pentru care ai ales franciza Latte ", errors.motiv && /*#__PURE__*/React.createElement("span", {
    className: "field-err"
  }, "* obligatoriu")), /*#__PURE__*/React.createElement("input", {
    id: "motiv",
    value: form.motiv,
    onChange: upd("motiv"),
    placeholder: "Ce te-a atras la Latte?"
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Bugetul alocat acestui proiect ", errors.buget && /*#__PURE__*/React.createElement("span", {
    className: "field-err"
  }, "* obligatoriu")), /*#__PURE__*/React.createElement(RadioGroup, {
    name: "buget",
    options: ["3.000€", "6.000€", "Mai mult de 9.000€"],
    cols: 3
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "oras"
  }, "Ora\u0219 ", errors.oras && /*#__PURE__*/React.createElement("span", {
    className: "field-err"
  }, "* obligatoriu")), /*#__PURE__*/React.createElement("input", {
    id: "oras",
    value: form.oras,
    onChange: upd("oras"),
    placeholder: "Ora\u0219ul \xEEn care vrei s\u0103 deschizi"
  }))), step === 3 && /*#__PURE__*/React.createElement("div", {
    className: "form-step"
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Ai g\u0103sit un spa\u021Biu? ", errors.spatiu && /*#__PURE__*/React.createElement("span", {
    className: "field-err"
  }, "* obligatoriu")), /*#__PURE__*/React.createElement(RadioGroup, {
    name: "spatiu",
    options: ["Da", "Nu", "Am pus întrebări", "Nu m-am interesat"],
    cols: 2
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "asteptari_profit"
  }, "Ce a\u0219tept\u0103ri ai de profit? ", errors.asteptari_profit && /*#__PURE__*/React.createElement("span", {
    className: "field-err"
  }, "* obligatoriu")), /*#__PURE__*/React.createElement("input", {
    id: "asteptari_profit",
    value: form.asteptari_profit,
    onChange: upd("asteptari_profit"),
    placeholder: "Ex: 2.000 lei / lun\u0103"
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "recuperare_investitie"
  }, "\xCEn c\xE2t timp vrei s\u0103 recuperezi investi\u021Bia ", errors.recuperare_investitie && /*#__PURE__*/React.createElement("span", {
    className: "field-err"
  }, "* obligatoriu")), /*#__PURE__*/React.createElement("input", {
    id: "recuperare_investitie",
    value: form.recuperare_investitie,
    onChange: upd("recuperare_investitie"),
    placeholder: "Ex: 6 luni"
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "sursa"
  }, "De unde ai aflat de franciza Latte? ", errors.sursa && /*#__PURE__*/React.createElement("span", {
    className: "field-err"
  }, "* obligatoriu")), /*#__PURE__*/React.createElement("input", {
    id: "sursa",
    value: form.sursa,
    onChange: upd("sursa"),
    placeholder: "Facebook | TikTok | OLX | Articole | Recomand\u0103ri | Prieteni"
  }))), step === 4 && /*#__PURE__*/React.createElement("div", {
    className: "form-step"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "display",
    style: {
      fontSize: 22,
      marginBottom: 6
    }
  }, "Prime\u0219te oferta personalizat\u0103!"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: "var(--mute)"
    }
  }, "Ultimul pas \u2014 completeaz\u0103 datele de contact.")), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "nume"
  }, "Numele t\u0103u ", errors.nume && /*#__PURE__*/React.createElement("span", {
    className: "field-err"
  }, "* obligatoriu")), /*#__PURE__*/React.createElement("input", {
    id: "nume",
    value: form.nume,
    onChange: upd("nume"),
    placeholder: "Alex"
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "email"
  }, "Email-ul t\u0103u ", errors.email && /*#__PURE__*/React.createElement("span", {
    className: "field-err"
  }, "* obligatoriu")), /*#__PURE__*/React.createElement("input", {
    id: "email",
    type: "email",
    value: form.email,
    onChange: upd("email"),
    placeholder: "exemplu@gmail.com"
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "tel"
  }, "Num\u0103r de telefon ", errors.tel && /*#__PURE__*/React.createElement("span", {
    className: "field-err"
  }, "* obligatoriu")), /*#__PURE__*/React.createElement("input", {
    id: "tel",
    type: "tel",
    value: form.tel,
    onChange: upd("tel"),
    placeholder: "07XXXXXXXX"
  })), /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 10,
      fontSize: 13.5,
      color: "var(--mute)",
      marginTop: 8,
      cursor: "pointer",
      lineHeight: 1.45
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: form.gdpr === "da",
    onChange: function onChange() {
      return setForm(_objectSpread(_objectSpread({}, form), {}, {
        gdpr: form.gdpr === "da" ? "" : "da"
      }));
    },
    style: {
      marginTop: 3,
      accentColor: "var(--turq)"
    }
  }), /*#__PURE__*/React.createElement("span", null, "Sunt de acord cu prelucrarea datelor personale conform ", /*#__PURE__*/React.createElement("a", {
    href: "/politica-confidentialitate",
    style: {
      color: "var(--turq-deep)",
      textDecoration: "underline"
    }
  }, "Politicii de confiden\u021Bialitate"), ". ", errors.gdpr && /*#__PURE__*/React.createElement("span", {
    className: "field-err"
  }, "* obligatoriu")))), /*#__PURE__*/React.createElement("div", {
    className: "form-nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-step-label"
  }, "Pas ", step, " din 4"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, step > 1 && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn btn-ghost",
    style: {
      padding: "12px 20px",
      fontSize: 15
    },
    onClick: prev
  }, "\u2190 \xCEnapoi"), step < 4 ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn btn-turq",
    style: {
      padding: "12px 24px",
      fontSize: 15
    },
    onClick: next
  }, "Urm\u0103torul ", /*#__PURE__*/React.createElement(IcArrow, {
    size: 16,
    className: "btn-arrow"
  })) : /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn btn-turq",
    style: {
      padding: "12px 24px",
      fontSize: 15,
      opacity: sending ? 0.6 : 1
    },
    disabled: sending
  }, sending ? "Se trimite…" : "Trimite", " ", !sending && /*#__PURE__*/React.createElement(IcArrow, {
    size: 16,
    className: "btn-arrow"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "form-foot"
  }, "Datele tale nu sunt partajate cu ter\u021Bi. ", /*#__PURE__*/React.createElement("a", {
    href: "/politica-confidentialitate",
    style: {
      color: "var(--ink)",
      textDecoration: "underline"
    }
  }, "Politica de confiden\u021Bialitate"), ".")))));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", null, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "foot-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "logo",
    style: {
      color: "#FFFCFA"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "glow"
  }), "latte", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#52C4B6"
    }
  }, "."), "ro"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "rgba(255,252,250,.6)",
      fontSize: 14,
      marginTop: 16,
      maxWidth: 320,
      lineHeight: 1.55
    }
  }, "Franciz\u0103 self-service de cafea cu lapte natural. Brand rom\xE2nesc, fondat 2022."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://www.instagram.com/latte.romania",
    "aria-label": "Instagram",
    style: {
      width: 38,
      height: 38,
      borderRadius: 999,
      border: "1px solid rgba(255,252,250,.2)",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement(IcInsta, {
    size: 18
  })), /*#__PURE__*/React.createElement("a", {
    href: "https://www.facebook.com/Latte.business",
    "aria-label": "Facebook",
    style: {
      width: 38,
      height: 38,
      borderRadius: 999,
      border: "1px solid rgba(255,252,250,.2)",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement(IcFb, {
    size: 18
  })), /*#__PURE__*/React.createElement("a", {
    href: "https://wa.me/40725965987",
    "aria-label": "WhatsApp",
    style: {
      width: 38,
      height: 38,
      borderRadius: 999,
      border: "1px solid rgba(255,252,250,.2)",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement(IcWhats, {
    size: 18
  })))), /*#__PURE__*/React.createElement("div", {
    className: "foot-col"
  }, /*#__PURE__*/React.createElement("h5", null, "Contact"), /*#__PURE__*/React.createElement("a", {
    href: "https://wa.me/40725965987"
  }, "WhatsApp +40 725 965 987"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:info@latte.ro"
  }, "info@latte.ro"), /*#__PURE__*/React.createElement("a", {
    href: "#aplica"
  }, "Formular aplicare")), /*#__PURE__*/React.createElement("div", {
    className: "foot-col"
  }, /*#__PURE__*/React.createElement("h5", null, "Pagina"), /*#__PURE__*/React.createElement("a", {
    href: "#concept"
  }, "Despre Latte"), /*#__PURE__*/React.createElement("a", {
    href: "#pret"
  }, "Pre\u021B franciz\u0103"), /*#__PURE__*/React.createElement("a", {
    href: "#calculator"
  }, "Calculator profit"), /*#__PURE__*/React.createElement("a", {
    href: "#faq"
  }, "\xCEntreb\u0103ri frecvente"), /*#__PURE__*/React.createElement("a", {
    href: "/blog/"
  }, "Blog")), /*#__PURE__*/React.createElement("div", {
    className: "foot-col"
  }, /*#__PURE__*/React.createElement("h5", null, "Legal"), /*#__PURE__*/React.createElement("a", {
    href: "/politica-confidentialitate"
  }, "Politica de confiden\u021Bialitate"), /*#__PURE__*/React.createElement("a", {
    href: "/termeni-si-conditii"
  }, "Termeni \u0219i condi\u021Bii"), /*#__PURE__*/React.createElement("a", {
    href: "https://anpc.ro/"
  }, "ANPC \u2014 SAL / SOL"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      borderRadius: 16,
      overflow: "hidden",
      border: "1px solid rgba(255,252,250,.1)"
    }
  }, /*#__PURE__*/React.createElement("iframe", {
    src: "https://www.google.com/maps/d/u/0/embed?mid=1M4HyXJjdiV2SSl0rdVs0JZiKYkVN18o&ll=46.18707645754629%2C25.557345751133568&z=6",
    width: "100%",
    height: "400",
    style: {
      border: 0,
      display: "block"
    },
    allowFullScreen: "",
    loading: "lazy",
    title: "Harta loca\u021Biilor Latte"
  })), /*#__PURE__*/React.createElement("div", {
    className: "foot-bot"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Latte SRL \xB7 CUI RO40412906"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "JetBrains Mono"
    }
  }, "// hai s\u0103 bem o cafea"))));
}
function MidCTA(_ref2) {
  var text = _ref2.text;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "48px 28px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "'Bricolage Grotesque', sans-serif",
      fontWeight: 700,
      fontSize: "clamp(20px, 3vw, 26px)",
      letterSpacing: "-0.02em",
      marginBottom: 18,
      color: "var(--ink)"
    }
  }, text), /*#__PURE__*/React.createElement("a", {
    href: "#aplica",
    className: "btn btn-primary",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10
    }
  }, "Aplic\u0103 acum ", /*#__PURE__*/React.createElement(IcArrow, {
    size: 18,
    className: "btn-arrow"
  })));
}
Object.assign(window, {
  Process: Process,
  PhoneSection: PhoneSection,
  Proof: Proof,
  WhyNow: WhyNow,
  FAQ: FAQ,
  FinalCTA: FinalCTA,
  Footer: Footer,
  MidCTA: MidCTA
});