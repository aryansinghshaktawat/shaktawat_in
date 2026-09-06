import type { Metadata } from "next";
import { redirect } from "next/navigation";

export default function ProjectsPage() {
  redirect("/#work");
}

export const metadata: Metadata = {
  title: "Projects — Aryan Singh Shaktawat",
  description: "Selected projects by Aryan Singh Shaktawat.",
};
