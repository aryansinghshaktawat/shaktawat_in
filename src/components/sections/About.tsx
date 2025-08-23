// src/components/sections/About.tsx
const About = () => {
  return (
    <section id="about" className="py-20 px-4 container mx-auto">
      <h2 className="text-4xl mb-8 text-center">About Me</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl mb-4">Bio</h3>
          <p className="text-dark-text-200">
            I am Aryan Singh Shaktawat, a passionate and driven Cyber Security & Forensics student. My journey into the world of technology began with a curiosity for how things work, which has evolved into a deep-seated interest in protecting digital systems and investigating cybercrimes.
          </p>
        </div>
        <div>
          <h3 className="text-2xl mb-4">Education</h3>
          <p className="text-dark-text-200">
            <strong>Degree:</strong> B.Tech in Computer Science with Specialization in Cyber Security & Forensics<br />
            <strong>Institution:</strong> Vellore Institute of Technology, Bhopal<br />
            <strong>Expected Graduation:</strong> 2026
          </p>
        </div>
        <div>
          <h3 className="text-2xl mb-4">Skills</h3>
          <ul className="list-disc list-inside text-dark-text-200">
            <li>Penetration Testing</li>
            <li>Network Security</li>
            <li>Digital Forensics</li>
            <li>Python, C++, Java</li>
            <li>React, Next.js</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl mb-4">Extracurricular Activities</h3>
          <p className="text-dark-text-200">
            Member of the university's cybersecurity club, participating in CTF competitions and organizing workshops.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
