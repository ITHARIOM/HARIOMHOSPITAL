

// import React from 'react';

import slide1 from "@/assets/img/slides/front-img.jpg"
import slide2 from "@/assets/img/slides/front22.jpg"
import png1 from "@/assets/img/1.png"
import png2 from "@/assets/img/2.png"
import png3 from "@/assets/img/3.png"
import png4 from "@/assets/img/4.png"
import png5 from "@/assets/img/5.png"
import png6 from "@/assets/img/6.png"
import welcome from "@/assets/img/welcome.jpg"
import pat1 from "@/assets/img/pt1.jpg"
import pat2 from "@/assets/img/pt2.jpg"
import pat3 from "@/assets/img/pt3.jpg"
import { useEffect, useState } from "react"
import { color } from "framer-motion"
const Home = () => {
  const slides = [
    {
      image: slide1,
      title: "हरिओम जनसेवा संस्थान",
      subtitle: "हर रोगी को निःशुल्क सेवा, हरिओम का संकल्प",
    },
    {
      image: slide2,
      title: "हरिओम जनसेवा",
      subtitle: "गरीबों की सेवा, हरिओम का लक्ष्य",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);
  return (
    <>


      <section id="banner" className="custom-banner-section">
        <div className="custom-banner-slider-container">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`custom-banner-slide ${index === currentIndex ? "active" : ""}`}
            >
              <img src={slide.image} alt={slide.title} />
              <div className="custom-banner-slide-caption">
                <h2>{slide.title}</h2>
                <p>{slide.subtitle}</p>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* We Care Section */}
      <section className="txt-area classy-section elegant-section">
        <div className="marquee-wrapper">
          <div className="marquee blink-text">
            <span>
              हरिओम जनसेवा संस्थान • Hariom Janseva Sansthan • हरिओम जनसेवा संस्थान • Hariom Janseva Sansthan •{" "}
            </span>
          </div>
        </div>

        <div className="elegant-slogan-wrapper text-center">
          <h1 className="elegant-slogan-title">
            <span className="slogan-hindi">आपका स्वास्थ्य, हमारी सेवा</span>
            <span className="slogan-english">Your Health is Our Mission</span>
          </h1>
          <p className="elegant-slogan-subtitle">
            हम बिना किसी खर्च के इलाज करते हैं। इलाज, सेवा और प्यार – हर किसी के लिए।<br />
            We provide free medical care with love and dignity to everyone in need.
          </p>
        </div>

      </section>
      {/* Services Section */}
      <section id="services" className="services-section elegant-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Our Medical Services</h2>
            <p className="section-subtitle">
              Trusted care from expert hands — tailored for every stage of life.
            </p>
          </div>
          <div className="service-grid">
            <div className="service-card">
              <img src={png1} alt="Gynecologist" />
              <h4>Gynecologist</h4>
              <p>
                Comprehensive care for women’s reproductive health, from adolescence through menopause.
              </p>
            </div>

            <div className="service-card">
              <img src={png2} alt="General Physician" />
              <h4>General Physician</h4>
              <p>
                Expert diagnosis and treatment for a wide range of general health concerns and illnesses.
              </p>
            </div>

            <div className="service-card">
              <img src={png3} alt="Orthopedic Specialist" />
              <h4>Orthopedic Specialist</h4>
              <p>
                Specialized care for bones, joints, and muscles — helping you move with ease.
              </p>
            </div>

            <div className="service-card">
              <img src={png4} alt="Cardiologist" />
              <h4>Cardiologist</h4>
              <p>
                Heart health experts offering preventive, diagnostic, and interventional cardiac care.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section elegant-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title" style={{ color: '#ffffff' }}>Welcome!</h2>
            <p className="section-subtitle" style={{ color: '#ffffff' }}>
              हरिओम जनसेवा संस्थान
            </p>
          </div>

          <div className="about-content-wrapper">
            <div className="about-image">
              <img src={welcome} alt="About Us Image" />
            </div>
            <div className="about-text">
              <h5>
                हरिओम जनसेवा संस्थान  एक निःस्वार्थ भाव से संचालित संस्था है, जिसका उद्देश्य जरूरतमंद और आर्थिक रूप से कमजोर वर्ग के लोगों को निःशुल्क चिकित्सा सेवाएं
                उपलब्ध कराना है। यह अस्पताल मानवता की सेवा को ही सबसे बड़ा धर्म मानते हुए हर रोगी को बिना किसी शुल्क के इलाज, दवाइयाँ, परामर्श और अन्य जरूरी स्वास्थ्य सेवाएं प्रदान करता है।
              </h5>
              <p style={{ color: '#ffffff' }}>
                हमारी विशेषताएं:
              </p>
              <ul className="features-list" style={{ color: '#ffffff' }}>
                <li style={{ color: '#ffffff' }}>
                  <i className="fa fa-arrow-circle-right" /> निःशुल्क ओपीडी सेवाएं (जनरल फिजिशियन, विशेषज्ञ डॉक्टर)

                </li>
                <li style={{ color: '#ffffff' }}>
                  <i className="fa fa-arrow-circle-right" /> मुफ्त दवाइयों की सुविधा

                </li >
                <li style={{ color: '#ffffff' }}>
                  <i className="fa fa-arrow-circle-right" /> फ्री लैब जांच और टेस्ट

                </li>
                <li style={{ color: '#ffffff' }}>
                  <i className="fa fa-arrow-circle-right" />समय-समय पर निःशुल्क चिकित्सा शिविर

                </li>

              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="events" className="events-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Our Events</h2>
            <p>
              We host a variety of events throughout the year aimed at community
              wellness, education, and support. Stay connected with our latest
              happenings.
            </p>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-6 mb-4">
              <div className="event-card">
                <div className="video-wrapper" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
                  <iframe
                    // src="https://www.youtube.com/embed/"
                    title="Autoplay Muted Video"
                    src={`https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&controls=1&loop=1&playlist=dQw4w9WgXcQ`}

                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    frameBorder="0"
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  ></iframe>
                </div>
                <div className="event-content">
                  <time dateTime="2023-02-01">
                    <span className="year">2023</span>{" "}
                    <span className="month">Feb</span>
                  </time>
                  <p>Annual Health Check-up Camp organized with community support.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 mb-4">
              <div className="event-card">
                <div className="video-wrapper" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
                  <iframe
                    src="https://www.youtube.com/embed/VIDEO_ID_2"
                    title="Event Video 2"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  ></iframe>
                </div>
                <div className="event-content">
                  <time dateTime="2023-03-01">
                    <span className="year">2023</span>{" "}
                    <span className="month">Mar</span>
                  </time>
                  <p>Women's Health Awareness Week – Seminars and Free Consultations.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 mb-4">
              <div className="event-card">
                <div className="video-wrapper" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
                  <iframe
                    src="https://www.youtube.com/embed/VIDEO_ID_3"
                    title="Event Video 3"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  ></iframe>
                </div>
                <div className="event-content">
                  <time dateTime="2023-04-01">
                    <span className="year">2023</span>{" "}
                    <span className="month">Apr</span>
                  </time>
                  <p>Free Eye Check-up Campaign in collaboration with NGOs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>

  );
}

export default Home;
