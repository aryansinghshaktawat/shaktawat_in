// src/app/page.tsx
// Aryan Singh Shaktawat Portfolio — Soft Sage & Forest aesthetic
// Sections: Hero · About · Strengths · Projects · Contact/Footer
// Animations: Framer Motion scroll-reveal, parallax, marquee
"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";
import { ArrowRight, ArrowUpRight, ShieldCheck, Cpu, Search, MapPin } from "lucide-react";
import Image from "next/image";
import JsonLd from "@/components/seo/JsonLd";
import ResumeButton from "@/components/ui/ResumeButton";
import ContactSection from "@/components/sections/ContactSection";


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
  jobTitle: "Cybersecurity & Full-Stack Developer",
  worksFor: { "@type": "Organization", name: "UPES Dehradun" },
};

/* ─── Abstract CSS blob component ─── */
function AbstractBlobs({ variant = "A" }: { variant?: "A" | "B" | "C" }) {
  const configs = {
    A: [
      { cls: "blob-yellow", w: 120, h: 120, top: 10, left: 15 },
      { cls: "blob-sage",   w: 90,  h: 90,  top: 55, left: 45 },
      { cls: "blob-yellow", w: 60,  h: 60,  top: 30, left: 65 },
    ],
    B: [
      { cls: "blob-sage",   w: 110, h: 110, top: 15, left: 5  },
      { cls: "blob-yellow", w: 80,  h: 80,  top: 50, left: 40 },
      { cls: "blob-sage",   w: 55,  h: 55,  top: 20, left: 60 },
    ],
    C: [
      { cls: "blob-yellow", w: 100, h: 100, top: 20, left: 20 },
      { cls: "blob-sage",   w: 85,  h: 85,  top: 45, left: 50 },
      { cls: "blob-yellow", w: 65,  h: 65,  top: 10, left: 55 },
    ],
  };
  return (
    <div style={{ position: "relative", width: "100%", height: 200 }}>
      {configs[variant].map((b, i) => (
        <div
          key={i}
          className={b.cls}
          style={{ width: b.w, height: b.h, top: `${b.top}%`, left: `${b.left}%` }}
        />
      ))}
    </div>
  );
}

/* ─── Hero code-art block (decorative) ─── */
function CodeArtBlock({ rotate = 0, accent = false }: { rotate?: number; accent?: boolean }) {
  return (
    <div
      style={{
        borderRadius: "2rem",
        background: accent
          ? "linear-gradient(135deg, #2A4134 0%, #3D5E4A 100%)"
          : "rgba(255,255,255,0.82)",
        backdropFilter: "blur(16px)",
        border: accent
          ? "1px solid rgba(255,255,255,0.12)"
          : "1px solid rgba(42,65,52,0.1)",
        boxShadow: accent
          ? "0 32px 64px -16px rgba(42,65,52,0.40)"
          : "0 24px 48px -12px rgba(42,65,52,0.18)",
        padding: "28px 32px",
        transform: `rotate(${rotate}deg)`,
        fontFamily: "var(--font-inter)",
        overflow: "hidden",
        position: "relative",
        minWidth: 220,
      }}
    >
      {/* Top dots */}
      <div style={{ display: "flex", gap: 6, marginBottom: 18 }}>
        {["#FF6B6B", "#FFD93D", "#6BCB77"].map((c, i) => (
          <span key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: c, display: "block", opacity: 0.7 }} />
        ))}
      </div>
      {/* Mock code lines */}
      {accent ? (
        <>
          <div style={{ color: "#9DC8AA", fontSize: "0.72rem", marginBottom: 8, fontFamily: "monospace" }}>
            <span style={{ color: "#6BC9E8" }}>const</span>{" "}
            <span style={{ color: "#F8D77A" }}>aryan</span>{" "}
            <span style={{ color: "#9DC8AA" }}>= &#123;</span>
          </div>
          <div style={{ color: "#9DC8AA", fontSize: "0.72rem", paddingLeft: 16, marginBottom: 4, fontFamily: "monospace" }}>
            <span style={{ color: "#B8E0C4" }}>role</span>:{" "}
            <span style={{ color: "#F5B8B8" }}>&quot;cyber-eng&quot;</span>,
          </div>
          <div style={{ color: "#9DC8AA", fontSize: "0.72rem", paddingLeft: 16, marginBottom: 4, fontFamily: "monospace" }}>
            <span style={{ color: "#B8E0C4" }}>stack</span>:{" "}
            <span style={{ color: "#F5B8B8" }}>&quot;next+py&quot;</span>,
          </div>
          <div style={{ color: "#9DC8AA", fontSize: "0.72rem", paddingLeft: 16, marginBottom: 8, fontFamily: "monospace" }}>
            <span style={{ color: "#B8E0C4" }}>mode</span>:{" "}
            <span style={{ color: "#9DC8AA" }}>&#123;</span>{" "}
            <span style={{ color: "#F5B8B8" }}>secure</span>:{" "}
            <span style={{ color: "#6BC9E8" }}>true</span>{" "}
            <span style={{ color: "#9DC8AA" }}>&#125;</span>
          </div>
          <div style={{ color: "#9DC8AA", fontSize: "0.72rem", fontFamily: "monospace" }}>&#125;</div>
        </>
      ) : (
        <>
          {["Pen Testing ✓", "AES-256 ✓", "OSINT ✓", "Next.js ✓"].map((line, i) => (
            <div
              key={i}
              style={{
                fontSize: "0.8rem",
                color: i % 2 === 0 ? "var(--accent)" : "var(--text-secondary)",
                marginBottom: 10,
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontFamily: "var(--font-inter)",
                fontWeight: 500,
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "var(--sage-green)",
                  display: "inline-block",
                  flexShrink: 0,
                }}
              />
              {line}
            </div>
          ))}
        </>
      )}
    </div>
  );
}

