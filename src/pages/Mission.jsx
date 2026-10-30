import React from "react";
import SectionHeader from "./component/SectionHeader";
import "./MissionVision.css";

const missionItems = [
  {
    icon: "🏥",
    title: "Accessible care for every patient",
    text: "Our focus is to ensure that no person suffers in silence due to a lack of treatment, medicines, or medical support in their community.",
  },
  {
    icon: "❤️",
    title: "Health as a basic right",
    text: "We believe health is not a privilege but a fundamental right. Every individual deserves timely, respectful, and quality care.",
  },
  {
    icon: "🌿",
    title: "Prevention and awareness",
    text: "We work beyond treatment by encouraging healthy lifestyles, early screening, and better awareness around common health issues.",
  },
  {
    icon: "🤝",
    title: "Service with dignity",
    text: "Every patient is treated with compassion, empathy, and respect. We believe care is most meaningful when it is human-centered.",
  },
];

const visionItems = [
  {
    icon: "🌱",
    title: "A healthier and self-reliant community",
    text: "We dream of a future where every citizen has access to preventive care, trusted treatment, and better health outcomes.",
  },
  {
    icon: "🏘️",
    title: "Healthcare reach across every village",
    text: "We aspire to bring quality, affordable care close to every family, especially in underserved regions and rural communities.",
  },
  {
    icon: "💚",
    title: "No one left behind",
    text: "Our mission is to make sure financial limitations never become a barrier to receiving necessary medical treatment.",
  },
  {
    icon: "🇮🇳",
    title: "A model of service for the nation",
    text: "Hariom Janseva Sansthan aims to become a lasting example of community service, compassion, and dedication in healthcare.",
  },
];

const ServiceList = ({ items }) => (
  <ul className="mv-service-list">
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

const InfoCard = ({ item, index }) => (
  <div className="mv-info-item" style={{ "--item-index": index }}>
    <span className="mv-item-icon" aria-hidden="true">
      {item.icon}
    </span>
    <div>
      <h3>{item.title}</h3>
      <p>{item.text}</p>
    </div>
  </div>
);

const Mission = () => {
  return (
    <main className="mv-page">
      <SectionHeader title="Mission & Vision" subtitle="Service • compassion • humanity" />

      <section className="mv-container">
        <div className="mv-intro">
          <span className="mv-eyebrow">Care with purpose</span>

          <h1>
            Building a healthier society, <span>one life at a time</span>
          </h1>

          <p>
            Hariom Janseva Sansthan is guided by the belief that quality healthcare should reach every home, every family, and every patient with dignity and respect.
          </p>
        </div>

        <div className="mv-grid">
          <article className="mv-card mv-mission">
            <div className="mv-card-top">
              <div className="mv-card-icon">🎯</div>
              <span className="mv-card-label">OUR MISSION</span>
            </div>

            <h2>Our goal</h2>
            <p className="mv-card-description">
              To bring health, hope, and dignity to every life through compassionate and accessible healthcare.
            </p>

            <div className="mv-items">
              {missionItems.map((item, index) => (
                <InfoCard key={item.title} item={item} index={index} />
              ))}
            </div>

            <div className="mv-highlight">
              <span>✦</span>
              <p>Where care exists, trust and healing follow.</p>
            </div>

            <h3 className="mv-service-heading">Key focus areas</h3>

            <ServiceList
              items={[
                "Free OPD and specialist consultation",
                "Medicine support and routine diagnostic assistance",
                "Community health camps and specialist outreach",
              ]}
            />

            <a href="/contact" className="mv-button">
              Support us <span>→</span>
            </a>
          </article>

          <article className="mv-card mv-vision">
            <div className="mv-card-top">
              <div className="mv-card-icon">🌈</div>
              <span className="mv-card-label">OUR VISION</span>
            </div>

            <h2>Our vision</h2>
            <p className="mv-card-description">
              To create a future where every person can access timely care, respect, and a healthier quality of life.
            </p>

            <div className="mv-items">
              {visionItems.map((item, index) => (
                <InfoCard key={item.title} item={item} index={index} />
              ))}
            </div>

            <div className="mv-highlight">
              <span>✦</span>
              <p>Where compassion leads, better communities follow.</p>
            </div>

            <h3 className="mv-service-heading">Future direction</h3>

            <ServiceList
              items={[
                "Strengthening community-based healthcare networks",
                "Expanding women’s health and preventive care programs",
                "Creating a more inclusive and accessible treatment model",
              ]}
            />

            <a href="/contact" className="mv-button">
              Join our mission <span>→</span>
            </a>
          </article>
        </div>

        <div className="mv-footer-note">
          <span>♥</span>
          <p>Our promise: protect every life and bring hope to every family.</p>
        </div>
      </section>
    </main>
  );
};

export default Mission;
