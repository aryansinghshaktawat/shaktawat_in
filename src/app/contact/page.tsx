import type { Metadata } from "next";
import { redirect } from "next/navigation";

export default function ContactPage() {
  redirect("/#contact");
}

export const metadata: Metadata = {
  title: "Contact — Aryan Singh Shaktawat",
  description: "Get in touch with Aryan Singh Shaktawat.",
};
