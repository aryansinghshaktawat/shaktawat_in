"use client";

import { useEffect } from 'react';

export default function RevealProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Add reveal class to body to enable animations
    document.body.classList.add('js-reveal');

    // Intersection Observer for reveal animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-in');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    // Observe all elements with data-reveal attribute
    const revealElements = document.querySelectorAll('[data-reveal]');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      document.body.classList.remove('js-reveal');
    };
  }, []);

  return <>{children}</>;
}