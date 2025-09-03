// src/app/about/page.tsx
import type { Metadata } from 'next';
import About from '@/components/sections/About';

const AboutPage = () => {
  return (
    <>
      {/* Original About Component */}
      <About />
      
      {/* Innovative Personal Journey Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] py-20">
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          {/* Interactive Timeline */}
          <div className="text-center mb-16">
            <h2 className="font-space-grotesk text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#65cdf9] to-[#93c5fd] mb-4">
              My Journey in Code
            </h2>
            <p className="font-geist-mono text-lg text-[#9ea0a6] max-w-2xl mx-auto">
              From curious beginner to passionate builder — here&apos;s how I&apos;m learning by doing
            </p>
          </div>

          {/* Interactive Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {/* Learning Philosophy Card */}
            <div className="group relative bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl p-8 border border-[#334155] hover:border-[#65cdf9] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#65cdf9]/20">
              <div className="absolute inset-0 bg-gradient-to-br from-[#65cdf9]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#65cdf9] to-[#3b82f6] flex items-center justify-center mb-6">
                  <span className="text-2xl">🧠</span>
                </div>
                <h3 className="font-space-grotesk text-xl font-bold text-white mb-4">Learning Philosophy</h3>
                <p className="font-geist-mono text-[#e6e6e8] leading-relaxed">
                  <span className="text-[#65cdf9] font-bold">I am a learner first, and everything else follows.</span> 
                  I believe the best way to understand technology is to build it, break it, and rebuild it better.
                </p>
              </div>
            </div>

            {/* Current Focus Card */}
            <div className="group relative bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl p-8 border border-[#334155] hover:border-[#65cdf9] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#65cdf9]/20">
              <div className="absolute inset-0 bg-gradient-to-br from-[#65cdf9]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#10b981] to-[#059669] flex items-center justify-center mb-6">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="font-space-grotesk text-xl font-bold text-white mb-4">Current Adventures</h3>
                <div className="space-y-3 font-geist-mono text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#65cdf9]"></div>
                    <span className="text-[#e6e6e8]">AI model integrations (Llama-3, Perplexity)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#10b981]"></div>
                    <span className="text-[#e6e6e8]">OSINT tools that actually work</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#f59e0b]"></div>
                    <span className="text-[#e6e6e8]">Portfolio rebuild from scratch</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Reality Check Card */}
            <div className="group relative bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl p-8 border border-[#334155] hover:border-[#65cdf9] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#65cdf9]/20">
              <div className="absolute inset-0 bg-gradient-to-br from-[#65cdf9]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#f59e0b] to-[#d97706] flex items-center justify-center mb-6">
                  <span className="text-2xl">💯</span>
                </div>
                <h3 className="font-space-grotesk text-xl font-bold text-white mb-4">The Real Talk</h3>
                <p className="font-geist-mono text-[#e6e6e8] leading-relaxed">
                  I&apos;m that student who <span className="text-[#65cdf9]">Googles syntax</span>, celebrates error-free compilation, 
                  and gets genuinely excited about <span className="text-[#10b981]">solving real problems</span> with code.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Timeline */}
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#65cdf9] to-[#3b82f6] rounded-full"></div>
            
            <div className="space-y-16">
              {/* Student Journey */}
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/2 lg:pr-12">
                  <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl p-8 border border-[#334155] hover:border-[#65cdf9] transition-all duration-300">
                    <h3 className="font-space-grotesk text-2xl font-bold text-[#65cdf9] mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#65cdf9] to-[#3b82f6] flex items-center justify-center text-sm font-bold text-white">1</span>
                      Student Journey
                    </h3>
                    <p className="font-geist-mono text-[#e6e6e8] leading-relaxed">
                      Currently in my <span className="text-[#65cdf9] font-bold">third year of B.Tech CSE with Cyber Security &amp; Forensics</span> 
                      at UPES Dehradun. Every day brings new challenges, late-night coding sessions, and those amazing &quot;aha!&quot; moments.
                    </p>
                  </div>
                </div>
                <div className="lg:w-1/2 lg:pl-12">
                  <div className="text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 bg-[#65cdf9]/10 border border-[#65cdf9]/30 rounded-full px-4 py-2 mb-4">
                      <div className="w-2 h-2 rounded-full bg-[#65cdf9] animate-pulse"></div>
                      <span className="font-geist-mono text-sm text-[#65cdf9]">5th Semester & Counting</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Learning Style */}
              <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
                <div className="lg:w-1/2 lg:pl-12">
                  <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl p-8 border border-[#334155] hover:border-[#10b981] transition-all duration-300">
                    <h3 className="font-space-grotesk text-2xl font-bold text-[#10b981] mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#10b981] to-[#059669] flex items-center justify-center text-sm font-bold text-white">2</span>
                      Learning by Doing
                    </h3>
                    <p className="font-geist-mono text-[#e6e6e8] leading-relaxed">
                      <span className="text-[#10b981] font-bold">From Classroom Theory to Real-World Projects.</span> 
                      I learn best with my hands on the keyboard, building interfaces that don&apos;t make people want to throw their computers out the window.
                    </p>
                  </div>
                </div>
                <div className="lg:w-1/2 lg:pr-12">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#10b981]/10 border border-[#10b981]/30 rounded-lg p-4 text-center">
                      <div className="text-2xl mb-2">⚡</div>
                      <div className="font-geist-mono text-xs text-[#10b981] font-semibold">MONTH-LONG</div>
                      <div className="font-geist-mono text-xs text-[#e6e6e8]">Deep Dives</div>
                    </div>
                    <div className="bg-[#f59e0b]/10 border border-[#f59e0b]/30 rounded-lg p-4 text-center">
                      <div className="text-2xl mb-2">🎯</div>
                      <div className="font-geist-mono text-xs text-[#f59e0b] font-semibold">PRACTICAL</div>
                      <div className="font-geist-mono text-xs text-[#e6e6e8]">Focus</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Future Vision */}
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/2 lg:pr-12">
                  <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl p-8 border border-[#334155] hover:border-[#f59e0b] transition-all duration-300">
                    <h3 className="font-space-grotesk text-2xl font-bold text-[#f59e0b] mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#f59e0b] to-[#d97706] flex items-center justify-center text-sm font-bold text-white">3</span>
                      What&apos;s Next?
                    </h3>
                    <p className="font-geist-mono text-[#e6e6e8] leading-relaxed">
                      Every <span className="text-[#65cdf9]">API integration</span>, every <span className="text-[#10b981]">GUI component</span>, 
                      every <span className="text-[#f59e0b]">cybersecurity tool</span> I build is a step toward becoming the developer I want to be.
                    </p>
                  </div>
                </div>
                <div className="lg:w-1/2 lg:pl-12">
                  <div className="text-center">
                    <div className="inline-block bg-gradient-to-r from-[#65cdf9] to-[#10b981] rounded-2xl p-8 text-center">
                      <div className="text-4xl mb-4">🚀</div>
                      <div className="font-space-grotesk text-lg font-bold text-white mb-2">Ready to Collaborate?</div>
                      <div className="font-geist-mono text-sm text-white/80">Let&apos;s learn and build together</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20">
            <div className="bg-gradient-to-r from-[#65cdf9]/10 via-[#10b981]/10 to-[#f59e0b]/10 border border-[#65cdf9]/30 rounded-3xl p-12 max-w-4xl mx-auto">
              <h3 className="font-space-grotesk text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#65cdf9] to-[#10b981] mb-6">
                Let&apos;s Build Something Amazing
              </h3>
              <p className="font-geist-mono text-lg text-[#e6e6e8] mb-8 max-w-2xl mx-auto">
                Want to learn alongside me or see what a determined student can create? 
                <span className="text-[#65cdf9] font-bold"> Let&apos;s figure it out together.</span>
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-[#65cdf9] text-black px-6 py-3 rounded-full font-space-grotesk font-bold hover:bg-[#5bb8e3] transition-colors cursor-pointer">
                  B.Tech Student
                </div>
                <div className="bg-[#10b981] text-white px-6 py-3 rounded-full font-space-grotesk font-bold hover:bg-[#0d9668] transition-colors cursor-pointer">
                  Code Learner
                </div>
                <div className="bg-[#f59e0b] text-white px-6 py-3 rounded-full font-space-grotesk font-bold hover:bg-[#d97706] transition-colors cursor-pointer">
                  Future Problem Solver
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
        `}</style>
      </section>
    </>
  );
};

export default AboutPage;

export const metadata: Metadata = {
  title: 'About — Aryan Singh Shaktawat',
  description: 'Detailed bio, skills, and profile of Aryan Singh Shaktawat.',
};
