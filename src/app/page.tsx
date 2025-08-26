import type { Metadata } from "next";
import HomeHero from '@/components/sections/HomeHero';
import HomeSkills from '@/components/sections/HomeSkills';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import Education from '@/components/sections/Education';
import Involvement from '@/components/sections/Involvement';
import ContactInvite from '@/components/sections/ContactInvite';

export default function Home() {
  return (
    <main className="flex flex-col">
      <div data-reveal>
        <HomeHero />
      </div>
      <div data-reveal>
        <HomeSkills />
      </div>
      <div data-reveal>
        <FeaturedProjects />
      </div>
      <div data-reveal>
        <Education />
      </div>
      <div data-reveal>
        <Involvement />
      </div>
      <div data-reveal>
        <ContactInvite />
      </div>
    </main>
  );
}

export const metadata: Metadata = {
  title: "Home — Aryan Singh Shaktawat",
  description: "Welcome to my portfolio: creative web developer & cybersecurity enthusiast.",
};
