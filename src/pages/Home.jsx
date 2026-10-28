import { useEffect, useState } from "react";

import slide1 from "@/assets/img/slides/front-img.jpg";
import slide2 from "@/assets/img/slides/front22.jpg";
import png1 from "@/assets/img/1.png";
import png2 from "@/assets/img/2.png";
import png3 from "@/assets/img/3.png";
import png4 from "@/assets/img/4.png";
import welcome from "@/assets/img/welcome.jpg";
import post from "@/assets/img/post.jpg";

import "./Home.css";

const slides = [
  {
    image: slide1,
    /*title: "हरिओम जनसेवा संस्थान",
    subtitle: "हर रोगी को निःशुल्क सेवा, हरिओम का संकल्प",*/
  },
  {
    image: slide2,
    /*title: "हरिओम जनसेवा",
    subtitle: "गरीबों की सेवा, हरिओम का लक्ष्य",*/
  },
];

const services = [
  {
    img: png1,
    title: "स्त्री एवं प्रसूति रोग विशेषज्ञ",
    desc: "किशोरावस्था से लेकर रजोनिवृत्ति तक — महिलाओं के प्रजनन स्वास्थ्य के लिए संपूर्ण और संवेदनशील देखभाल।",
  },
  {
    img: png2,
    title: "जेनरल फिजिशियन",
    desc: "सामान्य स्वास्थ्य समस्याओं और बीमारियों के लिए विशेषज्ञ निदान और प्रभावी उपचार।",
  },
  {
    img: png3,
    title: "हड्डी रोग विशेषज्ञ",
    desc: "हड्डियों, जोड़ों और मांसपेशियों की विशेषज्ञ देखभाल — ताकि आप आसानी से चल-फिर सकें।",
  },
  {
    img: png4,
    title: "कार्डियोलॉजिस्ट",
    desc: "हृदय रोगों के विशेषज्ञ — रोकथाम, निदान और इंटरवेंशनल कार्डिएक केयर में उत्कृष्ट सेवाएँ।",
  },
];

const features = [
  "निःशुल्क ओपीडी सेवाएं (जनरल फिजिशियन, विशेषज्ञ डॉक्टर)",
  "मुफ्त दवाइयों की सुविधा",
  "फ्री लैब जांच और टेस्ट",
  "समय-समय पर निःशुल्क चिकित्सा शिविर",
];

const events = [
  {
    id: "inauguration",
    src: "https://www.youtube-nocookie.com/embed/K9eQHTHiaL0?si=qn9TWEvoV0C6dtLV",
    title: "उद्घाटन समारोह का वीडियो",
    dateTime: "2025-04",
    year: "2025",
    month: "April",
    text: "हरिओम जनसेवा संस्थान का भव्य उद्घाटन समारोह",
  },
  {
    id: "tour",
    src: "https://cdn.iframe.ly/api/iframe?url=https%3A%2F%2Fyoutube.com%2Fshorts%2F57SKw6ajzic%3Fsi%3D61LZIFZzQjqXJdop&key=925108d922be940af814f71907a7df4b",
    title: "अस्पताल का वीडियो टूर",
    dateTime: "2025-04",
    year: "2025",
    month: "April",
    text: "HOSPITAL TOUR",
  },
];

const marqueeText =
  "हरिओम जनसेवा संस्थान • Hariom Janseva Sansthan • हरिओम जनसेवा संस्थान • Hariom Janseva Sansthan • ";

