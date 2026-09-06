// src/app/page.tsx
// Aryan Singh Shaktawat — Digital Resume & Engineering Portfolio
// Soft Sage & Forest aesthetic
"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import JsonLd from "@/components/seo/JsonLd";
import ResumeButton from "@/components/ui/ResumeButton";
import ContactSection from "@/components/sections/ContactSection";

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
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroScroll, [0, 1], [0, -40]);

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
            paddingTop: "calc(var(--site-header-height) + 40px)",
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
                  minHeight: "62vh",
                  position: "relative",
                  overflow: "hidden",
                }}
                id="hero-card"
              >
                {/* Left-aligned Visual: Blended Profile Image */}
                <div style={{ position: "relative", width: "100%", maxWidth: 380, margin: "0 auto" }}>
                  <motion.div
                    style={{ y: heroY }}
                    transition={{ duration: 0.8 }}
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
                        borderRadius: "2rem",
                        mixBlendMode: "multiply",
                        filter: "saturate(0.9) contrast(1.05)",
                        WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
                        maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
                      }}
                    />
                  </motion.div>
                </div>

                {/* Right-aligned Heading & Subheading */}
                <div style={{ textAlign: "right", display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                  <motion.p
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="section-label"
                    style={{ marginBottom: 16 }}
                  >
                    Cyber Security &amp; Full-Stack Engineer
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
                      marginBottom: 20,
                    }}
                  >
                    ARYAN SINGH
                    <br />
                    <span style={{ color: "var(--accent)" }}>SHAKTAWAT</span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.55 }}
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "0.95rem",
                      color: "var(--text-secondary)",
                      maxWidth: 420,
                      marginBottom: 36,
                      lineHeight: 1.75,
                    }}
                  >
                    Translating raw data &amp; vulnerabilities into secure, high-performance systems.
                    Specializing in offensive security, digital forensics, and full-stack web architecture.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.7 }}
                    style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "flex-end" }}
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
                      }}
                    >
                      View Work <ArrowRight size={15} />
                    </a>
                    <ResumeButton />
                  </motion.div>
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
