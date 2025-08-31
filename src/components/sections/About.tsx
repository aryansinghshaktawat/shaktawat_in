"use client";
import React from "react";
import Head from "next/head";
import Image from "next/image";

const highlights = [
  { label: 'Languages', value: 'TypeScript, Python, C++' },
  { label: 'Frontend', value: 'Next.js, React, Tailwind' },
  { label: 'Backend', value: 'Node.js, APIs, Auth' },
  { label: 'Security', value: 'OSINT, Forensics' },
  { label: 'Tools', value: 'Git, Docker, Vercel' },
  { label: 'Focus', value: 'Performance, DX' },
];


const About = () => {
  // static heading (scramble effect removed)

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <section id="about" className="relative w-full bg-[#121318] text-white border-t border-[#202025]" style={{ fontFamily: 'Space Mono, monospace' }}>
        <div aria-hidden className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3b82f652] to-transparent" />
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="md:grid md:grid-cols-2 md:gap-10 items-center">
            {/* Left: Intro + CTA */}
            <div className="order-2 md:order-1">
              <h1 className="text-3xl md:text-4xl font-extrabold text-[#65cdf9] mb-4">Welcome — I build and learn by doing</h1>
              <p className="text-[#c6c6c9] text-lg md:text-xl max-w-2xl leading-relaxed mb-6">
                I&apos;m <span className="font-bold text-[#e6e6e8]">Aryan Singh Shaktawat</span>, a B.Tech Computer Science student focused on practical learning: building tools, integrating AI models, and exploring cybersecurity and forensics.
              </p>

              <div className="flex flex-wrap gap-3 items-center mb-6">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-block px-5 py-2 rounded-md bg-[#65cdf9] text-black font-semibold hover:brightness-95 transition">Download Resume</a>
                <a href="#projects" className="inline-block px-4 py-2 rounded-md border border-white/10 text-white hover:bg-white/5 transition">View Projects</a>
                <a href="#contact" className="ml-2 text-sm text-[#9ea0a6] hover:text-white transition">Get in touch</a>
              </div>

              <div className="grid grid-cols-3 gap-3 max-w-md">
                <div className="p-3 bg-[#0f1116] rounded-lg ring-1 ring-white/6 text-center">
                  <div className="text-sm text-[#9ea0a6]">Projects</div>
                  <div className="text-lg font-bold">12+</div>
                </div>
                <div className="p-3 bg-[#0f1116] rounded-lg ring-1 ring-white/6 text-center">
                  <div className="text-sm text-[#9ea0a6]">Internships</div>
                  <div className="text-lg font-bold">1</div>
                </div>
                <div className="p-3 bg-[#0f1116] rounded-lg ring-1 ring-white/6 text-center">
                  <div className="text-sm text-[#9ea0a6]">Languages</div>
                  <div className="text-lg font-bold">TS / Python</div>
                </div>
              </div>
            </div>

            {/* Right: Profile card + mini-timeline */}
            <div className="order-1 md:order-2 mb-6 md:mb-0 flex justify-center">
              <div className="w-56 md:w-72 rounded-2xl overflow-hidden ring-1 ring-[#2a2b31] bg-[#0f1116] shadow-lg">
                <Image src="/profile.webp" alt="Aryan profile" width={448} height={560} className="w-full h-auto object-cover" />
                <div className="p-4">
                  <div className="text-sm text-[#9ea0a6]">B.Tech CSE · UPES</div>
                  <div className="text-lg font-semibold text-white mt-1">Aryan Singh Shaktawat</div>
                  <div className="mt-3 text-sm text-[#c6c6c9]">Hands-on in AI integrations, OSINT tooling, and security-focused projects.</div>

                  <div className="mt-4 border-t border-white/6 pt-3">
                    <div className="text-xs text-[#9ea0a6] mb-2">Recent</div>
                    <ul className="text-sm text-[#e6e6e8] space-y-2">
                      <li>Rebuilding portfolio — deeper UX &amp; tooling</li>
                      <li>Integrating Llama-3 in local tools</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