const Home = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto-advance every 5 seconds, stop while the visitor hovers or focuses the slider
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
      {/* ---------- 1. Slider ---------- */}
      <section
        id="banner"
        className="hm-hero"
        aria-roledescription="carousel"
        aria-label="हरिओम जनसेवा संस्थान"
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
              {/* blurred copy fills the empty sides, sharp copy is never cropped */}
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
            aria-label="पिछली स्लाइड"
          >
            <i className="fa fa-chevron-left" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="hm-arrow hm-arrow--next"
            onClick={() => goTo(current + 1)}
            aria-label="अगली स्लाइड"
          >
            <i className="fa fa-chevron-right" aria-hidden="true" />
          </button>
        </div>

        <div className="hm-hero__bar">
          <div className="hm-hero__caption" aria-live="polite">
            <h2>{slides[current].title}</h2>
            <p>{slides[current].subtitle}</p>
          </div>

          <div className="hm-dots" role="tablist" aria-label="स्लाइड चुनें">
            {slides.map((slide, i) => (
              <button
                key={slide.title}
                type="button"
                role="tab"
                aria-selected={i === current}
                aria-label={`स्लाइड ${i + 1}`}
                className={`hm-dot${i === current ? " is-active" : ""}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 2. Slogan ---------- */}
      <section className="hm-slogan">
        <div className="hm-marquee" aria-hidden="true">
          <div className="hm-marquee__track">
            <span>{marqueeText}</span>
            <span>{marqueeText}</span>
          </div>
        </div>

        <div className="hm-wrap hm-slogan__body">
          <h1 className="hm-slogan__title">
            <span className="hm-slogan__hindi">आपका स्वास्थ्य, हमारी सेवा</span>
            <span className="hm-slogan__english">Your Health is Our Mission</span>
          </h1>
          <p className="hm-slogan__text">
            हम बिना किसी खर्च के इलाज करते हैं — इलाज, सेवा और प्यार, हर किसी के लिए।
          </p>
          <p className="hm-slogan__text hm-slogan__text--en">
            We provide free medical care with love and dignity to everyone in need.
          </p>
        </div>
      </section>

      {/* ---------- 3. Services ---------- */}
      <section id="services" className="hm-section hm-services">
        <div className="hm-wrap">
          <h2 className="hm-title">हमारी चिकित्सा सुविधाएँ</h2>

          <div className="hm-services__grid">
            {services.map((service) => (
              <article className="hm-service" key={service.title}>
                <div className="hm-service__icon">
                  <img src={service.img} alt="" />
                </div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 4. Welcome ---------- */}
      <section className="hm-section hm-welcome">
        <div className="hm-wrap hm-welcome__grid">
          <div className="hm-welcome__photo">
            <img src={welcome} alt="हरिओम जनसेवा संस्थान" />
          </div>

          <div className="hm-welcome__text">
            <h2 className="hm-welcome__title">सुस्वागतम्!</h2>
            <p className="hm-welcome__name">हरिओम जनसेवा संस्थान</p>

            <p className="hm-welcome__lead">
              हरिओम जनसेवा संस्थान एक निःस्वार्थ भाव से संचालित संस्था है, जिसका उद्देश्य जरूरतमंद
              और आर्थिक रूप से कमजोर वर्ग के लोगों को निःशुल्क चिकित्सा सेवाएं उपलब्ध कराना है। यह
              अस्पताल मानवता की सेवा को ही सबसे बड़ा धर्म मानते हुए हर रोगी को बिना किसी शुल्क के
              इलाज, दवाइयाँ, परामर्श और अन्य जरूरी स्वास्थ्य सेवाएं प्रदान करता है।
            </p>

            <h3 className="hm-welcome__sub">हमारी विशेषताएं</h3>
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

      {/* ---------- 5. Poster ---------- */}
      <section className="hm-section hm-poster">
        <div className="hm-wrap">
          <img src={post} alt="जागरूकता पोस्टर" />
        </div>
      </section>

      {/* ---------- 6. Events ---------- */}
      <section id="events" className="hm-section hm-events">
        <div className="hm-wrap">
          <h2 className="hm-title">हमारे कार्यक्रम | Our Events</h2>
          <p className="hm-events__intro">
            समाज के स्वास्थ्य, शिक्षा और सहयोग के लिए हम साल भर कार्यक्रम आयोजित करते हैं। हमारी
            ताज़ा गतिविधियों से जुड़े रहें।
          </p>

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
