// src/components/sections/HomeHero.tsx
"use client";
import Link from 'next/link';

export default function HomeHero() {
  return (
    <section className="relative w-full bg-[#16171B] text-white overflow-hidden">
      {/* Background accent */}
      <div aria-hidden className="absolute inset-0">
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 blur-2xl opacity-30 w-[66vw] h-[36vh] bg-gradient-to-r from-[#65cdf9] via-[#16171B] to-[#8a8a92] rounded-full" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 pt-24 pb-24 md:pt-32 md:pb-32 text-center">
        <h1 className="uppercase font-extrabold font-sans text-[2.6rem] md:text-[4rem] lg:text-[5rem] leading-none tracking-tight mb-2 drop-shadow-lg" style={{ letterSpacing: '0.01em' }}>
          ARYAN SINGH SHAKTAWAT
        </h1>
        <p className="font-sans text-lg md:text-2xl text-[#65cdf9] font-semibold max-w-3xl mx-auto leading-relaxed mb-6">
          I’m a passionate B.Tech Computer Science student exploring AI, Cybersecurity, and Software Development through hands-on projects and continuous learning.
        </p>

        <ul className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto">
          {[
            'Python',
            'Cyber Investigations',
            'App Development',
          ].map((item) => (
            <li key={item} className="rounded-md border border-[#2a2b31] bg-[#1b1c21] text-[#e6e6e8] px-4 py-2 font-mono text-sm">
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <Link href="/projects" className="inline-flex items-center gap-3 px-5 py-2.5 rounded-md border border-[#2a2b31] text-sm font-medium text-[#e6e6e8] bg-[#1b1c21] hover:bg-[#1f2026] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500">
            Explore My Projects
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M9 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
