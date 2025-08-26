// src/components/sections/Experience.tsx
const Experience = () => {
  const experiences = [
    {
      role: "Cyber Security Intern",
  company: "STF Cyber Cell",
  timeline: "June 2024 - July 2024",
  description: "Hands-on work in threat analysis, incident response, and digital forensics investigations; contributed to case triage and tool automation."
    },
    {
  role: "Intern",
  company: "Shine India Foundation",
  timeline: "May 2023 - June 2023",
  description: "Supported outreach initiatives and assisted with digital awareness campaigns; learned project coordination and team collaboration."
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
