// src/components/sections/HomeSkills.tsx
export default function HomeSkills() {
  return (
    <section id="skills" className="w-full bg-[#0f1112] text-white border-t border-[#202025]">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="uppercase text-left font-space-grotesk font-extrabold text-2xl md:text-3xl tracking-tight mb-6">Skills Snapshot</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="rounded-md border border-[#26272e] bg-[#181a20] p-4">
            <h3 className="text-sm text-[#9ea0a6] uppercase tracking-wide mb-2">Languages</h3>
            <ul className="text-white font-geist-mono text-sm space-y-1">
              <li>Python</li>
              <li>C</li>
              <li>C++</li>
            </ul>
          </div>

          <div className="rounded-md border border-[#26272e] bg-[#181a20] p-4">
            <h3 className="text-sm text-[#9ea0a6] uppercase tracking-wide mb-2">Frameworks & UI</h3>
            <ul className="text-white font-geist-mono text-sm space-y-1">
              <li>CustomTkinter</li>
              <li>Flutter (basics)</li>
              <li>HTML, JavaScript</li>
            </ul>
          </div>

          <div className="rounded-md border border-[#26272e] bg-[#181a20] p-4">
            <h3 className="text-sm text-[#9ea0a6] uppercase tracking-wide mb-2">Security</h3>
            <ul className="text-white font-geist-mono text-sm space-y-1">
              <li>Cyber Security Fundamentals</li>
              <li>Digital Forensics</li>
              <li>OSINT</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
