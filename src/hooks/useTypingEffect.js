import { useState, useEffect } from "react";

export function useTypingEffect(words, speed = 80, pause = 1800) {
  const [text, setText]         = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting]   = useState(false);

  useEffect(() => {
    const current = words[wordIndex];

    const timeout = setTimeout(() => {
      if (!deleting) {
        // Typing forward — add one character
        setText(current.slice(0, charIndex + 1));

        if (charIndex + 1 === current.length) {
          // Finished typing — pause then start deleting
          setTimeout(() => setDeleting(true), pause);
        } else {
          setCharIndex((c) => c + 1);
        }
      } else {
        // Deleting — remove one character
        setText(current.slice(0, charIndex - 1));

        if (charIndex - 1 === 0) {
          // Finished deleting — move to next word
          setDeleting(false);
          setWordIndex((w) => (w + 1) % words.length);
          setCharIndex(0);
        } else {
          setCharIndex((c) => c - 1);
        }
      }
    }, deleting ? speed / 2 : speed); // Delete twice as fast

    return () => clearTimeout(timeout); // Cleanup on re-render
  }, [text, charIndex, deleting, wordIndex, words, speed, pause]);

  return text; // Returns the current visible string
}