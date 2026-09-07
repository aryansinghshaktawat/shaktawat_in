// src/app/page.tsx
// Aryan Singh Shaktawat — Digital Resume & Engineering Portfolio
// Soft Sage & Forest aesthetic
"use client";

import { useRef } from "react";
import {
  motion,
  useInView,
} from "framer-motion";
import { ArrowRight, ArrowUpRight, Mail, Sun, Moon } from "lucide-react";
import Image from "next/image";
import JsonLd from "@/components/seo/JsonLd";
import ResumeButton from "@/components/ui/ResumeButton";
import ContactSection from "@/components/sections/ContactSection";
import { useTheme } from "@/app/theme-provider";

const GithubIcon = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const LinkedinIcon = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const MailIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M1.5 4.5A2.5 2.5 0 0 1 4 2h16a2.5 2.5 0 0 1 2.5 2.5v15a2.5 2.5 0 0 1-2.5 2.5H4a2.5 2.5 0 0 1-2.5-2.5v-15zm3.086.5L12 11.232 19.414 5H4.586zM20.5 6.768l-8 6.666a.75.75 0 0 1-.96 0l-8-6.666V19.5a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V6.768z"/>
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
  const { theme, toggleTheme } = useTheme();

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
          className="min-h-screen flex flex-col justify-center relative px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full overflow-hidden"
        >
          <div className="w-full max-w-[1240px] xl:max-w-[1280px] mx-auto">
            <FadeSection className="w-full">
              <div
                className="w-full border border-[#E2ECE5] shadow-[0_25px_70px_-15px_rgba(26,46,34,0.08)]"
                style={{
                  background: "#FFFFFF",
                  borderRadius: "2.5rem",
                  padding: "clamp(28px, 3.5vw, 44px) clamp(28px, 4.5vw, 56px)",
                  position: "relative",
                  overflow: "hidden",
                }}
                id="hero-card"
              >
                {/* Top Header Row inside Bento Card */}
                <div className="flex items-center justify-between pb-6 sm:pb-8">
                  {/* Logo — ARYN Text Mark */}
                  <a
                    href="#hero"
                    className="font-['Outfit',sans-serif] font-black text-2xl sm:text-3xl tracking-[-0.03em] text-[#1A2E22] no-underline hover:opacity-85 transition-opacity"
                    aria-label="Aryan Singh Shaktawat — Home"
                  >
                    ARYN
                  </a>

                  {/* Right side: Nav links + Theme toggle */}
                  <div className="flex items-center gap-3">
                    <nav
                      aria-label="Hero Navigation"
                      className="hidden sm:flex items-center gap-1 bg-[#F8FAF8] rounded-full px-3 py-1.5 border border-[#E2ECE5] shadow-xs"
                    >
                      {[
                        { href: "#about", label: "About" },
                        { href: "#work", label: "Work" },
                        { href: "#journey", label: "Strengths" },
                        { href: "#contact", label: "Contact" },
                      ].map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          onClick={(e) => {
                            e.preventDefault();
                            document.getElementById(item.href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
                          }}
                          className="px-4 py-1.5 rounded-full text-xs font-semibold text-[#1A2E22] hover:bg-[#1E3326]/08 transition-colors"
                        >
                          {item.label}
                        </a>
                      ))}
                    </nav>

                    {/* Theme Toggle Pill */}
                    <button
                      type="button"
                      onClick={toggleTheme}
                      aria-label="Toggle theme"
                      className="w-10 h-10 rounded-full bg-white border border-[#E2ECE5] shadow-xs flex items-center justify-center text-[#1A2E22] hover:bg-[#F8FAF8] hover:scale-105 transition-all"
                    >
                      {theme === "dark" ? <Moon size={18} strokeWidth={2} /> : <Sun size={18} strokeWidth={2} />}
                    </button>
                  </div>
                </div>

                {/* Main Hero Content Grid: 2 Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8 items-center py-2 lg:py-4">
                  
                  {/* Left Column: Visual Composition Layer */}
                  <div className="lg:col-span-6 relative w-full h-[470px] sm:h-[520px] lg:h-[550px] flex items-center justify-center select-none">
                    
                    {/* Background Organic Blob 1: Lighter Sage Outer Shape */}
                    <div
                      className="absolute pointer-events-none"
                      style={{
                        width: "76%",
                        height: "82%",
                        top: "5%",
                        left: "2%",
                        background: "linear-gradient(135deg, rgba(122, 155, 132, 0.45) 0%, rgba(77, 112, 88, 0.35) 100%)",
                        borderRadius: "44% 56% 38% 62% / 52% 42% 58% 48%",
                        filter: "blur(1px)",
                        zIndex: 1,
                      }}
                    />

                    {/* Background Organic Blob 2: Deep Forest Green Core Blob */}
                    <div
                      className="absolute pointer-events-none"
                      style={{
                        width: "68%",
                        height: "76%",
                        top: "8%",
                        left: "6%",
                        background: "linear-gradient(145deg, #2D4835 0%, #1E3326 50%, #14231A 100%)",
                        borderRadius: "48% 52% 42% 58% / 50% 46% 54% 50%",
                        boxShadow: "0 20px 40px -12px rgba(20, 36, 27, 0.35)",
                        zIndex: 2,
                      }}
                    />

                    {/* Concentric Delicate Curved Vector Lines */}
                    <svg
                      className="absolute top-0 left-0 w-[84%] h-[84%] pointer-events-none opacity-25"
                      viewBox="0 0 320 300"
                      fill="none"
                      stroke="#A3C7AF"
                      strokeWidth="1.2"
                      style={{ zIndex: 3 }}
                    >
                      <path d="M 280 230 C 295 110, 215 10, 70 25" />
                      <path d="M 295 250 C 315 95, 200 -10, 45 12" strokeDasharray="4 4" />
                      <path d="M 265 210 C 275 125, 220 30, 95 35" />
                    </svg>

                    {/* Top-Left Handwritten Note: Secure / Build / Repeat + Curved Arrow */}
                    <div
                      className="absolute z-30 font-['Caveat',cursive] text-lg sm:text-xl font-bold text-[#1A2E22] leading-tight select-none pointer-events-none flex flex-col items-start"
                      style={{ top: "1%", left: "1%" }}
                    >
                      <span>Secure</span>
                      <span>Build</span>
                      <div className="flex items-center gap-1">
                        <span>Repeat</span>
                        <svg
                          width="38"
                          height="28"
                          viewBox="0 0 45 35"
                          fill="none"
                          stroke="#1A2E22"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="opacity-80 translate-y-1"
                        >
                          <path d="M 4 8 Q 20 2 34 16 M 25 15 L 34 16 L 33 8" />
                        </svg>
                      </div>
                    </div>

                    {/* Floating Terminal Code Card (Top-Right) */}
                    <motion.div
                      animate={{ y: [0, -7, 0] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute z-10 hidden sm:block bg-[#1E3326] text-[#E2EBE4] rounded-2xl p-5 shadow-2xl border border-white/10 font-mono text-xs select-text"
                      style={{ top: "3%", right: "0%", width: "250px" }}
                    >
                      <div className="flex items-center gap-1.5 mb-3.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                      </div>
                      <div className="space-y-1 text-[0.76rem] leading-relaxed">
                        <div>
                          <span className="text-[#6BC9E8]">const</span>{" "}
                          <span className="text-[#F8D77A]">aryan</span>{" "}
                          <span className="text-[#E2EBE4]">= &#123;</span>
                        </div>
                        <div className="pl-3.5">
                          <span className="text-[#C5D9CB]">role:</span>{" "}
                          <span className="text-[#F5B8B8]">&quot;cyber-eng&quot;</span>,
                        </div>
                        <div className="pl-3.5">
                          <span className="text-[#C5D9CB]">stack:</span>{" "}
                          <span className="text-[#F5B8B8]">&quot;next+py&quot;</span>,
                        </div>
                        <div className="pl-3.5">
                          <span className="text-[#C5D9CB]">mode:</span> &#123;{" "}
                          <span className="text-[#C5D9CB]">secure:</span>{" "}
                          <span className="text-[#6BC9E8]">true</span> &#125;
                        </div>
                        <div>&#125;</div>
                      </div>
                    </motion.div>

                    {/* Portrait: Large, professional cut-out */}
                    <div
                      className="absolute z-20 pointer-events-none"
                      style={{
                        bottom: 0,
                        left: "8%",
                        width: "64%",
                        maxWidth: "340px",
                      }}
                    >
                      <Image
                        src="/profile.webp"
                        alt="Aryan Singh Shaktawat"
                        width={420}
                        height={520}
                        priority
                        style={{
                          width: "100%",
                          height: "auto",
                          display: "block",
                          mixBlendMode: "multiply",
                          filter: "contrast(1.05) saturate(0.95)",
                          WebkitMaskImage: "linear-gradient(to bottom, black 82%, transparent 100%)",
                          maskImage: "linear-gradient(to bottom, black 82%, transparent 100%)",
                        }}
                      />
                    </div>

                    {/* Floating Skills Card (Below Code Box, Overlapping Torso) */}
                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 5, delay: 0.8, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute z-30 bg-white border border-[#E2ECE5] shadow-xl rounded-2xl p-5"
                      style={{ bottom: "14%", right: "0%", width: "230px" }}
                    >
                      <div className="flex items-center gap-1.5 mb-3.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                      </div>
                      <div className="space-y-2.5 text-xs sm:text-[13px] font-semibold text-[#1A2E22]">
                        {[
                          "Pen Testing",
                          "AES-256",
                          "OSINT",
                          "Next.js",
                        ].map((item) => (
                          <div key={item} className="flex items-center justify-between gap-3">
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-[#22C55E] flex-shrink-0" />
                              <span className="whitespace-nowrap">{item}</span>
                            </div>
                            <span className="font-bold text-[#1A2E22]">✓</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Bottom-Left Badge: "Always learning / Always building" */}
                    <div
                      className="absolute z-30 bg-white/95 backdrop-blur-md border border-[#E2ECE5] shadow-lg shadow-[#1A2E22]/06 rounded-2xl px-4 py-3 flex items-start gap-2.5"
                      style={{ bottom: "6%", left: "0%" }}
                    >
                      <span className="w-2 h-2 rounded-full bg-[#22C55E] mt-1 animate-pulse flex-shrink-0" />
                      <div className="font-mono text-[11px] sm:text-xs font-semibold text-[#1A2E22] leading-snug">
                        <div>Always learning</div>
                        <div>Always building</div>
                      </div>
                    </div>

                    {/* Bottom-Right Handwritten: "From curiosity to impact" + Arrow */}
                    <div
                      className="absolute z-30 select-none pointer-events-none flex flex-col items-end text-right font-['Caveat',cursive] text-lg sm:text-xl font-bold text-[#1A2E22] leading-tight"
                      style={{ bottom: "0%", right: "6%" }}
                    >
                      <svg
                        width="32"
                        height="30"
                        viewBox="0 0 40 38"
                        fill="none"
                        stroke="#1A2E22"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="opacity-80 mb-0.5"
                      >
                        <path d="M 6 4 Q 22 10 26 26 M 18 24 L 26 26 L 28 17" />
                      </svg>
                      <div>From</div>
                      <div>curiosity to</div>
                      <div className="relative inline-block mt-0.5">
                        <span>impact</span>
                        <div className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#1A2E22] rounded-full" />
                        <div className="absolute -bottom-2 left-1 right-1 h-[2px] bg-[#1A2E22] rounded-full opacity-70" />
                      </div>
                    </div>

                  </div>{/* end left column */}

                  {/* Right Column: Hero Information & Actions */}
                  <div className="lg:col-span-6 flex flex-col items-start text-left lg:pl-6 xl:pl-8">
                    
                    {/* Subheading */}
                    <motion.p
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.7, delay: 0.2 }}
                      className="text-xs sm:text-[13px] font-bold tracking-[0.2em] text-[#3D5045] uppercase mb-4"
                    >
                      CYBER SECURITY &amp; FULL&#8211;STACK ENGINEER
                    </motion.p>

                    {/* Heading */}
                    <motion.h1
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="font-black leading-[0.96] tracking-[-0.035em] mb-6 text-[#1A2E22]"
                      style={{ fontSize: "clamp(2.75rem, 5.8vw, 4.75rem)", fontFamily: "var(--font-outfit)" }}
                    >
                      ARYAN SINGH
                      <br />
                      <span className="inline-flex items-center">
                        SHAKTAWAT
                        <span className="inline-block w-[5.5px] h-[0.84em] bg-[#9DC4A8] align-middle ml-3 rounded-[1.5px]" />
                      </span>
                    </motion.h1>

                    {/* Body Paragraph */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.7, delay: 0.55 }}
                      className="text-sm sm:text-base text-[#3D5045] max-w-lg mb-8 leading-relaxed font-normal"
                    >
                      Translating raw data &amp; vulnerabilities into secure, high-performance systems. Specializing in offensive security, digital forensics, and full-stack web architecture.
                    </motion.p>

                    {/* Action Buttons */}
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.7 }}
                      className="flex items-center gap-4 flex-wrap mb-8 sm:mb-10"
                    >
                      <a
                        href="#work"
                        onClick={(e) => { e.preventDefault(); document.getElementById("work")?.scrollIntoView({ behavior: "smooth" }); }}
                        className="inline-flex items-center justify-center gap-2.5 px-8 rounded-full bg-[#1E3326] text-white font-medium text-sm sm:text-base hover:bg-[#15241B] transition-all shadow-md hover:shadow-lg hover:scale-[1.02] whitespace-nowrap"
                        style={{ height: 48 }}
                      >
                        View Work <ArrowRight size={16} />
                      </a>
                      <ResumeButton />
                    </motion.div>

                    {/* Metrics Divider Line & Keywords Bar */}
                    <div className="w-full border-t border-[#1A2E22]/10 pt-6">
                      <div className="flex items-center justify-between text-[0.7rem] sm:text-[0.75rem] font-bold tracking-[0.24em] text-[#6B7F70] uppercase">
                        <span>SECURE</span>
                        <span className="text-[#3D5045]/40">•</span>
                        <span>ANALYZE</span>
                        <span className="text-[#3D5045]/40">•</span>
                        <span>BUILD</span>
                        <span className="text-[#3D5045]/40">•</span>
                        <span>IMPACT</span>
                      </div>
                    </div>

                  </div>{/* end right column */}

                </div>

                {/* Hero Card Footer Bar */}
                <div className="mt-8 sm:mt-10 pt-6 border-t border-[#1A2E22]/10 flex flex-wrap items-center justify-between gap-4">
                  
                  {/* Left Footer: Social Icons + Location */}
                  <div className="flex items-center gap-4 sm:gap-5">
                    <a
                      href="https://github.com/aryansinghshaktawat"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1A2E22] hover:text-[#3D5045] transition-colors"
                      aria-label="GitHub"
                    >
                      <GithubIcon size={20} />
                    </a>
                    <a
                      href="https://linkedin.com/in/aryan-singh-shaktawat"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1A2E22] hover:text-[#3D5045] transition-colors"
                      aria-label="LinkedIn"
                    >
                      <LinkedinIcon size={20} />
                    </a>
                    <a
                      href="#contact"
                      onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                      className="text-[#1A2E22] hover:text-[#3D5045] transition-colors"
                      aria-label="Contact Email"
                    >
                      <MailIcon size={20} />
                    </a>
                    
                    <span className="w-[1px] h-4 bg-[#1A2E22]/20" />
                    
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#3D5045]">
                      <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
                      <span>Based in India</span>
                    </div>
                  </div>

                  {/* Right Footer: Open to Opportunities Badge */}
                  <div className="flex items-center gap-2 bg-white border border-[#E2ECE5] px-4 py-2 rounded-full shadow-xs text-xs font-semibold text-[#1A2E22]">
                    <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
                    <span>Open to Opportunities</span>
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
