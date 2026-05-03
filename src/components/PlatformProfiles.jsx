import { useInView } from "../hooks/useInView";
import SectionHeader from "./SectionHeader";
import GitHubLogo from "../logos/GitHubLogo";
import LinkedInLogo from "../logos/LinkedInLogo";
import LeetCodeLogo from "../logos/LeetCodeLogo";
import KaggleLogo from "../logos/KaggleLogo";
import { PLATFORM_PROFILES } from "../data/platforms";

// Map logo key → component
function PlatformIcon({ logo }) {
  const icons = {
    github: <GitHubLogo size={28} color="#f0f6fc" />,
    linkedin: <LinkedInLogo size={28} color="#ffffff" />,
    leetcode: <LeetCodeLogo size={26} color="#FFA116" />,
    kaggle: <KaggleLogo size={24} color="#ffffff" />,
  };
  return icons[logo] ?? null;
}

// Accent colors
const ACCENT = {
  github: "#7c3aed",
  linkedin: "#0a66c2",
  leetcode: "#FFA116",
  kaggle: "#20beff",
};

export default function PlatformProfiles({ dark }) {
  const [ref, inView] = useInView(0.1);

  return (
    <section
      id="platforms"
      ref={ref}
      style={{
        padding: "100px 24px",
        background: dark ? "#0d0d1a" : "#f0f4ff",
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(30px)",
        transition: "all 0.7s ease",
        willChange: inView ? "auto" : "opacity, transform",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionHeader
          dark={dark}
          tag="FIND ME ONLINE"
          title="Platform Profiles"
        />

        <p
          style={{
            textAlign: "center",
            marginTop: 12,
            fontSize: 16,
            color: dark
              ? "rgba(255,255,255,0.45)"
              : "rgba(0,0,0,0.45)",
          }}
        >
          Real accounts · Real activity · Real proof of work
        </p>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
            marginTop: 48,
          }}
        >
          {PLATFORM_PROFILES.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                display: "block",
              }}
            >
              <div
                style={{
                  borderRadius: 20,
                  overflow: "hidden",
                  border: `1px solid ${
                    dark
                      ? "rgba(255,255,255,0.1)"
                      : "rgba(0,0,0,0.08)"
                  }`,
                  transition: "0.3s",
                  cursor: "pointer",
                  height: "100%",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-8px) scale(1.02)";
                  e.currentTarget.style.boxShadow = `0 20px 50px ${platform.bg}44`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "";
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                {/* Header */}
                <div
                  style={{
                    background: platform.bg,
                    padding: "22px",
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: "rgba(255,255,255,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <PlatformIcon logo={platform.logo} />
                  </div>

                  <div>
                    <div
                      style={{
                        fontWeight: 900,
                        fontSize: 16,
                        color: "white",
                      }}
                    >
                      {platform.name}
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        color: "rgba(255,255,255,0.65)",
                      }}
                    >
                      {platform.handle}
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div
                  style={{
                    background: dark ? "#111120" : "white",
                    padding: 20,
                  }}
                >
                  <p
                    style={{
                      fontSize: 12,
                      marginBottom: 16,
                      color: dark
                        ? "rgba(255,255,255,0.4)"
                        : "rgba(0,0,0,0.4)",
                    }}
                  >
                    {platform.tagline}
                  </p>

                  {/* Stats OR Highlights */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(90px, 1fr))",
                      gap: 8,
                    }}
                  >
                    {(platform.stats || platform.highlights || []).map(
                      (item, i) => (
                        <div
                          key={i}
                          style={{
                            textAlign: "center",
                            padding: "8px 4px",
                            borderRadius: 10,
                            background: dark
                              ? "rgba(255,255,255,0.05)"
                              : "rgba(0,0,0,0.03)",
                          }}
                        >
                          <div
                            style={{
                              fontWeight: 900,
                              fontSize: 15,
                              color: dark,
                              wordBreak: "break-word",     
                              whiteSpace: "normal", 
                            }}
                          >
                            {item.value || item}
                          </div>

                          {item.label && (
                            <div
                              style={{
                                fontSize: 10,
                                marginTop: 2,
                                color: dark
                                  ? "rgba(255,255,255,0.35)"
                                  : "rgba(0,0,0,0.35)",
                              }}
                            >
                              {item.label}
                            </div>
                          )}
                        </div>
                      )
                    )}
                  </div>

                  {/* CTA */}
                  <div
                    style={{
                      marginTop: 14,
                      padding: "8px 14px",
                      borderRadius: 100,
                      textAlign: "center",
                      fontSize: 12,
                      fontWeight: 700,
                      background: `${ACCENT[platform.logo]}18`,
                      border: `1px solid ${ACCENT[platform.logo]}44`,
                      color: ACCENT[platform.logo],
                    }}
                  >
                    View Profile →
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}