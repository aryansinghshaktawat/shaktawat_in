import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import ProjectsExperience from "@/components/sections/ProjectsExperience";
import Blogs from "@/components/sections/Blogs";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div data-reveal>
        <Hero />
      </div>
      <div data-reveal>
        <About />
      </div>
      <div data-reveal>
        <ProjectsExperience />
      </div>
      <div data-reveal>
        <Blogs />
      </div>
      <div data-reveal>
        <Contact />
      </div>
    </main>
  );
}
