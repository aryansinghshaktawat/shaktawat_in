import type { Metadata } from "next";
import { redirect } from "next/navigation";

export default function BlogPage() {
  redirect("/#work");
}

export const metadata: Metadata = {
  title: "Blog — Aryan Singh Shaktawat",
  description: "Articles and insights by Aryan Singh Shaktawat.",
};
