"use client";

import { useRef } from "react";
import { useScrambleOnInteract } from "@/hooks/useScrambleOnInteract";

export default function Projects() {
  const hRef = useRef<HTMLHeadingElement | null>(null);
  useScrambleOnInteract(hRef, "PROJECTS");
  const projects = [
    { title: "Portfolio Website", desc: "Personal site built with Next.js and React; deployed and optimized.", tech: ["Next.js", "TypeScript", "Tailwind"], outcome: "Improved web fundamentals and deployment workflow." },
    { title: "3D Scene Study", desc: "Small real‑time 3D scene prototype with controls.", tech: ["Unity", "C#"], outcome: "Learned scene organization and input handling." },
    { title: "Algo Practice", desc: "Solving DSA problems and documenting approaches.", tech: ["Python"], outcome: "Strengthened problem‑solving and pattern recognition." },
  ];
  return (
    <section id="work" className="bg-black text-[#E3DFD2] py-20">
      <div className="max-w-6xl mx-auto px-4">
  <h2 ref={hRef} className="text-2xl sm:text-3xl font-semibold glitch" tabIndex={0} data-text="PROJECTS">Projects</h2>
        <ul className="mt-6 grid gap-4">
          {projects.map((p) => (
            <li key={p.title} className="p-4 rounded-lg bg-white/5 border border-white/10">
              <h3 className="font-medium">{p.title}</h3>
              <p className="opacity-80 text-sm mt-1">{p.desc}</p>
              <p className="opacity-80 text-xs mt-2">Tech: {p.tech.join(", ")}</p>
              <p className="opacity-70 text-xs mt-1">Outcome: {p.outcome}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
