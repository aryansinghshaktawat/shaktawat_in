// src/components/sections/ContactInvite.tsx
import Link from 'next/link';

export default function ContactInvite() {
  return (
    <section id="connect" className="w-full bg-[#0f1112] text-white border-t border-[#202025]">
      <div className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h2 className="uppercase text-left md:text-center font-sans font-extrabold text-2xl md:text-3xl tracking-tight mb-4">Let’s Connect</h2>
        <p className="text-[#c6c6c9] max-w-2xl mx-auto mb-6">I’m open to collaborations, internships, and opportunities to build impactful security tools. Reach out and let’s start a conversation.</p>
        <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#65cdf9] text-[#061118] font-semibold hover:brightness-95">
          Contact Me
        </Link>
      </div>
    </section>
  );
}
