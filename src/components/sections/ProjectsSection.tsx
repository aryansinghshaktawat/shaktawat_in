// src/components/sections/ProjectsSection.tsx
// 3-column card grid with 3D mouse-parallax tilt, tech stack pills, GitHub links.
"use client";

import { useRef } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface Project {
  title: string;
  description: string;
  problem: string;
  tech: string[];
  secTech?: string[];
  github?: string;
  demo?: string;
  icon: string;
  accentColor: string;
}

const PROJECTS: Project[] = [
  {
    title: "AutoVulnScan",
    description:
      "A Python-based automated vulnerability scanner for web applications that identifies OWASP Top 10 risks, generates detailed reports, and integrates with CI/CD pipelines.",
    problem: "Manual security audits are slow and error-prone at scale.",
    tech: ["Python", "Flask", "Nmap", "Requests", "SQLite"],
    secTech: ["OWASP", "XSS", "SQLi"],
    icon: "🔍",
    accentColor: "#3B82F6",
    github: "https://github.com/aryansinghshaktawat",
  },
  {
    title: "SecureChat E2E",
    description:
      "End-to-end encrypted messaging application implementing AES-256-GCM for message encryption and Diffie-Hellman key exchange, ensuring zero-knowledge message relay.",
    problem: "Most chat apps store plaintext messages server-side.",
    tech: ["Python", "Socket", "Tkinter", "PyCryptodome"],
    secTech: ["AES-256", "ECDH", "E2EE"],
    icon: "🔐",
    accentColor: "#10B981",
    github: "https://github.com/aryansinghshaktawat",
  },
  {
    title: "OSINT Recon Toolkit",
    description:
      "A modular OSINT framework for passive information gathering on targets, aggregating WHOIS, DNS, subdomain enumeration, social media footprinting, and Shodan API data.",
    problem: "Scattered OSINT tools require manual correlation.",
    tech: ["Python", "Shodan API", "Click", "Rich", "DNS"],
    secTech: ["OSINT", "Recon", "Passive"],
    icon: "📡",
    accentColor: "#8B5CF6",
    github: "https://github.com/aryansinghshaktawat",
  },
  {
    title: "Digital Forensics Dashboard",
    description:
      "A web-based forensic analysis dashboard for parsing memory dumps, disk images, and log files — highlights indicators of compromise with a clean visual timeline.",
    problem: "Forensic tools are terminal-only and inaccessible to analysts.",
    tech: ["Next.js", "Python", "Volatility", "PostgreSQL"],
    secTech: ["Memory Forensics", "IOC", "Timeline"],
    icon: "🧬",
    accentColor: "#F59E0B",
    github: "https://github.com/aryansinghshaktawat",
  },
  {
    title: "PassSentinel",
    description:
      "A password strength analyser and breach-check tool using HaveIBeenPwned's k-anonymity API. Provides entropy calculation, pattern detection, and secure alternatives.",
    problem: "Users create weak passwords without understanding entropy.",
    tech: ["Python", "HIBP API", "Tkinter", "Hashlib"],
    secTech: ["Entropy", "k-Anonymity", "HIBP"],
    icon: "🛡️",
    accentColor: "#EF4444",
    github: "https://github.com/aryansinghshaktawat",
  },
  {
    title: "NetMonitor IDS",
    description:
      "A lightweight intrusion detection system that analyses real-time packet captures using Scapy, flags suspicious patterns, and sends instant alerts via Telegram bot.",
    problem: "SMBs can't afford enterprise IDS solutions.",
    tech: ["Python", "Scapy", "Telegram API", "SQLite", "Docker"],
    secTech: ["IDS", "Packet Analysis", "Real-time"],
    icon: "🌐",
    accentColor: "#06B6D4",
    github: "https://github.com/aryansinghshaktawat",
  },
];

