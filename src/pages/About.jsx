import React from 'react';
import SectionHeader from './component/SectionHeader';
import './About.css';

const highlights = [
  { label: 'Medicines', value: 'Free' },
  { label: 'Doctor consultation', value: 'Free' },
  { label: 'Emergency support', value: '24×7' },
];

const values = [
  { icon: '❤️', text: 'Compassionate and respectful care' },
  { icon: '🚫', text: 'No-charge medical support for patients in need' },
  { icon: '👨‍👩‍👧‍👦', text: 'Equality, dignity, and inclusion' },
  { icon: '🙌', text: 'Transparency, trust, and care' },
];

const services = [
  {
    key: 'emergency',
    icon: 'fas fa-hand-holding-heart',
    title: '24×7 Emergency Care',
    text: 'Our trained medical team provides quick, reliable emergency response with a strong focus on critical patient needs, compassion, and timely action.',
  },
  {
    key: 'opd',
    icon: 'fas fa-clinic-medical',
    title: 'OPD Services',
    text: 'Patients can access well-structured outpatient services with prompt consultation, personalized attention, and expert diagnosis when needed.',
  },
  {
    key: 'lab',
    icon: 'fas fa-vials',
    title: 'Laboratory Services',
    text: 'Accurate, affordable, and secure diagnostic testing is delivered in a safe environment to support early detection and effective treatment.',
  },
];

const About = () => {
  return (
    <>
      <SectionHeader title="About Us" subtitle="Compassionate healthcare for every life" />

      <main className="ab-page">
        <section className="ab-hero">
          <div className="ab-wrap ab-hero__grid">
            <div className="ab-hero__text">
              <h2 className="ab-hero__title">Simple treatment,<br />real humanity</h2>
              <p className="ab-hero__lead">
                Hariom Janseva Sansthan is a community healthcare institution devoted to making quality treatment accessible for everyone, regardless of financial condition.
              </p>
            </div>

            <dl className="ab-hero__facts">
              {highlights.map((item) => (
                <div className="ab-fact" key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="ab-section ab-story">
          <div className="ab-wrap ab-story__grid">
            <h3 className="ab-section__title">Our story</h3>

            <div className="ab-story__body">
              <p>
                <strong>Hariom Janseva Sansthan</strong> is a dedicated healthcare initiative serving the people of Gopalganj, Bihar and nearby communities. It was founded with a clear mission: no patient should be left untreated because of financial hardship.
              </p>

              <blockquote className="ab-quote">
                <p>“Service is the truest form of humanity.”</p>
                <footer>Founder, Hariom Janseva Sansthan</footer>
              </blockquote>

              <p>
                The institution provides essential medical support to the vulnerable, the poor, and the underserved. From medicines to doctor consultation and basic care, every service is designed to restore dignity, hope, and health.
              </p>

              <p>
                This is more than a hospital—it is a movement of empathy, support, and social responsibility. We continue to work for a future where quality healthcare is available to everyone, with kindness at its core.
              </p>
            </div>
          </div>
        </section>

        <section className="ab-section ab-mission">
          <div className="ab-wrap ab-mission__grid">
            <div className="ab-mission__main">
              <h3 className="ab-section__title">Our mission</h3>
              <p className="ab-mission__text">
                We aim to ensure that every person receives timely care, respectful treatment, and medical guidance without being denied because of financial constraints. Our approach is grounded in empathy, service, and human dignity.
              </p>
              <a href="/contact" className="ab-btn">Get in touch</a>
            </div>

            <div className="ab-values">
              <h3 className="ab-section__title">Our values</h3>
              <ul className="ab-values__list">
                {values.map((v) => (
                  <li key={v.text}>
                    <span className="ab-values__icon" aria-hidden="true">{v.icon}</span>
                    <span>{v.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="ab-section ab-services">
          <div className="ab-wrap">
            <h3 className="ab-section__title">Why choose us</h3>

            <ul className="ab-services__list">
              {services.map((s) => (
                <li className={`ab-service ab-service--${s.key}`} key={s.key}>
                  <span className="ab-service__icon" aria-hidden="true">
                    <i className={s.icon} />
                  </span>
                  <div>
                    <h4>{s.title}</h4>
                    <p>{s.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
