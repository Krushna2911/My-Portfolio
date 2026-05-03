import { useInView }  from "../hooks/useInView";
import SectionHeader  from "./SectionHeader";
import { BLOGS }      from "../data/blogs";

export default function Blog({ dark }) {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="blog" ref={ref} style={{
      padding: "100px 24px",
      background: dark ? "#0d0d1a" : "#f8f9ff",
      opacity:   inView ? 1 : 0,
      transform: inView ? "none" : "translateY(30px)",
      transition: "all 0.7s ease",
      willChange: inView ? "auto" : "opacity, transform",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        <SectionHeader dark={dark} tag="THOUGHTS" title="Technical Blog" />

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 22, marginTop: 52,
        }}>
          {BLOGS.map((post, i) => (
            <a key={i} href={post.href} style={{ textDecoration: "none" }}>
              <div style={{
                padding: 26, borderRadius: 20, height: "100%",
                background: dark ? "rgba(255,255,255,0.04)" : "white",
                border: `1px solid ${dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"}`,
                transition: "transform 0.2s, box-shadow 0.2s",
                // Stack children vertically so footer sticks to bottom
                display: "flex", flexDirection: "column",
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 12px 40px rgba(99,102,241,0.1)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "";
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                {/* Emoji icon */}
                <div style={{ fontSize: 32, marginBottom: 16 }}>
                  {post.emoji}
                </div>

                {/* Title */}
                <h3 style={{
                  fontWeight: 800, fontSize: 16, lineHeight: 1.4,
                  marginBottom: 10,
                  color: dark ? "#f8fafc" : "#0f172a",
                }}>
                  {post.title}
                </h3>

                {/* Summary */}
                <p style={{
                  fontSize: 13, lineHeight: 1.7, marginBottom: 16,
                  color: dark ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)",
                  flex: 1,   // ← Pushes tags + meta to bottom
                }}>
                  {post.summary}
                </p>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
                  {post.tags.map((tag) => (
                    <span key={tag} style={{
                      padding: "3px 10px", borderRadius: 100,
                      fontSize: 11, fontWeight: 700,
                      background: "rgba(124,58,237,0.1)",
                      color: "#7c3aed",
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Date + read time */}
                <div style={{
                  display: "flex", justifyContent: "space-between",
                  fontSize: 12, fontWeight: 600,
                  color: dark ? "rgba(255,255,255,0.35)" : "rgba(0,0,0,0.35)",
                }}>
                  <span>{post.date}</span>
                  <span>📖 {post.readTime} read</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}