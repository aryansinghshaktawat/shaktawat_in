import type { Metadata } from "next";
import { redirect } from "next/navigation";

export default function SkillsPage() {
  redirect("/#strengths");
}

export const metadata: Metadata = {
  title: "Skills — Aryan Singh Shaktawat",
  description: "Core capabilities and technical strengths of Aryan Singh Shaktawat.",
};