/* ─── Strength Card ─── */
function StrengthCard({
  index,
  title,
  body,
  blobVariant,
}: {
  index: number;
  title: string;
  body: string;
  blobVariant: "A" | "B" | "C";
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-5% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay: index * 0.13, ease: [0.22, 1, 0.36, 1] }}
      className="glass-card"
      style={{
        borderRadius: "2rem",
        padding: "36px 32px",
        display: "flex",
        flexDirection: "column",
        gap: 20,
        flex: 1,
        minWidth: 0,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Blob visual */}
      <div style={{ position: "relative", height: 170, borderRadius: "1.5rem", overflow: "hidden", background: "rgba(232,239,233,0.5)" }}>
        <AbstractBlobs variant={blobVariant} />
      </div>

      {/* Index number */}
      <span
        style={{
          fontFamily: "var(--font-outfit)",
          fontSize: "0.75rem",
          fontWeight: 700,
          letterSpacing: "0.15em",
          color: "var(--text-muted)",
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <h3
        style={{
          fontFamily: "var(--font-outfit)",
          fontWeight: 700,
          fontSize: "1.2rem",
          color: "var(--text-primary)",
          letterSpacing: "-0.02em",
        }}
      >
        {title}
      </h3>
      <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.65, marginTop: -8 }}>
        {body}
      </p>
    </motion.div>
  );
}

