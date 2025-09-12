"use client";
import React, { useRef, useEffect } from 'react';

type Props = { text: string; className?: string };

export default function HackerName({ text, className = '' }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    
    let pos = 0; 
    let rafId: number | null = null;
    
    // Characters that maintain similar width to prevent layout shifts
    const scrambleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&*+-=?@^_|~';
    
    const scramble = () => {
      const newText = text.split('').map((char, index) => {
        if (pos > index) return text[index];
        // Preserve spaces and use width-similar characters
        if (char === ' ') return ' ';
        return scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
      }).join('');
      
      el.textContent = newText; 
      pos += 0.4;
      
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
      ref={ref as React.RefObject<HTMLHeadingElement>} 
      className={`${className} scramble-stable relative`}
      aria-label={text}
      style={{
        // Prevent layout shifts by maintaining stable dimensions
        minHeight: '1em',
        lineHeight: '1.1',
        overflow: 'hidden',
        // Use monospace width for better stability
        fontVariantNumeric: 'tabular-nums'
      }}
    >
      {text}
    </h1>
  );
}
