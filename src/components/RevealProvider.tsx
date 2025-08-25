"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RevealProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
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
    return () => obs.disconnect();
  }, [pathname]);

  return <>{children}</>;
}