/* ─── Project Row ─── */
function ProjectRow({
  index,
  title,
  tag,
  description,
  flipped = false,
  link = "https://github.com/aryansinghshaktawat",
}: {
  index: number;
  title: string;
  tag: string;
  description: string;
  flipped?: boolean;
  link?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [-24, 24]);

  const ImageBlock = (
    <motion.div
      style={{ y: imgY, flex: "0 0 auto", width: "100%" }}
      className="project-img-col"
    >
      <div
        style={{
          borderRadius: "2rem",
          overflow: "hidden",
          background: "linear-gradient(135deg, #2A4134 0%, #3D5E4A 60%, #1E3028 100%)",
          aspectRatio: "4/3",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 32px 64px -16px rgba(42,65,52,0.28)",
          position: "relative",
        }}
      >
        {/* Decorative inner pattern */}
        <div style={{ position: "absolute", inset: 0, opacity: 0.06 }}>
          {Array.from({ length: 6 }).map((_, row) =>
            Array.from({ length: 8 }).map((_, col) => (
              <span
                key={`${row}-${col}`}
                style={{
                  position: "absolute",
                  top: `${row * 18}%`,
                  left: `${col * 14}%`,
                  width: 4,
                  height: 4,
                  borderRadius: "50%",
                  background: "#E2EBE4",
                  display: "block",
                }}
              />
            ))
          )}
        </div>
        <div style={{ textAlign: "center", color: "rgba(226,235,228,0.8)", zIndex: 1 }}>
          <div
            style={{
              fontFamily: "var(--font-outfit)",
              fontSize: "2.5rem",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: 1,
              marginBottom: 8,
            }}
          >
            {title.split(" ")[0]}
          </div>
          <div
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.55,
              fontFamily: "var(--font-inter)",
            }}
          >
            {tag}
          </div>
        </div>
      </div>
    </motion.div>
  );

  const TextBlock = (
    <div style={{ flex: 1, minWidth: 0 }}>
      <span className="section-label" style={{ display: "block", marginBottom: 16 }}>
        Project {String(index + 1).padStart(2, "0")}
      </span>
      <h3
        style={{
          fontFamily: "var(--font-outfit)",
          fontWeight: 800,
          fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
          letterSpacing: "-0.04em",
          color: "var(--text-primary)",
          marginBottom: 20,
          lineHeight: 1.1,
        }}
      >
        {title}
      </h3>
      <div className="sage-line" style={{ marginBottom: 24 }} />
      <p
        style={{
          fontSize: "1rem",
          color: "var(--text-secondary)",
          lineHeight: 1.75,
          maxWidth: 420,
          marginBottom: 32,
        }}
      >
        {description}
      </p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          padding: "12px 24px",
          borderRadius: 9999,
          background: "var(--accent)",
          color: "#fff",
          fontFamily: "var(--font-inter)",
          fontWeight: 600,
          fontSize: "0.875rem",
          textDecoration: "none",
          transition: "all 250ms ease",
          letterSpacing: "0.02em",
        }}
        onMouseOver={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--accent-hover)"; (e.currentTarget as HTMLElement).style.transform = "scale(1.03)"; }}
        onMouseOut={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--accent)"; (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
      >
        View Project <ArrowUpRight size={16} />
      </a>
    </div>
  );

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 48,
        alignItems: "center",
      }}
      className={`project-row ${flipped ? "project-row-flipped" : ""}`}
    >
      {ImageBlock}
      {TextBlock}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════
   MAIN PAGE COMPONENT
