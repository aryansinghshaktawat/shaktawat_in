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

      <section
        data-reveal
        className="max-w-4xl mx-auto px-4 py-16 md:py-24 font-sans"
        style={{ position: 'relative' }}
      >
        <style>{`
          .body-animate { animation: fadeUp 1s cubic-bezier(.4,2,.3,1) both; }
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(32px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .section-title {
            font-size: 2.2rem;
            font-weight: 800;
            color: #65cdf9;
            margin-bottom: 1.2rem;
            letter-spacing: -0.02em;
          }
          .section-subtitle {
            font-size: 1.25rem;
            font-weight: 600;
            color: #e6e6e8;
            margin-bottom: 1.5rem;
          }
          .section-heading {
            font-size: 1.5rem;
            font-weight: 700;
            color: #65cdf9;
            margin-top: 2.5rem;
            margin-bottom: 0.7rem;
          }
          .section-body {
            font-size: 1.1rem;
            color: #e6e6e8;
            margin-bottom: 1.2rem;
            line-height: 1.7;
          }
          .section-em {
            color: #65cdf9;
            font-weight: 700;
          }
          .section-quote {
            font-size: 1.15rem;
            font-style: italic;
            color: #9ea0a6;
            margin: 2.5rem 0 1.5rem 0;
            padding-left: 1rem;
            border-left: 3px solid #65cdf9;
          }
          .section-footer {
            font-size: 1.1rem;
            color: #65cdf9;
            font-weight: 600;
            text-align: center;
            margin-top: 2.5rem;
            letter-spacing: 0.02em;
          }
        `}</style>
        <h1 className="section-title body-animate">Welcome to My World 👋</h1>
        <div className="section-subtitle body-animate">
          <span className="section-em">I am a learner first, and everything else follows.</span> Hey there! I'm <span className="section-em">Aryan Singh Shaktawat</span> — a curious <span className="section-em">Computer Science student</span> who believes that the best way to understand technology is to build it, break it, and rebuild it better.
        </div>
        <h2 className="section-heading body-animate">My Student Journey</h2>
        <div className="section-body body-animate">
          I'm currently in my <span className="section-em">third year of B.Tech in Computer Science &amp; Engineering with Cyber Security &amp; Forensics</span> at UPES Dehradun (5th semester and counting!). Every day brings new challenges, late-night coding sessions, and those amazing "aha!" moments when everything finally clicks.
        </div>
        <h2 className="section-heading body-animate">What I'm Learning By Doing</h2>
        <div className="section-body body-animate">
          <span className="section-em">From Classroom Theory to Real-World Projects</span><br />
          As a student, I learn best with my hands on the keyboard. I'm currently exploring <span className="section-em">AI model integrations</span> with tools like <span className="section-em">Llama-3</span> and <span className="section-em">Perplexity APIs</span>, building <span className="section-em">OSINT tools</span> that actually work, and creating <span className="section-em">user-friendly interfaces</span> that don't make people want to throw their computers out the window.
        </div>
        <h2 className="section-heading body-animate">My Current Learning Adventure</h2>
        <div className="section-body body-animate">
          Right now, I'm <span className="section-em">rebuilding my entire portfolio from scratch</span> — turning a simple single-page site into something that truly represents my growth as a developer. It's messy, it's challenging, and it's exactly the kind of hands-on learning I love.<br /><br />
          I prefer <span className="section-em">month-long projects</span> that let me dive deep without overwhelming my semester schedule. Because let's be honest — balancing coursework, personal projects, and actually having a life requires some serious time management skills.
        </div>
        <h2 className="section-heading body-animate">The Reality Check</h2>
        <div className="section-body body-animate">
          I'm not claiming to be an expert (yet!). I'm that student who <span className="section-em">Googles syntax</span>, celebrates when code compiles without errors, and genuinely gets excited about <span className="section-em">solving real problems with technology</span>. My dorm room is probably 50% textbooks, 50% project notes, and 100% proof that learning never stops.
        </div>
        <h2 className="section-heading body-animate">What's Next?</h2>
        <div className="section-body body-animate">
          Every <span className="section-em">API integration</span>, every <span className="section-em">GUI component</span>, every <span className="section-em">cybersecurity tool</span> I build is a step toward becoming the developer I want to be. I'm here to learn, experiment, fail fast, and keep building.
        </div>
        <div className="section-quote body-animate">
          Want to learn alongside me or see what a determined student can create?<br />
          <span className="section-em">Let's figure it out together.</span>
        </div>
        <div className="section-footer body-animate">
          B.Tech Student | Code Learner | Future Problem Solver
        </div>
      </section>

      <div data-reveal>
        <ContactInvite />
      </div>
    </main>
  );
}
