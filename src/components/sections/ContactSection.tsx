"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import { sendContactEmail } from "@/app/actions/contact";

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const formElement = e.currentTarget;

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
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        padding: "120px 24px 80px",
        maxWidth: 1200,
        margin: "0 auto",
        position: "relative",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* Subheading */}
        <span
          className="section-label"
          style={{
            letterSpacing: "0.25em",
            fontSize: "0.75rem",
            marginBottom: 16,
            display: "block",
          }}
        >
          CONTACT
        </span>

        {/* Main Heading */}
        <h2
          style={{
            fontFamily: "var(--font-outfit)",
            fontWeight: 900,
            fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
            letterSpacing: "-0.04em",
            color: "var(--text-primary)",
            lineHeight: 1.1,
            marginBottom: 20,
            maxWidth: 700,
          }}
        >
          Let&apos;s build something <span style={{ color: "var(--accent)" }}>secure.</span>
        </h2>

        {/* Description */}
        <p
          style={{
            fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
            color: "var(--text-secondary)",
            lineHeight: 1.8,
            maxWidth: 680,
            marginBottom: 48,
          }}
        >
          Whether it&apos;s building scalable software, discussing engineering ideas,
          collaborating on exciting projects, or simply saying hello — I&apos;d love to hear from you.
        </p>

        {/* Contact Form Card */}
        <div
          className="glass-card"
          style={{
            borderRadius: "2.5rem",
            padding: "clamp(28px, 5vw, 48px)",
            width: "100%",
            maxWidth: 640,
            boxShadow: "0 24px 50px -15px rgba(42,65,52,0.14)",
            textAlign: "left",
          }}
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                padding: "32px 16px",
                gap: 16,
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  background: "rgba(16,185,129,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#10B981",
                }}
              >
                <CheckCircle2 size={32} />
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontWeight: 700,
                  fontSize: "1.4rem",
                  color: "var(--text-primary)",
                }}
              >
                Message Received!
              </h3>
              <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", maxWidth: 440 }}>
                Thank you for reaching out. I have received your message and will respond as soon as possible.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                style={{
                  marginTop: 12,
                  padding: "10px 24px",
                  borderRadius: 9999,
                  background: "rgba(42,65,52,0.08)",
                  color: "var(--text-primary)",
                  border: "none",
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 200ms ease",
                }}
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {errorMsg && (
                <div
                  style={{
                    padding: "12px 16px",
                    borderRadius: "1rem",
                    background: "rgba(239,68,68,0.08)",
                    border: "1px solid rgba(239,68,68,0.2)",
                    color: "#DC2626",
                    fontSize: "0.875rem",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <AlertCircle size={18} style={{ flexShrink: 0 }} />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Name Field */}
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <label
                  htmlFor="contact-name"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    letterSpacing: "0.02em",
                  }}
                >
                  Your Name <span style={{ color: "var(--accent)" }}>*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Aryan Singh"
                  style={{
                    width: "100%",
                    padding: "14px 20px",
                    borderRadius: "1.25rem",
                    background: "rgba(255, 255, 255, 0.75)",
                    border: "1px solid rgba(42, 65, 52, 0.12)",
                    color: "var(--text-primary)",
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.95rem",
                    backdropFilter: "blur(8px)",
                    transition: "all 200ms ease",
                    boxShadow: "0 2px 8px -2px rgba(42, 65, 52, 0.04)",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "var(--accent)";
                    e.target.style.outline = "2px solid var(--accent)";
                    e.target.style.background = "#ffffff";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(42, 65, 52, 0.12)";
                    e.target.style.outline = "none";
                    e.target.style.background = "rgba(255, 255, 255, 0.75)";
                  }}
                />
              </div>

              {/* Email Field */}
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <label
                  htmlFor="contact-email"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    letterSpacing: "0.02em",
                  }}
                >
                  Email Address <span style={{ color: "var(--accent)" }}>*</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="aryan@example.com"
                  style={{
                    width: "100%",
                    padding: "14px 20px",
                    borderRadius: "1.25rem",
                    background: "rgba(255, 255, 255, 0.75)",
                    border: "1px solid rgba(42, 65, 52, 0.12)",
                    color: "var(--text-primary)",
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.95rem",
                    backdropFilter: "blur(8px)",
                    transition: "all 200ms ease",
                    boxShadow: "0 2px 8px -2px rgba(42, 65, 52, 0.04)",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "var(--accent)";
                    e.target.style.outline = "2px solid var(--accent)";
                    e.target.style.background = "#ffffff";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(42, 65, 52, 0.12)";
                    e.target.style.outline = "none";
                    e.target.style.background = "rgba(255, 255, 255, 0.75)";
                  }}
                />
              </div>

              {/* Message Field */}
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <label
                  htmlFor="contact-message"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    letterSpacing: "0.02em",
                  }}
                >
                  Message <span style={{ color: "var(--accent)" }}>*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  placeholder="I'd love to hear about your project or how we can collaborate..."
                  style={{
                    width: "100%",
                    padding: "14px 20px",
                    borderRadius: "1.25rem",
                    background: "rgba(255, 255, 255, 0.75)",
                    border: "1px solid rgba(42, 65, 52, 0.12)",
                    color: "var(--text-primary)",
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.95rem",
                    backdropFilter: "blur(8px)",
                    transition: "all 200ms ease",
                    boxShadow: "0 2px 8px -2px rgba(42, 65, 52, 0.04)",
                    resize: "vertical",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "var(--accent)";
                    e.target.style.outline = "2px solid var(--accent)";
                    e.target.style.background = "#ffffff";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(42, 65, 52, 0.12)";
                    e.target.style.outline = "none";
                    e.target.style.background = "rgba(255, 255, 255, 0.75)";
                  }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                style={{
                  width: "100%",
                  padding: "16px 32px",
                  borderRadius: 9999,
                  background: "var(--accent)",
                  color: "#ffffff",
                  fontFamily: "var(--font-inter)",
                  fontWeight: 600,
                  fontSize: "1rem",
                  border: "none",
                  cursor: loading ? "not-allowed" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  transition: "all 250ms cubic-bezier(0.4, 0, 0.2, 1)",
                  boxShadow: "0 12px 28px -6px rgba(42, 65, 52, 0.25)",
                  opacity: loading ? 0.8 : 1,
                  marginTop: 8,
                }}
                onMouseOver={(e) => {
                  if (!loading) {
                    (e.currentTarget as HTMLElement).style.background = "var(--accent-hover)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  }
                }}
                onMouseOut={(e) => {
                  if (!loading) {
                    (e.currentTarget as HTMLElement).style.background = "var(--accent)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  }
                }}
              >
                {loading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Mail size={18} />
                  </>
                )}
              </button>

              {/* Status Indicator directly below button */}
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
                    background: "#10B981",
                    display: "inline-block",
                    boxShadow: "0 0 0 3px rgba(16, 185, 129, 0.25)",
                  }}
                  className="animate-pulse"
                />
                <span
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.78rem",
                    fontWeight: 500,
                    color: "var(--text-muted)",
                    letterSpacing: "0.02em",
                  }}
                >
                  Open to Opportunities
                </span>
              </div>
            </form>
          )}
        </div>
      </motion.div>
    </section>
  );
}
