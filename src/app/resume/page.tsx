// src/app/resume/page.tsx
import type { Metadata } from 'next';
import Resume from '@/components/sections/Resume';

const ResumePage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <Resume />
    </div>
  );
};

export default ResumePage;

export const metadata: Metadata = {
  title: 'Resume — Aryan Singh Shaktawat',
  description: 'View or download my resume in PDF.',
};
