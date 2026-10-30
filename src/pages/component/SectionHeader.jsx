import React from "react";
import "./SectionHeader.css";

const SectionHeader = ({
  title = "",
  subtitle = "",
  background,
  textColor = "#ffffff",
  className = "",
  paddingTop,
  paddingBottom,
}) => {
  const sectionStyle = {
    ...(background ? { background } : {}),
    color: textColor,
    ...(paddingTop !== undefined ? { paddingTop } : {}),
    ...(paddingBottom !== undefined ? { paddingBottom } : {}),
  };

  return (
    <section
      className={`section-header ${className}`.trim()}
      style={sectionStyle}
    >
      {/* Background glowing waves, aurora mesh & particles */}
      <div className="section-header-waves-wrap" aria-hidden="true">
        <svg
          className="section-header-waves"
          viewBox="0 0 1440 420"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="cyanWaveGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0df8c8" stopOpacity="0.45" />
              <stop offset="45%" stopColor="#10b99e" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#044b4e" stopOpacity="0.05" />
            </linearGradient>

            <linearGradient id="cyanWaveGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#34f5c5" stopOpacity="0.35" />
              <stop offset="60%" stopColor="#057a6e" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#022a30" stopOpacity="0.02" />
            </linearGradient>

            <linearGradient id="glowRibbon" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#00ffbf" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#2dd4bf" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.5" />
            </linearGradient>

            <filter id="waveBlur" x="-10%" y="-10%" width="120%" height="120%">
              <feGaussianBlur stdDeviation="12" />
            </filter>
            <filter id="ribbonGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Broad glowing background wave aurora */}
          <path
            d="M-50,220 C220,130 460,330 780,210 C1080,95 1280,240 1500,160 L1500,420 L-50,420 Z"
            fill="url(#cyanWaveGrad1)"
            filter="url(#waveBlur)"
          />

          {/* Secondary counter-flowing wave */}
          <path
            d="M-40,140 C280,260 520,80 860,190 C1140,280 1320,110 1480,180 L1480,420 L-40,420 Z"
            fill="url(#cyanWaveGrad2)"
            filter="url(#waveBlur)"
          />

          {/* Sharp flowing luminous ribbon lines */}
          <path
            d="M-20,190 C240,110 500,290 820,190 C1100,100 1300,210 1460,140"
            stroke="url(#glowRibbon)"
            strokeWidth="3.5"
            fill="none"
            filter="url(#ribbonGlow)"
            opacity="0.85"
          />
          <path
            d="M-20,240 C320,170 580,310 900,220 C1180,140 1340,270 1460,200"
            stroke="rgba(80, 250, 215, 0.45)"
            strokeWidth="2"
            fill="none"
            filter="url(#ribbonGlow)"
          />

          {/* Ambient luminous particle nodes / bokeh */}
          <circle cx="210" cy="170" r="3" fill="#2bf2ca" opacity="0.8" />
          <circle cx="240" cy="190" r="1.8" fill="#ffffff" opacity="0.9" />
          <circle cx="680" cy="140" r="2.5" fill="#2bf2ca" opacity="0.75" />
          <circle cx="720" cy="170" r="1.5" fill="#ffffff" opacity="0.85" />
          <circle cx="940" cy="230" r="3.5" fill="#2bf2ca" opacity="0.7" />
          <circle cx="1180" cy="160" r="2.5" fill="#38ef7d" opacity="0.8" />
          <circle cx="1220" cy="130" r="1.8" fill="#ffffff" opacity="0.9" />
          <circle cx="1320" cy="210" r="3" fill="#2bf2ca" opacity="0.75" />
        </svg>

        {/* Dynamic floating sparkles in DOM for crisp scaling */}
        <span className="section-particle particle-1" />
        <span className="section-particle particle-2" />
        <span className="section-particle particle-3" />
        <span className="section-particle particle-4" />
        <span className="section-particle particle-5" />
      </div>

      {/* Main Content Area */}
      <div className="section-header-content">
        <span className="section-header-badge">
          HARIOM JANSEVA SANSTHAN
        </span>

        <h1>{title}</h1>

        {subtitle && <p>{subtitle}</p>}

        {/* Luminous Slider / Accent Indicator */}
        <div className="section-header-underline">
          <span />
        </div>
      </div>

      {/* Bottom Right Glowing 4-Point Diamond Sparkle Star */}
      <div className="section-header-star" aria-hidden="true">
        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M18 0 C18 9.94 26.06 18 36 18 C26.06 18 18 26.06 18 36 C18 26.06 9.94 18 0 18 C9.94 18 18 9.94 18 0 Z"
            fill="#7eeed8"
          />
        </svg>
      </div>
    </section>
  );
};

export default SectionHeader;
