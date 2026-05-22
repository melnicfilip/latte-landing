// App composition + scroll reveal + smooth scroll

function App() {
  React.useEffect(() => {
    // Smooth scroll for anchors
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href");
      if (id.length < 2) return;
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        requestAnimationFrame(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }
    };
    document.addEventListener("click", onClick);

    // Reveal observer
    const io = new IntersectionObserver((ents) => {
      ents.forEach(en => { if (en.isIntersecting) en.target.classList.add("in"); });
    }, { threshold: 0.08 });
    document.querySelectorAll("section").forEach(s => { s.classList.add("reveal"); io.observe(s); });

    return () => { document.removeEventListener("click", onClick); io.disconnect(); };
  }, []);

  return (
    <>
      <Ticker />
      <Nav />
      <main>
        <Hero />
        <Concept />
        <LogoBar />
        <Price />
        <Anatomy />
        <VsVending />
        <Menu />
        <Calculator />
        <MidCTA text="Vrei să afli mai multe?" />
        <Locations />
        <Process />
        <PhoneSection />
        <Proof />
        <PartnerGallery />
        <MidCTA text="Începe cu prima ta locație." />
        <WhyNow />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
