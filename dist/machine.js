"use strict";

// Real Latte machine photo (replaces previous SVG illustration)

function Machine(_ref) {
  var _ref$scale = _ref.scale,
    scale = _ref$scale === void 0 ? 1 : _ref$scale;
  return /*#__PURE__*/React.createElement("img", {
    src: "/assets/aparat.webp",
    alt: "Aparat Latte cu lapte natural",
    style: {
      display: "block",
      width: "100%",
      maxWidth: 460 * scale,
      height: "auto",
      objectFit: "contain",
      filter: "drop-shadow(0 30px 50px rgba(29,29,28,.25))",
      position: "relative",
      zIndex: 2
    }
  });
}
window.Machine = Machine;