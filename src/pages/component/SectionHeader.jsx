import React from "react";

const SectionHeader = ({
  title = "",
  subtitle = "",
  background = "#0ACCCE",
  textColor = "#ffffff",
  className = "",
  paddingTop = 170,
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
        <h3 className="display-4 fw-bold" style={{ color: "white", textShadow: "2px 2px 4px rgb(0, 0, 0)" ,fontSize: "2.7rem"}}>{title}</h3>
        <p className="lead mb-4" style={{color:"white"}}>{subtitle}</p>
      </div>
    </section>
  );
};

export default SectionHeader;
