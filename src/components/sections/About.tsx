"use client";
// src/components/sections/About.tsx

import Avatar from '@/components/Avatar';
import { useRef } from 'react';
import { useScrambleOnInteract } from '@/hooks/useScrambleOnInteract';

const highlights = [
  { label: 'Languages', value: 'TypeScript, Python, C++' },
  { label: 'Frontend', value: 'Next.js, React, Tailwind' },
  { label: 'Backend', value: 'Node.js, APIs, Auth' },
  { label: 'Security', value: 'OSINT, Forensics' },
  { label: 'Tools', value: 'Git, Docker, Vercel' },
  { label: 'Focus', value: 'Performance, DX' },
];

const About = () => {
  return (
    <section id="about" className="relative w-full bg-[#121318] text-white border-t border-[#202025]">
      {/* subtle divider glow */}
      <div aria-hidden className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3b82f652] to-transparent" />

      <div className="max-w-6xl mx-auto px-4 py-20 md:py-28 flex flex-col gap-16">
        {/* My Student Journey - left */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 w-full md:pr-8">
            <h2 className="text-2xl font-extrabold text-[#65cdf9] mb-4">My Student Journey</h2>
            <p className="text-[#c6c6c9] font-mono text-base leading-relaxed">
              I am currently pursuing a B.Tech in CSE (Cyber Security &amp; Forensics) at UPES with a strong interest in cyber security, digital forensics, and continual learning.
            </p>
            <p className="mt-4 text-[#c6c6c9] font-mono text-base leading-relaxed">
              I enjoy hands-on work in OSINT, incident response, and building tools that help investigators and students. I&apos;ve taken leadership roles in student clubs and volunteered in community outreach and campus events.
            </p>
          </div>
          <div className="md:w-1/2 w-full flex justify-center">
            {/* Portrait card and scramble name */}
            <div className="group relative w-56 md:w-64 h-72 md:h-80 select-none">
              <div aria-hidden className="absolute -inset-2 rounded-2xl bg-[conic-gradient(at_10%_10%,#65cdf955,transparent_35%,#6366F155,transparent_65%,#65cdf955)] blur-md opacity-70 group-hover:opacity-100 transition-opacity" />
              <div aria-hidden className="absolute -top-2 -right-2 w-10 h-10 rotate-12 bg-gradient-to-br from-[#65cdf940] to-transparent rounded-xl" />
              <div className="relative rounded-2xl overflow-hidden ring-1 ring-[#2a2b31] bg-[#0f1116] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:rotate-[0.5deg]">
                <Avatar src="/profile.webp" alt="Profile photo" className="object-cover" />
                <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0f1116] to-transparent" />
                <span className="absolute bottom-2 left-2 text-[11px] uppercase tracking-wide text-[#dbeafe] bg-white/5 px-2 py-1 rounded-md border border-white/10 backdrop-blur-sm">Cyber Security</span>
              </div>
              {/* Scramble effect name */}
              {(() => {
                const scrambleRef = useRef<HTMLHeadingElement>(null);
                useScrambleOnInteract(scrambleRef, "ARYAN SINGH SHAKTAWAT");
                return (
                  <h2
                    ref={scrambleRef}
                    className="mt-4 text-xl font-extrabold text-[#65cdf9] tracking-tight text-center"
                    tabIndex={-1}
                  >
                    ARYAN SINGH SHAKTAWAT
                  </h2>
                );
              })()}
            </div>
          </div>
        </div>
        {/* What I'm Learning By Doing - right */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="md:w-1/2 w-full md:pl-8">
            <h2 className="text-2xl font-extrabold text-[#65cdf9] mb-4">What I'm Learning By Doing</h2>
            <p className="text-[#c6c6c9] font-mono text-base leading-relaxed">
              As a student, I learn best with my hands on the keyboard. I&apos;m currently exploring AI model integrations with tools like Llama-3 and Perplexity APIs, building OSINT tools that actually work, and creating user-friendly interfaces that don&apos;t make people want to throw their computers out the window.
            </p>
          </div>
          <div className="md:w-1/2 w-full flex justify-center">
            {/* Highlights grid */}
            <div>
              <h3 className="text-xl font-semibold tracking-tight mb-4">Highlights</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    className="group flex items-start gap-3 rounded-md border border-[#26272e] bg-[#181a20] px-4 py-3 hover:bg-[#1b1e25] transition-colors"
                  >
                    <span aria-hidden className="mt-1 text-[#8a8a92]">›</span>
                    <div className="leading-tight">
                      <div className="text-sm uppercase tracking-wide text-[#9ea0a6]">{item.label}</div>
                      <div className="text-[15px] text-[#e6e6e8]">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
