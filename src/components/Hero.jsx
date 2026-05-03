import { useState, useEffect } from "react";
import { useTypingEffect } from "../hooks/useTypingEffect";
import FaceAvatar from "./FaceAvatar";
import GitHubLogo from "../logos/GitHubLogo";
import LinkedInLogo from "../logos/LinkedInLogo";
import LeetCodeLogo from "../logos/LeetCodeLogo";
import KaggleLogo from "../logos/KaggleLogo";

const TYPED_WORDS = [
  "Java + Spring Boot Developer",
  "Full Stack Developer",
  "AWS Cloud Enthusiast",
  "Data Science Learner",
];

const STATS = [
  { n: "4+", l: "Projects" },
  { n: "6+", l: "Certifications" },
  { n: "AWS", l: "Cloud Skills" },
  { n: "MCA 2025", l: "Education" },
];

export default function Hero({ dark }) {
  const typed = useTypingEffect(TYPED_WORDS);

  // Responsive control
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "clamp(80px, 12vw, 120px)",
        paddingBottom: "40px",
        background: dark ? "#0a0a14" : "#fafafa",
      }}
    >
      {/* MAIN CONTAINER */}
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          justifyContent: "center",
          gap: isMobile ? 30 : 80,
        }}
      >
        {/* LEFT */}
        <div
          style={{
            flex: 1,
            textAlign: isMobile ? "center" : "left",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 4rem)",
              fontWeight: 900,
              marginBottom: 12,
              lineHeight: 1.1,
            }}
          >
            Hi, I'm{" "}
            <span style={{ color: "#7c3aed" }}>
              Krushna Nikam
            </span>
          </h1>

          {/* Typing */}
          <div
            style={{
              fontSize: "clamp(1rem, 3vw, 1.3rem)",
              fontWeight: 700,
              marginBottom: 20,
            }}
          >
            <span style={{ color: "#7c3aed" }}>{typed}</span>
            <span className="cursor">|</span>
          </div>

          <p
            style={{
              fontSize: "clamp(14px, 3vw, 16px)",
              marginBottom: 30,
              color: dark ? "#aaa" : "#444",
              lineHeight: 1.6,
            }}
          >
            MCA student specializing in{" "}
            <strong>
              Java, Spring Boot, React, AWS Cloud and Data Science
            </strong>
            . Passionate about building scalable applications and solving
            real-world problems.
          </p>

          {/* Buttons */}
          <div
            style={{
              display: "flex",
              gap: 14,
              justifyContent: isMobile ? "center" : "flex-start",
              flexWrap: "wrap",
              marginBottom: 30,
            }}
          >
            <a
              href="https://drive.google.com/file/d/1oaGTODWhM6v_VdA46BO6BH4hyEEI6Zff/view?usp=drive_link"
              style={{
                padding: "12px 26px",
                background: "#7c3aed",
                color: "white",
                borderRadius: 10,
                textDecoration: "none",
                fontWeight: 600,
                boxShadow: "0 8px 25px rgba(124,58,237,0.35)",
              }}
            >
              📄 Resume
            </a>

            <a
              href="#contact"
              style={{
                padding: "12px 26px",
                border: "2px solid #7c3aed",
                color: "#7c3aed",
                borderRadius: 10,
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              💼 Contact
            </a>
          </div>

          {/* Social Icons */}
          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: isMobile ? "center" : "flex-start",
            }}
          >
            <a href="https://github.com/Krushna2911">
              <GitHubLogo size={24} />
            </a>

            <a href="https://www.linkedin.com/in/krushnanikam/">
              <LinkedInLogo size={24} />
            </a>

            <a href="https://leetcode.com/u/krushnaNikam29/">
              <LeetCodeLogo size={24} />
            </a>

            <a href="https://www.kaggle.com/krushnanikam29">
              <KaggleLogo size={24} />
            </a>
          </div>
        </div>

        {/* RIGHT (Avatar) */}
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <FaceAvatar size={isMobile ? 150 : 300} dark={dark} />
        </div>
      </div>

      {/* STATS */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 40,
          marginTop: 50,
          flexWrap: "wrap",
        }}
      >
        {STATS.map((s) => (
          <div key={s.l} style={{ textAlign: "center" }}>
            <div style={{ fontWeight: 900, fontSize: 18 }}>
              {s.n}
            </div>
            <div style={{ fontSize: 12, opacity: 0.6 }}>
              {s.l}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}