import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import RevealProvider from "@/components/ui/RevealProvider";
import GrainOverlay from "@/components/ui/GrainOverlay";
import PageTransition from "@/components/ui/PageTransition";
import { spaceGrotesk } from "@/lib/fonts";

export const metadata: Metadata = {
  title: {
    default: "Aryan Singh Shaktawat — Cybersecurity & Full‑Stack",
    template: "%s — Aryan Singh Shaktawat",
  },
  description:
    "Aryan Singh Shaktawat — B.Tech CSE student. Cybersecurity, forensics, full‑stack development, AI integrations. Portfolio, projects and blog.",
  metadataBase: new URL("https://shaktawat.in"),
  keywords: [
    "Aryan Singh Shaktawat","Aryan Shaktawat","Aryan S Shaktawat","A S Shaktawat",
    "Aryan Shaktawat resume","Aryan Shaktawat projects","Aryan Shaktawat blog",
    "Aryan Shaktawat GitHub","Aryan Shaktawat LinkedIn","Aryan Shaktawat UPES",
    "Aryan Shaktawat cybersecurity","Aryan Shaktawat forensics","Aryan Shaktawat CSE",
    "Aryan Singh","aryan singh shaktawat","Aryan S","A. Shaktawat",
    "cybersecurity","full-stack","portfolio","forensics","AI","developer",
    "Aryan Shaktawat full stack","Aryan Shaktawat developer","Aryan Shaktawat website",
    "Aryan Shaktawat contact","Aryan S Shaktawat resume PDF","Aryan Shaktawat UPES Dehradun"
  ],
  authors: [{ name: "Aryan Singh Shaktawat", url: "https://shaktawat.in" }],
  creator: "Aryan Singh Shaktawat",
  openGraph: {
    title: "Aryan Singh Shaktawat — Cybersecurity & Projects",
    description: "Portfolio, projects and blog by Aryan Singh Shaktawat.",
    url: "https://shaktawat.in",
    siteName: "shaktawat.in",
    images: [
      {
        url: "/profile.webp",
        width: 300,
        height: 300,
        alt: "Aryan Singh Shaktawat — Professional Profile Photo",
      },
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aryan Singh Shaktawat — Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan Singh Shaktawat",
    description: "Cybersecurity & Full‑Stack Developer",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico?v=2",
    apple: "/apple-touch-icon.png?v=2",
    shortcut: "/favicon.ico?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth" className={spaceGrotesk.variable}>
      <head>
        <link rel="preload" href="/fonts/SpaceGrotesk-Variable.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen flex flex-col font-geist-mono">
        <ThemeProvider>
          <GrainOverlay />
          <Header />
          <RevealProvider>
            <main className="pt-20 flex-1">
              <PageTransition>{children}</PageTransition>
            </main>
          </RevealProvider>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
