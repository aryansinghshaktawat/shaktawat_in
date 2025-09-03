// src/app/projects/page.tsx
import type { Metadata } from 'next';
import Projects from '@/components/sections/Projects';

const ProjectsPage = () => {
  return (
    <>
      {/* Dynamic Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] py-24">
        <div className="absolute inset-0 opacity-25" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M10 10h60v60H10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        {/* Animated geometric shapes */}
        <div className="absolute top-20 left-20 w-40 h-40 border border-[#65cdf9]/20 rounded-lg rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-20 right-32 w-28 h-28 bg-gradient-to-br from-[#10b981]/30 to-transparent rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-10 w-16 h-16 border-2 border-[#f59e0b]/30 rounded-full animate-bounce-slow"></div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#10b981]/10 to-[#065f46]/5 border border-[#10b981]/30 rounded-full px-6 py-3 mb-8">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></div>
                <div className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
              <span className="font-geist-mono text-sm text-[#10b981] font-bold tracking-wider">PROJECT SHOWCASE</span>
            </div>
            
            <h1 className="font-space-grotesk text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] via-[#65cdf9] to-[#f59e0b] mb-8 leading-tight">
              Building Ideas
            </h1>
            
            <p className="font-geist-mono text-xl text-[#9ea0a6] max-w-4xl mx-auto leading-relaxed">
              From concept to deployment — exploring the intersection of creativity, code, and real-world impact
            </p>
          </div>

          {/* Interactive project categories */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {[
              { icon: "🌐", title: "Web Apps", desc: "Full-stack solutions", color: "65cdf9" },
              { icon: "🔒", title: "Security Tools", desc: "OSINT & forensics", color: "10b981" },
              { icon: "🤖", title: "AI Integration", desc: "ML-powered features", color: "f59e0b" },
              { icon: "⚡", title: "Performance", desc: "Speed & optimization", color: "8b5cf6" }
            ].map((category, index) => (
              <div key={index} className={`group bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl p-6 border border-[#334155] hover:border-[#${category.color}] transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-[#${category.color}]/20 cursor-pointer`}>
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-[#${category.color}] to-[#${category.color}]/70 flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300`}>
                  <span className="text-3xl">{category.icon}</span>
                </div>
                <h3 className="font-space-grotesk text-lg font-bold text-white mb-2 group-hover:text-[#65cdf9] transition-colors">{category.title}</h3>
                <p className="font-geist-mono text-sm text-[#9ea0a6]">{category.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.8; transform: scale(1.1); }
          }
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .animate-spin-slow {
            animation: spin-slow 20s linear infinite;
          }
          .animate-pulse-slow {
            animation: pulse-slow 4s ease-in-out infinite;
          }
          .animate-bounce-slow {
            animation: bounce-slow 3s ease-in-out infinite;
          }
        `}</style>
      </section>

      {/* Projects Content */}
      <Projects />
    </>
  );
};

export default ProjectsPage;

export const metadata: Metadata = {
  title: 'Projects — Aryan Singh Shaktawat',
  description: 'Selected projects with concise summaries and tech stacks.',
};
