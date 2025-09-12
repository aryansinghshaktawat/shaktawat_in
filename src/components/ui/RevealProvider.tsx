"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RevealProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    document.body.classList.add('js-reveal');
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (els.length === 0) return;
    const obs = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-in');
          obs.unobserve(entry.target);
        }
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -10% 0px' });
    els.forEach((el) => { el.classList.remove('reveal-in'); obs.observe(el); });
    requestAnimationFrame(() => { els.forEach((el) => { const rect = el.getBoundingClientRect(); if (rect.top < window.innerHeight && rect.bottom > 0) el.classList.add('reveal-in'); }); });
    requestAnimationFrame(() => { els.forEach((el) => { const rect = el.getBoundingClientRect(); if (rect.top < window.innerHeight && rect.bottom > 0) el.classList.add('reveal-in'); }); document.body.classList.remove('js-reveal'); });
    return () => { obs.disconnect(); document.body.classList.remove('js-reveal'); };
  }, [pathname]);

  return <>{children}</>;
}
