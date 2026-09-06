# Aryan Singh Shaktawat — Portfolio Website

A single-page, high-converting portfolio website for **Aryan Singh Shaktawat**, final-year B.Tech CSE undergrad specializing in Cyber Security and Forensics at UPES, Dehradun.

Built with **Next.js 15 (App Router)**, **Tailwind CSS**, and **Framer Motion**, following a Japanese-inspired *"Soft Sage & Forest"* light theme.

---

## 🎨 Design & Visual Identity

- **Theme**: Soft Sage & Forest Light Mode (Organic mesh gradients, glassmorphism, deep charcoal/slate typography).
- **Primary Color Accent**: Deep Slate Green (`#2A4134`).
- **Typography**: `Outfit` (headings) paired with `Inter` (body).
- **Animations**: Quiet and steady Framer Motion scroll reveals, interactive parallax, micro-animations, and subtle grain layer.

---

## 🚀 Tech Stack & Features

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router & Turbopack)
- **Styling**: Vanilla CSS custom properties (`var(--accent)`, `var(--card-bg)`) + Tailwind CSS
- **Animations**: [Framer Motion](https://framer.com/motion)
- **Email Server Actions**: Integrated [Resend](https://resend.com) for secure contact form & resume delivery
- **Toast Notifications**: [Sonner](https://sonner.emilkowal.ski)
- **SEO & Schema**: Structured JSON-LD Person schema & OpenGraph tags

---

## 📁 Repository Structure

```
shaktawat_in/
├── public/                  # Public assets (logos, profile images, PDF resume, favicons)
├── src/
│   ├── app/                 # Next.js App Router pages & API server actions
│   │   ├── actions/         # Server Actions (Contact form & Resume email handlers)
│   │   ├── layout.tsx       # Root layout, providers & global Toaster
│   │   ├── page.tsx         # Main single-page portfolio (Hero, About, Strengths, Work, Contact)
│   │   └── globals.css      # CSS custom properties, design tokens, grain overlay
│   ├── components/
│   │   ├── layout/          # Header & navigation elements
│   │   ├── sections/        # Main section components (ContactSection)
│   │   ├── seo/             # JSON-LD structured data script
│   │   └── ui/              # Reusable UI controls (ResumeButton, GrainOverlay, etc.)
│   └── lib/                 # Utility helpers & font definitions
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript compiler configuration
```

---

## 🛠️ Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Configure Environment Variables** (Optional, for email sending):
   Create a `.env.local` file:
   ```env
   RESEND_API_KEY=re_your_resend_api_key_here
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Build for Production**:
   ```bash
   npm run build
   ```
