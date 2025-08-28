// src/components/sections/HomeHero.tsx
"use client";
import Image from 'next/image';

export default function HomeHero() {
  return (
    <section className="relative w-full bg-[#16171B] text-white overflow-hidden">
      {/* Background accent */}
      <div aria-hidden className="absolute inset-0">
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 blur-2xl opacity-30 w-[66vw] h-[36vh] bg-gradient-to-r from-[#65cdf9] via-[#16171B] to-[#8a8a92] rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto pt-24 pb-24 md:pt-32 md:pb-32 flex flex-col md:flex-row items-center gap-12">
        {/* Responsive image: stacks above text on mobile, left on desktop */}
        <div className="w-full md:w-auto flex flex-col items-center md:block mb-8 md:mb-0">
          <Image
            src="/heroprofile.png"
            alt="Aryan Singh Shaktawat"
            width={320}
            height={420}
            className="w-[220px] h-[280px] md:w-[320px] md:h-[420px] object-cover object-center rounded-2xl"
            style={{ maxWidth: '100%', height: 'auto', transform: 'scaleX(-1)' }}
          />
          <div className="w-[180px] md:w-[260px] h-[6px] mt-2 rounded-full bg-gradient-to-r from-[#65cdf9] via-[#65cdf9cc] to-transparent blur-[2px] opacity-80" />
        </div>
        {/* Text: full width on mobile, shifted on desktop */}
        <div className="w-full md:ml-8 text-center md:text-left flex flex-col justify-center items-center md:items-start">
          <h1 className="uppercase font-extrabold font-sans text-[2.6rem] md:text-[4rem] lg:text-[5rem] leading-none tracking-tight mb-2 drop-shadow-lg" style={{ letterSpacing: '0.01em' }}>
            ARYAN SINGH SHAKTAWAT
          </h1>
          <p className="font-sans text-lg md:text-2xl text-[#65cdf9] font-semibold max-w-3xl leading-relaxed mb-6">
            I’m a passionate B.Tech Computer Science student exploring AI, Cybersecurity, and Software Development through hands-on projects and continuous learning.
          </p>

          {/* ...removed skills list and Explore My Projects button... */}
        </div>
      </div>
    </section>
  );
}
