# Components Architecture

This directory contains clean, modular UI components and page sections for the portfolio.

## Structure:
- `layout/` — Global site header (`Header.tsx`).
- `sections/` — Interactive page sections (`ContactSection.tsx`).
- `seo/` — Structured data schemas (`JsonLd.tsx`).
- `ui/` — Reusable client UI components (`ResumeButton.tsx`, `GrainOverlay.tsx`, `PageTransition.tsx`, `RevealProvider.tsx`).

## Guidelines:
- Single canonical file per feature.
- Soft Sage & Forest aesthetic tokens (`--accent`, `--card-bg`, `--text-primary`).
- Server actions placed in `@/app/actions/`.