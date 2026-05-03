import { useInView } from "../hooks/useInView";
import SectionHeader from "./SectionHeader";
import { CERTS } from "../data/certifications";

import { FaAws, FaPython } from "react-icons/fa";
import { SiGooglecloud, SiDocker, SiCodecademy } from "react-icons/si";
import { BsBriefcaseFill } from "react-icons/bs";

// Icon mapping
function CertIcon({ logo, bg }) {
  const icons = {
    aws: <FaAws color="white" size={24} />,
    google: <SiGooglecloud color="white" size={24} />,
    docker: <SiDocker color="white" size={24} />,
    python: <FaPython color="white" size={24} />,
    codecademy: <SiCodecademy color="white" size={24} />,
    tcs: <BsBriefcaseFill color="white" size={22} />,
    java: <FaPython color="white" size={24} />,
  };

  return (
    <div
      style={{
        width: 48,
        height: 48,
        borderRadius: 12,
        background: bg || "#6366f1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: `0 4px 15px ${bg || "#6366f1"}55`,
        flexShrink: 0,
      }}
    >
      {icons[logo] || <span style={{ color: "white" }}>🎓</span>}
    </div>
  );
}

export default function Certifications({ dark }) {
  const [ref, inView] = useInView(0.1);

  return (
    <section
      id="certifications"
      ref={ref}
      style={{
        padding: "100px 24px",
        background: dark ? "#0a0a14" : "#ffffff",
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(30px)",
        transition: "all 0.7s ease",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionHeader dark={dark} tag="VERIFIED" title="Certifications" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 18,
            marginTop: 52,
          }}
        >
          {(CERTS || []).map((cert, index) => (
            <div
              key={cert?.name || index}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                padding: "18px 20px",
                borderRadius: 16,
                background: dark
                  ? "rgba(255,255,255,0.04)"
                  : "#f8f9ff",
                border: dark
                  ? "1px solid rgba(255,255,255,0.08)"
                  : "1px solid rgba(0,0,0,0.06)",
                borderLeft: "2px solid transparent",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateX(6px)";
                e.currentTarget.style.borderLeftColor =
                  cert?.bg || "#7c3aed";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateX(0)";
                e.currentTarget.style.borderLeftColor = "transparent";
              }}
            >
              <CertIcon logo={cert?.logo} bg={cert?.bg} />

              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontWeight: 800,
                    fontSize: 14,
                    marginBottom: 4,
                    color: dark ? "#f8fafc" : "#0f172a",
                  }}
                >
                  {cert?.name || "Certificate"}
                </div>

                <div
                  style={{
                    fontSize: 12,
                    color: dark
                      ? "rgba(255,255,255,0.5)"
                      : "rgba(0,0,0,0.5)",
                  }}
                >
                  {(cert?.issuer || "Unknown") +
                    " · " +
                    (cert?.year || cert?.issued || "—")}
                </div>
              </div>

              <div
                style={{
                  fontSize: 10,
                  fontWeight: 800,
                  color: "#22c55e",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                Certified
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}