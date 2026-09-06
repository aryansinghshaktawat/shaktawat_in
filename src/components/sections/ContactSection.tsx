// src/components/sections/ContactSection.tsx
// "Let's Build Something Secure." CTA with beautiful icon social links.
// No form — prominent link cards for LinkedIn, GitHub, Email, Resume.
"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

const CONTACT_LINKS = [
  {
    id: "linkedin",
    label: "LinkedIn",
    sublabel: "Connect professionally",
    href: "https://linkedin.com/in/aryan-singh-shaktawat",
    target: "_blank",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M6.94 7.5a1.94 1.94 0 1 1 0-3.88 1.94 1.94 0 0 1 0 3.88ZM3.75 20.25h6.39V9H3.75v11.25Zm8.61 0h6.39v-6.1c0-3.25-1.74-4.76-4.06-4.76-1.87 0-2.71 1.03-3.18 1.75v-1.5H12.36V20.25Z" />
      </svg>
    ),
    color: "#0A66C2",
  },
  {
    id: "github",
    label: "GitHub",
    sublabel: "See my code",
    href: "https://github.com/aryansinghshaktawat",
    target: "_blank",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M12 .5C5.73.5.98 5.24.98 11.5c0 4.85 3.14 8.96 7.5 10.41.55.1.75-.24.75-.54v-1.9c-3.05.67-3.7-1.31-3.7-1.31-.5-1.27-1.22-1.6-1.22-1.6-.99-.68.07-.66.07-.66 1.1.08 1.67 1.13 1.67 1.13.98 1.67 2.57 1.19 3.19.9.1-.71.38-1.19.7-1.47-2.44-.28-5-1.22-5-5.44 0-1.2.43-2.19 1.13-2.96-.11-.28-.49-1.4.11-2.9 0 0 .93-.3 3.06 1.13.88-.25 1.83-.37 2.77-.38.94.01 1.89.13 2.77.38 2.12-1.44 3.06-1.13 3.06-1.13.6 1.5.22 2.62.11 2.9.7.77 1.12 1.76 1.12 2.96 0 4.23-2.57 5.16-5.02 5.43.39.34.74 1.02.74 2.06v3.05c0 .3.19.65.76.54 4.34-1.46 7.49-5.56 7.49-10.41C23.02 5.24 18.27.5 12 .5Z" clipRule="evenodd" />
      </svg>
    ),
    color: "#1F2937",
  },
  {
    id: "email",
    label: "Email",
    sublabel: "hello@shaktawat.in",
    href: "mailto:hello@shaktawat.in",
    target: undefined,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <polyline points="2,4 12,13 22,4" />
      </svg>
    ),
    color: "#3B82F6",
  },
  {
    id: "resume",
    label: "Resume",
    sublabel: "Request a copy",
    href: "mailto:hello@shaktawat.in?subject=Resume%20Request%20%E2%80%94%20Aryan%20Singh%20Shaktawat&body=Hi%20Aryan%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20have%20a%20copy%20of%20your%20resume.%0A%0AThank%20you!",
    target: undefined,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14,2 14,8 20,8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10,9 9,9 8,9" />
      </svg>
    ),
    color: "#8B5CF6",
  },
] as const;

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="section-base relative overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
      aria-label="Contact"
    >
      {/* Decorative background blob */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(59,130,246,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section label */}
        <ScrollReveal>
          <p className="section-label">Get In Touch</p>
          <h2 className="section-heading mb-4">
            Let&apos;s Build Something{" "}
            <span className="gradient-text-blue">Secure.</span>
          </h2>
          <div className="section-divider mx-auto" />
          <p
            className="text-lg leading-relaxed mb-12 max-w-2xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Whether you&apos;re looking for a security-minded developer, need a pen-test
            perspective, or just want to collaborate — I&apos;d love to hear from you.
          </p>
        </ScrollReveal>

        {/* Contact link cards */}
        <ScrollReveal delay={80}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            {CONTACT_LINKS.map((link) => (
              <a
                key={link.id}
                id={`contact-${link.id}`}
                href={link.href}
                target={link.target}
                rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
                className="contact-link"
                aria-label={`${link.label} — ${link.sublabel}`}
                style={{ ["--hover-color" as string]: link.color }}
              >
                <span style={{ color: link.color }}>{link.icon}</span>
                <span
                  className="font-semibold text-sm"
                  style={{ color: "var(--text-primary)", fontFamily: "var(--font-space-grotesk)" }}
                >
                  {link.label}
                </span>
                <span
                  className="text-xs text-center"
                  style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
                >
                  {link.sublabel}
                </span>
              </a>
            ))}
          </div>
        </ScrollReveal>

        {/* Big CTA button */}
        <ScrollReveal delay={160}>
          <a
            href="mailto:hello@shaktawat.in?subject=Hey%20Aryan%20—%20Let%27s%20Connect!&body=Hi%20Aryan%2C%0A%0AI%20saw%20your%20portfolio%20and%20wanted%20to%20reach%20out.%0A%0A"
            className="btn-primary text-base !px-8 !py-4 inline-flex"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Say Hello →
          </a>

          <p
            className="mt-6 text-sm"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
          >
            I typically respond within 24 hours · Based in India
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
