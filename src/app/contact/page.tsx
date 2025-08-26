// src/app/contact/page.tsx
import type { Metadata } from 'next';
import Contact from '@/components/sections/Contact';

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <Contact />
    </div>
  );
};

export default ContactPage;

export const metadata: Metadata = {
  title: 'Contact — Aryan Singh Shaktawat',
  description: 'Get in touch via email or social—let’s connect.',
};
