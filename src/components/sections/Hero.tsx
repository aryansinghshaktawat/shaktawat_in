// src/components/sections/Hero.tsx
// Editorial Swiss-inspired hero shell — warm off-white canvas, layered left
// art direction, typographic right column. Reference viewport: 1664 x 896.
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sun, Moon } from "lucide-react";
import Image from "next/image";
import ResumeButton from "@/components/ui/ResumeButton";
import { useTheme } from "@/app/theme-provider";

/* ─── Palette ─── */
const INK = "#103B30";
const INK_SOFT = "#4A6558";
const SAGE = "#8FAE9D";
const SAGE_PALE = "#BCD5C2";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#journey", label: "Strengths" },
  { href: "#contact", label: "Contact" },
] as const;

const scrollTo = (e: React.MouseEvent, href: string) => {
  e.preventDefault();
  document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
};

/* ─── Bottom-bar icons ─── */
const GithubIcon = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const MailIcon = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M1.5 4.5A2.5 2.5 0 0 1 4 2h16a2.5 2.5 0 0 1 2.5 2.5v15a2.5 2.5 0 0 1-2.5 2.5H4a2.5 2.5 0 0 1-2.5-2.5v-15zm3.086.5L12 11.232 19.414 5H4.586zM20.5 6.768l-8 6.666a.75.75 0 0 1-.96 0l-8-6.666V19.5a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V6.768z" />
  </svg>
);

/* ─── macOS traffic-light dots ─── */
const TrafficLights = () => (
  <div className="flex items-center gap-[7px]">
    <span className="w-[11px] h-[11px] rounded-full bg-[#FF5F56]" />
    <span className="w-[11px] h-[11px] rounded-full bg-[#FFBD2E]" />
    <span className="w-[11px] h-[11px] rounded-full bg-[#27C93F]" />
  </div>
);

