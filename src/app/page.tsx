// src/app/page.tsx
// Aryan Singh Shaktawat — Digital Resume & Engineering Portfolio
// Soft Sage & Forest aesthetic
"use client";

import { useRef } from "react";
import {
  motion,
  useInView,
} from "framer-motion";
import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import Image from "next/image";
import JsonLd from "@/components/seo/JsonLd";
import ResumeButton from "@/components/ui/ResumeButton";
import ContactSection from "@/components/sections/ContactSection";

const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

/* ─── Scroll-reveal wrapper ─── */
function FadeSection({
  children,
  className = "",
  delay = 0,
  style = {},
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  style?: React.CSSProperties;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

/* ─── Schemas ─── */
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aryan Singh Shaktawat",
  url: "https://shaktawat.in",
  sameAs: [
    "https://github.com/aryansinghshaktawat",
    "https://linkedin.com/in/aryan-singh-shaktawat",
  ],
  jobTitle: "Cyber Security & Full-Stack Engineer",
  worksFor: { "@type": "Organization", name: "UPES Dehradun" },
};

/* ═══════════════════════════════════════════════
   MAIN PAGE COMPONENT
   ═══════════════════════════════════════════════ */
export default function Home() {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <>
      <JsonLd data={personSchema} />
      <div style={{ position: "relative", minHeight: "100vh" }}>

        {/* ════════════════════════════════════════
            1. HERO SECTION
        ════════════════════════════════════════ */}
        <section
          id="hero"
          ref={heroRef}
          style={{
            minHeight: "100vh",
            paddingTop: "calc(var(--site-header-height) + 24px)",
            paddingBottom: 60,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              maxWidth: 1240,
              margin: "0 auto",
              padding: "0 24px",
              width: "100%",
            }}
          >
            <FadeSection>
              <div
                className="glass-card"
                style={{
                  borderRadius: "2.5rem",
                  padding: "clamp(24px, 4vw, 48px)",
                  position: "relative",
                  overflow: "hidden",
                }}
                id="hero-card"
              >
                {/* Main Hero Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  
                  {/* Left-aligned Visual: Composition Layer */}
                  <div className="relative w-full h-[420px] sm:h-[480px] lg:h-[520px] flex items-center justify-center">

                    {/* Background Soft Organic Blob — dark sage circle */}
                    <div
                      className="absolute rounded-full"
                      style={{
                        width: "62%",
                        height: "70%",
                        background: "radial-gradient(ellipse at 45% 40%, #3D5C47 0%, #2A4134 60%, #1E3326 100%)",
                        top: "8%",
                        left: "4%",
                        zIndex: 0,
                      }}
                    />

                    {/* Concentric Organic Curved Vector Lines */}
                    <svg
                      className="absolute z-0 opacity-30 pointer-events-none"
                      style={{ width: "58%", height: "65%", top: "6%", left: "2%" }}
                      viewBox="0 0 200 180"
                      fill="none"
                      stroke="#A8C9B0"
                      strokeWidth="1.2"
                    >
                      <ellipse cx="95" cy="88" rx="88" ry="78" />
                      <ellipse cx="95" cy="88" rx="72" ry="62" />
                    </svg>

                    {/* Top-Left Handwritten Annotation */}
                    <div
                      className="absolute z-30 select-none pointer-events-none flex flex-col items-start"
                      style={{ top: "2%", left: "2%", fontFamily: "'Caveat', cursive", fontSize: "1.15rem", fontWeight: 700, color: "#1A2E22", lineHeight: 1.3 }}
                    >
                      <span>Secure</span>
                      <span>Build</span>
                      <span>Repeat</span>
                      <svg width="44" height="32" viewBox="0 0 50 36" fill="none" stroke="#1A2E22" strokeWidth="1.8" strokeLinecap="round" className="ml-5 -mt-0.5 opacity-80">
                        <path d="M 5 4 Q 32 6 40 26 M 32 24 L 40 26 L 37 18" />
                      </svg>
                    </div>

                    {/* Element 1: The Dark Green Code Box (Top-Right of portrait, z-10) */}
                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute z-10 hidden sm:block bg-[#1E3326] text-[#E2EBE4] rounded-2xl shadow-2xl font-mono border border-white/10"
                      style={{ top: "6%", right: "0%", width: "clamp(200px, 46%, 240px)", padding: "16px 18px" }}
                    >
                      <div className="flex gap-1.5 mb-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FF6B6B] opacity-90" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FFD93D] opacity-90" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#6BCB77] opacity-90" />
                      </div>
                      <div className="space-y-1 text-[0.7rem] leading-relaxed">
                        <div><span className="text-[#6BC9E8]">const</span> <span className="text-[#F8D77A]">aryan</span> = &#123;</div>
                        <div className="pl-3"><span className="text-[#B8E0C4]">role</span>: <span className="text-[#F5B8B8]">&quot;cyber-eng&quot;</span>,</div>
                        <div className="pl-3"><span className="text-[#B8E0C4]">stack</span>: <span className="text-[#F5B8B8]">&quot;next+py&quot;</span>,</div>
                        <div className="pl-3"><span className="text-[#B8E0C4]">mode</span>: &#123; <span className="text-[#B8E0C4]">secure</span>: <span className="text-[#6BC9E8]">true</span> &#125;</div>
                        <div>&#125;</div>
                      </div>
                    </motion.div>

                    {/* Element 2: The Portrait (Middle Layer: z-20) */}
                    <div
                      className="absolute z-20 w-full"
                      style={{ bottom: 0, left: 0, right: 0, maxWidth: "55%", margin: "0 auto" }}
                    >
                      <Image
                        src="/profile.webp"
                        alt="Aryan Singh Shaktawat Profile"
                        width={380}
                        height={460}
                        priority
                        style={{
                          width: "100%",
                          height: "auto",
                          display: "block",
                          mixBlendMode: "multiply",
                          filter: "saturate(0.85) contrast(1.08)",
                          WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
                          maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
                        }}
                      />
                    </div>

                    {/* Element 3: Skills Glass Card (center-right of portrait, z-30) */}
                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 5, delay: 0.8, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute z-30 bg-white/92 backdrop-blur-md border border-white/70 shadow-xl rounded-2xl"
                      style={{ bottom: "18%", right: "0%", padding: "14px 16px", minWidth: "170px" }}
                    >
                      <div className="flex gap-1.5 mb-2.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FF6B6B] opacity-90" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FFD93D] opacity-90" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#6BCB77] opacity-90" />
                      </div>
                      <div className="space-y-2 font-medium text-[#1A2E22] text-[0.82rem]">
                        {[
                          { label: "Pen Testing", color: "bg-[#FF6B6B]" },
                          { label: "AES-256",     color: "bg-[#FFD93D]" },
                          { label: "OSINT",       color: "bg-[#6BCB77]" },
                          { label: "Next.js",     color: "bg-[#6BC9E8]" },
                        ].map(({ label, color }) => (
                          <div key={label} className="flex items-center justify-between gap-3">
                            <div className="flex items-center gap-2">
                              <span className={`w-2 h-2 rounded-full ${color} opacity-90 flex-shrink-0`} />
                              <span>{label}</span>
                            </div>
                            <span className="text-[#1A2E22] font-bold text-sm">✓</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Element 4: Bottom-Left Monospace Badge (z-30) */}
                    <div
                      className="absolute z-30 bg-white/85 backdrop-blur-md border border-white/70 shadow-lg rounded-2xl flex items-start gap-2.5"
                      style={{ bottom: "8%", left: "2%", padding: "10px 14px", fontFamily: "monospace", fontSize: "0.75rem", fontWeight: 600, color: "#1A2E22" }}
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-[#34D399] mt-0.5 animate-pulse flex-shrink-0" />
                      <div className="leading-snug">
                        <div>Always learning</div>
                        <div>Always building</div>
                      </div>
                    </div>

                    {/* Bottom-Right Handwritten Annotation */}
                    <div
                      className="absolute z-30 select-none pointer-events-none flex flex-col items-end text-right"
                      style={{ bottom: "2%", right: "2%", fontFamily: "'Caveat', cursive", fontSize: "1.1rem", fontWeight: 700, color: "#1A2E22", lineHeight: 1.25 }}
                    >
                      <svg width="38" height="30" viewBox="0 0 48 36" fill="none" stroke="#1A2E22" strokeWidth="1.8" strokeLinecap="round" className="mb-0.5 opacity-80">
                        <path d="M 43 32 Q 24 14 9 11 M 9 18 L 9 11 L 17 9" />
                      </svg>
                      <div>From</div>
                      <div>curiosity to</div>
                      <div className="relative inline-block">
                        <span>impact</span>
                        <div className="absolute -bottom-[3px] left-0 right-0 h-[2px] bg-[#1A2E22] rounded-full" />
                        <div className="absolute -bottom-[6px] left-1 right-1 h-[2px] bg-[#1A2E22] rounded-full opacity-60" />
                      </div>
                    </div>
                  </div>{/* end left column */}

                  {/* Right Column: Hero Information & Actions */}
                  <div className="flex flex-col items-start text-left lg:pl-4">
                    
                    {/* Subheading */}
                    <motion.p
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.7, delay: 0.2 }}
                      className="text-[0.68rem] sm:text-xs font-semibold tracking-[0.22em] text-[#3D5045] uppercase mb-5"
                    >
                      CYBER SECURITY &amp; FULL&#8211;STACK ENGINEER
                    </motion.p>

                    {/* Heading */}
                    <motion.h1
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="font-black leading-[0.95] tracking-[-0.04em] mb-6 text-[#1A2E22]"
                      style={{ fontSize: "clamp(2.8rem, 6.5vw, 5rem)", fontFamily: "var(--font-outfit)" }}
                    >
                      ARYAN SINGH
                      <br />
                      <span className="inline-flex items-baseline gap-2">
                        SHAKTAWAT
                        <span className="inline-block w-[4px] h-[0.85em] bg-[#A8C9B0] align-middle rounded-[2px] self-center" />
                      </span>
                    </motion.h1>

                    {/* Body Paragraph */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.7, delay: 0.55 }}
                      className="text-sm sm:text-[0.95rem] text-[#3D5045] max-w-md mb-8 leading-relaxed font-normal"
                    >
                      Translating raw data &amp; vulnerabilities into secure, high-performance systems. Specializing in offensive security, digital forensics, and full-stack web architecture.
                    </motion.p>

                    {/* Action Buttons */}
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.7 }}
                      className="flex items-center gap-4 flex-wrap mb-10"
                    >
                      <a
                        href="#work"
                        onClick={(e) => { e.preventDefault(); document.getElementById("work")?.scrollIntoView({ behavior: "smooth" }); }}
                        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#1E3326] text-white font-medium text-sm hover:bg-[#15241B] transition-all shadow-md hover:shadow-lg hover:scale-[1.02]"
                      >
                        View Work <ArrowRight size={16} />
                      </a>
                      <ResumeButton />
                    </motion.div>

                    {/* Metrics Divider Line & Keywords Bar */}
                    <div className="w-full border-t border-[#1A2E22]/10 pt-6">
                      <div className="flex items-center justify-between text-[0.7rem] sm:text-[0.75rem] font-bold tracking-[0.25em] text-[#6B7F70] uppercase">
                        <span>SECURE</span>
                        <span className="text-[#3D5045]/40">•</span>
                        <span>ANALYZE</span>
                        <span className="text-[#3D5045]/40">•</span>
                        <span>BUILD</span>
                        <span className="text-[#3D5045]/40">•</span>
                        <span>IMPACT</span>
                      </div>
                    </div>

                  </div>

                </div>

                {/* Hero Card Footer Bar */}
                <div className="mt-10 pt-6 border-t border-[#1A2E22]/08 flex flex-wrap items-center justify-between gap-4 text-xs font-medium text-[#3D5045]">
                  
                  {/* Left Footer: Social Icons + Location */}
                  <div className="flex items-center gap-4">
                    <a
                      href="https://github.com/aryansinghshaktawat"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full hover:bg-black/5 text-[#1A2E22] transition-colors"
                      aria-label="GitHub"
                    >
                      <GithubIcon size={18} />
                    </a>
                    <a
                      href="https://linkedin.com/in/aryan-singh-shaktawat"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full hover:bg-black/5 text-[#1A2E22] transition-colors"
                      aria-label="LinkedIn"
                    >
                      <LinkedinIcon size={18} />
                    </a>
                    <a
                      href="#contact"
                      onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                      className="p-2 rounded-full hover:bg-black/5 text-[#1A2E22] transition-colors"
                      aria-label="Contact Email"
                    >
                      <Mail size={18} />
                    </a>
                    
                    <span className="w-[1px] h-4 bg-[#1A2E22]/20" />
                    
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#34D399]" />
                      <span>Based in India</span>
                    </div>
                  </div>

                  {/* Right Footer: Open to Opportunities Badge */}
                  <div className="flex items-center gap-2 bg-white/80 backdrop-blur-md border border-white/60 px-4 py-2 rounded-full shadow-xs text-[#1A2E22]">
                    <span className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse" />
                    <span className="font-semibold text-xs">Open to Opportunities</span>
                  </div>

                </div>
              </div>
            </FadeSection>
          </div>

          {/* Footer of Hero: Subtle Marquee */}
          <div
            style={{
              marginTop: 40,
              overflow: "hidden",
              opacity: 0.45,
            }}
          >
            <div className="marquee-track">
              {Array.from({ length: 8 }).map((_, i) => (
                <span
                  key={i}
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                    whiteSpace: "nowrap",
                  }}
                >
                  DIGITAL RESUME &amp; ENGINEERING PROFILE &nbsp;•&nbsp;
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            2. INTRODUCTION ("Logic & Intuition")
        ════════════════════════════════════════ */}
        <section
          id="about"
          style={{
            padding: "120px 24px",
            maxWidth: 1200,
            margin: "0 auto",
            position: "relative",
          }}
        >
          <div style={{ position: "relative", zIndex: 1 }}>
            <FadeSection>
              <span className="section-label" style={{ display: "block", marginBottom: 16 }}>
                INTRODUCTION
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontWeight: 900,
                  fontSize: "clamp(2rem, 5vw, 3.8rem)",
                  letterSpacing: "-0.04em",
                  color: "var(--text-primary)",
                  lineHeight: 1.1,
                  maxWidth: 860,
                  marginBottom: 64,
                }}
              >
                Engineering secured by logic,{" "}
                <span style={{ color: "var(--accent)" }}>built for scale.</span>
              </h2>
            </FadeSection>

            {/* 2-Column Text Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "clamp(32px, 5vw, 64px)",
                alignItems: "start",
              }}
              className="about-grid"
            >
              {/* Col 1 */}
              <FadeSection delay={0.1}>
                <div className="glass-card" style={{ borderRadius: "1.75rem", padding: "32px" }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-outfit)",
                      fontWeight: 700,
                      fontSize: "1.15rem",
                      color: "var(--text-primary)",
                      marginBottom: 12,
                    }}
                  >
                    Academic Background
                  </h3>
                  <p
                    style={{
                      fontSize: "clamp(0.95rem, 1.4vw, 1.08rem)",
                      color: "var(--text-secondary)",
                      lineHeight: 1.8,
                    }}
                  >
                    I am a final-year B.Tech CSE undergrad specializing in{" "}
                    <strong style={{ color: "var(--accent)", fontWeight: 700 }}>
                      Cyber Security and Forensics
                    </strong>{" "}
                    at UPES, Dehradun.
                  </p>
                </div>
              </FadeSection>

              {/* Col 2 */}
              <FadeSection delay={0.2}>
                <div className="glass-card" style={{ borderRadius: "1.75rem", padding: "32px" }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-outfit)",
                      fontWeight: 700,
                      fontSize: "1.15rem",
                      color: "var(--text-primary)",
                      marginBottom: 12,
                    }}
                  >
                    Engineering Focus
                  </h3>
                  <p
                    style={{
                      fontSize: "clamp(0.95rem, 1.4vw, 1.08rem)",
                      color: "var(--text-secondary)",
                      lineHeight: 1.8,
                    }}
                  >
                    I focus on translating raw data and vulnerabilities into secure,
                    high-performance systems, blending{" "}
                    <strong style={{ color: "var(--accent)", fontWeight: 700 }}>
                      offensive security
                    </strong>{" "}
                    with full-stack development.
                  </p>
                </div>
              </FadeSection>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            3. PROFESSIONAL JOURNEY (Timeline)
        ════════════════════════════════════════ */}
        <section
          id="journey"
          style={{
            padding: "120px 24px",
            maxWidth: 1200,
            margin: "0 auto",
            position: "relative",
          }}
        >
          <FadeSection>
            <div style={{ marginBottom: 56 }}>
              <span className="section-label" style={{ display: "block", marginBottom: 12 }}>
                EXPERIENCE &amp; TIMELINE
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontWeight: 900,
                  fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                  letterSpacing: "-0.04em",
                  color: "var(--text-primary)",
                }}
              >
                Professional <span style={{ color: "var(--accent)" }}>Journey.</span>
              </h2>
            </div>
          </FadeSection>

          {/* Vertical Timeline UI */}
          <div style={{ position: "relative", paddingLeft: "clamp(24px, 4vw, 40px)" }}>
            <div
              style={{
                position: "absolute",
                left: 11,
                top: 12,
                bottom: 12,
                width: 2,
                background: "linear-gradient(180deg, var(--accent) 0%, rgba(42,65,52,0.15) 100%)",
              }}
            />

            {[
              {
                company: "IBM",
                role: "Cyber Security Intern",
                period: "June 2026 – July 2026",
                description:
                  "Developed 'AntiPhishTank', a dedicated security solution for detecting and mitigating phishing threats.",
                badge: "Cyber Security Intern",
              },
              {
                company: "STF Cyber Cell, Uttarakhand Police",
                role: "Cyber Security Intern",
                period: "June 2025 – July 2025",
                description:
                  "Focused on real-world log analysis, digital forensics, and OSINT tool development for law enforcement.",
                badge: "Digital Forensics & OSINT",
              },
              {
                company: "IEEE Signal Processing Society (SPS) UPES",
                role: "Operations Head",
                period: "2024 – 2025",
                description:
                  "Directed operations, technical workshops, and event management for the student chapter.",
                badge: "Leadership & Operations",
              },
            ].map((item, idx) => (
              <FadeSection key={item.company} delay={idx * 0.15}>
                <div
                  className="glass-card"
                  style={{
                    borderRadius: "1.75rem",
                    padding: "28px 32px",
                    marginBottom: 32,
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: -33,
                      top: 36,
                      width: 14,
                      height: 14,
                      borderRadius: "50%",
                      background: "var(--accent)",
                      border: "3px solid #FDFCF8",
                      boxShadow: "0 0 0 3px rgba(42,65,52,0.2)",
                    }}
                  />

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      flexWrap: "wrap",
                      gap: 12,
                      marginBottom: 12,
                    }}
                  >
                    <div>
                      <span
                        style={{
                          fontFamily: "var(--font-inter)",
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          letterSpacing: "0.15em",
                          textTransform: "uppercase",
                          color: "var(--accent)",
                          background: "rgba(42,65,52,0.08)",
                          padding: "4px 12px",
                          borderRadius: 9999,
                          display: "inline-block",
                          marginBottom: 8,
                        }}
                      >
                        {item.badge}
                      </span>
                      <h3
                        style={{
                          fontFamily: "var(--font-outfit)",
                          fontWeight: 800,
                          fontSize: "1.35rem",
                          color: "var(--text-primary)",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {item.company}
                      </h3>
                      <div
                        style={{
                          fontFamily: "var(--font-inter)",
                          fontSize: "0.95rem",
                          fontWeight: 600,
                          color: "var(--text-secondary)",
                          marginTop: 2,
                        }}
                      >
                        {item.role}
                      </div>
                    </div>
                    <span
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "0.82rem",
                        fontWeight: 500,
                        color: "var(--text-muted)",
                        background: "rgba(255,255,255,0.8)",
                        padding: "6px 14px",
                        borderRadius: 9999,
                        border: "1px solid rgba(42,65,52,0.08)",
                      }}
                    >
                      {item.period}
                    </span>
                  </div>

                  <p
                    style={{
                      fontSize: "0.95rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.7,
                      marginTop: 8,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </FadeSection>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════
            4. SELECTED WORK (4 Projects)
        ════════════════════════════════════════ */}
        <section id="work" style={{ padding: "120px 24px", maxWidth: 1200, margin: "0 auto" }}>
          <FadeSection>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
                gap: 24,
                marginBottom: 64,
                flexWrap: "wrap",
              }}
            >
              <div>
                <span className="section-label" style={{ display: "block", marginBottom: 12 }}>
                  PORTFOLIO &amp; REPOSITORIES
                </span>
                <h2
                  style={{
                    fontFamily: "var(--font-outfit)",
                    fontWeight: 900,
                    fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                    letterSpacing: "-0.04em",
                    color: "var(--text-primary)",
                  }}
                >
                  Selected <span style={{ color: "var(--accent)" }}>Work.</span>
                </h2>
              </div>
            </div>
          </FadeSection>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 28,
            }}
          >
            {[
              {
                title: "PehraSafe",
                tag: "IoT & AI SOS",
                description:
                  "Intelligent SOS alerting with zero-latency telemetry and on-device AI for real-time emergency mitigation.",
                link: "https://github.com/aryansinghshaktawat/PehraSafe",
              },
              {
                title: "CIOT",
                tag: "Cyber Investigation Toolkit",
                description:
                  "Cyber Investigation OSINT Toolkit — automating intelligence gathering for forensic auditing and evidence integrity.",
                link: "https://github.com/aryansinghshaktawat/CIOT",
              },
              {
                title: "AntiPhishTank",
                tag: "IBM Phishing Detection",
                description:
                  "Anti-phishing detection system built during the IBM internship for threat mitigation.",
                link: "https://github.com/aryansinghshaktawat/AntiPhishTank",
              },
              {
                title: "Yojnext",
                tag: "Full-Stack Architecture",
                description:
                  "Full-stack Next.js web application architecture designed for high scalability and modularity.",
                link: "https://github.com/aryansinghshaktawat/yojnext",
              },
            ].map((proj, idx) => (
              <FadeSection key={proj.title} delay={idx * 0.12}>
                <div
                  className="glass-card"
                  style={{
                    borderRadius: "2rem",
                    padding: "32px 28px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                    transition: "transform 250ms ease, box-shadow 250ms ease",
                  }}
                >
                  <div>
                    <span
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "var(--accent)",
                        marginBottom: 12,
                        display: "block",
                      }}
                    >
                      {proj.tag}
                    </span>
                    <h3
                      style={{
                        fontFamily: "var(--font-outfit)",
                        fontWeight: 800,
                        fontSize: "1.5rem",
                        color: "var(--text-primary)",
                        marginBottom: 12,
                        letterSpacing: "-0.03em",
                      }}
                    >
                      {proj.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.92rem",
                        color: "var(--text-secondary)",
                        lineHeight: 1.7,
                        marginBottom: 28,
                      }}
                    >
                      {proj.description}
                    </p>
                  </div>

                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "12px 22px",
                      borderRadius: 9999,
                      background: "var(--accent)",
                      color: "#fff",
                      fontFamily: "var(--font-inter)",
                      fontWeight: 600,
                      fontSize: "0.85rem",
                      textDecoration: "none",
                      width: "fit-content",
                      transition: "all 200ms ease",
                    }}
                  >
                    View Project <ArrowUpRight size={15} />
                  </a>
                </div>
              </FadeSection>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════
            5. CONTACT SECTION & DARK FOOTER
        ════════════════════════════════════════ */}
        <ContactSection />

      </div>
    </>
  );
}
