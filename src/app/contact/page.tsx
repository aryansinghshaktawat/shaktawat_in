// src/app/contact/page.tsx
import type { Metadata } from 'next';
import Contact from '@/components/sections/Contact';

const ContactPage = () => {
  return (
    <div className="min-h-screen animated-bg overflow-hidden">
      {/* Floating geometric elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full animate-spin-slow"></div>
        <div className="absolute top-40 right-20 w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-24 h-24 bg-gradient-to-br from-pink-500/20 to-red-500/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg animate-spin-slow"></div>
      </div>

      {/* Interactive Contact Hero */}
      <section className="relative overflow-hidden py-24">
        {/* Floating message bubbles */}
        <div className="absolute top-16 left-16 w-20 h-20 bg-gradient-to-br from-cyan-400/30 to-blue-500/20 rounded-full flex items-center justify-center animate-bounce">
          <span className="text-2xl">💬</span>
        </div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-gradient-to-br from-green-400/30 to-emerald-500/20 rounded-full flex items-center justify-center animate-pulse">
          <span className="text-lg">📧</span>
        </div>
        <div className="absolute bottom-20 left-32 w-12 h-12 bg-gradient-to-br from-yellow-400/30 to-orange-500/20 rounded-full flex items-center justify-center animate-spin-slow">
          <span className="text-sm">🤝</span>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="inline-flex items-center gap-3 glass rounded-full px-8 py-3 mb-8">
              <div className="w-3 h-3 rounded-full bg-yellow-400 animate-ping"></div>
              <span className="font-geist-mono text-sm text-yellow-400 font-bold tracking-wider">LET&apos;S CONNECT</span>
            </div>
            
            <h1 className="font-space-grotesk text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-yellow-400 via-cyan-400 to-green-400 bg-clip-text text-transparent mb-8 leading-tight">
              Start a Conversation
            </h1>
            
            <p className="font-geist-mono text-xl text-white/60 max-w-4xl mx-auto leading-relaxed">
              Have a project in mind? Want to collaborate? Or just want to say hello? I&apos;d love to hear from you.
            </p>
          </div>

          {/* Contact method cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <a href="mailto:aryan@shaktawat.in" className="glass hover-lift p-8 group block">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                <span className="text-3xl">📧</span>
              </div>
              <h3 className="font-space-grotesk text-xl font-bold text-white mb-3">Email Me</h3>
              <p className="font-geist-mono text-white/60 mb-4">Quick response guaranteed</p>
              <div className="inline-flex items-center gap-2 text-cyan-400 hover:text-white transition-colors">
                <span className="font-geist-mono text-sm">→</span>
                <span className="font-geist-mono text-sm">aryan@shaktawat.in</span>
              </div>
            </a>
            
            <a href="https://linkedin.com/in/aryansinghshaktawat" target="_blank" rel="noopener noreferrer" className="glass hover-lift p-8 group block">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                <span className="text-3xl">🌐</span>
              </div>
              <h3 className="font-space-grotesk text-xl font-bold text-white mb-3">Social Media</h3>
              <p className="font-geist-mono text-white/60 mb-4">Follow my journey</p>
              <div className="inline-flex items-center gap-2 text-green-400 hover:text-white transition-colors">
                <span className="font-geist-mono text-sm">→</span>
                <span className="font-geist-mono text-sm">Connect</span>
              </div>
            </a>
            
            <a href="https://github.com/aryansinghshaktawat" target="_blank" rel="noopener noreferrer" className="glass hover-lift p-8 group block">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="font-space-grotesk text-xl font-bold text-white mb-3">Collaboration</h3>
              <p className="font-geist-mono text-white/60 mb-4">Let&apos;s build together</p>
              <div className="inline-flex items-center gap-2 text-yellow-400 hover:text-white transition-colors">
                <span className="font-geist-mono text-sm">→</span>
                <span className="font-geist-mono text-sm">Discuss Project</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <Contact />
    </div>
  );
};

export default ContactPage;

export const metadata: Metadata = {
  title: 'Contact — Aryan Singh Shaktawat',
  description: 'Get in touch via email or social—let’s connect.',
};
