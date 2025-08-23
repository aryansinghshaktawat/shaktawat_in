// src/components/sections/Experience.tsx
const Experience = () => {
  const experiences = [
    {
      role: "Cyber Security Intern",
      company: "SecureNet Inc.",
      timeline: "Summer 2024",
      description: "Assisted the security team with vulnerability assessments and penetration testing exercises."
    },
    {
      role: "President",
      company: "University Cybersecurity Club",
      timeline: "2023-2024",
      description: "Led a team of students to organize workshops, competitions, and guest lectures on cybersecurity."
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl mb-8 text-center">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-2 border-blue-400 pl-6">
              <h3 className="text-2xl">{exp.role}</h3>
              <p className="text-lg text-dark-text-200">{exp.company} | {exp.timeline}</p>
              <p className="mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
