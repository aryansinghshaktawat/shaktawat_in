// src/app/experience/page.tsx
import type { Metadata } from 'next';
import Experience from '@/components/sections/Experience';

const ExperiencePage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <Experience />
    </div>
  );
};

export default ExperiencePage;

export const metadata: Metadata = {
  title: 'Experience — Aryan Singh Shaktawat',
  description: 'Professional experience and roles held by Aryan Singh Shaktawat.',
};
