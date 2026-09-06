import type { Metadata } from "next";
import { redirect } from "next/navigation";

export default function ExperiencePage() {
  redirect("/#about");
}

export const metadata: Metadata = {
  title: "Experience — Aryan Singh Shaktawat",
  description: "Experience and background of Aryan Singh Shaktawat.",
};
