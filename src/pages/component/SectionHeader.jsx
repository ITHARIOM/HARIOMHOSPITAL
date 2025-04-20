import React from "react";

const SectionHeader = ({
  title = "",
  subtitle = "",
  background = "#0ACCCE",
  textColor = "#ffffff",
  className = "",
  paddingTop = 100,
  paddingBottom = 60,
}) => {
  const sectionStyle = {
    background,
    color: textColor,
    paddingTop,
    paddingBottom,
  };

  return (
    <section className={`section-header text-center ${className}`} style={sectionStyle}>
      <div className="container">
        <h2 className="display-4 fw-bold">{title}</h2>
        <p className="lead mb-4">{subtitle}</p>
      </div>
    </section>
  );
};

export default SectionHeader;
