

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
              <img src={slide1} alt="हरिओम जनसेवा संस्थान " />
              <div className="slide-caption">
                <h3>हरिओम जनसेवा संस्थान </h3>
                <p>हर रोगी को निःशुल्क सेवा, हरिओम का संकल्प</p>
              </div>
            </li>
            <li>
              <img src={slide2} alt="Best Equipments" />
              <div className="slide-caption">
                <h3>हरिओम जनसेवा </h3>
                <p>गरीबों की सेवा, हरिओम का लक्ष्य</p>
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
          हरिओम जनसेवा संस्थान • Hariom Janseva Sansthan • हरिओम जनसेवा संस्थान • Hariom Janseva Sansthan •{" "}
          </span>
        </div>
      </div>

      <div className="container text-center">
        <h1 className="section-title dual-lang-title">
          <span>आपका स्वास्थ्य, हमारी सेवा</span><br />
          <span>Your Health is Our Mission</span>
        </h1>
        <h1>
        <p className="section-subtitle">
          हम बिना किसी खर्च के इलाज करते हैं। इलाज, सेवा और प्यार – हर किसी के लिए।<br />
          We provide free medical care with love and dignity to everyone in need.
        </p>
        </h1>
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
              <p>
              हमारी विशेषताएं:
              </p>
              <ul className="features-list">
                <li>
                  <i className="fa fa-arrow-circle-right" /> निःशुल्क ओपीडी सेवाएं (जनरल फिजिशियन, विशेषज्ञ डॉक्टर)
                  
                </li>
                <li>
                  <i className="fa fa-arrow-circle-right" /> मुफ्त दवाइयों की सुविधा
                  
                </li>
                <li>
                  <i className="fa fa-arrow-circle-right" /> फ्री लैब जांच और टेस्ट
                  
                </li>
                <li>
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
