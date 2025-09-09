import Link from 'next/link';

export default function ContactInvite() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="contact-overlay" />
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <div className="glass rounded-3xl p-12 hover-lift">
          <h2 className="font-space-grotesk text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Let's Build Something Together
          </h2>
          
          <p className="font-geist-mono text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's turn ideas into reality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold rounded-full hover:from-cyan-300 hover:to-blue-400 transition-all duration-200 hover:scale-105"
            >
              Get In Touch
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M9 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            
            <a 
              href="mailto:aryan@shaktawat.in"
              className="inline-flex items-center gap-2 px-8 py-4 glass border border-cyan-400/30 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400/10 transition-all duration-200 hover:scale-105"
            >
              Quick Email
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M4 6h16v12H4z" strokeWidth="2"/>
                <path d="m22 6-10 7L2 6" strokeWidth="2"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}