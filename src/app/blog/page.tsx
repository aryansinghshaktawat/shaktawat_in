// src/app/blog/page.tsx
import type { Metadata } from 'next';
import Blogs from '@/components/sections/Blogs';

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <Blogs />
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Blog — Aryan Singh Shaktawat',
  description: 'Notes and articles on web dev, performance, DX, and OSINT.',
};
