"use client";
import ContactInvite from '@/components/sections/ContactInvite';
import HackerName from '@/components/ui/HackerName';
import JsonLd from '@/components/seo/JsonLd';
import Image from 'next/image';

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Aryan Singh Shaktawat",
  "alternateName": [
    "Aryan Shaktawat","Aryan S Shaktawat","A S Shaktawat","Aryan Singh",
    "Aryan Shaktawat resume","Aryan Shaktawat projects","Aryan Shaktawat blog",
    "Aryan Shaktawat GitHub","Aryan Shaktawat LinkedIn","Aryan Shaktawat UPES",
    "aryan singh shaktawat","Aryan S","A. Shaktawat","AryanShaktawat",
    "Aryan-Shaktawat","Aryan Shaktawat cybersecurity","Aryan Shaktawat forensics",
    "Aryan Shaktawat full stack","Aryan Shaktawat developer","Aryan Shaktawat CSE"
  ],
  "url": "https://shaktawat.in",
  "sameAs": [
    "https://github.com/aryansinghshaktawat",
    "https://linkedin.com/in/aryansinghshaktawat"
  ],
  "jobTitle": "Full-Stack Developer",
  "worksFor": { 
    "@type": "Organization", 
    "name": "UPES Dehradun",
    "url": "https://www.upes.ac.in"
  },
  "knowsAbout": [
    "Cybersecurity", "Web Development", "Digital Forensics", 
    "AI Integration", "Full Stack Development", "Computer Science"
  ],
  "description": "B.Tech CSE student specializing in cybersecurity, forensics, and full-stack development",
  "image": {
    "@type": "ImageObject",
    "url": "https://shaktawat.in/profile.webp",
    "caption": "Aryan Singh Shaktawat - Professional Profile Photo",
    "width": 300,
    "height": 300
  }
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Aryan Singh Shaktawat Portfolio",
  "url": "https://shaktawat.in",
  "description": "Portfolio, projects and blog by Aryan Singh Shaktawat",
  "author": {
    "@type": "Person",
    "name": "Aryan Singh Shaktawat"
  }
};

