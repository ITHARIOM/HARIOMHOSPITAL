
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
      <div className="section-header-content">
        <span className="section-header-badge">
          HARIOM JANSHEVA SANSTHAN
        </span>

        <h1>{title}</h1>

        {subtitle && <p>{subtitle}</p>}

        <div className="section-header-underline">
          <span />
        </div>
      </div>
    </section>
  );
};

export default SectionHeader;
