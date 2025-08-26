// src/app/about/page.tsx
import type { Metadata } from 'next';
import About from '@/components/sections/About';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <About />
    </div>
  );
};

export default AboutPage;

export const metadata: Metadata = {
  title: 'About — Aryan Singh Shaktawat',
  description: 'Detailed bio, skills, and profile of Aryan Singh Shaktawat.',
};
