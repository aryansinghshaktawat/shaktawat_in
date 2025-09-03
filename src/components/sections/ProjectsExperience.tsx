"use client";
import { useState } from "react";

type Item = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  details?: string;
};

const projects: Item[] = [
  {
    id: "osint",
    title: "CYBER INVESTIGATION OSINT TOOLKIT",
    description:
      "Toolkit for structured OSINT workflows: evidence logging, case timelines, and report exports.",
    tech: ["Python", "CustomTkinter"],
    details:
      "Built for STF Cyber Cell workflows. Emphasis on reliability, simple UI, and exportable artifacts.",
  },
  {
    id: "pyq",
    title: "PYQ ANALYZER",
    description:
      "Processes previous-year questions to surface repeated topics and patterns for study planning.",
    tech: ["Python", "Parsing", "Data"],
    details:
      "Text ingestion + frequency analysis with clean summaries and basic heuristics for predictions.",
  },
  {
    id: "bachaav",
    title: "BACHAAV – EMERGENCY APP",
    description:
      "Prototype mobile alert app designed for quick access to contacts and location sharing.",
    tech: ["Flutter", "Dart"],
    details:
      "Hackathon build focused on UX clarity, secure flows, and reliable triggers under stress.",
  },
];

const experience: Item[] = [
  {
    id: "stf",
    title: "CYBER SECURITY INTERN — STF CYBER CELL",
    description: "July 2025 – Present | Dehradun",
    tech: ["OSINT", "Forensics", "Python"],
    details:
      "Assisted in investigations, built internal tooling, and supported evidence pipelines.",
  },
];

export default function ProjectsExperience() {
  const [openId, setOpenId] = useState<string | null>(null);
  const openItem = [...projects, ...experience].find((i) => i.id === openId);

  return (
    <section id="projects" className="relative w-full bg-[#121318] text-white border-t border-[#202025]">
      {/* group divider glow */}
      <div aria-hidden className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3b82f652] to-transparent" />

      <div className="max-w-6xl mx-auto px-4 py-20 md:py-28">
        {/* Headline */}
        <h2
          className="uppercase text-left font-space-grotesk font-extrabold text-2xl md:text-3xl tracking-tight"
          style={{ letterSpacing: "-0.02em" }}
        >
          Projects & Experience
        </h2>

        {/* Projects grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p) => (
            <article
              key={p.id}
              className="group rounded-lg border border-[#26272e] bg-[#181a20] p-5 transition-colors hover:bg-[#1b1e25] hover:border-[#2f313a]"
            >
              <header>
                <h3 className="uppercase font-space-grotesk font-bold text-base text-white tracking-wide">
                  {p.title}
                </h3>
              </header>
              <p className="mt-3 text-sm text-[#c6c6c9] font-geist-mono leading-relaxed">
                {p.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
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
                aria-label={`More about ${p.title}`}
              >
                MORE
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

        {/* separator between groups */}
        <div className="mt-14 h-px w-full bg-[#202025]" />

        {/* Experience list (cards) */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {experience.map((e) => (
            <article
              key={e.id}
              className="group rounded-lg border border-[#26272e] bg-[#181a20] p-5 transition-colors hover:bg-[#1b1e25] hover:border-[#2f313a]"
            >
              <header className="flex items-baseline justify-between gap-4">
                <h3 className="uppercase font-space-grotesk font-bold text-base text-white tracking-wide">
                  {e.title}
                </h3>
              </header>
              <p className="mt-2 text-sm text-[#c6c6c9] font-geist-mono">{e.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {e.tech.map((t) => (
                  <li
                    key={t}
                    className="text-[11px] uppercase tracking-wide text-[#e6e6e8] bg-[#1f2129] border border-[#2a2b31] rounded-md px-2 py-1"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setOpenId(e.id)}
                className="mt-5 inline-flex items-center gap-2 text-sm text-[#e6e6e8] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                aria-label={`More about ${e.title}`}
              >
                MORE
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

      {/* Modal for details */}
      {openItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[1100] flex items-end sm:items-center justify-center bg-black/60"
          onClick={() => setOpenId(null)}
        >
          <div
            className="w-full sm:w-[560px] max-w-[92vw] rounded-t-xl sm:rounded-xl overflow-hidden border border-[#2a2b31] bg-[#181a20]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-5 py-4 border-b border-[#24262c] flex items-center justify-between">
              <h4 className="uppercase font-space-grotesk font-bold text-sm tracking-wide">{openItem.title}</h4>
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
              <p className="text-sm text-[#c6c6c9] font-geist-mono leading-relaxed">{openItem.details}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
