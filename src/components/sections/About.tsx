// src/components/sections/About.tsx
import Image from 'next/image';

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

      <div className="max-w-6xl mx-auto px-4 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: profile + bio */}
          <div>
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden relative mx-auto md:mx-0 ring-1 ring-[#2a2b31] shadow-[0_0_60px_-20px_rgba(99,102,241,0.35)]">
              <Image src="/profile.svg" alt="Profile" fill className="object-cover" />
            </div>

            <p className="mt-6 text-[#c6c6c9] font-mono text-base leading-relaxed md:max-w-md">
              Developer focused on building fast, accessible web experiences. I enjoy crafting polished UI, scalable systems, and tools that improve developer workflows.
            </p>
          </div>

          {/* Right: highlights grid */}
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
    </section>
  );
};

export default About;
