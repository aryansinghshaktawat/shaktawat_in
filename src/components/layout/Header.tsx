// src/components/layout/Header.tsx
// Soft Sage theme — minimalist floating header with pill nav links.
"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { href: "#about",      label: "About"      },
  { href: "#work",       label: "Work"        },
  { href: "#strengths",  label: "Strengths"  },
  { href: "#contact",    label: "Contact"    },
] as const;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setActive(href);
    setOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        height: "var(--site-header-height)",
        transition: "all 350ms cubic-bezier(0.4,0,0.2,1)",
        background: scrolled
          ? "rgba(253,252,248,0.88)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px) saturate(1.6)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px) saturate(1.6)" : "none",
        borderBottom: scrolled ? "1px solid rgba(42,65,52,0.06)" : "none",
      }}
      role="banner"
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 32px",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNav(e, "#hero")}
          style={{
            fontFamily: "var(--font-outfit)",
            fontWeight: 900,
            fontSize: "1.6rem",
            letterSpacing: "-0.06em",
            color: "var(--accent)",
            textDecoration: "none",
          }}
          aria-label="Aryan Singh Shaktawat — Home"
        >
          ARYN
        </a>

        {/* Desktop nav */}
        <nav
          aria-label="Primary"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            background: "rgba(255,255,255,0.6)",
            backdropFilter: "blur(12px)",
            borderRadius: 9999,
            padding: "6px 10px",
            border: "1px solid rgba(42,65,52,0.08)",
            boxShadow: "0 4px 24px -8px rgba(42,65,52,0.08)",
          }}
          className="hidden sm:flex"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNav(e, item.href)}
              className={`nav-pill ${active === item.href ? "active" : ""}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden p-2 rounded-xl"
          style={{ color: "var(--accent)", background: "rgba(255,255,255,0.7)" }}
          aria-label="Menu"
          onClick={() => setOpen(!open)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open
              ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
              : <><line x1="3" y1="8" x2="21" y2="8"/><line x1="3" y1="16" x2="21" y2="16"/></>
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 16,
            right: 16,
            background: "rgba(253,252,248,0.96)",
            backdropFilter: "blur(20px)",
            borderRadius: 20,
            border: "1px solid rgba(42,65,52,0.08)",
            boxShadow: "0 20px 40px -10px rgba(42,65,52,0.15)",
            padding: 16,
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNav(e, item.href)}
              style={{
                display: "block",
                padding: "12px 16px",
                borderRadius: 12,
                fontFamily: "var(--font-inter)",
                fontWeight: 500,
                fontSize: "0.95rem",
                textDecoration: "none",
                transition: "all 200ms ease",
                background: active === item.href ? "var(--accent)" : "transparent",
                color: active === item.href ? ("#fff" as string) : ("var(--text-primary)" as string),
              } as React.CSSProperties}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
