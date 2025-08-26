import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div data-reveal>
        <Hero />
      </div>
    </main>
  );
}

export const metadata: Metadata = {
  title: "Home — Aryan Singh Shaktawat",
  description: "Welcome to my portfolio: creative web developer & cybersecurity enthusiast.",
};
