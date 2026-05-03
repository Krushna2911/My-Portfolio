import { useInView } from "../hooks/useInView";
import SectionHeader from "./SectionHeader";
import GitHubLogo from "../logos/GitHubLogo";
import LinkedInLogo from "../logos/LinkedInLogo";

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/Krushna2911",
    Logo: GitHubLogo,
    getColor: (dark) => dark ? "rgba(255,255,255,0.8)" : "#0f172a",
    getBg: (dark) => dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/krushnanikam/",
    Logo: LinkedInLogo,
    getColor: () => "#0a66c2",
    getBg: (dark) => dark ? "rgba(10,102,194,0.12)" : "rgba(10,102,194,0.06)",
  }
];

export default function Contact({ dark }) {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="contact" ref={ref} style={{
      padding: "100px 24px",
      background: dark ? "#0a0a14" : "#fff",
      opacity: inView ? 1 : 0,
      transform: inView ? "none" : "translateY(30px)",
      transition: "all 0.7s ease",
      willChange: inView ? "auto" : "opacity, transform",
    }}>
      <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>

        <SectionHeader
          dark={dark}
          tag="GET IN TOUCH"
          title="Let's Build Together"
        />

        <p style={{
          fontSize: 17,
          lineHeight: 1.8,
          marginTop: 20,
          marginBottom: 40,
          color: dark ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)",
        }}>
          I'm actively looking for opportunities. Whether you have a role,
          project, or just want to connect — feel free to reach out.
        </p>

        {/* Email CTA */}
        <a
          href="mailto:krushnanikam60@gmail.com"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "16px 36px",
            borderRadius: 100,
            textDecoration: "none",
            background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
            color: "white",
            fontWeight: 800,
            fontSize: 16,
            boxShadow: "0 10px 40px rgba(99,102,241,0.4)",
            transition: "0.2s"
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = "translateY(-3px)";
            e.currentTarget.style.boxShadow = "0 16px 50px rgba(99,102,241,0.55)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = "";
            e.currentTarget.style.boxShadow = "0 10px 40px rgba(99,102,241,0.4)";
          }}
        >
          ✉️ krushnanikam60@gmail.com
        </a>

        {/* Social Links */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: 16,
          marginTop: 36,
          flexWrap: "wrap"
        }}>
          {SOCIAL_LINKS.map(({ label, href, Logo, getColor, getBg }) => {
            const color = getColor(dark);
            const bg = getBg(dark);

            return (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "10px 20px",
                  borderRadius: 100,
                  textDecoration: "none",
                  background: bg,
                  color,
                  border: `1px solid ${
                    dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.07)"
                  }`,
                  fontSize: 13,
                  fontWeight: 700,
                  transition: "0.2s"
                }}
                onMouseEnter={e =>
                  e.currentTarget.style.transform = "translateY(-2px)"
                }
                onMouseLeave={e =>
                  e.currentTarget.style.transform = ""
                }
              >
                <Logo size={16} color={color} />
                {label}
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}