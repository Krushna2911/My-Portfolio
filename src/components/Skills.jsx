import { useInView }                        from "../hooks/useInView";
import SectionHeader                        from "./SectionHeader";
import { SKILLS, TECH_MARQUEE, SKILL_COLORS } from "../data/skills";

export default function Skills({ dark }) {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="skills" ref={ref} style={{
      padding: "100px 24px",
      background: dark ? "#0d0d1a" : "#f8f9ff",
      opacity:   inView ? 1 : 0,
      transform: inView ? "none" : "translateY(30px)",
      transition: "all 0.7s ease",
      willChange: inView ? "auto" : "opacity, transform",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        <SectionHeader dark={dark} tag="WHAT I KNOW" title="Skills & Tech Stack" />

        {/* ── 4 skill category cards ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 20, marginTop: 56,
        }}>
          {Object.entries(SKILLS).map(([category, items]) => {
            const { grad } = SKILL_COLORS[category];
            return (
              <div key={category} style={{
                padding: 24, borderRadius: 20,
                background: dark ? "rgba(255,255,255,0.04)" : "white",
                border: `1px solid ${dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"}`,
                boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
              }}>

                {/* Category label */}
                <h3 style={{
                  fontSize: 11, fontWeight: 900,
                  letterSpacing: "0.15em", textTransform: "uppercase",
                  marginBottom: 20,
                  background: grad,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                  {category}
                </h3>

                {/* Skill progress bars */}
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {items.map((skill) => (
                    <div key={skill.name}>

                      {/* Label + percentage */}
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                        <span style={{ fontSize: 13, fontWeight: 700, color: dark ? "#e2e8f0" : "#1e293b" }}>
                          {skill.name}
                        </span>
                        <span style={{ fontSize: 11, color: dark ? "rgba(255,255,255,0.35)" : "rgba(0,0,0,0.35)" }}>
                          {skill.level}%
                        </span>
                      </div>

                      {/* Track + animated fill */}
                      <div style={{
                        height: 6, borderRadius: 99,
                        background: dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.07)",
                        overflow: "hidden",
                      }}>
                        <div style={{
                          height: "100%", borderRadius: 99,
                          background: grad,
                          // Animates from 0% to skill.level% when inView becomes true
                          width: inView ? `${skill.level}%` : "0%",
                          transition: "width 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
                        }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div style={{
             marginTop: 48,
             overflow: "hidden",
             width: "100%",           // ← ADD THIS
             position: "relative",    // ← ADD THIS
          }}>
          <p style={{
            textAlign: "center", fontSize: 11, fontWeight: 800,
            letterSpacing: "0.2em", textTransform: "uppercase",
            color: dark ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.25)",
            marginBottom: 20,
          }}>
            Technologies I Work With
          </p>

          {/* Double the array so the loop is seamless */}
           <div style={{
           display: "flex",
           gap: 12,
          animation: "marquee 30s linear infinite",
          width: "max-content",    // stops it from wrapping/overflowing
}}>
            {[...TECH_MARQUEE, ...TECH_MARQUEE].map((tech, i) => {
  const Icon = tech.icon;

  return (
    <span key={i} style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "8px 18px",
      borderRadius: 100,
      whiteSpace: "nowrap",
      background: dark ? "rgba(255,255,255,0.06)" : "white",
      border: `1px solid ${
        dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)"
      }`,
      fontSize: 13,
      fontWeight: 600,
      color: dark ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.6)",
    }}>
      <Icon size={16} />
      {tech.name}
    </span>
  );
})}
          </div>
        </div>
      </div>
    </section>
  );
}