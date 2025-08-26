// src/components/sections/FeaturedProjects.tsx
import Link from 'next/link';

const projects = [
  {
    id: 'osint-toolkit',
    title: 'Cyber Investigation OSINT Toolkit',
    desc: 'Toolkit for digital evidence management and streamlined OSINT workflows.',
  },
  {
    id: 'pyq-analyzer',
    title: 'PYQ Analyzer',
    desc: 'A Python-based analyzer predicting repeated exam questions using historical patterns.',
  },
  {
    id: 'emergency-app',
    title: 'Emergency Response Mobile App',
    desc: 'Mobile app prototype developed during a hackathon to coordinate emergency responders.',
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects-preview" className="w-full bg-[#0b0c0d] text-white border-t border-[#202025]">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="uppercase text-left font-sans font-extrabold text-2xl md:text-3xl tracking-tight mb-6">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.id} className="rounded-md border border-[#26272e] bg-[#181a20] p-5">
              <h3 className="font-sans font-bold text-lg mb-2">{p.title}</h3>
              <p className="text-sm text-[#c6c6c9] mb-4">{p.desc}</p>
              <div className="flex items-center justify-between">
                <Link href="/projects" className="text-sm inline-flex items-center gap-2 text-[#e6e6e8] hover:text-white">
                  View Project
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M9 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
                <span className="text-xs text-[#9ea0a6] font-mono">{p.id}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
