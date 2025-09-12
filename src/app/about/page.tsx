// src/app/about/page.tsx
import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

const AboutPage = () => {
  // Redirect to home page since about content is now merged there
  redirect('/');
};

export default AboutPage;

export const metadata: Metadata = {
  title: 'About — Aryan Singh Shaktawat',
  description: 'Detailed bio, skills, and profile of Aryan Singh Shaktawat.',
};
