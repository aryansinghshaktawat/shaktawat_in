// src/components/sections/Skills.tsx
export default function Skills() {
  return (
    <section id="skills-page" className="w-full bg-[#0f1112] text-white border-t border-[#202025]">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="uppercase text-left font-space-grotesk font-extrabold text-2xl md:text-3xl tracking-tight mb-6">Skills</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="rounded-md border border-[#26272e] bg-[#181a20] p-4">
            <h3 className="text-sm text-[#9ea0a6] uppercase tracking-wide mb-2">Technical</h3>
            <ul className="text-white font-geist-mono text-sm space-y-1">
              <li>Python</li>
              <li>C</li>
              <li>C++</li>
              <li>CustomTkinter</li>
              <li>Flutter (basics)</li>
              <li>HTML, JavaScript</li>
            </ul>
          </div>

          <div className="rounded-md border border-[#26272e] bg-[#181a20] p-4">
            <h3 className="text-sm text-[#9ea0a6] uppercase tracking-wide mb-2">Soft Skills</h3>
            <ul className="text-white font-geist-mono text-sm space-y-1">
              <li>Team coordination</li>
              <li>Event planning</li>
              <li>Leadership</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