═══════════════════════════════════════════════ */
export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY1 = useTransform(heroScroll, [0, 1], [0, -60]);
  const heroY2 = useTransform(heroScroll, [0, 1], [0, -40]);

  return (
    <>
      <JsonLd data={personSchema} />
      <div style={{ position: "relative", minHeight: "100vh" }}>

        {/* ════════════════════════════════════════
            A. HERO SECTION
        ════════════════════════════════════════ */}
        <section
          id="hero"
          ref={heroRef}
          style={{
            minHeight: "100vh",
            paddingTop: "calc(var(--site-header-height) + 48px)",
            paddingBottom: 80,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Large floating card */}
          <div
            style={{
              maxWidth: 1200,
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
                  padding: "clamp(32px, 5vw, 64px)",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "clamp(32px, 4vw, 64px)",
                  alignItems: "center",
                  minHeight: "60vh",
                  position: "relative",
                  overflow: "hidden",
                }}
                id="hero-card"
              >
                {/* Left: overlapping code blocks */}
                <div
                  style={{
                    position: "relative",
                    height: "clamp(280px, 40vw, 420px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <motion.div
                    style={{ position: "absolute", left: "0%", top: "8%", y: heroY1 }}
                  >
                    <CodeArtBlock accent />
                  </motion.div>
                  <motion.div
                    style={{ position: "absolute", right: "0%", bottom: "5%", y: heroY2 }}
                  >
                    <CodeArtBlock rotate={-2} />
                  </motion.div>
                </div>

                {/* Right: text */}
                <div>
                  <motion.p
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="section-label"
                    style={{ marginBottom: 20 }}
                  >
                    Cyber Security &amp; Full-Stack
                  </motion.p>

                  <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      fontFamily: "var(--font-outfit)",
                      fontWeight: 900,
                      fontSize: "clamp(2.4rem, 5.5vw, 4.2rem)",
                      letterSpacing: "-0.05em",
                      color: "var(--text-primary)",
                      lineHeight: 1.0,
                      marginBottom: 16,
                    }}
                  >
                    ARYAN
                    <br />
                    SINGH
                    <br />
                    <span style={{ color: "var(--accent)" }}>SHAKTAWAT</span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.55 }}
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "0.9rem",
                      fontWeight: 400,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "var(--text-muted)",
                      marginBottom: 36,
                    }}
                  >
                    Engineering Profile
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.7 }}
                    style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
                  >
                    <a
                      href="#work"
                      onClick={(e) => { e.preventDefault(); document.getElementById("work")?.scrollIntoView({ behavior: "smooth" }); }}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        padding: "13px 26px",
                        borderRadius: 9999,
                        background: "var(--accent)",
                        color: "#fff",
                        fontFamily: "var(--font-inter)",
                        fontWeight: 600,
                        fontSize: "0.9rem",
                        textDecoration: "none",
                        transition: "all 250ms ease",
                        letterSpacing: "0.02em",
                      }}
                    >
                      View Work <ArrowRight size={15} />
                    </a>
                    {/* Animated resume request button */}
                    <ResumeButton />
                  </motion.div>
                </div>
              </div>
            </FadeSection>
          </div>

          {/* Scroll marquee */}
          <div
            style={{
              marginTop: 40,
              overflow: "hidden",
              opacity: 0.4,
            }}
          >
            <div className="marquee-track">
              {Array.from({ length: 10 }).map((_, i) => (
                <span
                  key={i}
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.72rem",
                    fontWeight: 500,
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                    whiteSpace: "nowrap",
                  }}
                >
                  Scroll down &nbsp;•&nbsp;
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            B. INTRODUCTION / ABOUT SECTION
        ════════════════════════════════════════ */}
        <section
          id="about"
          style={{
            padding: "120px 24px",
            maxWidth: 1200,
            margin: "0 auto",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Watermark */}
          <div
            className="watermark"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontFamily: "var(--font-outfit)",
              fontWeight: 900,
              fontSize: "clamp(4rem, 12vw, 10rem)",
              letterSpacing: "-0.04em",
              color: "rgba(42,65,52,0.04)",
              whiteSpace: "nowrap",
              zIndex: 0,
              pointerEvents: "none",
              userSelect: "none",
            }}
            aria-hidden="true"
          >
            SECURE. BUILD. PROTECT.
          </div>

          <div style={{ position: "relative", zIndex: 1 }}>
            <FadeSection>
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

            {/* Two-col intro text + blended profile photo */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "clamp(32px, 5vw, 64px)",
                alignItems: "center",
                position: "relative",
              }}
              className="about-grid"
            >
              {/* Left Column: Narrative, Focus Pillars & Philosophy */}
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                <FadeSection delay={0.1}>
                  <p
                    style={{
                      fontSize: "clamp(1rem, 1.6vw, 1.12rem)",
                      color: "var(--text-secondary)",
                      lineHeight: 1.8,
                    }}
                  >
                    Nice to meet you. I am{" "}
                    <strong style={{ color: "var(--text-primary)", fontWeight: 700 }}>
                      Aryan Singh Shaktawat
                    </strong>
                    , a final-year B.Tech CSE undergrad specializing in{" "}
                    <span style={{ color: "var(--accent)", fontWeight: 600 }}>
                      Cyber Security and Forensics
                    </span>{" "}
                    at UPES, Dehradun.
                  </p>
                </FadeSection>

                <FadeSection delay={0.15}>
                  <p
                    style={{
                      fontSize: "clamp(0.95rem, 1.4vw, 1.05rem)",
                      color: "var(--text-secondary)",
                      lineHeight: 1.75,
                    }}
                  >
                    I focus on translating raw data and vulnerabilities into secure,
                    high-performance systems, blending{" "}
                    <strong style={{ color: "var(--accent)", fontWeight: 600 }}>
                      offensive security
                    </strong>{" "}
                    with full-stack development to build systems that don&apos;t just
                    work — they endure.
                  </p>
                </FadeSection>

                {/* Focus Pillars */}
                <FadeSection delay={0.2}>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                      gap: 14,
                      marginTop: 8,
                    }}
                  >
                    {[
                      {
                        icon: <ShieldCheck size={18} color="var(--accent)" />,
                        title: "Offensive Security",
                        desc: "Pentesting & Threat Assessment",
                      },
                      {
                        icon: <Cpu size={18} color="var(--accent)" />,
                        title: "Full-Stack Dev",
                        desc: "Next.js & Python Architecture",
                      },
                      {
                        icon: <Search size={18} color="var(--accent)" />,
                        title: "Digital Forensics",
                        desc: "Incident & Memory Analysis",
                      },
                    ].map((pillar, i) => (
                      <div
                        key={i}
                        className="glass-card"
                        style={{
                          borderRadius: "1.25rem",
                          padding: "16px 18px",
                          display: "flex",
                          flexDirection: "column",
                          gap: 6,
                          transition: "all 250ms ease",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          {pillar.icon}
                          <span
                            style={{
                              fontFamily: "var(--font-outfit)",
                              fontWeight: 700,
                              fontSize: "0.9rem",
                              color: "var(--text-primary)",
                            }}
                          >
                            {pillar.title}
                          </span>
                        </div>
                        <span style={{ fontSize: "0.78rem", color: "var(--text-muted)", lineHeight: 1.35 }}>
                          {pillar.desc}
                        </span>
                      </div>
                    ))}
                  </div>
                </FadeSection>

                {/* Philosophy Callout */}
                <FadeSection delay={0.25}>
                  <div
                    style={{
                      borderRadius: "1.25rem",
                      background: "rgba(42,65,52,0.04)",
                      borderLeft: "3px solid var(--accent)",
                      padding: "18px 22px",
                      marginTop: 4,
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-outfit)",
                        fontSize: "0.92rem",
                        fontWeight: 500,
                        fontStyle: "italic",
                        color: "var(--text-primary)",
                        lineHeight: 1.6,
                      }}
                    >
                      &ldquo;Security isn&apos;t an afterthought — it is the foundational logic upon which true scale is built.&rdquo;
                    </p>
                  </div>
                </FadeSection>
              </div>

              {/* Right Column: Blended Portrait Photo with Glass Frame & Floating Badges */}
              <div style={{ position: "relative" }}>
                <FadeSection delay={0.15}>
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      maxWidth: 380,
                      margin: "0 auto",
                    }}
                  >
                    {/* Portrait card wrapper */}
                    <div
                      className="glass-card"
                      style={{
                        borderRadius: "2.5rem",
                        padding: 14,
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          borderRadius: "2rem",
                          overflow: "hidden",
                          background: "linear-gradient(180deg, rgba(232,239,233,0.5) 0%, rgba(226,235,228,0.2) 100%)",
                        }}
                      >
                        <Image
                          src="/profile.webp"
                          alt="Aryan Singh Shaktawat"
                          width={380}
                          height={460}
                          style={{
                            width: "100%",
                            height: "auto",
                            display: "block",
                            borderRadius: "2rem",
                            mixBlendMode: "multiply",
                            filter: "saturate(0.88) contrast(1.05)",
                            WebkitMaskImage:
                              "linear-gradient(to bottom, black 15%, black 65%, transparent 98%), " +
                              "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
                            WebkitMaskComposite: "destination-in",
                            maskImage:
                              "linear-gradient(to bottom, black 15%, black 65%, transparent 98%), " +
                              "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
                            maskComposite: "intersect",
                          }}
                        />
                      </div>
                    </div>

                    {/* Floating Status Badge (Top-Right) */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.35, duration: 0.6 }}
                      style={{
                        position: "absolute",
                        top: 20,
                        right: -12,
                        background: "rgba(255, 255, 255, 0.94)",
                        backdropFilter: "blur(12px)",
                        border: "1px solid rgba(42,65,52,0.12)",
                        borderRadius: 9999,
                        padding: "8px 16px",
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        boxShadow: "0 10px 24px -4px rgba(42,65,52,0.14)",
                        zIndex: 2,
                      }}
                    >
                      <span
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          background: "#10B981",
                          display: "inline-block",
                          boxShadow: "0 0 0 3px rgba(16,185,129,0.25)",
                        }}
                      />
                      <span
                        style={{
                          fontFamily: "var(--font-inter)",
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          color: "var(--text-primary)",
                        }}
                      >
                        Open for Roles
                      </span>
                    </motion.div>

                    {/* Floating Location Badge (Bottom-Left) */}
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.45, duration: 0.6 }}
                      style={{
                        position: "absolute",
                        bottom: 20,
                        left: -12,
                        background: "rgba(255, 255, 255, 0.94)",
                        backdropFilter: "blur(12px)",
                        border: "1px solid rgba(42,65,52,0.12)",
                        borderRadius: 9999,
                        padding: "8px 16px",
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        boxShadow: "0 10px 24px -4px rgba(42,65,52,0.14)",
                        zIndex: 2,
                      }}
                    >
                      <MapPin size={14} color="var(--accent)" />
                      <span
                        style={{
                          fontFamily: "var(--font-inter)",
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          color: "var(--text-primary)",
                        }}
                      >
                        UPES, Dehradun
                      </span>
                    </motion.div>
                  </div>
                </FadeSection>
              </div>
            </div>

            {/* Glassmorphic Stats Grid */}
            <FadeSection delay={0.3}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: 20,
                  marginTop: 64,
                  paddingTop: 40,
                  borderTop: "1px solid rgba(42,65,52,0.1)",
                }}
              >
                {[
                  { val: "10+", label: "Projects Shipped", desc: "Full-Stack & Cyber Tools" },
                  { val: "3+", label: "Years Practice", desc: "Security & Web Dev" },
                  { val: "UPES", label: "CSE Spec.", desc: "Cyber Security & Forensics" },
                  { val: "2026", label: "Graduation", desc: "B.Tech Candidate" },
                ].map((s, i) => (
                  <div
                    key={i}
                    className="glass-card"
                    style={{
                      borderRadius: "1.5rem",
                      padding: "24px 24px",
                      display: "flex",
                      flexDirection: "column",
                      gap: 4,
                      transition: "transform 250ms ease, box-shadow 250ms ease",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-outfit)",
                        fontWeight: 900,
                        fontSize: "2.4rem",
                        color: "var(--accent)",
                        letterSpacing: "-0.04em",
                        lineHeight: 1,
                      }}
                    >
                      {s.val}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-outfit)",
                        fontWeight: 700,
                        fontSize: "0.95rem",
                        color: "var(--text-primary)",
                        marginTop: 4,
                      }}
                    >
                      {s.label}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "0.75rem",
                        color: "var(--text-muted)",
                      }}
                    >
                      {s.desc}
                    </div>
                  </div>
                ))}
              </div>
            </FadeSection>
          </div>
        </section>

        {/* ════════════════════════════════════════
            C. STRENGTHS SECTION
        ════════════════════════════════════════ */}
        <section
          id="strengths"
          style={{ padding: "100px 24px", background: "rgba(42,65,52,0.025)" }}
        >
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <FadeSection>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  gap: 24,
                  marginBottom: 56,
                  flexWrap: "wrap",
                }}
              >
                <h2
                  style={{
                    fontFamily: "var(--font-outfit)",
                    fontWeight: 900,
                    fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
                    letterSpacing: "-0.05em",
                    color: "var(--text-primary)",
                  }}
                >
                  Strength
                </h2>
                <span className="section-label">Capabilities</span>
              </div>
            </FadeSection>

            {/* 3 cards */}
            <div
              style={{
                display: "flex",
                gap: 24,
                flexWrap: "wrap",
              }}
            >
              <StrengthCard
                index={0}
                title="Offensive Security & OSINT"
                body="Logical evaluation of vulnerabilities — from web application exploits and binary analysis to open-source intelligence gathering for forensic investigations."
                blobVariant="A"
              />
              <StrengthCard
                index={1}
                title="Full-Stack Architecture"
                body="Designing and building scalable, production-ready applications with Next.js, FastAPI, and PostgreSQL. From API design to frontend polish."
                blobVariant="B"
              />
              <StrengthCard
                index={2}
                title="DevOps & Telemetry"
                body="Docker containerisation, CI/CD pipelines, and low-latency binary protocols for high-frequency data streams. Infrastructure that scales quietly."
                blobVariant="C"
              />
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            D. PROJECTS SECTION (alternating rows)
        ════════════════════════════════════════ */}
        <section id="work" style={{ padding: "120px 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <FadeSection>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  gap: 24,
                  marginBottom: 72,
                  flexWrap: "wrap",
                }}
              >
                <h2
                  style={{
                    fontFamily: "var(--font-outfit)",
                    fontWeight: 900,
                    fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
                    letterSpacing: "-0.05em",
                    color: "var(--text-primary)",
                  }}
                >
                  Selected Work
                </h2>
                <span className="section-label">Projects</span>
              </div>
            </FadeSection>

            <div style={{ display: "flex", flexDirection: "column", gap: 96 }}>
              <ProjectRow
                index={0}
                title="PehraSafe"
                tag="Safety · IoT · AI"
                description="Intelligent SOS alerting with zero-latency telemetry. Utilizing on-device AI and proprietary binary protocols to deliver emergency alerts with sub-100ms response times when network conditions degrade."
                flipped={false}
              />
              <ProjectRow
                index={1}
                title="CIOT Toolkit"
                tag="OSINT · Forensics"
                description="Cyber Investigation OSINT Toolkit — automating intelligence gathering for forensic auditing. Ensuring evidence integrity through layered API integrations, structured reporting, and non-destructive enumeration."
                flipped={true}
              />
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            E. CONTACT FORM SECTION
        ════════════════════════════════════════ */}
        <ContactSection />

        {/* ════════════════════════════════════════
            F. FOOTER (dark inversion)
        ════════════════════════════════════════ */}
        <footer
          style={{
            background: "var(--accent)",
            borderRadius: "2.5rem 2.5rem 0 0",
            color: "#E2EBE4",
            padding: "clamp(56px, 8vw, 96px) clamp(24px, 5vw, 64px) 48px",
            marginTop: 32,
          }}
        >
          <FadeSection>
            <div
              style={{
                maxWidth: 1200,
                margin: "0 auto",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "clamp(40px, 5vw, 80px)",
                alignItems: "start",
              }}
              className="footer-grid"
            >
              {/* Left: certifications & roles */}
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "rgba(226,235,228,0.5)",
                    marginBottom: 32,
                  }}
                >
                  Certifications &amp; Roles
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 20 }}>
                  {[
                    { label: "Google Foundations of Cybersecurity", sub: "Google Career Certificates" },
                    { label: "Operations Head, IEEE SPS UPES", sub: "Student Chapter · 2024–25" },
                    { label: "Cyber Security Intern", sub: "STF, Uttarakhand Police" },
                  ].map((item) => (
                    <li key={item.label} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                      <span
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          background: "rgba(226,235,228,0.4)",
                          display: "inline-block",
                          marginTop: 8,
                          flexShrink: 0,
                        }}
                      />
                      <div>
                        <div
                          style={{
                            fontFamily: "var(--font-outfit)",
                            fontWeight: 600,
                            fontSize: "1rem",
                            color: "#E2EBE4",
                            lineHeight: 1.3,
                          }}
                        >
                          {item.label}
                        </div>
                        <div
                          style={{
                            fontSize: "0.78rem",
                            color: "rgba(226,235,228,0.5)",
                            marginTop: 3,
                            fontFamily: "var(--font-inter)",
                          }}
                        >
                          {item.sub}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                <div
                  style={{
                    marginTop: 56,
                    paddingTop: 40,
                    borderTop: "1px solid rgba(226,235,228,0.12)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-outfit)",
                      fontWeight: 800,
                      fontSize: "clamp(2rem, 5vw, 3.2rem)",
                      letterSpacing: "-0.05em",
                      color: "#E2EBE4",
                      lineHeight: 1.05,
                    }}
                  >
                    Engineering secured.
                    <br />
                    Built for scale.
                  </p>
                  <p
                    style={{
                      marginTop: 12,
                      color: "rgba(226,235,228,0.55)",
                      fontSize: "0.875rem",
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    hello@shaktawat.in
                  </p>
                </div>
              </div>

              {/* Right: pill-shaped link buttons */}
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "rgba(226,235,228,0.5)",
                    marginBottom: 32,
                  }}
                >
                  Connect
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {[
                    {
                      label: "GitHub",
                      sub: "aryansinghshaktawat",
                      href: "https://github.com/aryansinghshaktawat",
                    },
                    {
                      label: "LinkedIn",
                      sub: "aryan-singh-shaktawat",
                      href: "https://linkedin.com/in/aryan-singh-shaktawat",
                    },
                    {
                      label: "Request Resume",
                      sub: "Via email",
                      href: "mailto:hello@shaktawat.in?subject=Resume%20Request%20%E2%80%94%20Aryan%20Singh%20Shaktawat&body=Hi%20Aryan%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20a%20copy%20of%20your%20resume.%0A%0AThank%20you!",
                    },
                  ].map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="pill-btn"
                    >
                      <div>
                        <div style={{ fontFamily: "var(--font-outfit)", fontWeight: 700, fontSize: "1.05rem" }}>
                          {link.label}
                        </div>
                        <div style={{ fontSize: "0.75rem", opacity: 0.45, fontFamily: "var(--font-inter)", fontWeight: 400, marginTop: 2 }}>
                          {link.sub}
                        </div>
                      </div>
                      <ArrowRight size={20} style={{ opacity: 0.7, flexShrink: 0 }} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom bar */}
            <div
              style={{
                maxWidth: 1200,
                margin: "64px auto 0",
                paddingTop: 28,
                borderTop: "1px solid rgba(226,235,228,0.1)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 16,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <Image
                  src="/darklogo.png"
                  alt="Aryan Singh Shaktawat Logo"
                  width={26}
                  height={26}
                  style={{
                    objectFit: "contain",
                    filter: "brightness(0) invert(0.9) opacity(0.7)",
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-outfit)",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    letterSpacing: "-0.02em",
                    color: "rgba(226,235,228,0.7)",
                  }}
                >
                  Aryan Singh Shaktawat
                </span>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.78rem",
                  color: "rgba(226,235,228,0.35)",
                  fontWeight: 400,
                }}
              >
                © {new Date().getFullYear()} Aryan Singh Shaktawat · Built with Next.js · Framer Motion
              </p>
            </div>
          </FadeSection>
        </footer>

      </div>

      {/* Responsive styles */}
      <style jsx global>{`
        @media (max-width: 860px) {
          #hero-card {
            grid-template-columns: 1fr !important;
          }
          .about-grid {
            grid-template-columns: 1fr !important;
          }
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .about-photo-wrap {
            display: none;
          }
          .project-row {
            gap: 32px !important;
          }
        }
        @media (min-width: 768px) {
          .project-row {
            flex-direction: row !important;
            gap: 64px;
          }
          .project-row .project-img-col {
            width: 45% !important;
            flex: 0 0 45% !important;
          }
          .project-row-flipped {
            flex-direction: row-reverse !important;
          }
        }
      `}</style>
    </>
  );
}
