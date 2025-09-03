// src/components/sections/HomeHero.tsx
"use client";

export default function HomeHero() {
  return (
    <section className="relative w-full bg-[#16171B] text-white overflow-hidden">
      {/* Background accent */}
      <div aria-hidden className="absolute inset-0">
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 blur-2xl opacity-30 w-[66vw] h-[36vh] bg-gradient-to-r from-[#65cdf9] via-[#16171B] to-[#8a8a92] rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto pt-24 pb-24 md:pt-32 md:pb-32 flex flex-col md:flex-row items-center gap-12">
  {/* Image removed per request: spacer removed */}
  <div className="w-full md:w-auto flex flex-col items-center md:block mb-8 md:mb-0" />
        {/* Minimal centered hero with animated underline */}
        <div className="w-full flex flex-col justify-center items-center text-center">
          <h1 className="uppercase font-extrabold font-space-grotesk text-[2.6rem] md:text-[4rem] lg:text-[5rem] leading-none tracking-tight mb-2 drop-shadow-lg" style={{ letterSpacing: '0.01em' }}>
            ARYAN SINGH SHAKTAWAT
          </h1>

          {/* animated gradient underline */}
          <div className="mt-3 mb-6">
            <div className="h-1.5 w-40 rounded-full overflow-hidden">
              <div
                style={{
                  height: '100%',
                  width: '200%',
                  background: 'linear-gradient(90deg,#65cdf9,#8b5cf6,#65cdf9)',
                  backgroundSize: '200% 100%',
                  animation: 'slide 3s linear infinite',
                }}
              />
            </div>
          </div>

          <p className="font-geist-mono text-lg md:text-2xl text-[#65cdf9] font-semibold max-w-3xl leading-relaxed mb-6">
            I&apos;m a passionate B.Tech Computer Science student exploring AI, Cybersecurity, and Software Development through hands-on projects and continuous learning.
          </p>

          {/* small CTA */}
          <div className="flex gap-3">
            <a href="#projects" className="inline-block px-5 py-2 rounded-md bg-[#65cdf9] text-black font-semibold hover:brightness-90 transition">Explore Projects</a>
            <a href="#contact" className="inline-block px-4 py-2 rounded-md border border-white/10 text-white hover:bg-white/5 transition">Contact</a>
          </div>

          <style>{`@keyframes slide { 0% { background-position: 0% 50%; } 100% { background-position: 100% 50%; } }`}</style>
        </div>
      </div>
    </section>
  );
}
