import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import RevealProvider from "@/components/RevealProvider";
import GrainOverlay from "@/components/GrainOverlay";

export const metadata: Metadata = {
  title: "Aryan Singh Shaktawat",
  description: "Cybersecurity Enthusiast & Developer",
  metadataBase: new URL("https://shaktawat.in"),
  openGraph: {
    title: "Aryan Singh Shaktawat — Portfolio",
    description: "Creative web developer. Cybersecurity enthusiast.",
    type: "website",
    url: "https://shaktawat.in",
    images: [
      { url: "/vercel.svg", width: 1200, height: 630, alt: "Aryan — Portfolio" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan Singh Shaktawat — Portfolio",
    description: "Creative web developer. Cybersecurity enthusiast.",
    images: ["/vercel.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <GrainOverlay />
          <Header />
          <RevealProvider>
            <main className="pt-20 flex-1">{children}</main>
          </RevealProvider>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
