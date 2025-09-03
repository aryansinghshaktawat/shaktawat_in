// src/app/projects/page.tsx
import type { Metadata } from 'next';

const projects = [
  {
    id: 1,
    title: "BACHAAV – Disaster Rescue Application",
    techStack: "Flutter, Python (Telegram Bot), GPS & Mobile Sensors",
    description: "BACHAAV is a comprehensive disaster rescue system designed to reduce response time during emergencies. It combines a mobile application with a Telegram bot to ensure accessibility even in low-connectivity environments.",
    details: "The mobile app provides a minimal and intuitive interface where users are first asked: \"Are you safe?\". Depending on their response, the system offers three critical options:",
    options: [
      "Yes – Updates the system with a safe status.",
      "No, Immediate Help – Sends an SOS with precise GPS location to nearby rescue teams.",
      "Call Us – Connects directly to emergency support."
    ],
    features: [
      "Real-time GPS and sensor-based tracking (accelerometer, barometer) for accurate location and movement detection.",
      "Weather and disaster prediction model that integrates historical data to anticipate potential risks.",
      "Telegram Bot integration for lightweight accessibility and redundancy during poor connectivity.",
      "Automated alerts sent to emergency responders and volunteers within the affected area."
    ],
    impact: "BACHAAV demonstrates how technology can be leveraged to enhance disaster preparedness and emergency response efficiency. Its multi-platform approach ensures that help can be requested and delivered quickly, even in critical situations."
  },
  {
    id: 2,
    title: "Dharini – Gamified Eco-Education Platform",
    techStack: "Hackathon Prototype, Game-based Learning, Web/App Prototype",
    description: "Dharini was developed as a hackathon prototype to promote eco-consciousness through gamification. The platform transforms complex environmental concepts into interactive games and challenges, making sustainability education more approachable and engaging, particularly for students.",
    features: [
      "Educational Mini-Games focusing on recycling, waste management, and energy conservation.",
      "Reward System with eco-points, badges, and leaderboards to encourage continuous participation.",
      "Progress Tracking that helps users monitor their learning journey.",
      "Interactive Storytelling Modules to simulate real-life eco-friendly decision-making."
    ],
    impact: "Dharini bridges the gap between awareness and action by inspiring users to adopt sustainable habits through interactive learning. It highlights how gamification can be effectively used in the education sector to drive meaningful behavioral change."
  },
  {
    id: 3,
    title: "To-Do List Application",
    techStack: "Python / JavaScript, Local Storage / Database",
    description: "This project is a task management application developed to practice core programming and application lifecycle concepts. It offers users a simple and efficient way to organize daily tasks with a clean and minimal interface.",
    features: [
      "Add, update, and delete tasks dynamically.",
      "Track completion status of ongoing and completed tasks.",
      "Optional deadline feature with basic reminders.",
      "Lightweight design with responsive layout for accessibility."
    ],
    impact: "Although simple, this project helped in understanding CRUD operations, data persistence, and UI/UX design fundamentals, forming the foundation for building more complex applications."
  },
  {
    id: 4,
    title: "CIOT – Cloud and IoT Integration Platform",
    techStack: "IoT Devices, Cloud Computing, APIs",
    description: "CIOT explores the integration of Internet of Things (IoT) devices with cloud-based platforms for real-time monitoring, automation, and analytics. The project demonstrates how data collected from IoT sensors can be processed, stored, and analyzed in the cloud for meaningful insights.",
    features: [
      "Remote monitoring of IoT devices through a cloud dashboard.",
      "Real-time data synchronization between devices and cloud servers.",
      "Secure communication protocols for safe device-to-cloud interactions.",
      "Automation rules based on sensor thresholds (e.g., alerts or device triggers)."
    ],
    impact: "CIOT highlights the potential of IoT-cloud synergy in enabling smart environments such as smart homes, industrial automation, and connected healthcare. It showcases the ability to scale IoT solutions using cloud infrastructure."
  },
  {
    id: 5,
    title: "PYQ Analyser – Exam Preparation Assistant",
    techStack: "Python, Data Analysis, Natural Language Processing (optional)",
    description: "PYQ Analyser is a Python-based analytical tool designed to simplify exam preparation by analyzing previous year question papers (PYQs). It automates the process of identifying repeated questions, important topics, and frequently tested areas across multiple years.",
    features: [
      "Automated data ingestion from question papers in structured or unstructured formats.",
      "Frequency-based analysis to determine the weightage of specific topics.",
      "Trend recognition across multiple exam cycles.",
      "Optional integration of NLP to categorize questions by subject or topic."
    ],
    impact: "This tool reduces the time students spend on manual analysis, allowing them to focus on high-priority topics. It is a practical application of data analysis in education, making exam preparation more efficient and strategic."
  },
  {
    id: 6,
    title: "Personal Portfolio Website",
    techStack: "React, Tailwind CSS, JavaScript, Responsive Web Design",
    description: "This very portfolio website has been designed and developed as a project to showcase skills, achievements, and projects in a professional manner. The focus was on building a clean, minimal, and responsive design that adapts seamlessly across devices, while also reflecting a personal brand identity.",
    features: [
      "Responsive UI/UX: Fully optimized for desktops, tablets, and mobile devices.",
      "Modern Frontend Stack: Developed using React and styled with Tailwind CSS for a modular and efficient design workflow.",
      "Interactive Project Showcase: Each project is detailed with its tech stack, features, and impact.",
      "Scalable Design: The structure allows for easy addition of future projects and blog sections.",
      "Performance Optimizations: Fast load times and smooth transitions enhance the user experience."
    ],
    impact: "The portfolio website not only serves as a central hub for all academic, technical, and professional work but also demonstrates proficiency in frontend development and UI/UX design principles. It is a live example of the ability to combine technical execution with aesthetic presentation, making it both a personal brand and a working proof of skills."
  }
];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Projects</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A collection of projects demonstrating technical skills, problem-solving capabilities, and innovative thinking across various domains.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project) => (
            <div key={project.id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-slate-600 transition-all duration-300">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-white mb-3">{project.title}</h2>
                <div className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-lg text-sm font-medium mb-4">
                  {project.techStack}
                </div>
                <p className="text-slate-300 text-lg leading-relaxed">{project.description}</p>
              </div>

              {project.details && (
                <div className="mb-6">
                  <p className="text-slate-300 mb-4">{project.details}</p>
                  {project.options && (
                    <ol className="list-decimal list-inside space-y-2 ml-4">
                      {project.options.map((option, index) => (
                        <li key={index} className="text-slate-400">{option}</li>
                      ))}
                    </ol>
                  )}
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-4">Key Features:</h3>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-slate-700 pt-6">
                <h3 className="text-lg font-semibold text-white mb-3">Impact:</h3>
                <p className="text-slate-300 leading-relaxed">{project.impact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;

export const metadata: Metadata = {
  title: 'Projects — Aryan Singh Shaktawat',
  description: 'A collection of projects demonstrating technical skills, problem-solving capabilities, and innovative thinking across various domains.',
};
