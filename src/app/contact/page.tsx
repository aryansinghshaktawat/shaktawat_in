// src/app/contact/page.tsx
import type { Metadata } from 'next';
import Contact from '@/components/sections/Contact';

const ContactPage = () => {
  return (
    <>
      {/* Interactive Contact Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] py-24">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='50' cy='50' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        {/* Floating message bubbles */}
        <div className="absolute top-16 left-16 w-20 h-20 bg-gradient-to-br from-[#65cdf9]/30 to-[#3b82f6]/20 rounded-full flex items-center justify-center animate-float-message">
          <span className="text-2xl">💬</span>
        </div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-gradient-to-br from-[#10b981]/30 to-[#059669]/20 rounded-full flex items-center justify-center animate-float-delayed">
          <span className="text-lg">📧</span>
        </div>
        <div className="absolute bottom-20 left-32 w-12 h-12 bg-gradient-to-br from-[#f59e0b]/30 to-[#d97706]/20 rounded-full flex items-center justify-center animate-float-slow">
          <span className="text-sm">🤝</span>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#f59e0b]/10 to-[#d97706]/5 border border-[#f59e0b]/30 rounded-full px-8 py-3 mb-8">
              <div className="w-3 h-3 rounded-full bg-[#f59e0b] animate-ping"></div>
              <span className="font-geist-mono text-sm text-[#f59e0b] font-bold tracking-wider">LET&apos;S CONNECT</span>
            </div>
            
            <h1 className="font-space-grotesk text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] via-[#65cdf9] to-[#10b981] mb-8 leading-tight">
              Start a Conversation
            </h1>
            
            <p className="font-geist-mono text-xl text-[#9ea0a6] max-w-4xl mx-auto leading-relaxed">
              Have a project in mind? Want to collaborate? Or just want to say hello? I&apos;d love to hear from you.
            </p>
          </div>

          {/* Contact method cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="group bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl p-8 border border-[#334155] hover:border-[#65cdf9] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#65cdf9]/20">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#65cdf9] to-[#3b82f6] flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                <span className="text-3xl">📧</span>
              </div>
              <h3 className="font-space-grotesk text-xl font-bold text-white mb-3">Email Me</h3>
              <p className="font-geist-mono text-[#9ea0a6] mb-4">Quick response guaranteed</p>
              <div className="inline-flex items-center gap-2 text-[#65cdf9] hover:text-white transition-colors">
                <span className="font-geist-mono text-sm">→</span>
                <span className="font-geist-mono text-sm">Send Message</span>
              </div>
            </div>
            
            <div className="group bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl p-8 border border-[#334155] hover:border-[#10b981] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#10b981]/20">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#10b981] to-[#059669] flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                <span className="text-3xl">🌐</span>
              </div>
              <h3 className="font-space-grotesk text-xl font-bold text-white mb-3">Social Media</h3>
              <p className="font-geist-mono text-[#9ea0a6] mb-4">Follow my journey</p>
              <div className="inline-flex items-center gap-2 text-[#10b981] hover:text-white transition-colors">
                <span className="font-geist-mono text-sm">→</span>
                <span className="font-geist-mono text-sm">Connect</span>
              </div>
            </div>
            
            <div className="group bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl p-8 border border-[#334155] hover:border-[#f59e0b] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#f59e0b]/20">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#f59e0b] to-[#d97706] flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="font-space-grotesk text-xl font-bold text-white mb-3">Collaboration</h3>
              <p className="font-geist-mono text-[#9ea0a6] mb-4">Let&apos;s build together</p>
              <div className="inline-flex items-center gap-2 text-[#f59e0b] hover:text-white transition-colors">
                <span className="font-geist-mono text-sm">→</span>
                <span className="font-geist-mono text-sm">Discuss Project</span>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes float-message {
            0%, 100% { transform: translateY(0px) scale(1); }
            50% { transform: translateY(-15px) scale(1.05); }
          }
          .animate-float-message {
            animation: float-message 4s ease-in-out infinite;
          }
        `}</style>
      </section>

      {/* Contact Form */}
            {/* Contact Content */}
      <Contact />
    </>
  );
};

export default ContactPage;

export const metadata: Metadata = {
  title: 'Contact — Aryan Singh Shaktawat',
  description: 'Get in touch via email or social—let’s connect.',
};
