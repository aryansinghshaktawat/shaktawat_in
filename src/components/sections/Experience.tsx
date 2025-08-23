// src/components/sections/Experience.tsx
const Experience = () => {
  const experiences = [
    {
      role: "Cyber Security Intern",
      company: "STF Cyber Cell",
      timeline: "June 2024 - July 2024",
      description: "Gained hands-on experience in cyber threat analysis, incident response, and digital forensics investigations."
    },
    {
      role: "Social Intern",
      company: "Aashman Foundation",
      timeline: "May 2023 - June 2023",
      description: "Contributed to community outreach programs and awareness campaigns."
    }
  ];

  return (
    <section id="experience" className="py-10 px-4">
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-4 border-accent pl-6">
            <h3 className="text-2xl font-bold">{exp.role}</h3>
            <p className="text-lg text-light-text-200 dark:text-dark-text-200">{exp.company} | {exp.timeline}</p>
            <p className="mt-2">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