// 3D card tilt on mouse move
function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = -(y / (rect.height / 2)) * 6;
    const rotateY = (x / (rect.width / 2)) * 6;
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    card.style.boxShadow = `0 20px 60px rgba(59,130,246,0.16), 0 8px 24px rgba(0,0,0,0.08)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)";
    card.style.boxShadow = "var(--shadow-sm)";
    card.style.transition = "transform 400ms ease, box-shadow 400ms ease";
  };

  return (
    <ScrollReveal delay={delay}>
      <div
        ref={cardRef}
        className="project-card h-full flex flex-col"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transition: "box-shadow 200ms ease" }}
      >
        {/* Card top accent bar */}
        <div
          className="absolute top-0 left-6 right-6 h-0.5 rounded-full"
          style={{ background: `linear-gradient(90deg, ${project.accentColor}, transparent)` }}
          aria-hidden="true"
        />

        {/* Header row */}
        <div className="flex items-start justify-between mb-4">
          <span
            className="text-3xl"
            aria-hidden="true"
            style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))" }}
          >
            {project.icon}
          </span>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border transition-all duration-200 hover:border-blue-300 hover:bg-blue-50"
              style={{ borderColor: "var(--border-subtle)", color: "var(--text-muted)" }}
              aria-label={`View ${project.title} on GitHub`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="hover:text-blue-600 transition-colors">
                <path fillRule="evenodd" d="M12 .5C5.73.5.98 5.24.98 11.5c0 4.85 3.14 8.96 7.5 10.41.55.1.75-.24.75-.54v-1.9c-3.05.67-3.7-1.31-3.7-1.31-.5-1.27-1.22-1.6-1.22-1.6-.99-.68.07-.66.07-.66 1.1.08 1.67 1.13 1.67 1.13.98 1.67 2.57 1.19 3.19.9.1-.71.38-1.19.7-1.47-2.44-.28-5-1.22-5-5.44 0-1.2.43-2.19 1.13-2.96-.11-.28-.49-1.4.11-2.9 0 0 .93-.3 3.06 1.13.88-.25 1.83-.37 2.77-.38.94.01 1.89.13 2.77.38 2.12-1.44 3.06-1.13 3.06-1.13.6 1.5.22 2.62.11 2.9.7.77 1.12 1.76 1.12 2.96 0 4.23-2.57 5.16-5.02 5.43.39.34.74 1.02.74 2.06v3.05c0 .3.19.65.76.54 4.34-1.46 7.49-5.56 7.49-10.41C23.02 5.24 18.27.5 12 .5Z" clipRule="evenodd" />
              </svg>
            </a>
          )}
        </div>

        {/* Title */}
        <h3
          className="font-bold text-lg mb-2 leading-tight"
          style={{ color: "var(--text-primary)", fontFamily: "var(--font-space-grotesk)" }}
        >
          {project.title}
        </h3>

        {/* Problem statement */}
        <p
          className="text-xs mb-3 italic"
          style={{ color: project.accentColor, fontFamily: "var(--font-mono)" }}
        >
          Problem: {project.problem}
        </p>

        {/* Description */}
        <p
          className="text-sm leading-relaxed mb-5 flex-1"
          style={{ color: "var(--text-secondary)" }}
        >
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tech.map((t) => (
            <span key={t} className="tech-pill">{t}</span>
          ))}
          {project.secTech?.map((t) => (
            <span key={t} className="tech-pill tech-pill-sec">{t}</span>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="section-base"
      style={{ background: "var(--bg-primary)" }}
      aria-label="Projects"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-14">
          <p className="section-label">Engineering + Security</p>
          <h2 className="section-heading">
            Featured{" "}
            <span className="gradient-text-blue">Projects</span>
          </h2>
          <div className="section-divider mx-auto" />
          <p className="section-subheading mx-auto text-center">
            Real solutions to real security problems — built, tested, and deployed.
          </p>
        </ScrollReveal>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              delay={i * 80}
            />
          ))}
        </div>

        {/* GitHub CTA */}
        <ScrollReveal delay={100} className="text-center mt-12">
          <a
            href="https://github.com/aryansinghshaktawat"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M12 .5C5.73.5.98 5.24.98 11.5c0 4.85 3.14 8.96 7.5 10.41.55.1.75-.24.75-.54v-1.9c-3.05.67-3.7-1.31-3.7-1.31-.5-1.27-1.22-1.6-1.22-1.6-.99-.68.07-.66.07-.66 1.1.08 1.67 1.13 1.67 1.13.98 1.67 2.57 1.19 3.19.9.1-.71.38-1.19.7-1.47-2.44-.28-5-1.22-5-5.44 0-1.2.43-2.19 1.13-2.96-.11-.28-.49-1.4.11-2.9 0 0 .93-.3 3.06 1.13.88-.25 1.83-.37 2.77-.38.94.01 1.89.13 2.77.38 2.12-1.44 3.06-1.13 3.06-1.13.6 1.5.22 2.62.11 2.9.7.77 1.12 1.76 1.12 2.96 0 4.23-2.57 5.16-5.02 5.43.39.34.74 1.02.74 2.06v3.05c0 .3.19.65.76.54 4.34-1.46 7.49-5.56 7.49-10.41C23.02 5.24 18.27.5 12 .5Z" clipRule="evenodd" />
            </svg>
            View All on GitHub
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
