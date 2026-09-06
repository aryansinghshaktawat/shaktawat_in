// src/components/ui/HeroShieldSVG.tsx
// Abstract animated SVG: digital shield with data-flow nodes, electric blue palette.
// Pure CSS keyframe animations — no external dependencies.

export default function HeroShieldSVG() {
  return (
    <div
      className="svg-float"
      style={{ width: "100%", maxWidth: 480, margin: "0 auto" }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 480 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto" }}
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="shieldGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.06" />
          </linearGradient>
          <linearGradient id="shieldStroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
          <linearGradient id="nodeGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
          <linearGradient id="innerGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.04" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ── Background circle rings ── */}
        <g className="svg-orbit" style={{ transformOrigin: "240px 240px" }}>
          <circle cx="240" cy="240" r="190" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.10" strokeDasharray="8 14" fill="none" />
        </g>
        <g className="svg-orbit-rev" style={{ transformOrigin: "240px 240px" }}>
          <circle cx="240" cy="240" r="160" stroke="#8B5CF6" strokeWidth="1" strokeOpacity="0.08" strokeDasharray="4 18" fill="none" />
        </g>
        <circle cx="240" cy="240" r="128" fill="url(#shieldGrad)" />

        {/* ── Outer data-flow ring nodes ── */}
        {/* Node at top */}
        <circle cx="240" cy="52" r="6" fill="url(#nodeGrad)" filter="url(#glow)" className="svg-pulse-dot" style={{ animationDelay: "0s" }} />
        {/* Node top-right */}
        <circle cx="384" cy="116" r="5" fill="#3B82F6" filter="url(#glow)" className="svg-pulse-dot" style={{ animationDelay: "0.4s" }} />
        {/* Node bottom-right */}
        <circle cx="384" cy="364" r="6" fill="url(#nodeGrad)" filter="url(#glow)" className="svg-pulse-dot" style={{ animationDelay: "0.8s" }} />
        {/* Node bottom */}
        <circle cx="240" cy="428" r="5" fill="#8B5CF6" filter="url(#glow)" className="svg-pulse-dot" style={{ animationDelay: "1.2s" }} />
        {/* Node bottom-left */}
        <circle cx="96" cy="364" r="6" fill="url(#nodeGrad)" filter="url(#glow)" className="svg-pulse-dot" style={{ animationDelay: "1.6s" }} />
        {/* Node top-left */}
        <circle cx="96" cy="116" r="5" fill="#3B82F6" filter="url(#glow)" className="svg-pulse-dot" style={{ animationDelay: "2.0s" }} />

        {/* ── Data-flow dashed lines (animated) ── */}
        <line x1="240" y1="52" x2="240" y2="108" stroke="#3B82F6" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="6 4" className="svg-dash" />
        <line x1="384" y1="116" x2="330" y2="158" stroke="#3B82F6" strokeWidth="1.5" strokeOpacity="0.3" strokeDasharray="6 4" className="svg-dash" style={{ animationDelay: "0.3s" }} />
        <line x1="384" y1="364" x2="330" y2="322" stroke="#06B6D4" strokeWidth="1.5" strokeOpacity="0.3" strokeDasharray="6 4" className="svg-dash" style={{ animationDelay: "0.6s" }} />
        <line x1="240" y1="428" x2="240" y2="372" stroke="#8B5CF6" strokeWidth="1.5" strokeOpacity="0.35" strokeDasharray="6 4" className="svg-dash" style={{ animationDelay: "0.9s" }} />
        <line x1="96" y1="364" x2="150" y2="322" stroke="#3B82F6" strokeWidth="1.5" strokeOpacity="0.3" strokeDasharray="6 4" className="svg-dash" style={{ animationDelay: "1.2s" }} />
        <line x1="96" y1="116" x2="150" y2="158" stroke="#06B6D4" strokeWidth="1.5" strokeOpacity="0.3" strokeDasharray="6 4" className="svg-dash" style={{ animationDelay: "1.5s" }} />

        {/* ── Main Shield ── */}
        <g className="svg-shield-glow svg-fadein" style={{ animationDelay: "0.2s" }}>
          <path
            d="M240 108 L316 140 L316 226 C316 276 284 316 240 332 C196 316 164 276 164 226 L164 140 Z"
            fill="url(#innerGrad)"
            stroke="url(#shieldStroke)"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* ── Shield inner grid lines ── */}
          <line x1="164" y1="183" x2="316" y2="183" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.18" />
          <line x1="164" y1="220" x2="316" y2="220" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.14" />
          <line x1="220" y1="140" x2="220" y2="310" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.18" />
          <line x1="260" y1="140" x2="260" y2="320" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.14" />

          {/* ── Shield centre icon: lock ── */}
          {/* Lock body */}
          <rect x="218" y="224" width="44" height="36" rx="6" fill="#3B82F6" fillOpacity="0.22" stroke="#3B82F6" strokeWidth="2" />
          {/* Lock shackle */}
          <path d="M226 224 L226 210 C226 198 254 198 254 210 L254 224" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          {/* Lock keyhole */}
          <circle cx="240" cy="242" r="5" fill="#3B82F6" fillOpacity="0.8" />
          <rect x="237.5" y="242" width="5" height="8" rx="2" fill="#3B82F6" fillOpacity="0.8" />

          {/* ── Top accent dot ── */}
          <circle cx="240" cy="128" r="6" fill="#3B82F6" filter="url(#softGlow)" />
        </g>

        {/* ── Floating mini-nodes around shield ── */}
        <g className="svg-fadein" style={{ animationDelay: "0.5s" }}>
          {/* mini status dots */}
          <circle cx="148" cy="240" r="4" fill="#10B981" filter="url(#glow)" className="svg-pulse-dot" style={{ animationDelay: "0.2s" }} />
          <circle cx="332" cy="240" r="4" fill="#10B981" filter="url(#glow)" className="svg-pulse-dot" style={{ animationDelay: "0.7s" }} />
          <circle cx="196" cy="352" r="4" fill="#3B82F6" filter="url(#glow)" className="svg-pulse-dot" style={{ animationDelay: "1.1s" }} />
          <circle cx="284" cy="352" r="4" fill="#8B5CF6" filter="url(#glow)" className="svg-pulse-dot" style={{ animationDelay: "1.5s" }} />

          {/* Connecting lines to mini nodes */}
          <line x1="164" y1="240" x2="148" y2="240" stroke="#10B981" strokeWidth="1.2" strokeOpacity="0.45" strokeDasharray="4 3" className="svg-dash" />
          <line x1="316" y1="240" x2="332" y2="240" stroke="#10B981" strokeWidth="1.2" strokeOpacity="0.45" strokeDasharray="4 3" className="svg-dash" style={{ animationDelay: "0.4s" }} />
        </g>

        {/* ── Bottom text hint ── */}
        <g className="svg-fadein" style={{ animationDelay: "0.8s" }}>
          <text x="240" y="460" textAnchor="middle" fontFamily="'Roboto Mono', monospace" fontSize="11" fill="#3B82F6" fillOpacity="0.55" letterSpacing="3">SECURE · ENCRYPT · DEFEND</text>
        </g>
      </svg>
    </div>
  );
}
