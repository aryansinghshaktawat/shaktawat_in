// src/components/ui/HackerName.tsx
// Text-scramble animation for the hero name.
// Light-theme compatible — color is set via className from parent.
"use client";
import React, { useRef, useEffect } from "react";

type Props = { text: string; className?: string };

export default function HackerName({ text, className = "" }: Props) {
  const ref = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let pos = 0;
    let rafId: number | null = null;

    // Use wide, uniform-width characters to prevent layout jitter
    const scrambleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&*+-=?@^_|~";

    const scramble = () => {
      const newText = text.split("").map((char, index) => {
        if (pos > index) return text[index];
        if (char === " ") return " ";
        return scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
      }).join("");

      el.textContent = newText;
      pos += 0.5;

      if (pos >= text.length) {
        el.textContent = text;
        if (rafId) cancelAnimationFrame(rafId);
      } else {
        rafId = requestAnimationFrame(scramble);
      }
    };

    const timeoutId = setTimeout(() => {
      rafId = requestAnimationFrame(scramble);
    }, 300);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      clearTimeout(timeoutId);
    };
  }, [text]);

  return (
    <h1
      ref={ref}
      className={className}
      aria-label={text}
      style={{
        minHeight: "1em",
        lineHeight: 1.1,
        overflow: "hidden",
        fontVariantNumeric: "tabular-nums",
        willChange: "contents",
        contain: "layout",
      }}
    >
      {text}
    </h1>
  );
}
