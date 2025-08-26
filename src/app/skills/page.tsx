// src/app/skills/page.tsx
import Skills from '@/components/sections/Skills';

export default function SkillsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <Skills />
    </div>
  );
}

export const metadata = {
  title: 'Skills — Aryan Singh Shaktawat',
  description: 'Technical and soft skills overview.'
};
