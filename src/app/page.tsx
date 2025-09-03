import type { Metadata } from "next";
import ContactInvite from '@/components/sections/ContactInvite';
import HackerName from '@/components/HackerName';

export default function Home() {
  return (
    <main className="flex flex-col animated-bg">
      <div data-reveal className="py-24 hero-section glass">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <HackerName text="Aryan Singh Shaktawat" className="section-title body-animate hacker-name" />
          <p className="section-subtitle body-animate">Aspiring Cybersecurity &amp; Tech Enthusiast | Passionate about Sustainability, Innovation &amp; Sports</p>
        </div>
        
        {/* Floating geometric elements */}
        <div className="absolute top-20 left-20 w-40 h-40 border border-blue-400/20 rounded-lg rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-10 w-24 h-24 border border-cyan-400/20 rounded-full animate-bounce"></div>
      </div>

      <div data-reveal className="animated-bg">
        <ContactInvite />
      </div>
    </main>
  );
}
