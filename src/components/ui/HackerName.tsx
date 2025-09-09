"use client";

import { useEffect, useState } from 'react';

interface HackerNameProps {
  text: string;
  className?: string;
}

export default function HackerName({ text, className = "" }: HackerNameProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
    let iterations = 0;
    const maxIterations = text.length;

    const interval = setInterval(() => {
      setDisplayText(prev =>
        prev.split('').map((char, index) => {
          if (index < iterations) {
            return text[index];
          }
          return chars[Math.floor(Math.random() * chars.length)];
        }).join('')
      );

      if (iterations >= maxIterations) {
        clearInterval(interval);
        setDisplayText(text);
        setIsAnimating(false);
      }

      iterations += 1 / 3;
    }, 30);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <span
      className={`scramble-stable ${className}`}
      onMouseEnter={() => setIsAnimating(true)}
      onTouchStart={() => setIsAnimating(true)}
      style={{
        wordBreak: 'break-word',
        hyphens: 'auto',
        lineHeight: '1.1'
      }}
    >
      {displayText}
    </span>
  );
}