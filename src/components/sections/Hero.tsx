// src/components/sections/Hero.tsx
"use client";
import Link from 'next/link';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      const translate = Math.min(20, y * 0.08);
      if (overlayRef.current) overlayRef.current.style.transform = `translateY(${translate}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="relative w-full bg-[#16171B] text-white">
      {/* Subtle blurred/animated overlay at top with parallax */}
      <div ref={overlayRef} aria-hidden className="hero-overlay parallax" />

      <div className="max-w-6xl mx-auto px-4 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="max-w-3xl">
          {/* Headline */}
          <h1
            className="uppercase font-sans font-bold text-4xl leading-[1.05] md:text-6xl md:leading-[1.05] lg:text-7xl lg:leading-[1.05] tracking-tight"
            style={{ letterSpacing: '-0.04em' }}
          >
            Creative Web Developer
          </h1>

          {/* Specializations list */}
          <ul className="mt-8 space-y-3 text-base md:text-lg text-[#c6c6c9] font-mono">
            <li className="flex items-start gap-3">
              <span aria-hidden className="text-[#8a8a92]">↳</span>
              <span>Full-stack web apps</span>
            </li>
            <li className="flex items-start gap-3">
              <span aria-hidden className="text-[#8a8a92]">↳</span>
              <span>Interactive UX/UI</span>
            </li>
            <li className="flex items-start gap-3">
              <span aria-hidden className="text-[#8a8a92]">↳</span>
              <span>Personal projects &amp; open source</span>
            </li>
          </ul>

          {/* MORE button */}
          <div className="mt-16">
            <Link
              href="#about"
              className="group inline-flex items-center gap-3 px-5 py-2.5 rounded-md border border-[#2a2b31] text-sm font-medium text-[#e6e6e8] bg-[#1b1c21] hover:bg-[#1f2026] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              MORE
              <svg
                className="w-4 h-4 text-[#e6e6e8] transition-transform duration-200 group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
