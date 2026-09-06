import type { Metadata } from "next";
import { redirect } from "next/navigation";

export default function ResumePage() {
  redirect("/#hero");
}

export const metadata: Metadata = {
  title: "Resume — Aryan Singh Shaktawat",
  description: "Download or request resume of Aryan Singh Shaktawat.",
};
