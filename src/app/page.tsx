import type { Metadata } from "next";
import ContactInvite from '@/components/sections/ContactInvite';
import HackerName from '@/components/HackerName';

export default function Home() {
  return (
    <main className="flex flex-col">
      <div data-reveal className="py-12 hero-stars">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <HackerName text="Aryan Singh Shaktawat" className="section-title body-animate hacker-name" />
          <p className="section-subtitle body-animate">Aspiring Cybersecurity &amp; Tech Enthusiast | Passionate about Sustainability, Innovation &amp; Sports</p>
        </div>
      </div>

      <style>{`
        .body-animate { animation: fadeUp 1s cubic-bezier(.4,2,.3,1) both; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .section-title {
          font-family: var(--font-space-grotesk), 'Space Grotesk', sans-serif;
          font-size: 2.2rem;
          font-weight: 800;
          color: #65cdf9;
          margin-bottom: 1.2rem;
          letter-spacing: -0.02em;
        }
        .section-subtitle {
          font-family: var(--font-geist-mono), ui-monospace, monospace;
          font-size: 1.25rem;
          font-weight: 600;
          color: #e6e6e8;
          margin-bottom: 1.5rem;
        }
        /* Hero star background */
        .hero-stars {
          position: relative;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
          overflow: hidden;
        }
        
        .hero-stars::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(2px 2px at 20px 30px, #3b82f6, transparent),
            radial-gradient(2px 2px at 40px 70px, #60a5fa, transparent),
            radial-gradient(1px 1px at 90px 40px, #93c5fd, transparent),
            radial-gradient(1px 1px at 130px 80px, #dbeafe, transparent),
            radial-gradient(2px 2px at 160px 30px, #3b82f6, transparent);
          background-repeat: repeat;
          background-size: 200px 100px;
          animation: starsFloat 20s linear infinite;
          opacity: 0.6;
        }
        
        .hero-stars::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(1px 1px at 50px 50px, #1d4ed8, transparent),
            radial-gradient(1px 1px at 100px 25px, #2563eb, transparent),
            radial-gradient(1px 1px at 150px 75px, #3b82f6, transparent);
          background-repeat: repeat;
          background-size: 300px 150px;
          animation: starsFloat 30s linear infinite reverse;
          opacity: 0.4;
        }
        
        @keyframes starsFloat {
          0% { transform: translateX(0) translateY(0); }
          100% { transform: translateX(-200px) translateY(-100px); }
        }
        
        .hacker-name { 
          font-family: var(--font-space-grotesk), 'Space Grotesk', sans-serif; 
          font-size: 3.25rem; 
          line-height: 1; 
          color: #65cdf9; 
          text-shadow: 0 0 8px rgba(101,205,249,0.08); 
        }
      `}</style>

      <div data-reveal>
        <ContactInvite />
      </div>
    </main>
  );
}
