import { useEffect, useRef } from 'react';

export const useScrambleOnInteract = (
  ref: React.RefObject<HTMLElement | null>,
  text: string
) => {
  const pos = useRef(0);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const scramble = () => {
      const newText = text
        .split('')
        .map((char, index) => {
          if (pos.current > index) return text[index];
          return String.fromCharCode(Math.random() * (126 - 33) + 33);
        })
        .join('');
      el.textContent = newText;
      pos.current += 0.4;
      rafId.current = requestAnimationFrame(scramble);
      if (pos.current >= text.length) {
        el.textContent = text;
        if (rafId.current) cancelAnimationFrame(rafId.current);
      }
    };

    const handleInteract = () => {
      pos.current = 0;
      if (rafId.current) cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(scramble);
    };

    el.addEventListener('mouseenter', handleInteract);
    el.addEventListener('focus', handleInteract);

    return () => {
      el.removeEventListener('mouseenter', handleInteract);
      el.removeEventListener('focus', handleInteract);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [ref, text]);
};
