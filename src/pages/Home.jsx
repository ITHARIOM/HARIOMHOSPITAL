

import React from 'react';

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
const Home = () => {
  return (
    <>
      <section id="banner">
        <div className="custom-slider">
          <ul className="slides">
            <li>
              <img src={slide1} alt="Caring for Health" />
              <div className="slide-caption">
                <h3>Caring for Health</h3>
                <p>Doloribus omnis minus temporibus perferendis ipsa</p>
              </div>
            </li>
            <li>
              <img src={slide2} alt="Best Equipments" />
              <div className="slide-caption">
                <h3>Best Equipments</h3>
                <p>Doloribus omnis minus temporibus perferendis ipsa</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      {/* We Care Section */}
      <section className="txt-area classy-section elegant-section">
      <div className="marquee-wrapper">
        <div className="marquee blink-text">
          <span>
            हरिओम जनसेवा हॉस्पिटल • Hariom Jansewa Hospital • हरिओम जनसेवा हॉस्पिटल • Hariom Jansewa Hospital •{" "}
          </span>
        </div>
      </div>

      <div className="container text-center">
        <h1 className="section-title dual-lang-title">
          <span>आपका स्वास्थ्य, हमारी सेवा</span><br />
          <span>Your Health is Our Mission</span>
        </h1>
        <p className="section-subtitle">
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
              <img src={png1} alt="Child Care" />
              <h4>Child Care</h4>
              <p>
                Dedicated pediatric care, ensuring your little ones grow up healthy
                and happy.
              </p>
            </div>
            <div className="service-card">
              <img src={png2} alt="Women Care" />
              <h4>Women Care</h4>
              <p>
                Holistic health services designed to support every phase of a
                woman’s life.
              </p>
            </div>

            <div className="service-card">
              <img src={png3} alt="Family Care" />
              <h4>Family Care</h4>
              <p>
                Comprehensive care for your entire family under one trusted roof.
              </p>
            </div>
            <div className="service-card">
              <img src={png4} alt="Heart Care" />
              <h4>Heart Care</h4>
              <p>
                Advanced cardiac care focused on prevention, diagnosis, and
                recovery.
              </p>
            </div>
            <div className="service-card">
              <img src={png5} alt="Eye Care" />
              <h4>Eye Care</h4>
              <p>
                Expert ophthalmology services helping you see the world clearly.
              </p>
            </div>
            <div className="service-card">
              <img src={png6} alt="Diagnostics" />
              <h4>Diagnostics</h4>
              <p>
                State-of-the-art diagnostic tools for accurate and timely health
                insights.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="about-section elegant-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Welcome!</h2>
            <p className="section-subtitle">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <div className="about-content-wrapper">
            <div className="about-image">
              <img src={welcome} alt="About Us Image" />
            </div>
            <div className="about-text">
              <h5>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque sed,
                quidem quis praesentium, ut unde fuga error commodi architecto.
                Omnis minus autem nemo numquam.
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque sed,
                quidem quis praesentium, deserunt.
              </p>
              <ul className="features-list">
                <li>
                  <i className="fa fa-arrow-circle-right" /> Lorem ipsum dolor sit
                  amet
                </li>
                <li>
                  <i className="fa fa-arrow-circle-right" /> Explicabo deleniti
                  neque aliquid
                </li>
                <li>
                  <i className="fa fa-arrow-circle-right" /> Consectetur adipisicing
                  elit
                </li>
                <li>
                  <i className="fa fa-arrow-circle-right" /> Quo issimos molest
                  quibusdam temporibus
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
                <img src={pat1} alt="Event 1" />
                <div className="event-content">
                  <time dateTime="2023-02-01">
                    <span className="year">2023</span>{" "}
                    <span className="month">Feb</span>
                  </time>
                  <p>
                    Annual Health Check-up Camp organized with community support.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 mb-4">
              <div className="event-card">
                <img src={pat2} alt="Event 2" />
                <div className="event-content">
                  <time dateTime="2023-03-01">
                    <span className="year">2023</span>{" "}
                    <span className="month">Mar</span>
                  </time>
                  <p>
                    Women's Health Awareness Week – Seminars and Free Consultations.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 mb-4">
              <div className="event-card">
                <img src={pat3} alt="Event 3" />
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
