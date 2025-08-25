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
    id: "osint-notes",
    title: "Practical OSINT Notes",
    date: "2025-07-30",
    excerpt:
      "Field-tested approaches for structuring OSINT workflows, logging artifacts, and keeping evidence consistent.",
    tags: ["OSINT", "Workflows", "Notes"],
    content:
      "A concise playbook: scope definition, data sources, artifact templates, and repeatable reports for team handoffs.",
  },
  {
    id: "nextjs-perf",
    title: "Next.js DX and Performance Essentials",
    date: "2025-06-10",
    excerpt:
      "Small wins that add up: edge caching, route splits, image hygiene, and handling third-party scripts.",
    tags: ["Next.js", "Performance", "DX"],
    content:
      "Checklist-driven practices for predictable performance with a good developer experience.",
  },
  {
    id: "dsa-practice",
    title: "DSA Practice: Patterns Over Problems",
    date: "2025-05-05",
    excerpt:
      "Focus on categories and patterns: sliding windows, monotonic stacks, and graph templates.",
    tags: ["DSA", "Patterns", "Learning"],
    content:
      "How I organize notes and templates to reduce time-to-solve under pressure.",
  },
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
        <h2 className="uppercase text-left font-sans font-extrabold text-2xl md:text-3xl tracking-tight" style={{ letterSpacing: '-0.02em' }}>
          Blogs
        </h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((p) => (
            <article
              key={p.id}
              className="group rounded-lg border border-[#26272e] bg-[#181a20] p-5 transition-colors hover:bg-[#1b1e25] hover:border-[#2f313a]"
            >
              <header className="flex items-start justify-between gap-3">
                <h3 className="font-sans font-bold text-base text-white tracking-tight">{p.title}</h3>
                <time className="text-[12px] text-[#9ea0a6] font-mono whitespace-nowrap">
                  {formatDate(p.date)}
                </time>
              </header>

              <p className="mt-3 text-sm text-[#c6c6c9] font-mono leading-relaxed">{p.excerpt}</p>

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
              <h4 className="font-sans font-bold text-sm tracking-tight">{openPost.title}</h4>
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
              <p className="text-sm text-[#c6c6c9] font-mono leading-relaxed">{openPost.content}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