export default function Home() {
  return (
    <>
      <JsonLd data={personSchema} />
      <JsonLd data={websiteSchema} />
      <main className="flex flex-col min-h-screen">
      {/* Minimal Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Subtle animated background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent animate-pulse"></div>
        
        {/* Minimal floating elements */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center min-h-screen max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            
            {/* Hero Content */}
            <div className="text-center">
              <div className="mb-6 md:mb-8">
                <HackerName text="Aryan Singh Shaktawat" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-space-grotesk font-bold text-white leading-tight tracking-tight" />
              </div>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-300 mb-4 md:mb-6 font-light">
                <span className="text-cyan-400">Cybersecurity</span> & <span className="text-blue-400">Full-Stack</span> Developer
              </p>
              <p className="text-base md:text-lg text-slate-400 mb-8 md:mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed px-4 lg:px-0">
                B.Tech CSE student crafting secure digital solutions and exploring the intersection of AI, cybersecurity, and modern web development.
              </p>
              
              {/* Quick stats */}
              <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center mb-8 px-4">
                <div className="glass rounded-full px-3 py-1.5 sm:px-4 sm:py-2">
                  <span className="text-cyan-400 font-bold text-sm sm:text-base">5th</span>
                  <span className="text-slate-300 ml-1 text-sm sm:text-base">Semester</span>
                </div>
                <div className="glass rounded-full px-3 py-1.5 sm:px-4 sm:py-2">
                  <span className="text-blue-400 font-bold text-sm sm:text-base">UPES</span>
                  <span className="text-slate-300 ml-1 text-sm sm:text-base">Dehradun</span>
                </div>
                <div className="glass rounded-full px-3 py-1.5 sm:px-4 sm:py-2">
                  <span className="text-green-400 font-bold text-sm sm:text-base">Full-Stack</span>
                  <span className="text-slate-300 ml-1 text-sm sm:text-base">Developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile & Skills Section */}
      <section className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 py-16 md:py-20 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent"></div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-space-grotesk text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-4">
              About Me
            </h2>
            <p className="font-geist-mono text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Get to know the person behind the code
            </p>
          </div>

          <div className="flex justify-center">
            <div className="glass rounded-3xl p-6 sm:p-8 md:p-10 w-full max-w-md hover-lift">
              <div className="relative mb-6 md:mb-8">
                <Image
                  src="/profile.webp"
                  alt="Aryan Singh Shaktawat - Cybersecurity Expert and Full Stack Developer"
                  width={400}
                  height={400}
                  className="w-full h-auto rounded-2xl object-cover"
                  priority={true}
                  title="Aryan Singh Shaktawat - Professional Profile Photo"
                />
              </div>
              
              <h3 className="text-xl sm:text-2xl md:text-3xl font-space-grotesk font-bold text-white mb-4 md:mb-6 text-center">Current Focus</h3>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-cyan-400 flex-shrink-0 animate-pulse"></div>
                  <span className="text-slate-300 text-sm md:text-base">AI model integrations & automation</span>
                </div>
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-blue-400 flex-shrink-0 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <span className="text-slate-300 text-sm md:text-base">OSINT tools development</span>
                </div>
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-green-400 flex-shrink-0 animate-pulse" style={{animationDelay: '1s'}}></div>
                  <span className="text-slate-300 text-sm md:text-base">Cybersecurity research & forensics</span>
                </div>
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-purple-400 flex-shrink-0 animate-pulse" style={{animationDelay: '1.5s'}}></div>
                  <span className="text-slate-300 text-sm md:text-base">Modern web development</span>
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
          <div className="text-center mb-12 md:mb-20 px-4">
            <h2 className="font-space-grotesk text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-4 md:mb-6">
              My Journey in Code
            </h2>
            <p className="font-geist-mono text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              From curious beginner to passionate builder — transforming ideas into reality through code
            </p>
          </div>

          {/* Modern Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20 px-4">
            
            {/* Learning Philosophy Card */}
            <div className="group glass rounded-2xl md:rounded-3xl p-6 md:p-8 hover-lift border border-cyan-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-400/5 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl md:text-3xl">🧠</span>
                </div>
                <h3 className="font-space-grotesk text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Learning Philosophy</h3>
                <p className="font-geist-mono text-sm md:text-base text-slate-300 leading-relaxed">
                  <span className="text-cyan-400 font-bold">I am a learner first, and everything else follows.</span> 
                  The best way to understand technology is to build it, break it, and rebuild it better.
                </p>
              </div>
            </div>

            {/* Current Adventures Card */}
            <div className="group glass rounded-2xl md:rounded-3xl p-6 md:p-8 hover-lift border border-green-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-emerald-400/5 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl md:text-3xl">⚡</span>
                </div>
                <h3 className="font-space-grotesk text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Current Adventures</h3>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-cyan-400 animate-pulse flex-shrink-0"></div>
                    <span className="text-slate-300 text-sm md:text-base">AI model integrations (Llama-3, Perplexity)</span>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0"></div>
                    <span className="text-slate-300 text-sm md:text-base">OSINT tools that actually work</span>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-yellow-400 animate-pulse flex-shrink-0"></div>
                    <span className="text-slate-300 text-sm md:text-base">Portfolio rebuild from scratch</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Real Talk Card */}
            <div className="group glass rounded-2xl md:rounded-3xl p-6 md:p-8 hover-lift border border-yellow-500/20 md:col-span-2 lg:col-span-1">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-orange-400/5 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl md:text-3xl">💯</span>
                </div>
                <h3 className="font-space-grotesk text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">The Real Talk</h3>
                <p className="font-geist-mono text-sm md:text-base text-slate-300 leading-relaxed">
                  I&apos;m that student who <span className="text-cyan-400 font-bold">Googles syntax</span>, celebrates error-free compilation, 
                  and gets genuinely excited about <span className="text-green-400 font-bold">solving real problems</span> with code.
                </p>
              </div>
            </div>
          </div>

          {/* Modern Timeline */}
          <div className="relative max-w-4xl mx-auto px-4">
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-0.5 md:w-1 h-full bg-gradient-to-b from-cyan-400 via-blue-400 to-purple-400 rounded-full"></div>
            
            <div className="space-y-12 md:space-y-20">
              {/* Student Journey */}
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 md:gap-8 pl-8 md:pl-0">
                <div className="lg:w-1/2 lg:pr-12 w-full">
                  <div className="glass rounded-2xl md:rounded-3xl p-6 md:p-8 hover-lift border border-cyan-500/20">
                    <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-base md:text-lg flex-shrink-0">1</div>
                      <h3 className="font-space-grotesk text-lg md:text-2xl font-bold text-cyan-400">Student Journey</h3>
                    </div>
                    <p className="font-geist-mono text-sm md:text-base text-slate-300 leading-relaxed">
                      Currently in my <span className="text-cyan-400 font-bold">third year of B.Tech CSE with Cyber Security &amp; Forensics</span> 
                      at UPES Dehradun. Every day brings new challenges, late-night coding sessions, and those amazing &quot;aha!&quot; moments.
                    </p>
                  </div>
                </div>
                <div className="lg:w-1/2 lg:pl-12 w-full">
                  <div className="text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 md:gap-3 glass px-4 md:px-6 py-2 md:py-3 rounded-full border border-cyan-500/20">
                      <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-cyan-400 animate-pulse flex-shrink-0"></div>
                      <span className="font-geist-mono text-sm md:text-base text-cyan-400 font-bold">5th Semester & Counting</span>
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
    </>
  );
}
