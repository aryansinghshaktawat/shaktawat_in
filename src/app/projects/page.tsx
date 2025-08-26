// src/app/projects/page.tsx
import type { Metadata } from 'next';
import Projects from '@/components/sections/Projects';

const ProjectsPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <Projects />
    </div>
  );
};

export default ProjectsPage;

export const metadata: Metadata = {
  title: 'Projects — Aryan Singh Shaktawat',
  description: 'Selected projects with concise summaries and tech stacks.',
};
