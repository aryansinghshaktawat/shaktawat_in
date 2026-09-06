// src/components/sections/AboutSection.tsx
// Two-column: left = profile photo with animated ring, right = bio + education card.
"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

const INTERESTS = ["Ethical Hacking", "Digital Forensics", "OSINT", "Secure SDLC", "CTF Competitions"];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="section-base"
      style={{ background: "var(--bg-primary)" }}
      aria-label="About me"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Profile Photo ── */}
          <ScrollReveal direction="left" className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Outer glow ring */}
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{
                  background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
                  padding: 3,
                  borderRadius: 28,
                  zIndex: 0,
                }}
                aria-hidden="true"
              >
                <div
                  className="w-full h-full rounded-3xl"
                  style={{ background: "var(--bg-primary)" }}
                />
              </div>

              {/* Photo */}
              <div
                className="relative z-10 rounded-3xl overflow-hidden profile-ring"
                style={{ width: 320, height: 380 }}
              >
                <Image
                  src="/heroprofile.png"
                  alt="Aryan Singh Shaktawat — professional photo"
                  fill
                  className="object-cover object-top"
                  sizes="320px"
                />
              </div>

              {/* Floating badge — UPES */}
              <div
                className="absolute -bottom-5 -right-5 glass-card rounded-2xl px-5 py-3 z-20 shadow-lg"
              >
                <div
                  className="text-xs font-semibold"
                  style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
                >
                  Currently at
                </div>
                <div
                  className="text-sm font-bold mt-0.5"
                  style={{ color: "var(--text-primary)", fontFamily: "var(--font-space-grotesk)" }}
                >
                  UPES Dehradun
                </div>
                <div
                  className="text-xs mt-0.5"
                  style={{ color: "var(--accent)" }}
                >
                  B.Tech CSE · 2026
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* ── Right: Bio + Education ── */}
          <ScrollReveal direction="right">
            {/* Section label */}
            <p className="section-label">About Me</p>
            <h2 className="section-heading mb-4">
              The Mind Behind{" "}
              <span className="gradient-text-blue">the Shield</span>
            </h2>
            <div className="section-divider" />

            {/* Bio */}
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: "var(--text-secondary)" }}
            >
              I&apos;m a final-year <strong style={{ color: "var(--text-primary)" }}>
                Computer Science Engineering student
              </strong> specialising in Cyber Security &amp; Forensics at UPES Dehradun.
              My passion sits at the intersection of offensive security and robust engineering —
              I believe the best developers are those who can <em>think like attackers</em>.
            </p>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "var(--text-secondary)" }}
            >
              From CTF competitions and penetration testing labs to building full-stack secure
              applications, I actively bridge the gap between theory and real-world impact.
              When I&apos;m not hacking (legally!), I&apos;m integrating AI models, exploring OSINT
              techniques, or contributing to open-source tooling.
            </p>

            {/* Interest tags */}
            <div className="flex flex-wrap gap-2 mb-10">
              {INTERESTS.map((tag) => (
                <span key={tag} className="skill-tag text-xs !py-1.5 !px-3" style={{ fontFamily: "var(--font-mono)" }}>
                  {tag}
                </span>
              ))}
            </div>

            {/* Education highlight card */}
            <div
              className="glass-card edu-card rounded-2xl p-6"
              style={{ paddingLeft: 28 }}
            >
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <div
                    className="text-xs font-semibold tracking-widest uppercase mb-1"
                    style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}
                  >
                    Education
                  </div>
                  <h3
                    className="font-bold text-lg leading-tight"
                    style={{ color: "var(--text-primary)", fontFamily: "var(--font-space-grotesk)" }}
                  >
                    B.Tech — Computer Science &amp; Engineering
                  </h3>
                  <p
                    className="text-sm mt-1"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Cyber Security &amp; Forensics Specialisation
                  </p>
                  <p
                    className="font-semibold text-sm mt-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    University of Petroleum &amp; Energy Studies (UPES), Dehradun
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <span
                    className="accent-pill"
                    style={{ display: "inline-flex" }}
                  >
                    Expected 2026
                  </span>
                  <p
                    className="text-xs mt-2"
                    style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
                  >
                    3rd Year · 6th Sem
                  </p>
                </div>
              </div>
            </div>

          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
