// src/components/sections/Resume.tsx
import Link from 'next/link';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mt-8">
    <h3 className="text-lg md:text-xl font-semibold tracking-tight mb-3">{title}</h3>
    <div className="space-y-2 text-sm md:text-[15px] text-[#c6c6c9] leading-relaxed">{children}</div>
  </section>
);

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#65cdf9]">{children}</li>
);

const Resume = () => {
  return (
    <div className="relative w-full bg-[#121318] text-white border-t border-[#202025]">
      <div aria-hidden className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3b82f652] to-transparent" />

      <div className="max-w-4xl mx-auto px-4 py-10 md:py-16">
        {/* Header */}
        <header className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">Aryan Singh Shaktawat</h1>
            <p className="text-sm md:text-[15px] text-[#c6c6c9] mt-1">B.Tech CSE (Cyber Security &amp; Forensics), 5th Semester — UPES Dehradun</p>
            <p className="text-sm text-[#9ea0a6] font-mono mt-1">Email: aryan.119503@stu.upes.ac.in · Mobile: +91 8279284045</p>
          </div>
          <div className="flex gap-2">
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-md border border-[#2a2b31] text-xs font-medium text-[#e6e6e8] bg-[#1b1c21] hover:bg-[#1f2026]">Download PDF</Link>
          </div>
        </header>

        <Section title="Scholastic Achievements">
          <ul className="space-y-1">
            <Bullet>NCC &lsquo;A&rsquo; Certificate Examination, 14 RAJ BN NCC</Bullet>
            <Bullet>Scored 92% in Class 10th (CBSE, 2021); 84% in Class 12th (CBSE, 2023)</Bullet>
            <Bullet>Awarded multiple honors for academic excellence, sports, and Olympiads</Bullet>
          </ul>
        </Section>

        <Section title="Internships &amp; Experience">
          <div className="rounded-lg border border-[#26272e] bg-[#181a20] p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h4 className="uppercase text-sm font-bold tracking-wide">Cyber Security Intern</h4>
                <p className="uppercase text-[12px] tracking-wide text-[#9ea0a6] font-mono">STF Cyber Cell, Uttarakhand Police, Dehradun</p>
              </div>
              <span className="text-[12px] text-[#9ea0a6] font-mono whitespace-nowrap">July 2025 – Present</span>
            </div>
            <ul className="mt-2 space-y-1">
              <Bullet>Assisted in real-world cyber investigations and OSINT operations</Bullet>
              <Bullet>Designed a Cyber Investigation OSINT Toolkit for digital case management and evidence logging (Python, CustomTkinter)</Bullet>
              <Bullet>Supported field officers with digital evidence workflows and case automation</Bullet>
            </ul>
          </div>
          <div className="rounded-lg border border-[#26272e] bg-[#181a20] p-4 mt-3">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h4 className="uppercase text-sm font-bold tracking-wide">Social Intern</h4>
                <p className="uppercase text-[12px] tracking-wide text-[#9ea0a6] font-mono">Shine India Foundation</p>
              </div>
            </div>
            <ul className="mt-2 space-y-1">
              <Bullet>Contributed to public awareness campaigns on eye donation and community outreach</Bullet>
              <Bullet>Event engagement and documentation</Bullet>
            </ul>
          </div>
        </Section>

        <Section title="Key Projects">
          <div className="rounded-lg border border-[#26272e] bg-[#181a20] p-4">
            <h4 className="uppercase text-sm font-bold tracking-wide">Cyber Investigation OSINT Toolkit</h4>
            <p className="text-[13px] text-[#9ea0a6]">Python · CustomTkinter</p>
            <ul className="mt-2 space-y-1">
              <Bullet>Toolkit for evidence collection and centralized case management</Bullet>
              <Bullet>User-friendly desktop interface for investigators</Bullet>
            </ul>
          </div>
          <div className="rounded-lg border border-[#26272e] bg-[#181a20] p-4 mt-3">
            <h4 className="uppercase text-sm font-bold tracking-wide">PYQ Analyzer – Repeated Question Predictor</h4>
            <p className="text-[13px] text-[#9ea0a6]">Python</p>
            <ul className="mt-2 space-y-1">
              <Bullet>Analyzes previous years’ question papers to find most repeated questions</Bullet>
              <Bullet>Predicts likely questions for upcoming exams with ranked outputs</Bullet>
            </ul>
          </div>
          <div className="rounded-lg border border-[#26272e] bg-[#181a20] p-4 mt-3">
            <h4 className="uppercase text-sm font-bold tracking-wide">Emergency Response App ‘BACHAAV’</h4>
            <p className="text-[13px] text-[#9ea0a6]">UPES CSA Hackathon 4.0</p>
          </div>
        </Section>

        <Section title="Workshops &amp; Training">
          <ul className="space-y-1">
            <Bullet>Drone Technology Bootcamp (NIT Kurukshetra, 2024)</Bullet>
            <Bullet>Flutter Workshop (Open Community, UPES)</Bullet>
          </ul>
        </Section>

        <Section title="Positions of Responsibility">
          <ul className="space-y-1">
            <Bullet>Operations Head, IEEE-SPS Student Branch, UPES (2025)</Bullet>
            <Bullet>Core Member, Taal Tarang (Official Dance Club, UPES)</Bullet>
            <Bullet>Organizing Team Member for college fests (TAAL TARANG, UURJA’23)</Bullet>
            <Bullet>Active Member, CSI Student Chapter (First Year)</Bullet>
          </ul>
        </Section>

        <Section title="Technical Skills">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-1">
            <Bullet>Python, C, C++</Bullet>
            <Bullet>CustomTkinter (Python)</Bullet>
            <Bullet>HTML, JavaScript</Bullet>
            <Bullet>Intro to Flutter</Bullet>
            <Bullet>Event/Team management</Bullet>
          </ul>
        </Section>

        <Section title="Relevant Courses">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-1">
            <Bullet>Problem Solving and Algorithms</Bullet>
            <Bullet>Python Programming</Bullet>
            <Bullet>C Programming</Bullet>
            <Bullet>C++ Programming</Bullet>
            <Bullet>OOP with Java</Bullet>
            <Bullet>Bash &amp; Linux Terminal</Bullet>
            <Bullet>Cyber Security Fundamentals</Bullet>
            <Bullet>Digital Forensics &amp; OSINT Methods</Bullet>
          </ul>
        </Section>

        <Section title="Academic Background">
          <div className="overflow-x-auto">
            <table className="w-full text-sm md:text-[15px]">
              <thead className="text-[#9ea0a6]">
                <tr className="text-left">
                  <th className="py-2 pr-4 font-medium">Year</th>
                  <th className="py-2 pr-4 font-medium">Qualification</th>
                  <th className="py-2 pr-4 font-medium">Institute / Board</th>
                  <th className="py-2 pr-4 font-medium">Percentage / CGPA</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-[#26272e]"><td className="py-2 pr-4">2023–Present</td><td className="py-2 pr-4">B.Tech CSE (Cyber Security &amp; Forensics)</td><td className="py-2 pr-4">School of Computer Science, UPES</td><td className="py-2 pr-4">7.8 CGPA</td></tr>
                <tr className="border-t border-[#26272e]"><td className="py-2 pr-4">2021–2023</td><td className="py-2 pr-4">Class 12th</td><td className="py-2 pr-4">Sir Padampat Singhania School, Kota — CBSE</td><td className="py-2 pr-4">84%</td></tr>
                <tr className="border-t border-[#26272e]"><td className="py-2 pr-4">2019–2021</td><td className="py-2 pr-4">Class 10th</td><td className="py-2 pr-4">Sir Padampat Singhania School, Kota — CBSE</td><td className="py-2 pr-4">92%</td></tr>
              </tbody>
            </table>
          </div>
        </Section>

        <Section title="Extracurricular Activities">
          <ul className="space-y-1">
            <Bullet>Organized and volunteered at college fests; Core Member, Taal Tarang</Bullet>
            <Bullet>Led peer groups for technical and non-technical activities</Bullet>
            <Bullet>Volunteered for blood and eye donation drives</Bullet>
            <Bullet>Certifications: Dholida’24 (Event Volunteer), IMA Blood Bank (Blood Donation)</Bullet>
          </ul>
        </Section>

        {/* Footer note */}
        <p className="mt-10 text-xs text-[#8a8a92]">Updated: Aug 2025 • Contact for references or detailed project walkthroughs.</p>
      </div>
    </div>
  );
};

export default Resume;
