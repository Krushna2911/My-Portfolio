import { useState, useEffect } from "react";

const NAV_LINKS = [
  "About", "Skills", "Projects",
  "Platforms", "Certifications", "Blog", "Contact"
];

export default function NavBar({ dark, setDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkColor = dark ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.6)";

  return (
    <nav style={{
      position: "fixed",
      top: 0, left: 0, right: 0,
      zIndex: 100,
      background: scrolled
        ? dark ? "rgba(10,10,20,0.95)" : "rgba(255,255,255,0.95)"
        : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled
        ? `1px solid ${dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"}`
        : "none",
      transition: "all 0.3s ease",
    }}>

      <div style={{
        maxWidth: 1280,
        margin: "0 auto",
        padding: "0 24px",
        height: 64,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>

        {/* Logo */}
        <a href="#hero" onClick={() => setMobileMenuOpen(false)} style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <div style={{
            width: 34, height: 34, borderRadius: 10,
            background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 900, color: "white"
          }}>
            KN
          </div>

          <span style={{
            fontWeight: 900,
            fontSize: 17,
            background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "none",
          }}>
            Krushna Nikam
          </span>
        </a>

        {/* Nav Links */}
        <div style={{ display: "flex", alignItems: "center", gap: 28 }} className="nav-links-desktop">

         {NAV_LINKS.map((link) => (
        <a
        key={link}
        href={`#${link.toLowerCase()}`}
        onClick={() => setMobileMenuOpen(false)}
        style={{
        fontSize: 14,
        fontWeight: 600,
        color: dark ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.6)",
        textDecoration: "none",
        padding: "8px 0"
      }}>
    {link}
  </a>
))}

        {/*  ADD THIS */}
        <button
        onClick={() => setDark(!dark)}
        style={{
        marginTop: 10,
        padding: "10px",
        borderRadius: 8,
        border: "none",
        cursor: "pointer",
        background: dark ? "rgba(255,255,255,0.1)" : "#eee",
        color: dark ? "white" : "black",
        fontWeight: 600
  }}>
      {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
</button>

          {/* CTA */}
          <a href="#contact" style={{
            padding: "8px 20px",
            borderRadius: 100,
            background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
            color: "white",
            fontWeight: 700,
            textDecoration: "none"
          }}>
            Hire Me
          </a>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() =>{
           setDark(!dark); 
           setMobileMenuOpen(!mobileMenuOpen)}}
          style={{
            display: mobileMenuOpen ? "flex" : "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: 24,
            color: dark ? "white" : "black"
          }}
          className="hamburger-btn"
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div style={{
          display: "none",
          flexDirection: "column",
          gap: 12,
          padding: "16px 24px",
          background: dark ? "rgba(10,10,20,0.98)" : "rgba(255,255,255,0.98)",
          borderTop: `1px solid ${dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"}`,
          backdropFilter: "blur(20px)"
        }} className="mobile-menu">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: dark ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.6)",
                textDecoration: "none",
                padding: "8px 0"
              }}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}