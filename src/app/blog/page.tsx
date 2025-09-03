// src/app/blog/page.tsx
import type { Metadata } from 'next';
import Blogs from '@/components/sections/Blogs';

export default function BlogPage() {
  return (
    <>
      {/* Hero Section with Animated Background */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] py-20">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        {/* Floating gradient orbs */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-[#65cdf9]/20 to-[#3b82f6]/10 rounded-full blur-xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-[#10b981]/20 to-[#059669]/10 rounded-full blur-xl animate-float-delayed"></div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-[#65cdf9]/10 border border-[#65cdf9]/30 rounded-full px-6 py-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-[#65cdf9] animate-pulse"></div>
              <span className="font-geist-mono text-sm text-[#65cdf9] font-semibold tracking-wide">BLOG & INSIGHTS</span>
            </div>
            
            <h1 className="font-space-grotesk text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#65cdf9] via-[#93c5fd] to-[#10b981] mb-6 leading-tight">
              Thoughts & Code
            </h1>
            
            <p className="font-geist-mono text-xl text-[#9ea0a6] max-w-3xl mx-auto leading-relaxed">
              Deep dives into web development, performance optimization, and the tools that shape modern development
            </p>
          </div>

          {/* Animated feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="group bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl p-6 border border-[#334155] hover:border-[#65cdf9] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#65cdf9]/20">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#65cdf9] to-[#3b82f6] flex items-center justify-center mb-4">
                <span className="text-2xl">📝</span>
              </div>
              <h3 className="font-space-grotesk text-lg font-bold text-white mb-2">Technical Insights</h3>
              <p className="font-geist-mono text-sm text-[#9ea0a6]">In-depth articles on modern web development</p>
            </div>
            
            <div className="group bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl p-6 border border-[#334155] hover:border-[#10b981] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#10b981]/20">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#10b981] to-[#059669] flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-space-grotesk text-lg font-bold text-white mb-2">Performance Tips</h3>
              <p className="font-geist-mono text-sm text-[#9ea0a6]">Optimization strategies and best practices</p>
            </div>
            
            <div className="group bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl p-6 border border-[#334155] hover:border-[#f59e0b] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#f59e0b]/20">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#f59e0b] to-[#d97706] flex items-center justify-center mb-4">
                <span className="text-2xl">🛠️</span>
              </div>
              <h3 className="font-space-grotesk text-lg font-bold text-white mb-2">Learning Journey</h3>
              <p className="font-geist-mono text-sm text-[#9ea0a6]">My experiences and lessons learned</p>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes float-slow {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
          @keyframes float-delayed {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(-180deg); }
          }
          .animate-float-slow {
            animation: float-slow 8s ease-in-out infinite;
          }
          .animate-float-delayed {
            animation: float-delayed 6s ease-in-out infinite 2s;
          }
        `}</style>
      </section>

      {/* Blog Content */}
      <Blogs />
    </>
  );
}

export const metadata: Metadata = {
  title: 'Blog — Aryan Singh Shaktawat',
  description: 'Notes and articles on web dev, performance, DX, and OSINT.',
};
