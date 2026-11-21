import { useEffect, useState } from "react";

import slide1 from "@/assets/img/front-img.jpg";
import slide2 from "@/assets/img/front22.jpg";
import welcome from "@/assets/img/welcome.jpg";
import post from "@/assets/img/post.jpg";

import "./Home.css";

const slides = [
  {
    image: slide1,
    title: "Compassionate care for every family",
    subtitle: "Modern diagnostics, expert doctors, and patient-first treatment in a healing environment.",
  },
  {
    image: slide2,
    title: "Trusted healthcare, human connection",
    subtitle: "Accessible medical support, preventive care, and dedicated specialists for every stage of life.",
  },
];

const services = [
  {
    id: "gynecology",
    img: "/assets/images/gyencology.png",
    title: "Gynecology & Obstetrics",
    subtitle: null,
    desc: "Complete women's healthcare from adolescence to menopause, including preventive, diagnostic, and maternity support.",
  },
  {
    id: "physician",
    img: "/assets/images/general physician.png",
    title: "General Physician",
    subtitle: null,
    desc: "Expert evaluation and treatment for common illnesses, chronic conditions, and everyday health concerns.",
  },
  {
    id: "orthopedic",
    img: "/assets/images/orthopedic.png",
    title: "Orthopedic Care",
    subtitle: null,
    desc: "Specialized treatment for bones, joints, and muscles to restore mobility, comfort, and confident movement.",
  },
  {
    id: "rehab",
    img: "/assets/images/therapy.png",
    title: "Physical Therapy & Rehabilitation",
    subtitle: null,
    desc: "Customized therapy and rehabilitation programs to restore mobility, strength, and functional independence.",
  },
  {
    id: "cardiology",
    img: "/assets/images/Cardiology.png",
    title: "Cardiology",
    subtitle: null,
    desc: "Advanced heart care focused on prevention, early diagnosis, ongoing management, and long-term wellness.",
  },
];

const features = [
  "Free OPD consultations with general and specialist doctors",
  "Affordable and accessible medicines for every patient",
  "Diagnostic lab services with proper testing support",
  "Community health camps and regular wellness outreach",
];

const events = [
  {
    id: "inauguration",
    src: "https://www.youtube-nocookie.com/embed/K9eQHTHiaL0?si=qn9TWEvoV0C6dtLV",
    title: "Hospital inauguration ceremony",
    dateTime: "2025-04",
    year: "2025",
    month: "April",
    text: "A meaningful launch event celebrating compassionate health services for the community.",
  },
  {
    id: "tour",
    src: "https://cdn.iframe.ly/api/iframe?url=https%3A%2F%2Fyoutube.com%2Fshorts%2F57SKw6ajzic%3Fsi%3D61LZIFZzQjqXJdop&key=925108d922be940af814f71907a7df4b",
    title: "Hospital tour video",
    dateTime: "2025-04",
    year: "2025",
    month: "April",
    text: "A quick look into the facilities and patient-first environment at our hospital.",
  },
];

const marqueeText =
  "Hariom Janseva Sansthan • Compassionate care • Modern treatment • Trusted community hospital • Hariom Janseva Sansthan • ";

