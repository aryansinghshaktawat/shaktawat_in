"use client";

import React, { useRef, useEffect } from 'react';

type Props = {
  text: string;
  className?: string;
};

export default function HackerName({ text, className = '' }: Props) {
  const ref = useRef<HTMLElement | null>(null);

  // Run scramble effect once on mount
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let pos = 0;
    let rafId: number | null = null;

    const scramble = () => {
      const newText = text
        .split('')
        .map((char, index) => {
          if (pos > index) return text[index];
          return String.fromCharCode(Math.random() * (126 - 33) + 33);
        })
        .join('');
      
      el.textContent = newText;
      pos += 0.4;
      
      if (pos >= text.length) {
        el.textContent = text;
        if (rafId) cancelAnimationFrame(rafId);
      } else {
        rafId = requestAnimationFrame(scramble);
      }
    };

    // Start scramble effect after a short delay
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
      ref={ref as React.RefObject<HTMLHeadingElement>}
      className={className}
      aria-label={text}
    >
      {text}
    </h1>
  );
}
