// src/app/skills/page.tsx
import Skills from '@/components/sections/Skills';

export default function SkillsPage() {
  return (
    <>
      {/* Skills Hero with Tech Theme */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] py-24">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M0 0h30v30H0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        {/* Floating tech icons */}
        <div className="absolute top-20 left-20 w-20 h-20 bg-gradient-to-br from-[#61dafb]/20 to-[#21d4fd]/10 rounded-xl flex items-center justify-center animate-tech-float">
          <span className="text-3xl">⚛️</span>
        </div>
        <div className="absolute top-32 right-32 w-16 h-16 bg-gradient-to-br from-[#f7df1e]/20 to-[#f0db4f]/10 rounded-xl flex items-center justify-center animate-tech-float" style={{animationDelay: '1s'}}>
          <span className="text-2xl">🟨</span>
        </div>
        <div className="absolute bottom-24 left-1/3 w-18 h-18 bg-gradient-to-br from-[#3178c6]/20 to-[#235a97]/10 rounded-xl flex items-center justify-center animate-tech-float" style={{animationDelay: '2s'}}>
          <span className="text-2xl">🔷</span>
        </div>
        <div className="absolute bottom-32 right-20 w-14 h-14 bg-gradient-to-br from-[#e34c26]/20 to-[#f16529]/10 rounded-xl flex items-center justify-center animate-tech-float" style={{animationDelay: '0.5s'}}>
          <span className="text-xl">🌐</span>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#10b981]/10 to-[#059669]/5 border border-[#10b981]/30 rounded-full px-8 py-3 mb-8">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-[#61dafb] animate-pulse"></div>
                <div className="w-2 h-2 rounded-full bg-[#f7df1e] animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-2 h-2 rounded-full bg-[#3178c6] animate-pulse" style={{animationDelay: '0.4s'}}></div>
                <div className="w-2 h-2 rounded-full bg-[#e34c26] animate-pulse" style={{animationDelay: '0.6s'}}></div>
              </div>
              <span className="font-geist-mono text-sm text-[#10b981] font-bold tracking-wider">TECHNICAL ARSENAL</span>
            </div>
            
            <h1 className="font-space-grotesk text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] via-[#65cdf9] to-[#8b5cf6] mb-8 leading-tight">
              Skills & Expertise
            </h1>
            
            <p className="font-geist-mono text-xl text-[#9ea0a6] max-w-4xl mx-auto leading-relaxed">
              A comprehensive toolkit built through hands-on projects, continuous learning, and real-world application
            </p>
          </div>

          {/* Skill categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: "🖥️", title: "Frontend", desc: "React, Next.js, Tailwind", color: "61dafb", delay: "0s" },
              { icon: "⚙️", title: "Backend", desc: "Node.js, APIs, Databases", color: "10b981", delay: "0.2s" },
              { icon: "🔒", title: "Security", desc: "OSINT, Forensics, Analysis", color: "f59e0b", delay: "0.4s" },
              { icon: "🛠️", title: "Tools", desc: "Git, Docker, VS Code", color: "8b5cf6", delay: "0.6s" }
            ].map((category, index) => (
              <div key={index} className={`group bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl p-6 border border-[#334155] hover:border-[#${category.color}] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#${category.color}]/20`} style={{animationDelay: category.delay}}>
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br from-[#${category.color}]/20 to-[#${category.color}]/10 border border-[#${category.color}]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-3xl">{category.icon}</span>
                </div>
                <h3 className="font-space-grotesk text-lg font-bold text-white mb-2 group-hover:text-[#65cdf9] transition-colors">{category.title}</h3>
                <p className="font-geist-mono text-sm text-[#9ea0a6]">{category.desc}</p>
              </div>
            ))}
          </div>

          {/* Skills mastery indicator */}
          <div className="bg-gradient-to-r from-[#10b981]/10 via-[#65cdf9]/10 to-[#8b5cf6]/10 border border-[#10b981]/30 rounded-3xl p-12 text-center">
            <h3 className="font-space-grotesk text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] to-[#8b5cf6] mb-6">
              Continuous Learning Mindset
            </h3>
            <p className="font-geist-mono text-lg text-[#e6e6e8] mb-8 max-w-3xl mx-auto">
              Technology evolves rapidly, and so do I. Every project teaches something new, every challenge becomes an opportunity to grow.
            </p>
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#10b981] to-[#65cdf9] rounded-full px-6 py-3">
                <div className="w-3 h-3 rounded-full bg-white animate-ping"></div>
                <span className="font-space-grotesk font-bold text-white">Currently Learning: AI/ML Integration</span>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes tech-float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            25% { transform: translateY(-5px) rotate(2deg); }
            50% { transform: translateY(-10px) rotate(0deg); }
            75% { transform: translateY(-5px) rotate(-2deg); }
          }
          .animate-tech-float {
            animation: tech-float 4s ease-in-out infinite;
          }
        `}</style>
      </section>

      {/* Skills Content */}
      <Skills />
    </>
  );
}

export const metadata = {
  title: 'Skills — Aryan Singh Shaktawat',
  description: 'Technical and soft skills overview.'
};