const Home = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return undefined;
    const id = setInterval(() => {
      setCurrent((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, [paused]);

  const goTo = (index) => setCurrent((index + slides.length) % slides.length);

  return (
    <div className="hm-page">
      <section
        id="banner"
        className="hm-hero"
        aria-roledescription="carousel"
        aria-label="Hariom Janseva Sansthan"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <div className="hm-hero__stage">
          {slides.map((slide, i) => (
            <div
              key={slide.title}
              className={`hm-slide${i === current ? " is-active" : ""}`}
              aria-hidden={i !== current}
            >
              <div
                className="hm-slide__bg"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <img className="hm-slide__img" src={slide.image} alt={slide.title} />
            </div>
          ))}

          <button
            type="button"
            className="hm-arrow hm-arrow--prev"
            onClick={() => goTo(current - 1)}
            aria-label="Previous slide"
          >
            <i className="fa fa-chevron-left" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="hm-arrow hm-arrow--next"
            onClick={() => goTo(current + 1)}
            aria-label="Next slide"
          >
            <i className="fa fa-chevron-right" aria-hidden="true" />
          </button>
        </div>

        <div className="hm-hero__bar">
          <div className="hm-hero__caption" aria-live="polite">
            <span className="hm-badge">Patient-first care</span>
            <h2>{slides[current].title}</h2>
            <p>{slides[current].subtitle}</p>
          </div>

          <div className="hm-dots" role="tablist" aria-label="Select slide">
            {slides.map((slide, i) => (
              <button
                key={slide.title}
                type="button"
                role="tab"
                aria-selected={i === current}
                aria-label={`Slide ${i + 1}`}
                className={`hm-dot${i === current ? " is-active" : ""}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="hm-slogan">
        <div className="hm-marquee" aria-hidden="true">
          <div className="hm-marquee__track">
            <span>{marqueeText}</span>
            <span>{marqueeText}</span>
          </div>
        </div>

        <div className="hm-wrap hm-slogan__body">
          <h1 className="hm-slogan__title">
            <span className="hm-slogan__headline">Your health, our responsibility</span>
            <span className="hm-slogan__sub">Trusted care for every patient</span>
          </h1>
          <p className="hm-slogan__text">
            We are committed to delivering accessible, compassionate, and high-quality medical support for every patient who needs it.
          </p>
        </div>
      </section>

      <section id="services" className="hm-section hm-services">
        <div className="hm-wrap">
          <div className="hm-section__heading">
            <p className="hm-section__eyebrow">Our care focus</p>
            <h2 className="hm-title">Complete healthcare services for your family</h2>
          </div>

          <div className="hm-care__grid">
            {services.map((service, index) => (
              <article
                className={`hm-care-card hm-care-card--${index + 1}`}
                key={service.id}
              >
                <div
                    className="hm-care-card__media"
                    style={{
                      backgroundImage: `url("${service.img}")`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                  <div className="hm-care-card__overlay" />
                </div>
                <div className="hm-care-card__content">
                  <h3 className="hm-care-card__title">{service.title}</h3>
                  {service.subtitle && (
                    <span className="hm-care-card__subtitle">{service.subtitle}</span>
                  )}
                  <p className="hm-care-card__desc">{service.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="hm-welcome">
        <div className="hm-wrap hm-welcome__grid">
          <div className="hm-welcome__photo">
            <img src={welcome} alt="Hariom Janseva Sansthan" />
          </div>

          <div className="hm-welcome__text">
            <p className="hm-section__eyebrow hm-section__eyebrow--light">Welcome</p>
            <h2 className="hm-welcome__title">A hospital built on compassion and trust</h2>
            <p className="hm-welcome__name">Hariom Janseva Sansthan</p>

            <p className="hm-welcome__lead">
              Hariom Janseva Sansthan is a community-focused healthcare institution dedicated to serving underprivileged families with dignity, empathy, and affordable treatment. We believe healthcare should never be out of reach because of financial hardship.
            </p>

            <h3 className="hm-welcome__sub">Why patients choose us</h3>
            <ul className="hm-features">
              {features.map((item) => (
                <li key={item}>
                  <i className="fa fa-check-circle" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="hm-section hm-poster">
        <div className="hm-wrap">
          <img src={post} alt="Health awareness poster" />
        </div>
      </section>

      <section id="events" className="hm-section hm-events">
        <div className="hm-wrap">
          <div className="hm-section__heading">
            <p className="hm-section__eyebrow">Community impact</p>
            <h2 className="hm-title">Health events and awareness moments</h2>
          </div>

          <div className="hm-events__grid">
            {events.map((event) => (
              <article className="hm-event" key={event.id}>
                <div className="hm-event__video">
                  <iframe
                    src={event.src}
                    title={event.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="hm-event__body">
                  <time dateTime={event.dateTime}>
                    {event.month} {event.year}
                  </time>
                  <p>{event.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
