// src/components/MusicPlayer.jsx
import { useEffect, useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  // 👉 Play music after first user interaction
  useEffect(() => {
    const handleFirstInteraction = () => {
      const audio = audioRef.current;
      if (!audio) return;

      audio.muted = false;
      audio.volume = 0;

      audio.play().then(() => {
        // 🔥 Smooth fade-in
        let vol = 0;
        const fade = setInterval(() => {
          if (vol >= 0.2) {
            clearInterval(fade);
            return;
          }
          vol += 0.02;
          audio.volume = vol;
        }, 100);

        setPlaying(true);
      }).catch(() => {});

      window.removeEventListener("click", handleFirstInteraction);
    };

    window.addEventListener("click", handleFirstInteraction);

    return () => {
      window.removeEventListener("click", handleFirstInteraction);
    };
  }, []);

  // 👉 Toggle button
  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.muted = false;
      audio.play();
      setPlaying(true);
    }
  };

  return (
    <>
      {/* Audio */}
      <audio ref={audioRef} loop src="/music.mp3" />

      {/* Floating Button */}
      <button
        onClick={toggle}
        style={{
          position: "fixed",
          bottom: 20,
          left: 20,
          width: 55,
          height: 55,
          borderRadius: "50%",
          border: "none",
          cursor: "pointer",
          background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
          color: "white",
          fontSize: 22,
          boxShadow: "0 10px 30px rgba(124,58,237,0.4)",
          zIndex: 999,
        }}
      >
        {playing ? "🔊" : "🔇"}
      </button>
    </>
  );
}