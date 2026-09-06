"use client";

import { useState, useTransition, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Loader2, CheckCircle2, AlertCircle, ArrowUpRight } from "lucide-react";
import { toast } from "sonner";
import { sendContactEmail } from "@/app/actions/contact";
import Image from "next/image";

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  const [isPending, startTransition] = useTransition();
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg("");
    const formData = new FormData(e.currentTarget);
    const formElement = e.currentTarget;

    startTransition(async () => {
      try {
        const res = await sendContactEmail(formData);
        if (res.success) {
          setSubmitted(true);
          formElement.reset();
          toast.success(res.message);
        } else {
          setErrorMsg(res.message);
          toast.error(res.message);
        }
      } catch (err) {
        console.error(err);
        const fallbackError = "Something went wrong while sending your message. Please try again.";
        setErrorMsg(fallbackError);
        toast.error(fallbackError);
      }
    });
  };

  return (
    <footer
      id="contact"
      ref={ref}
      style={{
        background: "var(--accent)", // #2A4134
        borderRadius: "2.5rem 2.5rem 0 0",
        color: "#E2EBE4",
        padding: "clamp(56px, 8vw, 96px) clamp(24px, 5vw, 64px) 48px",
        marginTop: 64,
        position: "relative",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ maxWidth: 1200, margin: "0 auto" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(40px, 5vw, 80px)",
            alignItems: "start",
          }}
          className="contact-footer-grid"
        >
          {/* Left Column: Heading & Contact Form */}
          <div>
            <span
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "rgba(226,235,228,0.6)",
                marginBottom: 16,
                display: "block",
              }}
            >
              CONTACT
            </span>
            <h2
              style={{
                fontFamily: "var(--font-outfit)",
                fontWeight: 900,
                fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
                letterSpacing: "-0.04em",
                color: "#E2EBE4",
                lineHeight: 1.1,
                marginBottom: 16,
              }}
            >
              Let&apos;s build something secure.
            </h2>
            <p
              style={{
                fontSize: "0.95rem",
                color: "rgba(226,235,228,0.7)",
                lineHeight: 1.7,
                marginBottom: 36,
              }}
            >
              Whether it&apos;s building scalable software, discussing engineering ideas,
              collaborating on exciting projects, or simply saying hello — I&apos;d love to hear from you.
            </p>

            {/* Form Card */}
            <div
              style={{
                background: "rgba(255, 255, 255, 0.06)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(226, 235, 228, 0.12)",
                borderRadius: "2rem",
                padding: "clamp(24px, 4vw, 36px)",
              }}
            >
              {submitted ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    padding: "24px 12px",
                    gap: 14,
                  }}
                >
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: "50%",
                      background: "rgba(16,185,129,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#10B981",
                    }}
                  >
                    <CheckCircle2 size={28} />
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-outfit)",
                      fontWeight: 700,
                      fontSize: "1.3rem",
                      color: "#E2EBE4",
                    }}
                  >
                    Message Sent!
                  </h3>
                  <p style={{ fontSize: "0.9rem", color: "rgba(226,235,228,0.7)" }}>
                    Thank you! I have received your message and will get back to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    style={{
                      marginTop: 8,
                      padding: "8px 20px",
                      borderRadius: 9999,
                      background: "rgba(226,235,228,0.12)",
                      color: "#E2EBE4",
                      border: "none",
                      fontFamily: "var(--font-inter)",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  {errorMsg && (
                    <div
                      style={{
                        padding: "10px 14px",
                        borderRadius: "1rem",
                        background: "rgba(239,68,68,0.15)",
                        border: "1px solid rgba(239,68,68,0.3)",
                        color: "#FCA5A5",
                        fontSize: "0.85rem",
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                      }}
                    >
                      <AlertCircle size={16} style={{ flexShrink: 0 }} />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Name Input */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <label
                      htmlFor="form-name"
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        color: "rgba(226,235,228,0.8)",
                      }}
                    >
                      Name
                    </label>
                    <input
                      id="form-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Aryan Singh"
                      style={{
                        width: "100%",
                        padding: "12px 18px",
                        borderRadius: "1rem",
                        background: "rgba(255, 255, 255, 0.08)",
                        border: "1px solid rgba(226, 235, 228, 0.15)",
                        color: "#E2EBE4",
                        fontFamily: "var(--font-inter)",
                        fontSize: "0.9rem",
                        outline: "none",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "rgba(226,235,228,0.6)";
                        e.target.style.background = "rgba(255,255,255,0.12)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "rgba(226, 235, 228, 0.15)";
                        e.target.style.background = "rgba(255, 255, 255, 0.08)";
                      }}
                    />
                  </div>

                  {/* Email Input */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <label
                      htmlFor="form-email"
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        color: "rgba(226,235,228,0.8)",
                      }}
                    >
                      Email
                    </label>
                    <input
                      id="form-email"
                      name="email"
                      type="email"
                      required
                      placeholder="aryan@example.com"
                      style={{
                        width: "100%",
                        padding: "12px 18px",
                        borderRadius: "1rem",
                        background: "rgba(255, 255, 255, 0.08)",
                        border: "1px solid rgba(226, 235, 228, 0.15)",
                        color: "#E2EBE4",
                        fontFamily: "var(--font-inter)",
                        fontSize: "0.9rem",
                        outline: "none",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "rgba(226,235,228,0.6)";
                        e.target.style.background = "rgba(255,255,255,0.12)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "rgba(226, 235, 228, 0.15)";
                        e.target.style.background = "rgba(255, 255, 255, 0.08)";
                      }}
                    />
                  </div>

                  {/* Message Textarea */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <label
                      htmlFor="form-message"
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        color: "rgba(226,235,228,0.8)",
                      }}
                    >
                      Message
                    </label>
                    <textarea
                      id="form-message"
                      name="message"
                      required
                      rows={3}
                      placeholder="I'd love to hear about your project or how we can collaborate..."
                      style={{
                        width: "100%",
                        padding: "12px 18px",
                        borderRadius: "1rem",
                        background: "rgba(255, 255, 255, 0.08)",
                        border: "1px solid rgba(226, 235, 228, 0.15)",
                        color: "#E2EBE4",
                        fontFamily: "var(--font-inter)",
                        fontSize: "0.9rem",
                        outline: "none",
                        resize: "vertical",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "rgba(226,235,228,0.6)";
                        e.target.style.background = "rgba(255,255,255,0.12)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "rgba(226, 235, 228, 0.15)";
                        e.target.style.background = "rgba(255, 255, 255, 0.08)";
                      }}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isPending}
                    style={{
                      width: "100%",
                      padding: "14px 28px",
                      borderRadius: 9999,
                      background: "#ffffff",
                      color: "#1A2E22",
                      fontFamily: "var(--font-inter)",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      border: "none",
                      cursor: isPending ? "not-allowed" : "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      transition: "all 200ms ease",
                      opacity: isPending ? 0.7 : 1,
                      marginTop: 4,
                    }}
                  >
                    {isPending ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Mail size={16} />
                      </>
                    )}
                  </button>

                  {/* Status indicator below submit button */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      marginTop: 4,
                    }}
                  >
                    <span
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: "#4ADE80",
                        display: "inline-block",
                      }}
                      className="animate-pulse bg-green-400"
                    />
                    <span
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "0.78rem",
                        fontWeight: 500,
                        color: "rgba(226,235,228,0.7)",
                      }}
                    >
                      Open to Opportunities
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Minimal Arrow Links & Certifications */}
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(226,235,228,0.5)",
                  marginBottom: 24,
                }}
              >
                CONNECT &amp; CERTIFICATIONS
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  {
                    label: "GitHub Profile",
                    sub: "github.com/aryansinghshaktawat",
                    href: "https://github.com/aryansinghshaktawat",
                  },
                  {
                    label: "LinkedIn Network",
                    sub: "linkedin.com/in/aryan-singh-shaktawat",
                    href: "https://linkedin.com/in/aryan-singh-shaktawat",
                  },
                  {
                    label: "Google Foundations of Cybersecurity",
                    sub: "Google Professional Certificate",
                    href: "https://coursera.org/verify/professional-cert/google-cybersecurity",
                  },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "18px 24px",
                      borderRadius: 9999,
                      border: "1px solid rgba(226,235,228,0.2)",
                      background: "rgba(255,255,255,0.03)",
                      color: "#E2EBE4",
                      textDecoration: "none",
                      transition: "all 250ms ease",
                    }}
                    onMouseOver={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(226,235,228,0.5)";
                      (e.currentTarget as HTMLElement).style.transform = "translateX(4px)";
                    }}
                    onMouseOut={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(226,235,228,0.2)";
                      (e.currentTarget as HTMLElement).style.transform = "translateX(0)";
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontFamily: "var(--font-outfit)",
                          fontWeight: 700,
                          fontSize: "1rem",
                          color: "#E2EBE4",
                        }}
                      >
                        {link.label}
                      </div>
                      <div
                        style={{
                          fontSize: "0.75rem",
                          opacity: 0.5,
                          fontFamily: "var(--font-inter)",
                          marginTop: 2,
                        }}
                      >
                        {link.sub}
                      </div>
                    </div>
                    <ArrowUpRight size={18} style={{ opacity: 0.7, flexShrink: 0 }} />
                  </a>
                ))}
              </div>
            </div>

            {/* Direct Email Callout */}
            <div
              style={{
                borderRadius: "1.5rem",
                padding: "24px 28px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(226,235,228,0.1)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "rgba(226,235,228,0.5)",
                  marginBottom: 8,
                }}
              >
                DIRECT INBOX
              </div>
              <a
                href="mailto:hello@shaktawat.in"
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontWeight: 800,
                  fontSize: "1.3rem",
                  color: "#E2EBE4",
                  textDecoration: "none",
                }}
              >
                hello@shaktawat.in
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            maxWidth: 1200,
            margin: "64px auto 0",
            paddingTop: 28,
            borderTop: "1px solid rgba(226,235,228,0.1)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Image
              src="/apple-touch-icon.png"
              alt="Aryan Singh Shaktawat Logo"
              width={28}
              height={28}
              className="w-7 h-7 rounded-xl object-contain shadow-sm"
            />
            <span
              style={{
                fontFamily: "var(--font-outfit)",
                fontWeight: 700,
                fontSize: "0.95rem",
                letterSpacing: "-0.02em",
                color: "rgba(226,235,228,0.7)",
              }}
            >
              Aryan Singh Shaktawat
            </span>
          </div>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "0.78rem",
              color: "rgba(226,235,228,0.35)",
              fontWeight: 400,
            }}
          >
            © {new Date().getFullYear()} Aryan Singh Shaktawat · Cyber Security &amp; Full-Stack Engineer
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
