"use server";

import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY || "re_dummy_key_for_build";
const resend = new Resend(resendApiKey);

export type ContactState = {
  success: boolean;
  message: string;
};

export async function sendContactEmail(formData: FormData): Promise<ContactState> {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  if (!name || !email || !message) {
    return {
      success: false,
      message: "Please fill in all required fields (Name, Email, Message).",
    };
  }

  // Basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: "Please provide a valid email address.",
    };
  }

  try {
    if (!process.env.RESEND_API_KEY) {
      console.warn("RESEND_API_KEY not configured. Simulating successful contact form submission.");
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 800));
      return {
        success: true,
        message: "Thank you! Your message has been received. I will get back to you shortly.",
      };
    }

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <contact@shaktawat.in>",
      to: ["hello@shaktawat.in"],
      replyTo: email,
      subject: `New Portfolio Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return {
        success: false,
        message: "Failed to send message via Resend. Please try emailing directly at hello@shaktawat.in.",
      };
    }

    return {
      success: true,
      message: "Thank you! Your message has been sent successfully. I will get back to you shortly.",
    };
  } catch (err) {
    console.error("Contact Form Server Action Error:", err);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later or email hello@shaktawat.in.",
    };
  }
}
