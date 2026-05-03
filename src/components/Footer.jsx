import GitHubLogo   from "../logos/GitHubLogo";
import LinkedInLogo from "../logos/LinkedInLogo";
import TwitterXLogo from "../logos/TwitterXLogo";

const FOOTER_LINKS = [
  { label: "GitHub",   Logo: GitHubLogo,   href: "#" },
  { label: "LinkedIn", Logo: LinkedInLogo, href: "#" },
  { label: "Twitter",  Logo: TwitterXLogo, href: "#" },
];

export default function Footer({ dark }) {
  const mutedColor = dark ? "rgba(255,255,255,0.45)" : "rgba(0,0,0,0.45)";

  return (
    <footer style={{
      padding: "28px 24px",
      background: dark ? "#070710" : "#f0f4ff",
      borderTop: `1px solid ${dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"}`,
    }}>
      <div style={{
        maxWidth: 1100, margin: "0 auto",
        display: "flex", flexWrap: "wrap",
        alignItems: "center", justifyContent: "space-between",
        gap: 16,
      }}>

        {/* Left — Logo + copyright */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 28, height: 28, borderRadius: 8,
            background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 900, color: "white", fontSize: 11,
          }}>KN</div>
          <span style={{ fontSize: 13, fontWeight: 600, color: mutedColor }}>
            © 2026 krushna Nikam · Built with React + ❤️
          </span>
        </div>

        {/* Right — Social links */}
        <div style={{ display: "flex", gap: 20 }}>
          {FOOTER_LINKS.map(({ label, Logo, href }) => (
            <a key={label} href={href} style={{
              display: "flex", alignItems: "center", gap: 6,
              fontSize: 13, fontWeight: 600,
              color: mutedColor, textDecoration: "none",
              transition: "color 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.color = "#7c3aed"}
              onMouseLeave={e => e.currentTarget.style.color = mutedColor}
            >
              <Logo size={15} color={mutedColor} />
              {label}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}