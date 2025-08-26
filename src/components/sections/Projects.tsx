// src/components/sections/Projects.tsx
const Projects = () => {
  const projects = [
    {
      name: "Cyber Investigation OSINT Toolkit",
  description: "Toolkit for digital evidence management, OSINT collection, and reporting.",
  techStack: "Python, CustomTkinter, SQLite",
  link: "/projects#osint-toolkit",
    },
    {
      name: "PYQ Analyzer",
  description: "Predicts repeated exam questions using historical PYQ analysis and pattern detection.",
  techStack: "Python, pandas, scikit-learn",
  link: "/projects#pyq-analyzer",
    },
    {
      name: "BACHAAV App",
  description: "Emergency response mobile app prototype to coordinate responders and notify contacts.",
  techStack: "Flutter, Firebase",
  link: "/projects#bachaav-app",
    }
  ];

  return (
    <section id="projects" className="py-10 px-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="border border-light-text-200 dark:border-dark-text-200 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
            <p className="text-light-text-200 dark:text-dark-text-200 mb-4">{project.description}</p>
            <p className="text-sm mb-4"><strong>Tech Stack:</strong> {project.techStack}</p>
            <a href={project.link} className="text-accent hover:underline">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
