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
            <p className="text-sm text-[#9ea0a6] font-geist-mono mt-1">
              Email: <a href="mailto:aryan@shaktawat.in" className="underline decoration-dotted underline-offset-2 hover:decoration-solid">aryan@shaktawat.in</a>
              {' '}·{' '}
              Website: <a href="https://shaktawat.in" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted underline-offset-2 hover:decoration-solid">shaktawat.in</a>
              {' '}·{' '}
              LinkedIn: <a href="https://linkedin.com/in/aryansinghshaktawat" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted underline-offset-2 hover:decoration-solid">/aryansinghshaktawat</a>
              {' '}·{' '}
              GitHub: <a href="https://github.com/aryansinghshaktawat" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted underline-offset-2 hover:decoration-solid">/aryansinghshaktawat</a>
            </p>
          </div>
          <div className="flex gap-2">
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-md border border-[#2a2b31] text-xs font-medium text-[#e6e6e8] bg-[#1b1c21] hover:bg-[#1f2026]">Download PDF</Link>
          </div>
        </header>

        <Section title="Scholastic Achievements">
          <ul className="space-y-1">
            <Bullet>Secured 92% in Class 10th CBSE Board, Sir Padampat Singhania School, Kota (2021) with consistent academic excellence</Bullet>
            <Bullet>Achieved 84% in Class 12th CBSE Board, Sir Padampat Singhania School, Kota (2023) focusing on science and mathematics</Bullet>
            <Bullet>NCC &lsquo;A&rsquo; Certificate Examination, 14 RAJ BN NCC — Demonstrated leadership and discipline</Bullet>
            <Bullet>Awarded multiple honors and certificates for academic performance, sports participation, and Olympiad achievements</Bullet>
          </ul>
        </Section>

        <Section title="Internships &amp; Experience">
          <div className="rounded-lg border border-[#26272e] bg-[#181a20] p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h4 className="uppercase text-sm font-bold tracking-wide">Cyber Security Intern</h4>
                <p className="uppercase text-[12px] tracking-wide text-[#9ea0a6] font-geist-mono">STF Cyber Cell, Uttarakhand Police, Dehradun</p>
              </div>
              <span className="text-[12px] text-[#9ea0a6] font-geist-mono whitespace-nowrap">June 2025 – July 2025</span>
            </div>
            <ul className="mt-2 space-y-1">
              <Bullet>Assisted Special Task Force cyber unit in real-time cybercrime investigations and digital forensics operations</Bullet>
              <Bullet>Developed and maintained a Python-based Cyber Investigation OSINT Toolkit (CIOT) with CustomTkinter GUI for evidence collection, case tracking, and reporting</Bullet>
              <Bullet>Automated workflows for digital evidence management, improving efficiency in active cybercrime cases by 40%</Bullet>
              <Bullet>Collaborated with senior officers to streamline OSINT operations and case documentation</Bullet>
              <Bullet>Supported community outreach via public awareness campaigns on eye donation and digital safety</Bullet>
            </ul>
          </div>
          <div className="rounded-lg border border-[#26272e] bg-[#181a20] p-4 mt-3">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h4 className="uppercase text-sm font-bold tracking-wide">Social Intern</h4>
                <p className="uppercase text-[12px] tracking-wide text-[#9ea0a6] font-geist-mono">Shine India Foundation</p>
              </div>
              <span className="text-[12px] text-[#9ea0a6] font-geist-mono whitespace-nowrap">June 2024 – July 2024</span>
            </div>
            <ul className="mt-2 space-y-1">
              <Bullet>Participated in social campaigns and community engagement initiatives focusing on health awareness and public welfare</Bullet>
              <Bullet>Assisted in organizing events and managing digital outreach activities</Bullet>
              <Bullet>Contributed to volunteer coordination and event management for community service programs</Bullet>
            </ul>
          </div>
        </Section>

        <Section title="Key Projects">
          <ul className="space-y-2">
            <li className="rounded-lg border border-[#26272e] bg-[#181a20] p-4">
              <h4 className="uppercase text-sm font-bold tracking-wide">Cyber Investigation OSINT Toolkit (CIOT)</h4>
              <p className="text-[13px] text-[#9ea0a6]">Python · CustomTkinter · APIs</p>
              <ul className="mt-2 space-y-1">
                <Bullet>Comprehensive digital investigation tool featuring case management, evidence logging, automated report generation, and social media profile analysis</Bullet>
                <Bullet>Built with Python and CustomTkinter; integrated multiple APIs for enhanced functionality (Available on GitHub)</Bullet>
              </ul>
            </li>
            <li className="rounded-lg border border-[#26272e] bg-[#181a20] p-4">
              <h4 className="uppercase text-sm font-bold tracking-wide">PYQ Analyzer &ndash; Repeated Question Predictor</h4>
              <p className="text-[13px] text-[#9ea0a6]">Python · Data analysis &amp; visualization</p>
              <ul className="mt-2 space-y-1">
                <Bullet>Analyzes previous years&rsquo; question papers to predict frequently asked questions</Bullet>
                <Bullet>Provides ranked insights for targeted exam preparation with visualizations</Bullet>
              </ul>
            </li>
            <li className="rounded-lg border border-[#26272e] bg-[#181a20] p-4">
              <h4 className="uppercase text-sm font-bold tracking-wide">Personal Portfolio Website (shaktawat.in)</h4>
              <p className="text-[13px] text-[#9ea0a6]">Next.js · Tailwind · App Router</p>
              <ul className="mt-2 space-y-1">
                <Bullet>Responsive multi-page portfolio with dark/light theme and integrated resume showcase</Bullet>
                <Bullet>Custom domain and modern UI patterns</Bullet>
              </ul>
            </li>
            <li className="rounded-lg border border-[#26272e] bg-[#181a20] p-4">
              <h4 className="uppercase text-sm font-bold tracking-wide">Todo App</h4>
              <p className="text-[13px] text-[#9ea0a6]">Python · DB integration</p>
              <ul className="mt-2 space-y-1">
                <Bullet>Full-featured task manager with persistent storage</Bullet>
              </ul>
            </li>
            <li className="rounded-lg border border-[#26272e] bg-[#181a20] p-4">
              <h4 className="uppercase text-sm font-bold tracking-wide">Emergency Response App &lsquo;BACHAAV&rsquo;</h4>
              <p className="text-[13px] text-[#9ea0a6]">UPES CSA Hackathon 4.0</p>
              <ul className="mt-2 space-y-1">
                <Bullet>Co-developed a secure alert app with real-time notifications, location services, and robust backend security</Bullet>
              </ul>
            </li>
            <li className="rounded-lg border border-[#26272e] bg-[#181a20] p-4">
              <h4 className="uppercase text-sm font-bold tracking-wide">Data Structures Implementation (2024)</h4>
              <p className="text-[13px] text-[#9ea0a6]">Multi-language implementations</p>
              <ul className="mt-2 space-y-1">
                <Bullet>Comprehensive collection of data structures and algorithms demonstrating core CS fundamentals</Bullet>
              </ul>
            </li>
          </ul>
        </Section>

        <Section title="Workshops &amp; Training">
          <ul className="space-y-1">
            <Bullet>Drone Technology Bootcamp &mdash; NIT Kurukshetra (2024): Hands-on experience in drone piloting, embedded sensor integration, and autonomous control systems</Bullet>
            <Bullet>Flutter Workshop &mdash; Open Community, UPES: Practical training in cross-platform mobile app development</Bullet>
            <Bullet>Event Volunteer Certificate &mdash; Dholida&rsquo;24</Bullet>
            <Bullet>Blood Donation Certificate &mdash; IMA Blood Bank</Bullet>
          </ul>
        </Section>

        <Section title="Positions of Responsibility">
          <ul className="space-y-1">
            <Bullet>Operations Head &mdash; IEEE Signal Processing Society Student Branch Chapter, UPES (2025): Led operations, coordinated technical sessions, managed logistics, and enhanced engagement</Bullet>
            <Bullet>Core Member &mdash; Taal Tarang (Official Dance Club, UPES): Event organization, choreography planning, and peer collaboration</Bullet>
            <Bullet>Organizing Team Member &mdash; Major college fests (TAAL TARANG, UURJA&rsquo;23): Planning, coordination, and execution for 1000+ participants</Bullet>
            <Bullet>Active Member &mdash; CSI Student Chapter: Backend operations and technical event support</Bullet>
          </ul>
        </Section>

        <Section title="Technical Skills">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-1">
            <Bullet>Programming Languages: Python (Advanced), C, C++, Java (OOP), JavaScript, HTML</Bullet>
            <Bullet>Frameworks &amp; Tools: CustomTkinter, Flutter, Git, GitHub</Bullet>
            <Bullet>Specialized: Digital Forensics, OSINT Methods, Cyber Security Fundamentals</Bullet>
            <Bullet>Systems: Linux Terminal Operations, Bash Scripting</Bullet>
            <Bullet>Database &amp; Web: DB management, Web basics, API integration</Bullet>
            <Bullet>Soft Skills: Event management, team coordination, social media content, poster design, leadership</Bullet>
          </ul>
        </Section>

        <Section title="Relevant Courses">
          <div className="space-y-2">
            <div>
              <div className="text-[#9ea0a6] text-[13px] mb-1">Core Computer Science</div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-1">
                <Bullet>Problem Solving and Algorithms</Bullet>
                <Bullet>Object Oriented Analysis and Design (OOAD)</Bullet>
                <Bullet>Data Structures and Algorithms</Bullet>
              </ul>
            </div>
            <div>
              <div className="text-[#9ea0a6] text-[13px] mb-1">Cybersecurity Specialization</div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-1">
                <Bullet>Cyber Security Fundamentals</Bullet>
                <Bullet>Digital Forensics &amp; OSINT Methods</Bullet>
                <Bullet>Cryptography</Bullet>
              </ul>
            </div>
            <div>
              <div className="text-[#9ea0a6] text-[13px] mb-1">Mathematics &amp; Systems</div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-1">
                <Bullet>Probability Mathematics</Bullet>
                <Bullet>FLAT (Fundamentals of Logic and Automata Theory)</Bullet>
                <Bullet>Embedded Hardware and Peripheral Techniques (EHPT)</Bullet>
              </ul>
            </div>
          </div>
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
                <tr className="border-t border-[#26272e]"><td className="py-2 pr-4">2023 – Present</td><td className="py-2 pr-4">B.Tech CSE (Cyber Security &amp; Forensics)</td><td className="py-2 pr-4">School of Computer Science, UPES, Dehradun</td><td className="py-2 pr-4">CGPA: 7.8 / 10</td></tr>
                <tr className="border-t border-[#26272e]"><td className="py-2 pr-4">2021 – 2023</td><td className="py-2 pr-4">Class 12th (Science)</td><td className="py-2 pr-4">Sir Padampat Singhania School, Kota — CBSE</td><td className="py-2 pr-4">84%</td></tr>
                <tr className="border-t border-[#26272e]"><td className="py-2 pr-4">2019 – 2021</td><td className="py-2 pr-4">Class 10th</td><td className="py-2 pr-4">Sir Padampat Singhania School, Kota — CBSE</td><td className="py-2 pr-4">92%</td></tr>
              </tbody>
            </table>
          </div>
        </Section>

        <Section title="Extracurricular Activities">
          <ul className="space-y-1">
            <Bullet>Cultural Leadership: Core Member of Taal Tarang (Official Dance Club, UPES) — participated in performances and helped organize major cultural events</Bullet>
            <Bullet>Event Management: Organizational roles in major college fests (TAAL TARANG, UURJA&rsquo;23), managing operations, logistics, and coordination for 1000+ attendees</Bullet>
            <Bullet>Peer Leadership: Led technical and non-technical peer groups, driving teamwork and collaborative learning</Bullet>
            <Bullet>Community Service: Active volunteer for blood and eye donation drives with IMA Blood Bank and Shine India Foundation</Bullet>
          </ul>
        </Section>

        {/* Footer note */}
        <p className="mt-10 text-xs text-[#8a8a92]">Updated: Aug 2025 • Contact for references or detailed project walkthroughs.</p>
      </div>
    </div>
  );
};

export default Resume;
