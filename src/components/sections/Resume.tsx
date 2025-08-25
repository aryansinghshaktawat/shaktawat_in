// src/components/sections/Resume.tsx
import Link from 'next/link';

type Entry = {
  role: string;
  company: string;
  dates: string;
  summary: string;
};

const entries: Entry[] = [
  {
    role: 'CYBER SECURITY INTERN',
    company: 'STF CYBER CELL, UTTARAKHAND POLICE',
    dates: 'JUL 2025 — PRESENT',
    summary:
      'Assisted investigations, built OSINT tooling, and supported evidence workflows for field teams.',
  },
  {
    role: 'SOCIAL INTERN',
    company: 'SHINE INDIA FOUNDATION',
    dates: '2024',
    summary: 'Community outreach for awareness campaigns; coordination and documentation.',
  },
];

const Resume = () => {
  return (
    <section id="resume" className="relative w-full bg-[#121318] text-white border-t border-[#202025]">
      <div aria-hidden className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3b82f652] to-transparent" />

      <div className="max-w-6xl mx-auto px-4 py-20 md:py-28">
        {/* Header row */}
        <div className="flex items-center justify-between gap-4">
          <h2 className="uppercase font-sans font-extrabold text-2xl md:text-3xl tracking-tight" style={{ letterSpacing: '-0.02em' }}>
            Resume
          </h2>
          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-[#2a2b31] text-sm font-medium text-[#e6e6e8] bg-[#1b1c21] hover:bg-[#1f2026] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
          >
            Download Resume
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5v10m0 0l-3-3m3 3l3-3M6 19h12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* Timeline */}
        <div className="mt-10 relative">
          {/* Vertical line (desktop) */}
          <div className="hidden md:block absolute left-5 top-0 bottom-0 w-px bg-[#202025]" />

          <ul className="space-y-6">
            {entries.map((e, idx) => (
              <li key={idx} className="relative">
                {/* Dot */}
                <div className="hidden md:block absolute left-[17px] top-5 -translate-x-1/2 w-2 h-2 rounded-full bg-[#3b82f6] shadow-[0_0_0_4px_rgba(59,130,246,0.15)]" />

                <div className="md:ml-12 rounded-lg border border-[#26272e] bg-[#181a20] p-5 hover:bg-[#1b1e25] hover:border-[#2f313a] transition-colors">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="uppercase font-sans font-bold text-sm tracking-wide">{e.role}</h3>
                      <div className="mt-0.5 uppercase text-[12px] tracking-wide text-[#9ea0a6] font-mono">{e.company}</div>
                    </div>
                    <div className="text-[12px] text-[#9ea0a6] font-mono whitespace-nowrap">{e.dates}</div>
                  </div>
                  <p className="mt-3 text-sm text-[#c6c6c9] font-mono leading-relaxed">{e.summary}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Resume;
