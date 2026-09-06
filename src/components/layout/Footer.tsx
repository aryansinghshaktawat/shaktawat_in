// src/components/layout/Footer.tsx
// The main Footer for this portfolio is embedded in page.tsx (dark inversion section).
// This file is a no-op stub for non-homepage pages.
export default function Footer() {
  return (
    <footer
      style={{
        background: "rgba(42,65,52,0.04)",
        borderTop: "1px solid rgba(42,65,52,0.08)",
        padding: "24px",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-inter)",
          fontSize: "0.78rem",
          color: "var(--text-muted)",
        }}
      >
        © {new Date().getFullYear()} Aryan Singh Shaktawat
      </p>
    </footer>
  );
}
