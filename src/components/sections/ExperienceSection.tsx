// src/components/sections/ExperienceSection.tsx
// Vertical timeline with pulsing accent dots, achievement bullets, clean cards.
"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

interface ExperienceItem {
  role: string;
  company: string;
  companyUrl?: string;
  type: string;
  period: string;
  location: string;
  icon: string;
  accentColor: string;
  achievements: string[];
  tags: string[];
  isCurrent?: boolean;
}

const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Cyber Security Intern",
    company: "TechSecure Solutions Pvt. Ltd.",
    type: "Internship",
    period: "May 2024 – Jul 2024",
    location: "Remote · India",
    icon: "🛡️",
    accentColor: "#3B82F6",
    achievements: [
      "Conducted vulnerability assessments on 12 web applications using Burp Suite and OWASP ZAP, identifying 30+ critical SQL injection and XSS vulnerabilities",
      "Developed a Python automation script reducing manual pen-test report generation time by 65%",
      "Assisted senior analysts in a red-team exercise simulating phishing campaigns and lateral movement",
      "Documented security findings in structured reports for C-suite review using CVSS scoring",
    ],
    tags: ["Pen Testing", "Burp Suite", "Python", "OWASP", "Red Team"],
  },
  {
    role: "Web Development Intern",
    company: "StartupLaunch Tech",
    type: "Internship",
    period: "Dec 2023 – Feb 2024",
    location: "Hybrid · Dehradun",
    icon: "💻",
    accentColor: "#10B981",
    achievements: [
      "Built and deployed a full-stack customer management dashboard using Next.js and PostgreSQL serving 500+ daily users",
      "Implemented JWT-based authentication with refresh token rotation and CSRF protection from ground up",
      "Integrated Razorpay payment gateway with server-side webhook validation and idempotency checks",
      "Optimised database queries reducing average API response time from 820ms to 190ms",
    ],
    tags: ["Next.js", "PostgreSQL", "JWT", "React", "REST APIs"],
  },
  {
    role: "Security Research Volunteer",
    company: "UPES Cyber Security Club",
    type: "Academic",
    period: "Aug 2023 – Present",
    location: "UPES Dehradun",
    icon: "🔬",
    accentColor: "#8B5CF6",
    isCurrent: true,
    achievements: [
      "Organised and mentored 3 internal CTF competitions with 150+ student participants",
      "Authored 5 write-ups on binary exploitation and reverse engineering challenges shared on the club blog",
      "Delivered workshop on OWASP Top 10 vulnerabilities to a 60-student cohort",
      "Co-built a vulnerable-by-design web app (DVWA-style) used as club practice environment",
    ],
    tags: ["CTF", "Mentoring", "Workshops", "Binary Exploitation", "Community"],
  },
];

function TimelineItem({ item, index }: { item: ExperienceItem; index: number }) {
  return (
    <ScrollReveal delay={index * 120} className="relative flex gap-0">
      {/* Dot column */}
      <div className="relative flex flex-col items-center" style={{ minWidth: 42 }}>
        {/* Dot */}
        <div
          className="timeline-dot z-10 flex items-center justify-center shrink-0"
          style={{
            position: "relative",
            left: "auto",
            width: 22,
            height: 22,
            borderRadius: "50%",
            background: item.accentColor,
            border: "3px solid var(--bg-secondary)",
            animation: "timelineDot 2.5s ease-in-out infinite",
          }}
        >
          <span className="sr-only">Timeline point</span>
        </div>
      </div>

      {/* Card */}
      <div className="timeline-card flex-1 mb-10" style={{ marginLeft: 20 }}>
        {/* Top row */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl" aria-hidden="true">{item.icon}</span>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3
                  className="font-bold text-lg leading-tight"
                  style={{ color: "var(--text-primary)", fontFamily: "var(--font-space-grotesk)" }}
                >
                  {item.role}
                </h3>
                {item.isCurrent && (
                  <span
                    className="accent-pill !text-xs"
                    style={{ padding: "2px 8px" }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                    Current
                  </span>
                )}
              </div>
              <p
                className="font-semibold text-sm mt-0.5"
                style={{ color: item.accentColor }}
              >
                {item.company}
              </p>
            </div>
          </div>

          {/* Period & location */}
          <div className="text-right shrink-0">
            <span
              className="text-xs font-medium block"
              style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
            >
              {item.period}
            </span>
            <span
              className="text-xs block mt-0.5"
              style={{ color: "var(--text-muted)" }}
            >
              📍 {item.location}
            </span>
            <span
              className="inline-block mt-2 text-xs px-2 py-0.5 rounded-full border"
              style={{
                color: item.accentColor,
                borderColor: `${item.accentColor}44`,
                background: `${item.accentColor}0D`,
                fontFamily: "var(--font-mono)",
              }}
            >
              {item.type}
            </span>
          </div>
        </div>

        {/* Achievement bullets */}
        <ul className="space-y-2 mb-5">
          {item.achievements.map((ach, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span
                className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full"
                style={{ background: item.accentColor }}
                aria-hidden="true"
              />
              <span className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {ach}
              </span>
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full"
              style={{
                background: `${item.accentColor}10`,
                border: `1px solid ${item.accentColor}30`,
                color: item.accentColor,
                fontFamily: "var(--font-mono)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="section-base"
      style={{ background: "var(--bg-secondary)" }}
      aria-label="Experience and Internships"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-14">
          <p className="section-label">Professional Proof</p>
          <h2 className="section-heading">
            Experience &amp;{" "}
            <span className="gradient-text-blue">Internships</span>
          </h2>
          <div className="section-divider mx-auto" />
          <p className="section-subheading mx-auto text-center">
            Real-world exposure across security consulting, full-stack development,
            and academic research.
          </p>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-[10px] top-3 bottom-0 w-0.5 rounded-full"
            style={{ background: "linear-gradient(to bottom, var(--accent) 0%, rgba(59,130,246,0.08) 100%)" }}
            aria-hidden="true"
          />

          <div className="pl-2">
            {EXPERIENCES.map((item, i) => (
              <TimelineItem key={item.company + item.role} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
