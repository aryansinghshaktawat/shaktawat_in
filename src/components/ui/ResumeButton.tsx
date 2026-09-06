// src/components/ui/ResumeButton.tsx
// Interactive "Request Resume" button with Framer Motion expand-to-input animation,
// loading spinner, success state, and Sonner toast notification.
"use client";

import { useRef, useState, useTransition } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { ArrowUpRight, ArrowRight, Loader2, CheckCircle } from "lucide-react";
import { requestResume } from "@/app/actions/resume";

type State = "idle" | "expanded" | "loading" | "done" | "error";

export default function ResumeButton() {
  const [uiState, setUiState] = useState<State>("idle");
  const [inputValue, setInputValue] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isPending, startTransition] = useTransition();
  const inputRef = useRef<HTMLInputElement>(null);

  // Expand button to show email input
  const handleExpand = () => {
    if (uiState === "done") return;
    setUiState("expanded");
    setTimeout(() => inputRef.current?.focus(), 320);
  };

  // Submit the email
  const handleSubmit = () => {
    if (!inputValue.trim()) {
      setErrorMsg("Please enter your email.");
      inputRef.current?.focus();
      return;
    }
    setErrorMsg("");
    setUiState("loading");

    startTransition(async () => {
      const result = await requestResume(inputValue);
      if (result.status === "success") {
        setUiState("done");
        toast.success("Request received! Aryan will reach out shortly.", {
          duration: 5000,
          style: {
            background: "#2A4134",
            color: "#E2EBE4",
            borderRadius: "9999px",
            border: "1px solid rgba(226,235,228,0.15)",
            fontFamily: "var(--font-inter)",
            fontSize: "0.875rem",
            padding: "14px 22px",
          },
          icon: "✓",
        });
      } else {
        setUiState("expanded");
        setErrorMsg(result.status === "error" ? result.message : "Something went wrong.");
        toast.error(result.status === "error" ? result.message : "Something went wrong.", {
          style: {
            background: "#5C1A1A",
            color: "#FFE4E4",
            borderRadius: "9999px",
            fontFamily: "var(--font-inter)",
            fontSize: "0.875rem",
            padding: "14px 22px",
          },
        });
        setTimeout(() => inputRef.current?.focus(), 50);
      }
    });
  };

  // Dismiss on Escape, submit on Enter
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setUiState("idle");
      setInputValue("");
      setErrorMsg("");
    }
    if (e.key === "Enter") handleSubmit();
  };

  /* ─ Shared pill styles ─ */
  const pillBase: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    borderRadius: 9999,
    overflow: "hidden",
    fontFamily: "var(--font-inter)",
    fontWeight: 600,
    fontSize: "0.9rem",
    letterSpacing: "0.02em",
    cursor: "pointer",
    border: "1.5px solid rgba(42,65,52,0.25)",
    background: "transparent",
    color: "var(--text-primary)",
    outline: "none",
    position: "relative",
  };

  /* ─ DONE state ─ */
  if (uiState === "done") {
    return (
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        style={{
          ...pillBase,
          background: "var(--accent)",
          border: "1.5px solid var(--accent)",
          color: "#fff",
          padding: "13px 26px",
          gap: 8,
          pointerEvents: "none",
        }}
        aria-live="polite"
      >
        <CheckCircle size={16} />
        Request Sent ✓
      </motion.div>
    );
  }

  /* ─ LOADING state ─ */
  if (uiState === "loading" || isPending) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{
          ...pillBase,
          background: "rgba(42,65,52,0.08)",
          border: "1.5px solid rgba(42,65,52,0.15)",
          color: "var(--accent)",
          padding: "13px 32px",
          gap: 10,
          pointerEvents: "none",
        }}
        aria-label="Sending request…"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        >
          <Loader2 size={15} />
        </motion.div>
        <span style={{ fontSize: "0.875rem" }}>Sending…</span>
      </motion.div>
    );
  }

  /* ─ EXPANDED state (email input) ─ */
  if (uiState === "expanded") {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <motion.div
          initial={{ width: 180, opacity: 0.6 }}
          animate={{ width: "clamp(280px, 50vw, 360px)", opacity: 1 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: "flex",
            alignItems: "center",
            borderRadius: 9999,
            border: "1.5px solid rgba(42,65,52,0.35)",
            background: "rgba(255,255,255,0.75)",
            backdropFilter: "blur(12px)",
            overflow: "hidden",
            boxShadow: "0 4px 20px -6px rgba(42,65,52,0.15)",
          }}
        >
          {/* Input */}
          <input
            ref={inputRef}
            type="email"
            placeholder="Enter your email…"
            value={inputValue}
            onChange={(e) => { setInputValue(e.target.value); setErrorMsg(""); }}
            onKeyDown={handleKeyDown}
            style={{
              flex: 1,
              padding: "12px 20px",
              border: "none",
              background: "transparent",
              fontFamily: "var(--font-inter)",
              fontSize: "0.875rem",
              color: "var(--text-primary)",
              outline: "none",
              minWidth: 0,
            }}
            aria-label="Your email address"
            autoComplete="email"
          />

          {/* Submit arrow */}
          <button
            onClick={handleSubmit}
            style={{
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: "var(--accent)",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              margin: "4px",
              transition: "background 200ms ease, transform 150ms ease",
            }}
            onMouseOver={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--accent-hover)"; }}
            onMouseOut={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--accent)"; }}
            aria-label="Send resume request"
          >
            <ArrowRight size={15} />
          </button>
        </motion.div>

        {/* Error message */}
        <AnimatePresence>
          {errorMsg && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              style={{
                fontSize: "0.75rem",
                color: "#B91C1C",
                paddingLeft: 20,
                fontFamily: "var(--font-inter)",
              }}
            >
              {errorMsg}
            </motion.p>
          )}
        </AnimatePresence>

        {/* Dismiss hint */}
        <p
          style={{
            fontSize: "0.68rem",
            color: "var(--text-muted)",
            paddingLeft: 20,
            fontFamily: "var(--font-inter)",
          }}
        >
          Press Esc to cancel · Enter to submit
        </p>
      </div>
    );
  }

  /* ─ IDLE state (default button) ─ */
  return (
    <motion.button
      onClick={handleExpand}
      whileHover={{ scale: 1.03, borderColor: "rgba(42,65,52,0.5)" }}
      whileTap={{ scale: 0.98 }}
      style={{
        ...pillBase,
        padding: "13px 26px",
        gap: 8,
        transition: "border-color 200ms ease",
      }}
      aria-label="Request resume — click to enter your email"
    >
      Resume <ArrowUpRight size={15} />
    </motion.button>
  );
}
