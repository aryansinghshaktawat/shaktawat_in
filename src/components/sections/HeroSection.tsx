// src/components/sections/HeroSection.tsx
// Light-theme hero: headline with scramble name, typing animation sub-headline,
// animated shield SVG, two CTA buttons, floating dot-grid bg.
"use client";

import Image from "next/image";
import HeroShieldSVG from "@/components/ui/HeroShieldSVG";
import TypingEffect from "@/components/ui/TypingEffect";
import HackerName from "@/components/ui/HackerName";

const TYPING_PHRASES = [
  "Offensive Security",
  "Digital Forensics",
  "Ethical Hacking",
  "Secure Development",
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="hero-section"
      style={{ background: "var(--bg-secondary)" }}
      aria-label="Hero"
    >
      {/* ── Dot-grid background pattern ── */}
      <div
        className="absolute inset-0 dot-grid"
        aria-hidden="true"
        style={{ opacity: 0.55 }}
      />

      {/* ── Soft gradient blob top-right ── */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.10) 0%, rgba(139,92,246,0.06) 50%, transparent 70%)",
          filter: "blur(40px)",
          transform: "translate(20%, -20%)",
        }}
      />
      {/* ── Soft gradient blob bottom-left ── */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(16,185,129,0.07) 0%, transparent 70%)",
          filter: "blur(40px)",
          transform: "translate(-20%, 20%)",
        }}
      />

      {/* ── Floating particles ── */}
      {[
        { size: 10, top: "15%", left: "8%",  dur: "9s",  del: "0s"   },
        { size: 6,  top: "72%", left: "12%", dur: "12s", del: "1s"   },
        { size: 8,  top: "30%", left: "92%", dur: "10s", del: "0.5s" },
        { size: 5,  top: "80%", left: "85%", dur: "14s", del: "2s"   },
        { size: 7,  top: "55%", left: "3%",  dur: "11s", del: "1.5s" },
      ].map((p, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="particle"
          style={{
            width: p.size,
            height: p.size,
            top: p.top,
            left: p.left,
            ["--duration" as string]: p.dur,
            ["--delay" as string]: p.del,
          }}
        />
      ))}

      {/* ── Main grid ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ── Left: Content ── */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Status pill */}
            <div className="flex justify-center lg:justify-start mb-6">
              <span className="accent-pill">
                <span
                  className="w-2 h-2 rounded-full inline-block"
                  style={{ background: "#10B981" }}
                />
                Open to opportunities · 2026 Graduate
              </span>
            </div>

            {/* Name (scramble effect) */}
            <div className="mb-3">
              <HackerName
                text="Aryan Singh Shaktawat"
                className="hero-name"
              />
            </div>

            {/* Headline */}
            <h2
              className="text-2xl sm:text-3xl font-bold mb-5 leading-snug"
              style={{
                color: "var(--text-primary)",
                fontFamily: "var(--font-space-grotesk)",
                letterSpacing: "-0.02em",
              }}
            >
              Securing the Future,{" "}
              <span style={{ color: "var(--accent)" }}>Building</span> the Present.
            </h2>

            {/* Typing sub-headline */}
            <p
              className="text-lg sm:text-xl mb-8 min-h-[2em]"
              style={{ color: "var(--text-secondary)", fontFamily: "var(--font-inter)" }}
            >
              Final-year CSE student specialising in{" "}
              <span
                className="font-semibold"
                style={{ color: "var(--accent)", fontFamily: "var(--font-space-grotesk)" }}
              >
                <TypingEffect phrases={TYPING_PHRASES} />
              </span>
            </p>

            {/* Description */}
            <p
              className="text-base mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              B.Tech CSE student at UPES Dehradun, passionate about ethical hacking,
              digital forensics, OSINT, and building secure full-stack applications.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {/* Arrow icon */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="5,3 19,12 5,21" />
                </svg>
                View My Projects
              </a>
              <a
                href="mailto:hello@shaktawat.in?subject=Resume%20Request%20—%20Aryan%20Singh%20Shaktawat&body=Hi%20Aryan%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20have%20a%20copy%20of%20your%20resume.%0A%0AThank%20you!"
                className="btn-outline"
              >
                {/* Download icon */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7,10 12,15 17,10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Request Resume
              </a>
            </div>

            {/* Quick stats row */}
            <div className="flex flex-wrap gap-6 mt-12 justify-center lg:justify-start">
              {[
                { value: "3+", label: "Years Coding" },
                { value: "10+", label: "Projects Built" },
                { value: "CSF", label: "Specialisation" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div
                    className="text-2xl font-extrabold"
                    style={{ color: "var(--accent)", fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs mt-0.5"
                    style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Visual ── */}
          <div className="relative flex justify-center items-center order-1 lg:order-2">
            {/* Shield SVG background */}
            <div className="w-full max-w-[420px]">
              <HeroShieldSVG />
            </div>

            {/* Profile photo badge — floating corner card */}
            <div
              className="absolute -bottom-4 -left-4 sm:bottom-4 sm:left-4 glass-card rounded-2xl p-3 flex items-center gap-3 shadow-lg"
              style={{ maxWidth: 220 }}
            >
              <div className="relative shrink-0">
                <Image
                  src="/heroprofile.png"
                  alt="Aryan Singh Shaktawat"
                  width={48}
                  height={48}
                  className="rounded-xl object-cover profile-ring"
                  style={{ width: 48, height: 48 }}
                  priority
                />
              </div>
              <div>
                <div
                  className="font-bold text-sm leading-tight"
                  style={{ color: "var(--text-primary)", fontFamily: "var(--font-space-grotesk)" }}
                >
                  Aryan Shaktawat
                </div>
                <div
                  className="text-xs mt-0.5"
                  style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}
                >
                  Cyber Security · UPES
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce"
        aria-hidden="true"
      >
        <span
          className="text-xs tracking-widest uppercase"
          style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
        >
          scroll
        </span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ color: "var(--text-muted)" }}>
          <polyline points="6,9 12,15 18,9" />
        </svg>
      </div>
    </section>
  );
}
