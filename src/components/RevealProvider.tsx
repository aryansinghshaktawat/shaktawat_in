"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RevealProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
  // Mark body so CSS can scope initial hidden state only when JS is active
  document.body.classList.add('js-reveal');
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (els.length === 0) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-in");
            obs.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );
    els.forEach((el) => {
      el.classList.remove("reveal-in");
      obs.observe(el);
    });
    // Immediately reveal any elements already in view to avoid blank sections on back navigation
    requestAnimationFrame(() => {
      els.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        if (inView) el.classList.add("reveal-in");
      });
    });
    // After initial setup, if nothing is observed in view, ensure above-the-fold content is visible
    requestAnimationFrame(() => {
      els.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        if (inView) el.classList.add("reveal-in");
      });
      // Remove the scoping class to avoid keeping things hidden indefinitely
      document.body.classList.remove('js-reveal');
    });
    return () => {
      obs.disconnect();
      document.body.classList.remove('js-reveal');
    };
  }, [pathname]);

  return <>{children}</>;
}
