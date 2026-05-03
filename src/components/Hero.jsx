import { useTypingEffect } from "../hooks/useTypingEffect";
import FaceAvatar from "./FaceAvatar";
import GitHubLogo from "../logos/GitHubLogo";
import LinkedInLogo from "../logos/LinkedInLogo";
import LeetCodeLogo from "../logos/LeetCodeLogo";
import KaggleLogo from "../logos/KaggleLogo";

// Typing text (updated to your profile)
const TYPED_WORDS = [
  "Java + Spring Boot Developer",
  "Full Stack Developer",
  "AWS Cloud Enthusiast",
  "Data Science Learner",
];

// Realistic stats (no fake numbers)
const STATS = [
  { n: "4+",      l: "Projects" },
  { n: "6+",      l: "Certifications" },
  { n: "AWS",     l: "Cloud Skills" },
  { n: "MCA 2025",l: "Education" },
];

export default function Hero({ dark }) {
  const typed = useTypingEffect(TYPED_WORDS);

  return (
    <section id="hero" style={{
      minHeight: "100vh",
      display: "flex",
      overflow: "hidden",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: 80,
      background: dark ? "#0a0a14" : "#fafafa",
    }}>

      <div style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "0 24px",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        gap: 64,
      }}>

        {/* LEFT */}
        <div style={{ flex: "1 1 420px", maxWidth: 560 }}>

          <h1 style={{
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            fontWeight: 900,
            marginBottom: 12,
          }}>
            Hi, I'm{" "}
            <span style={{ color: "#7c3aed" }}>
              Krushna Nikam
            </span>
          </h1>

          <div style={{
            fontSize: "1.3rem",
            fontWeight: 700,
            marginBottom: 20,
          }}>
            <span style={{ color: "#7c3aed" }}>{typed}</span>
            <span>|</span>
          </div>

          <p style={{
            fontSize: 16,
            marginBottom: 30,
            color: dark ? "#aaa" : "#444"
          }}>
            MCA student specializing in{" "}
            <strong>Java, Spring Boot, React, AWS Cloud and Data Science</strong>.
            Passionate about building scalable applications and solving real-world problems.
          </p>

          {/* Buttons */}
          <div style={{ display: "flex", gap: 12, marginBottom: 30 }}>

            <a
              href="https://drive.google.com/file/d/1oaGTODWhM6v_VdA46BO6BH4hyEEI6Zff/view?usp=drive_link"
              download
              style={{
                padding: "12px 24px",
                background: "#7c3aed",
                color: "white",
                borderRadius: 8,
                textDecoration: "none"
              }}
            >
              📄 Resume
            </a>

            <a
              href="#contact"
              style={{
                padding: "12px 24px",
                border: "2px solid #7c3aed",
                color: "#7c3aed",
                borderRadius: 8,
                textDecoration: "none"
              }}
            >
              💼 Contact
            </a>

          </div>

          {/* Social Links */}
          <div style={{ display: "flex", gap: 10 }}>

            <a href="https://github.com/Krushna2911">
              <GitHubLogo size={20}/>
            </a>

            <a href="https://www.linkedin.com/in/krushnanikam/">
              <LinkedInLogo size={20}/>
            </a>

            <a href="https://leetcode.com/u/krushnaNikam29/">
              <LeetCodeLogo size={20}/>
            </a>

            <a href="https://www.kaggle.com/krushnanikam29">
              <KaggleLogo size={20}/>
            </a>

          </div>

        </div>

        {/* RIGHT */}
        <div>
          <FaceAvatar size={200} />
        </div>

      </div>

      {/* Stats */}
      <div style={{
        position: "absolute",
        bottom: 0,
        width: "100%",
        padding: 16,
        display: "flex",
        justifyContent: "center",
        gap: 30,
      }}>
        {STATS.map((s) => (
          <div key={s.l} style={{ textAlign: "center" }}>
            <div style={{ fontWeight: 900 }}>{s.n}</div>
            <div style={{ fontSize: 12 }}>{s.l}</div>
          </div>
        ))}
      </div>

    </section>
  );
}