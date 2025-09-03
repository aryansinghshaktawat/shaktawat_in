This folder contains shared UI components and page sections for the site.

Structure:
- `ui/` — small, reusable UI components (ThemeSwitcher, Avatar, PageTransition, etc.).
- `layout/` — header/footer and layout pieces.
- `sections/` — large page sections for About, Contact, Blog, Skills, etc.

Guidelines:
- Keep one canonical file per feature (avoid duplicate components).
- Client components must include `"use client"` at top.
- Avoid placeholder hrefs like `"#"`; prefer proper routes or `mailto:`/external links.
- Remove unused components to keep codebase clean.
clear