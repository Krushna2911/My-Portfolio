export default function SectionHeader({ dark, tag, title }) {
  return (
    <div style={{ textAlign: "center" }}>

      {/* Small uppercase tag above the title */}
      <span style={{
        fontSize: 11,
        fontWeight: 900,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "#7c3aed",
        display: "block",
        marginBottom: 12,
      }}>
        {tag}
      </span>

      {/* Main section title */}
      <h2 style={{
        fontSize: "clamp(2rem, 5vw, 3rem)",
        fontWeight: 900,
        letterSpacing: "-1.5px",
        margin: 0,
        color: dark ? "#f8fafc" : "#0f172a",
      }}>
        {title}
      </h2>

    </div>
  );
}