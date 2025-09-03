// src/components/sections/Involvement.tsx
export default function Involvement() {
  return (
    <section id="involvement" className="w-full bg-[#0b0c0d] text-white border-t border-[#202025]">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="uppercase text-left font-space-grotesk font-extrabold text-2xl md:text-3xl tracking-tight mb-6">Involvement & Activities</h2>
        <div className="rounded-md border border-[#26272e] bg-[#181a20] p-6">
          <ul className="list-disc pl-5 space-y-3 text-sm text-[#c6c6c9] font-geist-mono">
            <li>Leadership roles in student organizations and tech clubs.</li>
            <li>Volunteer for community service and campus outreach events.</li>
            <li>Organized and participated in hackathons and workshops.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
