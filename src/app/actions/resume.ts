// src/app/actions/resume.ts
// Server Action — sends a resume request notification via Resend.
// The visitor's email is forwarded to hello@shaktawat.in.
"use server";

import { Resend } from "resend";

// Initialize Resend lazily or with a dummy key during build time if env var is missing
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : new Resend("re_dummy_key_for_build");

export type ResumeActionState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string };

export async function requestResume(
  visitorEmail: string
): Promise<ResumeActionState> {
  // Basic validation
  const email = visitorEmail.trim().toLowerCase();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  try {
    // 1. Notify Aryan that someone requested the resume
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",   // Use your verified Resend sender domain
      to: "hello@shaktawat.in",
      subject: `📄 Resume Request from ${email}`,
      html: `
        <div style="font-family: 'Inter', sans-serif; max-width: 480px; margin: 0 auto; background: #FDFCF8; border-radius: 16px; padding: 40px; border: 1px solid rgba(42,65,52,0.08);">
          <div style="margin-bottom: 32px;">
            <span style="font-size: 2rem; font-weight: 900; letter-spacing: -0.04em; color: #2A4134; font-family: 'Outfit', sans-serif;">ARYN</span>
          </div>
          <h2 style="font-size: 1.4rem; font-weight: 700; color: #1A2E22; margin-bottom: 8px; font-family: 'Outfit', sans-serif; letter-spacing: -0.03em;">
            New Resume Request
          </h2>
          <p style="color: #6B7F70; font-size: 0.95rem; line-height: 1.6; margin-bottom: 24px;">
            Someone requested your resume from your portfolio.
          </p>
          <div style="background: rgba(42,65,52,0.06); border-radius: 12px; padding: 20px; margin-bottom: 24px;">
            <p style="margin: 0; font-size: 0.8rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: #6B7F70; margin-bottom: 6px;">Visitor Email</p>
            <p style="margin: 0; font-size: 1.05rem; font-weight: 600; color: #1A2E22;">${email}</p>
          </div>
          <a href="mailto:${email}?subject=Resume%20—%20Aryan%20Singh%20Shaktawat&body=Hi%20there%2C%0A%0AThank%20you%20for%20your%20interest!%20Please%20find%20my%20resume%20attached.%0A%0ABest%2C%0AAryan" 
             style="display: inline-block; padding: 12px 24px; background: #2A4134; color: #E2EBE4; border-radius: 9999px; font-size: 0.875rem; font-weight: 600; text-decoration: none; letter-spacing: 0.02em;">
            Reply with Resume →
          </a>
          <p style="margin-top: 32px; font-size: 0.75rem; color: #9CA3AF; font-family: monospace;">
            Sent via shaktawat.in portfolio · ${new Date().toUTCString()}
          </p>
        </div>
      `,
    });

    // 2. Optional: Auto-acknowledge the visitor
    await resend.emails.send({
      from: "Aryan Singh Shaktawat <onboarding@resend.dev>",
      to: email,
      subject: "Resume Request Received — Aryan Singh Shaktawat",
      html: `
        <div style="font-family: 'Inter', sans-serif; max-width: 480px; margin: 0 auto; background: #FDFCF8; border-radius: 16px; padding: 40px; border: 1px solid rgba(42,65,52,0.08);">
          <div style="margin-bottom: 32px;">
            <span style="font-size: 2rem; font-weight: 900; letter-spacing: -0.04em; color: #2A4134; font-family: 'Outfit', sans-serif;">ARYN</span>
          </div>
          <h2 style="font-size: 1.4rem; font-weight: 700; color: #1A2E22; margin-bottom: 12px; font-family: 'Outfit', sans-serif; letter-spacing: -0.03em;">
            Got it — I'll be in touch.
          </h2>
          <p style="color: #3D5045; font-size: 0.95rem; line-height: 1.7; margin-bottom: 24px;">
            Thanks for reaching out! Your resume request has been received. 
            Aryan will send it over shortly — usually within a few hours.
          </p>
          <div style="background: rgba(42,65,52,0.06); border-radius: 12px; padding: 20px; margin-bottom: 28px;">
            <p style="margin: 0; font-size: 0.875rem; color: #3D5045; line-height: 1.6;">
              While you wait, feel free to explore the portfolio at 
              <a href="https://shaktawat.in" style="color: #2A4134; font-weight: 600;">shaktawat.in</a> 
              or connect on 
              <a href="https://linkedin.com/in/aryan-singh-shaktawat" style="color: #2A4134; font-weight: 600;">LinkedIn</a>.
            </p>
          </div>
          <p style="margin: 0; font-size: 0.78rem; color: #9CA3AF; font-family: monospace;">
            shaktawat.in · This is an automated acknowledgment.
          </p>
        </div>
      `,
    });

    return { status: "success" };
  } catch (err) {
    console.error("[resume-action] Resend error:", err);
    return {
      status: "error",
      message: "Something went wrong. Please email hello@shaktawat.in directly.",
    };
  }
}
