// src/components/ui/ScrollReveal.tsx
// Wraps children with IntersectionObserver to fade+slide into view on scroll.
"use client";

import { useEffect, useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
  delay?: number;
  threshold?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  threshold = 0.12,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Apply initial hidden state
    el.style.opacity = "0";
    el.style.willChange = "opacity, transform";

    switch (direction) {
      case "left":
        el.style.transform = "translateX(-28px)";
        break;
      case "right":
        el.style.transform = "translateX(28px)";
        break;
      default:
        el.style.transform = "translateY(28px)";
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (el) {
                el.style.opacity = "1";
                el.style.transform = "translate(0, 0)";
                el.style.transition = `opacity 600ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms, transform 600ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`;
              }
            }, 50);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [direction, delay, threshold]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
