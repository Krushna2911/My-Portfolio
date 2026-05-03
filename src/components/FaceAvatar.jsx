import profilePhoto from '../assets/profile-photo.png';

export default function FaceAvatar({ size = 200 }) {
  return (
    <div style={{ width: size, height: size, position: "relative", flexShrink: 0 }}>

      {/* Spinning ring */}
      <div style={{
        position: "absolute",
        inset: -4,
        borderRadius: "50%",
        background: "conic-gradient(from 0deg, #7c3aed, #4f46e5, #06b6d4, #10b981, #7c3aed)",
        animation: "spin 4s linear infinite",
      }} />

      {/* Gap */}
      <div style={{
        position: "absolute",
        inset: -1,
        borderRadius: "50%",
        background: "white",
      }} />

      <div style={{
  position: "absolute",
  inset: 4,
  borderRadius: "50%",
  overflow: "hidden",
}}>
  <img
    src={profilePhoto}
    alt="Krushna Nikam"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }}
  />
</div>

      {/* Online badge */}
      <div style={{
        position: "absolute",
        bottom: 8,
        right: 8,
        width: 20,
        height: 20,
        borderRadius: "50%",
        background: "#22c55e",
        border: "3px solid white",
      }} />

    </div>
  );
}