// src/app/resume/page.tsx
import type { Metadata } from 'next';
import Resume from '@/components/sections/Resume';

const ResumePage = () => {
  return (
    <div className="animated-bg">
      {/* Resume Hero with Document Theme */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 glass"></div>
        
        {/* Floating document elements */}
        <div className="absolute top-16 left-16 w-24 h-32 bg-gradient-to-br from-[#65cdf9]/20 to-[#3b82f6]/10 rounded-lg border border-[#65cdf9]/20 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-20 h-28 bg-gradient-to-br from-[#10b981]/20 to-[#059669]/10 rounded-lg border border-[#10b981]/20 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-20 bg-gradient-to-br from-[#f59e0b]/20 to-[#d97706]/10 rounded-lg border border-[#f59e0b]/20 animate-spin-slow"></div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#65cdf9]/10 to-[#3b82f6]/5 border border-[#65cdf9]/30 rounded-full px-8 py-3 mb-8">
              <div className="w-4 h-4 border-2 border-[#65cdf9] rounded-sm animate-pulse flex items-center justify-center">
                <div className="w-1 h-1 bg-[#65cdf9] rounded-full"></div>
              </div>
              <span className="font-geist-mono text-sm text-[#65cdf9] font-bold tracking-wider">PROFESSIONAL PROFILE</span>
            </div>
            
            <h1 className="font-space-grotesk text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#65cdf9] via-[#3b82f6] to-[#10b981] mb-8 leading-tight">
              Resume & CV
            </h1>
            
            <p className="font-geist-mono text-xl text-[#9ea0a6] max-w-4xl mx-auto leading-relaxed">
              A comprehensive overview of my education, experience, and technical skills in an organized format
            </p>
          </div>

          {/* Resume sections preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="group glass rounded-2xl p-8 hover:bg-slate-800/50 hover-lift">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#65cdf9] to-[#3b82f6] flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                <span className="text-3xl">🎓</span>
              </div>
              <h3 className="font-space-grotesk text-xl font-bold text-white mb-3">Education</h3>
              <p className="font-geist-mono text-[#9ea0a6] mb-4">B.Tech CSE with Cybersecurity</p>
              <div className="text-[#65cdf9] font-geist-mono text-sm">UPES Dehradun</div>
            </div>
            
            <div className="group glass rounded-2xl p-8 hover:bg-slate-800/50 hover-lift">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#10b981] to-[#059669] flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                <span className="text-3xl">💼</span>
              </div>
              <h3 className="font-space-grotesk text-xl font-bold text-white mb-3">Experience</h3>
              <p className="font-geist-mono text-[#9ea0a6] mb-4">Cybersecurity & Development</p>
              <div className="text-[#10b981] font-geist-mono text-sm">Internships & Projects</div>
            </div>
            
            <div className="group bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl p-8 border border-[#334155] hover:border-[#f59e0b] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#f59e0b]/20">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#f59e0b] to-[#d97706] flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="font-space-grotesk text-xl font-bold text-white mb-3">Skills</h3>
              <p className="font-geist-mono text-[#9ea0a6] mb-4">Technical Expertise</p>
              <div className="text-[#f59e0b] font-geist-mono text-sm">Full-Stack & Security</div>
            </div>
          </div>

          {/* Download CTA */}
          <div className="bg-gradient-to-r from-[#65cdf9]/10 via-[#10b981]/10 to-[#f59e0b]/10 border border-[#65cdf9]/30 rounded-3xl p-12 text-center">
            <h3 className="font-space-grotesk text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#65cdf9] to-[#10b981] mb-6">
              Download Professional Resume
            </h3>
            <p className="font-geist-mono text-lg text-[#e6e6e8] mb-8 max-w-2xl mx-auto">
              Get the complete PDF version with detailed project descriptions and technical proficiencies
            </p>
            {/* Resume download buttons removed - no functional links available */}
          </div>
        </div>

        <style>{`
          @keyframes float-doc {
            0%, 100% { transform: translateY(0px) rotateZ(0deg); }
            50% { transform: translateY(-10px) rotateZ(2deg); }
          }
          .animate-float-doc {
            animation: float-doc 5s ease-in-out infinite;
          }
        `}</style>
      </section>

      {/* Resume Content */}
      <Resume />
    </div>
  );
};

export default ResumePage;

export const metadata: Metadata = {
  title: 'Resume — Aryan Singh Shaktawat',
  description: 'View or download my resume in PDF.',
};
