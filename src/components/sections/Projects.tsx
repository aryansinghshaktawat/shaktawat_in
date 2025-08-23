// src/components/sections/Projects.tsx
const Projects = () => {
  const projects = [
    {
      name: "Project Alpha",
      description: "A web application for secure file sharing.",
      techStack: "React, Node.js, Express, MongoDB",
      link: "#"
    },
    {
      name: "Project Beta",
      description: "A network monitoring tool.",
      techStack: "Python, Scapy, Wireshark",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-dark-background-900">
      <div className="container mx-auto">
        <h2 className="text-4xl mb-8 text-center">Portfolio</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="border border-dark-text-200 p-6 rounded-lg">
              <h3 className="text-2xl mb-2">{project.name}</h3>
              <p className="text-dark-text-200 mb-4">{project.description}</p>
              <p className="text-sm mb-4"><strong>Tech Stack:</strong> {project.techStack}</p>
              <a href={project.link} className="text-blue-400 hover:underline">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
