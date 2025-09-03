// src/components/sections/Education.tsx
export default function Education() {
  return (
    <section id="education" className="w-full bg-[#0f1112] text-white border-t border-[#202025]">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="uppercase text-left font-space-grotesk font-extrabold text-2xl md:text-3xl tracking-tight mb-6">Educational Journey</h2>
        <div className="rounded-md border border-[#26272e] bg-[#181a20] p-6">
          <h3 className="font-bold text-lg">B.Tech CSE (Cyber Security &amp; Forensics)</h3>
          <p className="text-sm text-[#c6c6c9] mt-2">UPES — CGPA: 7.8</p>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm text-[#9ea0a6] uppercase tracking-wide">Relevant Coursework</h4>
              <ul className="mt-2 font-geist-mono text-sm text-white space-y-1">
                <li>Network Security</li>
                <li>Digital Forensics</li>
                <li>Operating Systems &amp; C/C++</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm text-[#9ea0a6] uppercase tracking-wide">Certifications</h4>
              <ul className="mt-2 font-geist-mono text-sm text-white space-y-1">
                <li>NCC &apos;A&apos;</li>
                <li>Online courses in OSINT &amp; Cyber Fundamentals</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
