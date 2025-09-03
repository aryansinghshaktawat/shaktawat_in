// src/app/experience/page.tsx
import type { Metadata } from 'next';
import Experience from '@/components/sections/Experience';

const ExperiencePage = () => {
  return (
    <>
      {/* Dynamic Experience Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] py-24">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M0 20h40v20H0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        {/* Animated timeline elements */}
        <div className="absolute top-20 left-20 w-8 h-32 bg-gradient-to-b from-[#8b5cf6] to-transparent rounded-full animate-timeline-pulse"></div>
        <div className="absolute top-40 right-32 w-6 h-24 bg-gradient-to-b from-[#65cdf9] to-transparent rounded-full animate-timeline-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/3 w-4 h-16 bg-gradient-to-b from-[#10b981] to-transparent rounded-full animate-timeline-pulse" style={{animationDelay: '2s'}}></div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#8b5cf6]/10 to-[#6366f1]/5 border border-[#8b5cf6]/30 rounded-full px-8 py-3 mb-8">
              <div className="flex gap-1">
                <div className="w-1 h-4 bg-[#8b5cf6] rounded-full animate-pulse"></div>
                <div className="w-1 h-6 bg-[#65cdf9] rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-1 h-4 bg-[#10b981] rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
              <span className="font-geist-mono text-sm text-[#8b5cf6] font-bold tracking-wider">PROFESSIONAL JOURNEY</span>
            </div>
            
            <h1 className="font-space-grotesk text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] via-[#65cdf9] to-[#10b981] mb-8 leading-tight">
              Experience & Growth
            </h1>
            
            <p className="font-geist-mono text-xl text-[#9ea0a6] max-w-4xl mx-auto leading-relaxed">
              Every internship, project, and challenge has shaped my understanding of technology and teamwork
            </p>
          </div>

          {/* Experience highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="group bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl p-8 border border-[#334155] hover:border-[#8b5cf6] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#8b5cf6]/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#8b5cf6] to-[#6366f1] flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-3xl">🔒</span>
                </div>
                <div>
                  <h3 className="font-space-grotesk text-xl font-bold text-white">Cybersecurity</h3>
                  <p className="font-geist-mono text-sm text-[#9ea0a6]">STF Cyber Cell</p>
                </div>
              </div>
              <p className="font-geist-mono text-[#e6e6e8] leading-relaxed">Hands-on experience in threat analysis, incident response, and digital forensics investigations</p>
            </div>
            
            <div className="group bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl p-8 border border-[#334155] hover:border-[#10b981] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#10b981]/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#10b981] to-[#059669] flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-3xl">🌟</span>
                </div>
                <div>
                  <h3 className="font-space-grotesk text-xl font-bold text-white">Community Impact</h3>
                  <p className="font-geist-mono text-sm text-[#9ea0a6]">Shine India Foundation</p>
                </div>
              </div>
              <p className="font-geist-mono text-[#e6e6e8] leading-relaxed">Supported outreach initiatives and digital awareness campaigns, learning project coordination</p>
            </div>
          </div>

          {/* Timeline preview */}
          <div className="bg-gradient-to-r from-[#8b5cf6]/10 via-[#65cdf9]/10 to-[#10b981]/10 border border-[#8b5cf6]/30 rounded-3xl p-12 text-center">
            <h3 className="font-space-grotesk text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] to-[#10b981] mb-4">
              Building Experience Through Action
            </h3>
            <p className="font-geist-mono text-lg text-[#e6e6e8] mb-6">
              From classroom theory to real-world application — every opportunity teaches something new
            </p>
            <div className="inline-flex items-center gap-2 text-[#65cdf9]">
              <span className="font-geist-mono text-sm">↓</span>
              <span className="font-geist-mono text-sm font-semibold">Explore Full Timeline Below</span>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes timeline-pulse {
            0%, 100% { opacity: 0.3; transform: scaleY(1); }
            50% { opacity: 0.8; transform: scaleY(1.2); }
          }
          .animate-timeline-pulse {
            animation: timeline-pulse 3s ease-in-out infinite;
          }
        `}</style>
      </section>

      {/* Experience Content */}
      <Experience />
    </>
  );
};

export default ExperiencePage;

export const metadata: Metadata = {
  title: 'Experience — Aryan Singh Shaktawat',
  description: 'Professional experience and roles held by Aryan Singh Shaktawat.',
};
