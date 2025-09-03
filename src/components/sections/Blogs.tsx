"use client";
import { useState } from "react";

type Post = {
  id: string;
  title: string;
  date: string; // e.g., 2025-08-25 or human-readable
  excerpt: string;
  tags: string[];
  content?: string;
};

const posts: Post[] = [
  {
    id: "digital-forensics-toolkit",
    title: "Building a Digital Forensics Investigation Toolkit",
    date: "2025-08-25",
    excerpt:
      "Comprehensive guide to developing Python-based tools for digital evidence collection, case management, and automated reporting in cybercrime investigations.",
    tags: ["Digital Forensics", "Python", "Investigation"],
    content:
      "During my internship at STF Cyber Cell, I developed the Cyber Investigation OSINT Toolkit (CIOT) using Python and CustomTkinter. This post covers the architecture, key features like evidence logging, automated report generation, and API integrations that improved investigation efficiency by 40%. Learn how to structure forensics tools for real-world law enforcement applications.",
  },
  {
    id: "osint-automation-techniques",
    title: "Advanced OSINT Automation for Cyber Investigations",
    date: "2025-08-15",
    excerpt:
      "Automating Open Source Intelligence gathering with Python scripts, API integrations, and workflow optimization for cybercrime case analysis.",
    tags: ["OSINT", "Automation", "Cybersecurity"],
    content:
      "Effective OSINT requires systematic data collection from multiple sources. This guide explores automation techniques using Python, social media APIs, and database management for tracking digital footprints. Covers ethical considerations, data validation, and building repeatable workflows that scale across multiple investigations.",
  },
  {
    id: "cybercrime-investigation-process",
    title: "Modern Cybercrime Investigation Methodologies",
    date: "2025-08-05",
    excerpt:
      "Best practices for digital evidence handling, case documentation, and collaborative investigation workflows in law enforcement cyber units.",
    tags: ["Cybercrime", "Investigation", "Law Enforcement"],
    content:
      "Based on hands-on experience with Uttarakhand Police STF Cyber Cell, this post outlines the complete investigation lifecycle: initial incident response, evidence preservation, digital artifact analysis, and case reporting. Includes templates and checklists for maintaining chain of custody and ensuring admissible evidence in court proceedings.",
  },
  {
    id: "python-security-tools",
    title: "Developing Security Tools with Python and CustomTkinter",
    date: "2025-07-28",
    excerpt:
      "Creating user-friendly security applications with modern Python GUI frameworks, focusing on tool design for non-technical investigators.",
    tags: ["Python", "Security Tools", "GUI Development"],
    content:
      "Security tools need to be both powerful and accessible. Learn how to design intuitive interfaces using CustomTkinter, implement secure data handling, and create modular architectures that allow for easy feature expansion. Covers best practices for input validation, error handling, and deployment in restricted environments.",
  },
  {
    id: "machine-learning-cybersecurity",
    title: "Machine Learning Applications in Cybersecurity Analysis",
    date: "2025-07-20",
    excerpt:
      "Implementing predictive analytics and pattern recognition for threat detection, anomaly identification, and automated incident classification.",
    tags: ["Machine Learning", "Threat Detection", "Analytics"],
    content:
      "Explore how ML algorithms can enhance cybersecurity operations: from the PYQ Analyzer project's pattern detection concepts applied to threat intelligence, to building classification models for incident prioritization. Covers data preprocessing, feature engineering, and deployment considerations for security-focused ML systems.",
  },
  {
    id: "emergency-response-systems",
    title: "Designing Emergency Response Mobile Applications",
    date: "2025-07-12",
    excerpt:
      "Architecture and implementation strategies for crisis management apps, focusing on real-time coordination and reliable notification systems.",
    tags: ["Emergency Response", "Mobile Development", "Flutter"],
    content:
      "The BACHAAV App project taught valuable lessons about building mission-critical applications. This post covers Firebase integration for real-time updates, geolocation services for responder coordination, push notification reliability, and designing for network-constrained environments during emergencies.",
  },
  {
    id: "cybersecurity-career-insights",
    title: "Breaking into Cybersecurity: A Student's Journey",
    date: "2025-07-05",
    excerpt:
      "Practical advice for computer science students pursuing cybersecurity careers, including skill development, internship strategies, and industry connections.",
    tags: ["Career", "Cybersecurity", "Student Life"],
    content:
      "From academic coursework in Cyber Security & Forensics at UPES to real-world experience at STF Cyber Cell, here's what I've learned about building a cybersecurity career. Covers essential technical skills, the importance of hands-on projects, networking within the security community, and transitioning from student to professional investigator.",
  },
  {
    id: "nextjs-security-practices",
    title: "Security-First Web Development with Next.js",
    date: "2025-06-30",
    excerpt:
      "Implementing robust security measures in modern web applications, from authentication to data protection and secure deployment practices.",
    tags: ["Web Security", "Next.js", "Development"],
    content:
      "Building secure web applications requires attention to detail at every layer. Learn about implementing proper authentication flows, securing API endpoints, preventing common vulnerabilities like XSS and CSRF, and setting up security headers. Includes practical examples from building investigation dashboards and case management systems.",
  }
];

