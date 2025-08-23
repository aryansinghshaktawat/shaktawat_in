// src/components/sections/About.tsx
const About = () => {
  return (
    <section id="about" className="py-10 px-4">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h3 className="text-3xl font-bold mb-4">About Me</h3>
          <p className="text-lg text-light-text-200 dark:text-dark-text-200 mb-6">
            I am a 5th-semester B.Tech Computer Science student at UPES Dehradun, specializing in Cyber Security & Forensics. I am passionate about leveraging technology to solve real-world problems and have a keen interest in digital forensics and open-source intelligence.
          </p>
        </div>
        <div>
          <h3 className="text-3xl font-bold mb-4">Skills</h3>
          <ul className="list-disc list-inside text-lg text-light-text-200 dark:text-dark-text-200 space-y-2">
            <li>Python, C, C++</li>
            <li>CustomTkinter, Flutter (basics)</li>
            <li>HTML, CSS, JavaScript</li>
            <li>React, Next.js</li>
            <li>Digital Forensics & OSINT</li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <h3 className="text-3xl font-bold mb-4">Achievements</h3>
          <ul className="list-disc list-inside text-lg text-light-text-200 dark:text-dark-text-200 space-y-2">
            <li>NCC 'A' Certificate Holder</li>
            <li>Active member of the university dance club and event organizer.</li>
            <li>Participated in various hackathons and cybersecurity bootcamps.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
