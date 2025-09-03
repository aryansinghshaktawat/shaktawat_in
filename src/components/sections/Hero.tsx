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
    <section className="relative w-full bg-[#16171B] text-white overflow-hidden">
      {/* Subtle blurred/animated overlay at top with parallax */}
      <div ref={overlayRef} aria-hidden className="hero-overlay parallax" />
      {/* Cinematic background accent */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 blur-2xl opacity-30 w-[60vw] h-[30vh] bg-gradient-to-r from-[#65cdf9] via-[#16171B] to-[#8a8a92] rounded-full" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center max-w-4xl mx-auto px-4 pt-24 pb-28 md:pt-32 md:pb-40 text-center">
        {/* Name */}
        <h1
          className="uppercase font-extrabold font-space-grotesk text-[2.8rem] md:text-[4.5rem] lg:text-[5.5rem] leading-none tracking-tight mb-4 drop-shadow-lg"
          style={{ letterSpacing: '0.02em' }}
        >
          ARYAN SINGH SHAKTAWAT
        </h1>
        {/* Greeting with fade-in animation */}
        <p
          className="font-geist-mono text-lg md:text-2xl font-medium text-[#e6e6e8] mb-3 opacity-0 animate-fadeIn"
          style={{ animation: 'fadeIn 1.2s ease 0.2s forwards', lineHeight: '1.5' }}
        >
          Hello, I’m Aryan—a creator of elegant interfaces and modern web solutions. Thanks for visiting!
        </p>
        {/* Secondary line for values/interests */}
        <p className="font-space-grotesk text-base md:text-lg text-[#c6c6c9] mb-8 tracking-wide" style={{ lineHeight: '1.7' }}>
          Driven by curiosity, design, and a love of code.
        </p>

        {/* Main role below name */}
        <div className="mb-6">
          <span className="inline-block bg-[#23242a] px-4 py-2 rounded-lg text-xl md:text-2xl font-bold text-[#65cdf9] shadow-lg">
            Creative Web Developer
          </span>
        </div>

        {/* Specializations list */}
        <ul className="mt-4 space-y-3 text-base md:text-lg text-[#c6c6c9] font-geist-mono">
          <li className="flex items-start gap-3 justify-center">
            <span aria-hidden className="text-[#8a8a92]">↳</span>
            <span>Full-stack web apps</span>
          </li>
          <li className="flex items-start gap-3 justify-center">
            <span aria-hidden className="text-[#8a8a92]">↳</span>
            <span>Interactive UX/UI</span>
          </li>
          <li className="flex items-start gap-3 justify-center">
            <span aria-hidden className="text-[#8a8a92]">↳</span>
            <span>Personal projects &amp; open source</span>
          </li>
        </ul>

        {/* MORE button */}
        <div className="mt-16">
          <Link
            href="/about"
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

      {/* Fade-in animation keyframes */}
      <style jsx>{`
        @keyframes fadeIn {
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