export default function Blogs() {
  const [openId, setOpenId] = useState<string | null>(null);
  const openPost = posts.find((p) => p.id === openId);

  const formatDate = (d: string) => {
    // Deterministic SSR/CSR formatting
    try {
      const date = new Date(d + 'T00:00:00.000Z'); // ensure UTC
      return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
        timeZone: 'UTC',
      }).format(date);
    } catch {
      return d;
    }
  };

  return (
    <section id="blogs" className="relative w-full bg-[#121318] text-white border-t border-[#202025]">
      <div aria-hidden className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3b82f652] to-transparent" />

      <div className="max-w-6xl mx-auto px-4 py-20 md:py-28">
        <h2 className="uppercase text-left font-space-grotesk font-extrabold text-2xl md:text-3xl tracking-tight" style={{ letterSpacing: '-0.02em' }}>
          Blogs
        </h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((p) => (
            <article
              key={p.id}
              className="group rounded-lg border border-[#26272e] bg-[#181a20] p-5 transition-colors hover:bg-[#1b1e25] hover:border-[#2f313a]"
            >
              <header className="flex items-start justify-between gap-3">
                <h3 className="font-space-grotesk font-bold text-base text-white tracking-tight">{p.title}</h3>
                <time className="text-[12px] text-[#9ea0a6] font-geist-mono whitespace-nowrap">
                  {formatDate(p.date)}
                </time>
              </header>

              <p className="mt-3 text-sm text-[#c6c6c9] font-geist-mono leading-relaxed">{p.excerpt}</p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li
                    key={t}
                    className="text-[11px] uppercase tracking-wide text-[#e6e6e8] bg-[#1f2129] border border-[#2a2b31] rounded-md px-2 py-1"
                  >
                    {t}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setOpenId(p.id)}
                className="mt-5 inline-flex items-center gap-2 text-sm text-[#e6e6e8] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                aria-label={`Read more: ${p.title}`}
              >
                READ MORE
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </article>
          ))}
        </div>
      </div>

      {openPost && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[1100] flex items-end sm:items-center justify-center bg-black/60"
          onClick={() => setOpenId(null)}
        >
          <div
            className="w-full sm:w-[640px] max-w-[92vw] rounded-t-xl sm:rounded-xl overflow-hidden border border-[#2a2b31] bg-[#181a20]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-5 py-4 border-b border-[#24262c] flex items-center justify-between">
              <h4 className="font-space-grotesk font-bold text-sm tracking-tight">{openPost.title}</h4>
              <button
                onClick={() => setOpenId(null)}
                className="p-2 rounded-md hover:bg-white/5"
                aria-label="Close"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 18L18 6M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
            <div className="px-5 py-4">
              <p className="text-sm text-[#c6c6c9] font-geist-mono leading-relaxed">{openPost.content}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
