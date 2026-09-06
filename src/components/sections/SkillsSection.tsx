// src/components/sections/SkillsSection.tsx
// Two-category skill tags (Security + Engineering) with hover tooltips.
// No progress bars — sleek pill tags with brief descriptions on hover.
"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

interface Skill {
  label: string;
  icon: string;
  desc: string;
}

const SECURITY_SKILLS: Skill[] = [
  { label: "Penetration Testing", icon: "🎯", desc: "Web & network pen-testing with Metasploit, Burp Suite" },
  { label: "Ethical Hacking",     icon: "🔐", desc: "Authorized attack simulation & vulnerability assessment" },
  { label: "Network Security",    icon: "🌐", desc: "Firewalls, IDS/IPS, VPN, network forensics" },
  { label: "OWASP Top 10",        icon: "🛡️", desc: "Injection, XSS, SSRF, IDOR & all OWASP vulnerabilities" },
  { label: "Digital Forensics",   icon: "🔍", desc: "Evidence acquisition, memory forensics, log analysis" },
  { label: "OSINT",               icon: "📡", desc: "Open-source intelligence gathering & investigation" },
  { label: "Cryptography",        icon: "🔑", desc: "AES, RSA, hashing, PKI, TLS/SSL fundamentals" },
  { label: "CTF Competitions",    icon: "🏆", desc: "Capture the Flag — reverse engineering, pwn, crypto" },
];

const ENGINEERING_SKILLS: Skill[] = [
  { label: "Python",       icon: "🐍", desc: "Automation, scripting, security tooling, Flask APIs" },
  { label: "C++",          icon: "⚙️", desc: "Systems programming, algorithms, data structures" },
  { label: "Java",         icon: "☕", desc: "OOP, multithreading, Android basics" },
  { label: "JavaScript",   icon: "🟨", desc: "React, Next.js, Node.js, REST APIs" },
  { label: "Docker",       icon: "🐳", desc: "Containerisation, Compose, isolated environments" },
  { label: "Git & GitHub", icon: "🌿", desc: "Version control, branching strategies, CI pipelines" },
  { label: "Linux",        icon: "🐧", desc: "Kali, Ubuntu — shell scripting, system administration" },
  { label: "Secure SDLC",  icon: "🏗️", desc: "Threat modelling, secure code review, shift-left security" },
];

function SkillTag({ skill }: { skill: Skill }) {
  return (
    <div className="skill-tag" role="listitem">
      <span aria-hidden="true" className="text-base">{skill.icon}</span>
      <span>{skill.label}</span>
      <span className="tooltip" role="tooltip">{skill.desc}</span>
    </div>
  );
}

function SkillCategory({
  title,
  subtitle,
  skills,
  delay = 0,
  accent,
}: {
  title: string;
  subtitle: string;
  skills: Skill[];
  delay?: number;
  accent: string;
}) {
  return (
    <ScrollReveal delay={delay} className="glass-card rounded-3xl p-8 sm:p-10">
      {/* Category header */}
      <div className="flex items-center gap-3 mb-6">
        <span
          className="flex items-center justify-center w-10 h-10 rounded-xl text-xl"
          style={{ background: `${accent}18`, fontSize: "1.25rem" }}
          aria-hidden="true"
        >
          {title === "Security Arsenal" ? "🛡️" : "🛠️"}
        </span>
        <div>
          <h3
            className="font-bold text-lg"
            style={{ color: "var(--text-primary)", fontFamily: "var(--font-space-grotesk)" }}
          >
            {title}
          </h3>
          <p
            className="text-xs mt-0.5"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
          >
            {subtitle}
          </p>
        </div>
      </div>

      {/* Divider */}
      <div
        className="w-12 h-0.5 mb-6 rounded-full"
        style={{ background: accent }}
        aria-hidden="true"
      />

      {/* Tags */}
      <div className="flex flex-wrap gap-3" role="list" aria-label={`${title} skills`}>
        {skills.map((skill) => (
          <SkillTag key={skill.label} skill={skill} />
        ))}
      </div>
    </ScrollReveal>
  );
}

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="section-base"
      style={{ background: "var(--bg-secondary)" }}
      aria-label="Skills"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-14">
          <p className="section-label">The Arsenal</p>
          <h2 className="section-heading">
            Skills &amp;{" "}
            <span className="gradient-text-blue">Expertise</span>
          </h2>
          <div className="section-divider mx-auto" />
          <p className="section-subheading mx-auto text-center">
            A curated stack of security knowledge and engineering tools I use to
            build, break, and protect.
          </p>
        </ScrollReveal>

        {/* Two-column skill grids */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SkillCategory
            title="Security Arsenal"
            subtitle="Offensive & Defensive Security"
            skills={SECURITY_SKILLS}
            delay={0}
            accent="#3B82F6"
          />
          <SkillCategory
            title="Engineering Stack"
            subtitle="Languages, Tools & Frameworks"
            skills={ENGINEERING_SKILLS}
            delay={120}
            accent="#8B5CF6"
          />
        </div>

        {/* Bottom note */}
        <ScrollReveal delay={200} className="text-center mt-10">
          <p
            className="text-sm"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
          >
            Hover over any tag to see more details.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
