// Real Latte machine photo (replaces previous SVG illustration)

function Machine({ scale = 1 }) {
  return (
    <img
      src="/assets/aparat.png"
      alt="Aparat Latte cu lapte natural"
      style={{
        display: "block",
        width: "100%",
        maxWidth: 460 * scale,
        height: "auto",
        objectFit: "contain",
        filter: "drop-shadow(0 30px 50px rgba(29,29,28,.25))",
        position: "relative",
        zIndex: 2,
      }}
    />
  );
}

window.Machine = Machine;
