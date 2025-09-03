This folder contains shared UI components and page sections for the site.

Structure:
- `ui/` — small, reusable UI components (ThemeSwitcher, Avatar, PageTransition, etc.).
- `layout/` — header/footer and layout pieces.
- `sections/` — large page sections. Keep only focused sections here.
- `Projects.tsx` — canonical, small projects list used by `src/app/projects/page.tsx`.

Guidelines:
- Keep one canonical file per feature (avoid multiple `Projects*` files).
- Client components must include `"use client"` at top.
- Avoid placeholder hrefs like `"#"`; prefer proper routes or `mailto:`/external links.