export default function Hero() {
  const { theme, toggleTheme } = useTheme();
  // Skip initial animation state in headless mode
  const isHeadless =
    typeof window !== "undefined" && /HeadlessChrome|Playwright|puppeteer/.test(navigator.userAgent);

  return (
    <section
      id="hero"
      className="relative w-full flex"
      style={{ minHeight: "auto", padding: "clamp(16px, 2vw, 33px)" }}
    >
      {/* ═══ Rounded shell ═══ */}
      <div
        id="hero-card"
        className="relative flex flex-col w-full overflow-hidden"
        style={{
          borderRadius: "clamp(24px, 2.4vw, 38px)",
          background: "rgba(246,248,244,0.78)",
          border: "1px solid rgba(255,255,255,0.9)",
          backdropFilter: "blur(26px) saturate(1.35)",
          WebkitBackdropFilter: "blur(26px) saturate(1.35)",
          boxShadow:
            "0 48px 130px -46px rgba(16,59,48,0.20), 0 8px 30px -18px rgba(16,59,48,0.10), inset 0 1px 0 rgba(255,255,255,0.95)",
          padding: "clamp(22px, 2vw, 28px) clamp(26px, 3.6vw, 60px) clamp(24px, 2.2vw, 32px)",
        }}
      >
        {/* ─────────── HEADER ─────────── */}
        <header className="flex items-center justify-between shrink-0">
          <a
            href="#hero"
            onClick={(e) => scrollTo(e, "#hero")}
            className="flex items-center justify-center no-underline hover:opacity-70 transition-opacity shrink-0"
            style={{
              width: "clamp(36px, 2.8vw, 48px)",
              height: "clamp(36px, 2.8vw, 48px)",
            }}
            aria-label="Home"
          >
            <Image
              src="/logo.svg"
              alt="Logo"
              width={48}
              height={48}
              priority
              style={{ width: "100%", height: "auto" }}
            />
          </a>

          <div className="flex items-center" style={{ gap: "clamp(12px, 1.2vw, 20px)" }}>
            {/* Floating capsule nav */}
            <nav
              aria-label="Primary"
              className="hidden md:flex items-center justify-between"
              style={{
                width: "clamp(360px, 28vw, 462px)",
                height: "clamp(52px, 3.9vw, 65px)",
                borderRadius: 9999,
                padding: "0 clamp(18px, 1.8vw, 30px)",
                background: "rgba(255,255,255,0.55)",
                border: "1px solid rgba(255,255,255,0.85)",
                backdropFilter: "blur(18px) saturate(1.4)",
                WebkitBackdropFilter: "blur(18px) saturate(1.4)",
                boxShadow: "0 10px 32px -18px rgba(16,59,48,0.22)",
              }}
            >
              {NAV_LINKS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollTo(e, item.href)}
                  className="no-underline transition-opacity hover:opacity-60"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "clamp(14px, 1.08vw, 18px)",
                    fontWeight: 600,
                    color: INK,
                    letterSpacing: "-0.005em",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Theme toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="flex items-center justify-center transition-transform hover:scale-105 shrink-0"
              style={{
                width: "clamp(48px, 3.75vw, 62px)",
                height: "clamp(48px, 3.75vw, 62px)",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.72)",
                border: "1px solid rgba(255,255,255,0.9)",
                backdropFilter: "blur(18px)",
                WebkitBackdropFilter: "blur(18px)",
                boxShadow: "0 10px 32px -18px rgba(16,59,48,0.22)",
                color: INK,
              }}
            >
              {theme === "dark" ? <Moon size={22} strokeWidth={2.1} /> : <Sun size={22} strokeWidth={2.1} />}
            </button>
          </div>
        </header>

        {/* ─────────── HERO BODY ─────────── */}
        <div
          className="flex-1 grid items-center"
          style={{
            gridTemplateColumns: "minmax(0, 55fr) minmax(0, 45fr)",
            gap: "clamp(16px, 1.5vw, 24px)",
          }}
        >
          {/* ═══ LEFT: layered art direction ═══ */}
          <div
            className="relative w-full select-none"
            style={{ height: "clamp(420px, 46vw, 660px)" }}
            aria-hidden="false"
          >
            {/* Faint oversized dashed orbit */}
            <svg
              className="absolute pointer-events-none"
              style={{ left: "30%", top: "-6%", width: "62%", height: "72%", zIndex: 1, opacity: 0.5 }}
              viewBox="0 0 300 300"
              fill="none"
            >
              <circle cx="150" cy="150" r="146" stroke={SAGE_PALE} strokeWidth="1.4" />
              <circle cx="150" cy="150" r="128" stroke={SAGE} strokeWidth="1.2" strokeDasharray="7 9" opacity="0.75" />
            </svg>

            {/* Pale sage organic shape */}
            <div
              className="absolute pointer-events-none"
              style={{
                left: "2%",
                top: "10%",
                width: "62%",
                height: "76%",
                background: "linear-gradient(150deg, rgba(188,213,194,0.85) 0%, rgba(143,174,157,0.7) 100%)",
                borderRadius: "46% 54% 38% 62% / 50% 44% 56% 50%",
                zIndex: 2,
              }}
            />

            {/* Deep forest core shape */}
            <div
              className="absolute pointer-events-none"
              style={{
                left: "13%",
                top: "7%",
                width: "52%",
                height: "64%",
                background: "linear-gradient(155deg, #4C6B58 0%, #2F4C3D 55%, #223B2F 100%)",
                borderRadius: "50% 50% 40% 60% / 48% 46% 54% 52%",
                boxShadow: "0 30px 70px -30px rgba(16,59,48,0.45)",
                zIndex: 3,
              }}
            />

            {/* Portrait — cut out, bottom fade */}
            <div
              className="absolute pointer-events-none"
              style={{ left: "9%", top: "14%", width: "56%", zIndex: 4 }}
            >
              <Image
                src="/profile.webp"
                alt="Aryan Singh Shaktawat"
                width={520}
                height={660}
                priority
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  mixBlendMode: "multiply",
                  filter: "contrast(1.04) saturate(0.96)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 74%, transparent 99%)",
                  maskImage: "linear-gradient(to bottom, black 74%, transparent 99%)",
                }}
              />
            </div>

            {/* Handwritten: Secure / Build / Repeat */}
            <div
              className="absolute pointer-events-none flex items-end"
              style={{ left: "5%", top: "3%", zIndex: 20 }}
            >
              <div
                style={{
                  fontFamily: "var(--font-handwritten)",
                  fontSize: "clamp(19px, 1.5vw, 25px)",
                  fontWeight: 600,
                  lineHeight: 1.32,
                  color: INK,
                }}
              >
                <div>Secure</div>
                <div>Build</div>
                <div>Repeat</div>
              </div>
              <svg
                width="58"
                height="42"
                viewBox="0 0 58 42"
                fill="none"
                stroke={INK}
                strokeWidth="1.9"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ marginLeft: 6, marginBottom: 4, opacity: 0.85 }}
              >
                <path d="M4 8 C 22 6, 38 14, 48 30" />
                <path d="M38 30 L 49 32 L 46 21" />
              </svg>
            </div>

            {/* Code editor card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute hidden sm:block"
              style={{
                left: "57%",
                top: "8%",
                width: "clamp(230px, 17vw, 285px)",
                zIndex: 12,
                background: "#2C4A3B",
                borderRadius: 26,
                padding: "16px 20px 20px",
                border: "1px solid rgba(255,255,255,0.09)",
                boxShadow: "0 34px 70px -28px rgba(16,59,48,0.5)",
                fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
              }}
            >
              <TrafficLights />
              <div
                style={{
                  marginTop: 16,
                  fontSize: "clamp(11px, 0.83vw, 13.5px)",
                  lineHeight: 1.85,
                  color: "#DCE8E0",
                }}
              >
                <div>
                  <span style={{ color: "#7FC7E8" }}>const</span>{" "}
                  <span style={{ color: "#F2CE7E" }}>aryan</span> = &#123;
                </div>
                <div style={{ paddingLeft: 16 }}>
                  role: <span style={{ color: "#F0A08A" }}>&quot;cyber-eng&quot;</span>,
                </div>
                <div style={{ paddingLeft: 16 }}>
                  stack: <span style={{ color: "#F0A08A" }}>&quot;next+py&quot;</span>,
                </div>
                <div style={{ paddingLeft: 16 }}>
                  mode: &#123; secure: <span style={{ color: "#7FC7E8" }}>true</span> &#125;
                </div>
                <div>&#125;</div>
              </div>
            </motion.div>

            {/* Skills card */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 5.5, delay: 0.9, repeat: Infinity, ease: "easeInOut" }}
              className="absolute"
              style={{
                left: "60%",
                top: "44%",
                width: "clamp(200px, 14.6vw, 244px)",
                zIndex: 14,
                background: "rgba(255,255,255,0.92)",
                borderRadius: 27,
                padding: "16px 22px 20px",
                border: "1px solid rgba(255,255,255,0.95)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                boxShadow: "0 34px 70px -30px rgba(16,59,48,0.35)",
              }}
            >
              <TrafficLights />
              <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: "clamp(9px, 0.75vw, 13px)" }}>
                {["Pen Testing", "AES-256", "OSINT", "Next.js"].map((skill) => (
                  <div key={skill} className="flex items-center" style={{ gap: 9 }}>
                    <span className="rounded-full shrink-0" style={{ width: 8, height: 8, background: "#3FA96A" }} />
                    <span
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "clamp(12px, 0.95vw, 15.5px)",
                        fontWeight: 500,
                        color: INK,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {skill}
                    </span>
                    <span style={{ color: INK, fontSize: "clamp(12px, 0.95vw, 15.5px)" }}>✓</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Always learning / Always building */}
            <div
              className="absolute flex items-start"
              style={{
                left: "1%",
                top: "76%",
                zIndex: 16,
                gap: 10,
                padding: "14px 20px",
                borderRadius: 20,
                background: "rgba(240,245,240,0.88)",
                border: "1px solid rgba(255,255,255,0.85)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                boxShadow: "0 22px 50px -30px rgba(16,59,48,0.3)",
              }}
            >
              <span
                className="rounded-full shrink-0"
                style={{ width: 8, height: 8, background: "#3FA96A", marginTop: 6 }}
              />
              <div
                style={{
                  fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                  fontSize: "clamp(11px, 0.86vw, 14px)",
                  lineHeight: 1.6,
                  color: INK_SOFT,
                  whiteSpace: "nowrap",
                }}
              >
                <div>Always learning</div>
                <div>Always building</div>
              </div>
            </div>

            {/* Handwritten: From curiosity to impact */}
            <div
              className="absolute pointer-events-none"
              style={{ left: "78%", top: "72%", zIndex: 20 }}
            >
              <svg
                width="48"
                height="40"
                viewBox="0 0 48 40"
                fill="none"
                stroke={INK}
                strokeWidth="1.9"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ opacity: 0.85, marginLeft: -34, marginBottom: 2 }}
              >
                <path d="M4 4 C 14 16, 22 22, 30 32" />
                <path d="M20 31 L 32 34 L 31 23" />
              </svg>
              <div
                style={{
                  fontFamily: "var(--font-handwritten)",
                  fontSize: "clamp(19px, 1.5vw, 25px)",
                  fontWeight: 600,
                  lineHeight: 1.32,
                  color: INK,
                }}
              >
                <div>From</div>
                <div>curiosity to</div>
                <div style={{ position: "relative", display: "inline-block" }}>
                  impact
                  <svg
                    width="100%"
                    height="10"
                    viewBox="0 0 90 10"
                    preserveAspectRatio="none"
                    fill="none"
                    stroke={INK}
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    style={{ position: "absolute", left: 0, bottom: -8, opacity: 0.8 }}
                  >
                    <path d="M2 4 C 26 1, 62 1, 88 3" />
                    <path d="M6 8 C 30 5, 60 6, 82 7" opacity="0.6" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* ═══ RIGHT: typographic column ═══ */}
          <div className="flex flex-col items-start">
            {/* Eyebrow */}
            <motion.p
              initial={isHeadless ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: isHeadless ? 0 : 0.15 }}
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "clamp(12px, 0.96vw, 16px)",
                fontWeight: 600,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: SAGE,
              }}
            >
              Cyber Security &amp; Full-Stack Engineer
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={isHeadless ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: isHeadless ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: "var(--font-outfit)",
                fontWeight: 900,
                fontSize: "clamp(2.6rem, 5.45vw, 5.7rem)",
                lineHeight: 0.92,
                letterSpacing: "-0.035em",
                color: INK,
                marginTop: "clamp(14px, 1.5vw, 24px)",
              }}
            >
              ARYAN SINGH
              <br />
              <span className="inline-flex items-center">
                SHAKTAWAT
                <span
                  aria-hidden="true"
                  style={{
                    display: "inline-block",
                    width: "clamp(7px, 0.76vw, 12px)",
                    height: "clamp(46px, 4.8vw, 78px)",
                    background: SAGE_PALE,
                    borderRadius: 6,
                    marginLeft: "clamp(10px, 1vw, 16px)",
                  }}
                />
              </span>
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              initial={isHeadless ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: isHeadless ? 0 : 0.48 }}
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "clamp(15px, 1.22vw, 20.5px)",
                lineHeight: 1.5,
                color: INK_SOFT,
                maxWidth: 600,
                marginTop: "clamp(18px, 1.9vw, 30px)",
              }}
            >
              Translating raw data &amp; vulnerabilities into secure, high-performance systems.
              Specializing in offensive security, digital forensics, and full-stack web architecture.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={isHeadless ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: isHeadless ? 0 : 0.62 }}
              className="flex items-center flex-wrap"
              style={{ gap: 24, marginTop: "clamp(24px, 2.6vw, 42px)" }}
            >
              <a
                href="#work"
                onClick={(e) => scrollTo(e, "#work")}
                className="inline-flex items-center justify-center no-underline transition-all hover:scale-[1.02]"
                style={{
                  width: "clamp(190px, 14.3vw, 237px)",
                  height: "clamp(54px, 4.1vw, 68px)",
                  borderRadius: 34,
                  gap: 12,
                  background: "#153F32",
                  color: "#FFFFFF",
                  fontFamily: "var(--font-inter)",
                  fontSize: "clamp(15px, 1.14vw, 19px)",
                  fontWeight: 600,
                  boxShadow: "0 20px 44px -22px rgba(16,59,48,0.6)",
                }}
              >
                View Work <ArrowRight size={19} strokeWidth={2.2} />
              </a>
              <ResumeButton />
            </motion.div>

            {/* Divider */}
            <div
              style={{
                width: "100%",
                height: 1,
                background: "rgba(16,59,48,0.12)",
                marginTop: "clamp(26px, 3vw, 48px)",
              }}
            />

            {/* Methodology row */}
            <div
              className="flex items-center justify-between w-full"
              style={{
                marginTop: "clamp(14px, 1.5vw, 24px)",
                fontFamily: "var(--font-inter)",
                fontSize: "clamp(11px, 0.9vw, 15px)",
                fontWeight: 600,
                letterSpacing: "0.22em",
                color: SAGE,
              }}
            >
              <span>SECURE</span>
              <span style={{ color: SAGE_PALE }}>•</span>
              <span>ANALYZE</span>
              <span style={{ color: SAGE_PALE }}>•</span>
              <span>BUILD</span>
              <span style={{ color: SAGE_PALE }}>•</span>
              <span>IMPACT</span>
            </div>
          </div>
        </div>

        {/* ─────────── BOTTOM BAR ─────────── */}
        <div className="flex items-center justify-between flex-wrap shrink-0" style={{ gap: 16 }}>
          <div className="flex items-center" style={{ gap: "clamp(14px, 1.4vw, 22px)", color: INK_SOFT }}>
            <a
              href="https://github.com/aryansinghshaktawat"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-opacity hover:opacity-65"
              style={{ color: "inherit" }}
            >
              <GithubIcon />
            </a>
            <a
              href="https://linkedin.com/in/aryan-singh-shaktawat"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-opacity hover:opacity-65"
              style={{ color: "inherit" }}
            >
              <LinkedinIcon />
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, "#contact")}
              aria-label="Contact"
              className="transition-opacity hover:opacity-65"
              style={{ color: "inherit" }}
            >
              <MailIcon />
            </a>

            <span style={{ width: 1, height: 26, background: "rgba(16,59,48,0.15)", marginLeft: 8, marginRight: 8 }} />

            <div className="flex items-center" style={{ gap: 10 }}>
              <span className="rounded-full" style={{ width: 8, height: 8, background: SAGE }} />
              <span
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "clamp(13px, 0.96vw, 16px)",
                  color: INK_SOFT,
                }}
              >
                Based in India
              </span>
            </div>
          </div>

          <div
            className="flex items-center justify-center"
            style={{
              width: "clamp(200px, 14.5vw, 241px)",
              height: "clamp(44px, 3.25vw, 54px)",
              borderRadius: 27,
              gap: 10,
              background: "rgba(255,255,255,0.62)",
              border: "1px solid rgba(255,255,255,0.9)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              boxShadow: "0 12px 34px -20px rgba(16,59,48,0.25)",
            }}
          >
            <span className="rounded-full" style={{ width: 9, height: 9, background: "#3FA96A" }} />
            <span
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "clamp(13px, 0.96vw, 16px)",
                color: INK_SOFT,
              }}
            >
              Open to Opportunities
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
