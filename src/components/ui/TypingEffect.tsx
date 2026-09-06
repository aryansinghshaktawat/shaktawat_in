// src/components/ui/TypingEffect.tsx
// Cycles through an array of phrases with a typewriter effect.
// Pure React hooks — no external dependency.
"use client";

import { useEffect, useState } from "react";

interface TypingEffectProps {
  phrases: string[];
  /** ms per character typed */
  typeSpeed?: number;
  /** ms per character erased */
  eraseSpeed?: number;
  /** pause at full phrase (ms) */
  pauseFull?: number;
  /** pause at empty (ms) */
  pauseEmpty?: number;
  className?: string;
}

export default function TypingEffect({
  phrases,
  typeSpeed = 60,
  eraseSpeed = 35,
  pauseFull = 1800,
  pauseEmpty = 400,
  className = "",
}: TypingEffectProps) {
  const [displayed, setDisplayed] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const current = phrases[phraseIdx];

    const delay = isDeleting ? eraseSpeed : typeSpeed;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        if (charIdx < current.length) {
          setDisplayed(current.slice(0, charIdx + 1));
          setCharIdx((c) => c + 1);
        } else {
          // Fully typed — pause then start erasing
          setIsPaused(true);
          setTimeout(() => {
            setIsDeleting(true);
            setIsPaused(false);
          }, pauseFull);
        }
      } else {
        // Erasing
        if (charIdx > 0) {
          setDisplayed(current.slice(0, charIdx - 1));
          setCharIdx((c) => c - 1);
        } else {
          // Fully erased — move to next phrase
          setIsDeleting(false);
          setIsPaused(true);
          setTimeout(() => {
            setPhraseIdx((i) => (i + 1) % phrases.length);
            setIsPaused(false);
          }, pauseEmpty);
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [charIdx, isDeleting, isPaused, phraseIdx, phrases, typeSpeed, eraseSpeed, pauseFull, pauseEmpty]);

  return (
    <span className={className} aria-label={phrases[phraseIdx]}>
      {displayed}
      <span className="typing-cursor" aria-hidden="true" />
    </span>
  );
}
