"use strict";

// App composition + scroll reveal + smooth scroll

function App() {
  React.useEffect(function () {
    // Smooth scroll for anchors
    var onClick = function onClick(e) {
      var a = e.target.closest('a[href^="#"]');
      if (!a) return;
      var id = a.getAttribute("href");
      if (id.length < 2) return;
      var el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        window.scrollTo({
          top: el.offsetTop - 60,
          behavior: "smooth"
        });
      }
    };
    document.addEventListener("click", onClick);

    // Reveal observer
    var io = new IntersectionObserver(function (ents) {
      ents.forEach(function (en) {
        if (en.isIntersecting) en.target.classList.add("in");
      });
    }, {
      threshold: 0.08
    });
    document.querySelectorAll("section").forEach(function (s) {
      s.classList.add("reveal");
      io.observe(s);
    });
    return function () {
      document.removeEventListener("click", onClick);
      io.disconnect();
    };
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Ticker, null), /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Concept, null), /*#__PURE__*/React.createElement(Price, null), /*#__PURE__*/React.createElement(Anatomy, null), /*#__PURE__*/React.createElement(VsVending, null), /*#__PURE__*/React.createElement(Menu, null), /*#__PURE__*/React.createElement(Calculator, null), /*#__PURE__*/React.createElement(MidCTA, {
    text: "Vrei s\u0103 afli mai multe?"
  }), /*#__PURE__*/React.createElement(Locations, null), /*#__PURE__*/React.createElement(Process, null), /*#__PURE__*/React.createElement(PhoneSection, null), /*#__PURE__*/React.createElement(Proof, null), /*#__PURE__*/React.createElement(MidCTA, {
    text: "\xCEncepe cu prima ta loca\u021Bie."
  }), /*#__PURE__*/React.createElement(WhyNow, null), /*#__PURE__*/React.createElement(FAQ, null), /*#__PURE__*/React.createElement(FinalCTA, null), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));