import profilePhoto from "../assets/profile-photo.png";

export default function FaceAvatar({ size = 200, dark }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        position: "relative",
        flexShrink: 0,
      }}
    >
      {/* Spinning gradient ring */}
      <div
        style={{
          position: "absolute",
          inset: -4,
          borderRadius: "50%",
          background:
            "conic-gradient(from 0deg, #7c3aed, #4f46e5, #06b6d4, #10b981, #7c3aed)",
          animation: "spin 4s linear infinite",
        }}
      />

      {/* Gap ring (dark mode fix) */}
      <div
        style={{
          position: "absolute",
          inset: -1,
          borderRadius: "50%",
          background: dark ? "#0a0a14" : "#ffffff",
        }}
      />

      {/* Photo */}
      <div
        style={{
          position: "absolute",
          inset: 4,
          borderRadius: "50%",
          overflow: "hidden",
          boxShadow: "0 10px 40px rgba(0,0,0,0.25)",
        }}
      >
        <img
          src={profilePhoto}
          alt="Krushna Nikam"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>

      {/* Online badge */}
      <div
        style={{
          position: "absolute",
          bottom: 8,
          right: 8,
          width: 18,
          height: 18,
          borderRadius: "50%",
          background: "#22c55e",
          border: `3px solid ${dark ? "#0a0a14" : "#fff"}`,
          boxShadow: "0 0 0 3px rgba(34,197,94,0.3)",
        }}
      />
    </div>
  );
}