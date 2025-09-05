// src/app/blog/page.tsx
import type { Metadata } from 'next';
import Blogs from '@/components/sections/Blogs';

export default function BlogPage() {
  return (
    <div className="min-h-screen animated-bg overflow-hidden">
      {/* Floating geometric elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full animate-spin-slow"></div>
        <div className="absolute top-32 right-20 w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-24 h-24 bg-gradient-to-br from-pink-500/20 to-red-500/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg animate-spin-slow"></div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-3 glass rounded-full px-6 py-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></div>
              <span className="font-geist-mono text-sm text-cyan-400 font-semibold tracking-wide">BLOG & INSIGHTS</span>
            </div>
            
            <h1 className="font-space-grotesk text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6 leading-tight">
              Thoughts & Code
            </h1>
            
            <p className="font-geist-mono text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              Deep dives into web development, cybersecurity, and the tools that shape modern development
            </p>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="glass hover-lift p-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center mb-4">
                <span className="text-2xl">📝</span>
              </div>
              <h3 className="font-space-grotesk text-lg font-bold text-white mb-2">Technical Insights</h3>
              <p className="font-geist-mono text-sm text-white/60">In-depth articles on modern web development</p>
            </div>
            
            <div className="glass hover-lift p-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-space-grotesk text-lg font-bold text-white mb-2">Performance Tips</h3>
              <p className="font-geist-mono text-sm text-white/60">Optimization strategies and best practices</p>
            </div>
            
            <div className="glass hover-lift p-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center mb-4">
                <span className="text-2xl">🛠️</span>
              </div>
              <h3 className="font-space-grotesk text-lg font-bold text-white mb-2">Learning Journey</h3>
              <p className="font-geist-mono text-sm text-white/60">My experiences and lessons learned</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <Blogs />
    </div>
  );
}

export const metadata: Metadata = {
  title: "Blog & Insights",
  description: "Deep dives into web development, cybersecurity, and modern development tools by Aryan Singh Shaktawat.",
  openGraph: {
    title: "Blog & Insights — Aryan Singh Shaktawat",
    description: "Deep dives into web development, cybersecurity, and modern development tools.",
    type: "website",
  },
  alternates: {
    canonical: "https://shaktawat.in/blog",
  },
};
