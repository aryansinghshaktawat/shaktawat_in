"use client";
import ContactInvite from '@/components/sections/ContactInvite';
import HackerName from '@/components/ui/HackerName';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Modern Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_49%,rgba(59,130,246,0.05)_50%,transparent_51%)] bg-[length:20px_20px] animate-pulse"></div>
        
        {/* Floating geometric elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 right-10 w-20 h-20 border border-cyan-400/20 rounded-full animate-bounce"></div>
          <div className="absolute bottom-40 left-10 w-16 h-16 bg-gradient-to-r from-blue-400/10 to-purple-500/10 rounded-lg animate-pulse"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center min-h-screen max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left: Hero Content */}
            <div className="text-center lg:text-left">
              <HackerName text="Aryan Singh Shaktawat" className="text-4xl md:text-6xl font-space-grotesk font-extrabold text-white mb-6" />
              <p className="text-xl md:text-2xl text-slate-300 mb-8 font-geist-mono">
                Aspiring <span className="text-cyan-400 font-bold">Cybersecurity</span> & <span className="text-blue-400 font-bold">Tech Enthusiast</span>
              </p>
              <p className="text-lg text-slate-400 mb-8 max-w-lg">
                B.Tech CSE student passionate about building tools, integrating AI models, and exploring cybersecurity & forensics.
              </p>
              
              {/* Quick stats */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
                <div className="glass rounded-full px-4 py-2">
                  <span className="text-cyan-400 font-bold">5th</span>
                  <span className="text-slate-300 ml-1">Semester</span>
                </div>
                <div className="glass rounded-full px-4 py-2">
                  <span className="text-blue-400 font-bold">UPES</span>
                  <span className="text-slate-300 ml-1">Dehradun</span>
                </div>
                <div className="glass rounded-full px-4 py-2">
                  <span className="text-green-400 font-bold">Full-Stack</span>
                  <span className="text-slate-300 ml-1">Developer</span>
                </div>
              </div>
            </div>

            {/* Right: Profile & Skills */}
            <div className="flex justify-center lg:justify-end">
              <div className="glass rounded-3xl p-8 max-w-sm hover-lift">
                <div className="relative mb-6">
                  <Image
                    src="/profile.webp"
                    alt="Aryan Singh Shaktawat"
                    width={300}
                    height={300}
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                  <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-space-grotesk font-bold text-white mb-4">Current Focus</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                    <span className="text-slate-300 text-sm">AI model integrations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    <span className="text-slate-300 text-sm">OSINT tools development</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    <span className="text-slate-300 text-sm">Cybersecurity research</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                    <span className="text-slate-300 text-sm">Portfolio modernization</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Journey Section */}
      <section className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 py-20 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="font-space-grotesk text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-6">
              My Journey in Code
            </h2>
            <p className="font-geist-mono text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              From curious beginner to passionate builder — transforming ideas into reality through code
            </p>
          </div>

          {/* Modern Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            
            {/* Learning Philosophy Card */}
            <div className="group glass rounded-3xl p-8 hover-lift border border-cyan-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-400/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🧠</span>
                </div>
                <h3 className="font-space-grotesk text-2xl font-bold text-white mb-4">Learning Philosophy</h3>
                <p className="font-geist-mono text-slate-300 leading-relaxed">
                  <span className="text-cyan-400 font-bold">I am a learner first, and everything else follows.</span> 
                  The best way to understand technology is to build it, break it, and rebuild it better.
                </p>
              </div>
            </div>

            {/* Current Adventures Card */}
            <div className="group glass rounded-3xl p-8 hover-lift border border-green-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-emerald-400/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="font-space-grotesk text-2xl font-bold text-white mb-4">Current Adventures</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                    <span className="text-slate-300">AI model integrations (Llama-3, Perplexity)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                    <span className="text-slate-300">OSINT tools that actually work</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></div>
                    <span className="text-slate-300">Portfolio rebuild from scratch</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Real Talk Card */}
            <div className="group glass rounded-3xl p-8 hover-lift border border-yellow-500/20 md:col-span-2 lg:col-span-1">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-orange-400/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">💯</span>
                </div>
                <h3 className="font-space-grotesk text-2xl font-bold text-white mb-4">The Real Talk</h3>
                <p className="font-geist-mono text-slate-300 leading-relaxed">
                  I&apos;m that student who <span className="text-cyan-400 font-bold">Googles syntax</span>, celebrates error-free compilation, 
                  and gets genuinely excited about <span className="text-green-400 font-bold">solving real problems</span> with code.
                </p>
              </div>
            </div>
          </div>

          {/* Modern Timeline */}
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 via-blue-400 to-purple-400 rounded-full"></div>
            
            <div className="space-y-20">
              {/* Student Journey */}
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/2 lg:pr-12">
                  <div className="glass rounded-3xl p-8 hover-lift border border-cyan-500/20">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-lg">1</div>
                      <h3 className="font-space-grotesk text-2xl font-bold text-cyan-400">Student Journey</h3>
                    </div>
                    <p className="font-geist-mono text-slate-300 leading-relaxed">
                      Currently in my <span className="text-cyan-400 font-bold">third year of B.Tech CSE with Cyber Security &amp; Forensics</span> 
                      at UPES Dehradun. Every day brings new challenges, late-night coding sessions, and those amazing &quot;aha!&quot; moments.
                    </p>
                  </div>
                </div>
                <div className="lg:w-1/2 lg:pl-12">
                  <div className="text-center lg:text-left">
                    <div className="inline-flex items-center gap-3 glass px-6 py-3 rounded-full border border-cyan-500/20">
                      <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></div>
                      <span className="font-geist-mono text-cyan-400 font-bold">5th Semester & Counting</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Learning Style */}
              <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
                <div className="lg:w-1/2 lg:pl-12">
                  <div className="glass rounded-3xl p-8 hover-lift border border-green-500/20">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-white font-bold text-lg">2</div>
                      <h3 className="font-space-grotesk text-2xl font-bold text-green-400">Learning by Doing</h3>
                    </div>
                    <p className="font-geist-mono text-slate-300 leading-relaxed">
                      <span className="text-green-400 font-bold">From Classroom Theory to Real-World Projects.</span> 
                      I learn best with my hands on the keyboard, building interfaces that don&apos;t make people want to throw their computers out the window.
                    </p>
                  </div>
                </div>
                <div className="lg:w-1/2 lg:pr-12">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="glass rounded-2xl p-6 text-center hover-lift border border-green-500/20">
                      <div className="text-3xl mb-3">⚡</div>
                      <div className="font-geist-mono text-sm text-green-400 font-bold">MONTH-LONG</div>
                      <div className="font-geist-mono text-sm text-slate-300">Deep Dives</div>
                    </div>
                    <div className="glass rounded-2xl p-6 text-center hover-lift border border-yellow-500/20">
                      <div className="text-3xl mb-3">🎯</div>
                      <div className="font-geist-mono text-sm text-yellow-400 font-bold">PRACTICAL</div>
                      <div className="font-geist-mono text-sm text-slate-300">Focus</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Future Vision */}
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/2 lg:pr-12">
                  <div className="glass rounded-3xl p-8 hover-lift border border-purple-500/20">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-white font-bold text-lg">3</div>
                      <h3 className="font-space-grotesk text-2xl font-bold text-purple-400">What&apos;s Next?</h3>
                    </div>
                    <p className="font-geist-mono text-slate-300 leading-relaxed">
                      Every <span className="text-cyan-400 font-bold">API integration</span>, every <span className="text-green-400 font-bold">GUI component</span>, 
                      every <span className="text-yellow-400 font-bold">cybersecurity tool</span> I build is a step toward becoming the developer I want to be.
                    </p>
                  </div>
                </div>
                <div className="lg:w-1/2 lg:pl-12">
                  <div className="text-center">
                    <div className="glass rounded-3xl p-8 text-center hover-lift border border-purple-500/20">
                      <div className="text-5xl mb-4">🚀</div>
                      <div className="font-space-grotesk text-xl font-bold text-white mb-2">Ready to Collaborate?</div>
                      <div className="font-geist-mono text-slate-400">Let&apos;s learn and build together</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-24">
            <div className="glass rounded-3xl p-12 max-w-4xl mx-auto hover-lift border border-cyan-500/20">
              <h3 className="font-space-grotesk text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
                Let&apos;s Build Something Amazing
              </h3>
              <p className="font-geist-mono text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Want to learn alongside me or see what a determined student can create? 
                <span className="text-cyan-400 font-bold"> Let&apos;s figure it out together.</span>
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-4 rounded-full font-space-grotesk font-bold hover:scale-105 transition-transform cursor-pointer">
                  B.Tech Student
                </div>
                <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-8 py-4 rounded-full font-space-grotesk font-bold hover:scale-105 transition-transform cursor-pointer">
                  Code Learner
                </div>
                <div className="bg-gradient-to-r from-purple-400 to-pink-500 text-white px-8 py-4 rounded-full font-space-grotesk font-bold hover:scale-105 transition-transform cursor-pointer">
                  Future Problem Solver
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div data-reveal className="animated-bg">
        <ContactInvite />
      </div>
    </main>
  );
}
