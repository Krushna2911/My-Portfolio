import { useState }  from "react";
import { useInView } from "../hooks/useInView";
import SectionHeader from "./SectionHeader";
import GitHubLogo    from "../logos/GitHubLogo";
import { PROJECTS }  from "../data/projects";

const FILTERS = ["All", "Full Stack", "Data Science", "Cloud/DevOps"];

export default function Projects({ dark }) {
  const [ref, inView]   = useInView(0.05);
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" ref={ref} style={{
      padding: "100px 24px",
      background: dark ? "#0a0a14" : "#fff",
      opacity:   inView ? 1 : 0,
      transform: inView ? "none" : "translateY(30px)",
      transition: "all 0.7s ease",
      willChange: inView ? "auto" : "opacity, transform",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        <SectionHeader dark={dark} tag="WHAT I'VE BUILT" title="Featured Projects" />

        {/* Filter buttons */}
        <div style={{
          display: "flex", flexWrap: "wrap",
          gap: 10, justifyContent: "center", marginTop: 40,
        }}>
          {FILTERS.map((f) => (
            <button key={f} onClick={() => setFilter(f)} style={{
              padding: "9px 22px", borderRadius: 100,
              border: "none", cursor: "pointer",
              fontWeight: 700, fontSize: 13,
              transition: "all 0.2s",
              background: filter === f
                ? "linear-gradient(135deg, #7c3aed, #4f46e5)"
                : dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)",
              color: filter === f ? "white"
                : dark ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.5)",
              boxShadow: filter === f ? "0 4px 15px rgba(99,102,241,0.3)" : "none",
            }}>
              {f}
            </button>
          ))}
        </div>

        {/* Project cards grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 22, marginTop: 32,
        }}>
          {filtered.map((project, i) => (
            <div key={i} style={{
              borderRadius: 20, overflow: "hidden",
              background: dark ? "rgba(255,255,255,0.04)" : "#f8f9ff",
              border: `1px solid ${dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"}`,
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 20px 50px rgba(99,102,241,0.15)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "";
                e.currentTarget.style.boxShadow = "";
              }}
            >
              {/* Coloured gradient header strip */}
              <div style={{
                height: 80,
                background: `linear-gradient(${project.gradient})`,
                display: "flex", alignItems: "center",
                justifyContent: "space-between", padding: "0 22px",
              }}>
                <span style={{ fontSize: 36 }}>{project.icon}</span>
                <span style={{
                  fontSize: 11, fontWeight: 800,
                  color: "rgba(255,255,255,0.85)",
                  textTransform: "uppercase", letterSpacing: "0.12em",
                  background: "rgba(0,0,0,0.2)",
                  padding: "4px 10px", borderRadius: 100,
                }}>
                  {project.category}
                </span>
              </div>

              {/* Card body */}
              <div style={{ padding: 22 }}>
                <h3 style={{ fontSize: 15, fontWeight: 800, lineHeight: 1.4, marginBottom: 10, color: dark ? "#f8fafc" : "#0f172a" }}>
                  {project.title}
                </h3>
                <p style={{ fontSize: 13, lineHeight: 1.7, marginBottom: 16, color: dark ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)" }}>
                  {project.desc}
                </p>

                {/* Tech tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 18 }}>
                  {project.tags.map((tag) => (
                    <span key={tag} style={{
                      padding: "4px 10px", borderRadius: 100,
                      fontSize: 11, fontWeight: 700,
                      background: dark ? "rgba(124,58,237,0.15)" : "rgba(124,58,237,0.08)",
                      color: "#7c3aed",
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div style={{ display: "flex", gap: 10 }}>
                  <a href={project.demo} style={{
                    flex: 1, textAlign: "center", padding: "9px",
                    borderRadius: 12, textDecoration: "none",
                    background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
                    color: "white", fontSize: 12, fontWeight: 700,
                  }}>
                    🔗 Demo
                  </a>
                  <a href={project.github} style={{
                    flex: 1, textAlign: "center", padding: "9px",
                    borderRadius: 12, textDecoration: "none",
                    background: dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)",
                    color: dark ? "rgba(255,255,255,0.8)" : "rgba(0,0,0,0.7)",
                    fontSize: 12, fontWeight: 700,
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
                  }}>
                    <GitHubLogo size={14} color={dark ? "rgba(255,255,255,0.8)" : "rgba(0,0,0,0.7)"} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}