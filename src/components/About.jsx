import { useInView } from "../hooks/useInView";
import SectionHeader from "./SectionHeader";

const TRAITS = [
  { icon:"⚡", title:"Fast Learner", desc:"Quickly adapt to new technologies" },
  { icon:"🏗️", title:"Builder Mindset", desc:"Focus on real-world projects" },
  { icon:"📊", title:"Problem Solver", desc:"Strong analytical thinking skills" },
  { icon:"☁️", title:"Cloud Oriented", desc:"Hands-on AWS experience" },
];

export default function About({ dark }) {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="about" ref={ref} style={{
      padding:"100px 24px",
      background: dark ? "#0a0a14" : "#fff",
      opacity: inView ? 1 : 0,
      transform: inView ? "none" : "translateY(30px)",
      transition:"all 0.7s ease",
    }}>

      <div style={{ maxWidth:1100, margin:"0 auto" }}>

        <SectionHeader dark={dark} tag="WHO I AM" title="About Me" />

        <div style={{
          display:"flex",
          flexWrap:"wrap",
          gap:48,
          marginTop:56
        }}>

          {/* LEFT */}
          <div style={{ flex:"1 1 320px" }}>

            <p style={{
              fontSize:17,
              lineHeight:1.8,
              marginBottom:16,
              color: dark ? "#aaa" : "#444"
            }}>
              I'm an <strong style={{ color:"#7c3aed" }}>
              MCA student (2025)</strong> from Chhatrapati Sambhajinagar,
              passionate about building scalable web applications and solving
              real-world problems through technology.
            </p>

            <p style={{
              fontSize:17,
              lineHeight:1.8,
              color: dark ? "#aaa" : "#444"
            }}>
              My expertise includes{" "}
              <strong style={{ color:"#4f46e5" }}>
              Java, Spring Boot, React, AWS Cloud, and Data Science
              </strong>, enabling me to work across frontend, backend,
              and cloud-based systems.
            </p>

            {/* Career box */}
            <div style={{
              marginTop:28,
              padding:24,
              borderRadius:20,
              background: dark
                ? "rgba(124,58,237,0.1)"
                : "rgba(124,58,237,0.05)",
              border:"1px solid rgba(124,58,237,0.2)"
            }}>
              <p style={{
                fontWeight:700,
                color:"#7c3aed",
                marginBottom:8
              }}>
                🎯 Career Objective
              </p>

              <p style={{
                fontSize:15,
                lineHeight:1.7,
                color: dark ? "#bbb" : "#555"
              }}>
                Seeking a Full Stack / Software Developer role where I can
                apply my skills, contribute to impactful projects, and grow
                into a strong software engineer.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div style={{
            flex:"1 1 280px",
            display:"grid",
            gridTemplateColumns:"1fr 1fr",
            gap:16
          }}>

            {TRAITS.map((t)=>(
              <div key={t.title} style={{
                padding:20,
                borderRadius:16,
                background: dark
                  ? "rgba(255,255,255,0.04)"
                  : "rgba(0,0,0,0.03)",
                border:"1px solid rgba(124,58,237,0.15)",
                transition:"0.2s"
              }}
              onMouseEnter={e=>{
                e.currentTarget.style.transform="translateY(-4px)";
              }}
              onMouseLeave={e=>{
                e.currentTarget.style.transform="";
              }}
              >

                <div style={{ fontSize:26 }}>{t.icon}</div>

                <div style={{
                  fontWeight:800,
                  marginTop:6
                }}>
                  {t.title}
                </div>

                <div style={{
                  fontSize:12,
                  color: dark ? "#aaa" : "#555"
                }}>
                  {t.desc}
                </div>

              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}