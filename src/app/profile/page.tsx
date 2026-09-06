import type { Metadata } from "next";
import { redirect } from "next/navigation";

export default function ProfilePage() {
  redirect("/#about");
}

export const metadata: Metadata = {
  title: "Profile — Aryan Singh Shaktawat",
  description: "Engineering profile of Aryan Singh Shaktawat.",
};
