
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const getActiveClass = (path) =>
    location.pathname === path ? "active-link" : "";

  const currentYear = new Date().getFullYear();

  return (
    <footer className="custom-footer">
      {/* Decorative background */}
      <div className="footer-decoration footer-decoration-one" />
      <div className="footer-decoration footer-decoration-two" />

      <div className="footer-container">
        <div className="footer-top">
          <span className="footer-top-icon">
            <i className="fas fa-heartbeat" />
          </span>

          <div>
            <h2>सेवा ही हमारा संकल्प है</h2>
            <p>
              स्वस्थ समाज, खुशहाल जीवन और हर जरूरतमंद तक स्वास्थ्य सेवा।
            </p>
          </div>

          <Link to="/contact" className="footer-top-button">
            हमसे संपर्क करें <i className="fas fa-arrow-right" />
          </Link>
        </div>

        <div className="footer-divider" />

        <div className="footer-columns">
          {/* Branding */}
          <div className="footer-section footer-about">
            <Link to="/" className="footer-brand">
              <span className="footer-brand-icon">
                <i className="fas fa-hospital" />
              </span>

              <span>
                हरिओम जनसेवा संस्थान
                <small>HARIOM JANSHEVA SANSTHAN</small>
              </span>
            </Link>

            <p className="footer-about-text">
              हर व्यक्ति को सम्मानपूर्वक, निःशुल्क और गुणवत्तापूर्ण
              चिकित्सा सेवा उपलब्ध कराना हमारा उद्देश्य है।
              जरूरतमंदों की सेवा करना ही सच्ची मानवता है।
            </p>

            <div className="footer-trust">
              <i className="fas fa-hand-holding-heart" />
              <span>नर सेवा नारायण सेवा</span>
            </div>
          </div>

          {/* Quick links */}
          <div className="footer-section">
            <h3 className="footer-heading">Quick Links</h3>

            <ul className="footer-links">
              <li>
                <Link to="/" className={getActiveClass("/")}>
                  <i className="fas fa-angle-right" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className={getActiveClass("/about")}>
                  <i className="fas fa-angle-right" /> About Us
                </Link>
              </li>
              <li>
                <Link to="/mission" className={getActiveClass("/mission")}>
                  <i className="fas fa-angle-right" /> Mission & Vision
                </Link>
              </li>
              <li>
                <Link to="/services" className={getActiveClass("/services")}>
                  <i className="fas fa-angle-right" /> Our Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className={getActiveClass("/gallery")}>
                  <i className="fas fa-angle-right" /> Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className={getActiveClass("/contact")}>
                  <i className="fas fa-angle-right" /> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact details */}
          <div className="footer-section">
            <h3 className="footer-heading">Contact Information</h3>

            <ul className="footer-contact">
              <li>
                <span className="footer-contact-icon">
                  <i className="fas fa-map-marker-alt" />
                </span>
                <span>
                  <strong>Our Location</strong>
                  Badheya, Gopalganj, Bihar, India
                </span>
              </li>

              <li>
                <span className="footer-contact-icon">
                  <i className="fas fa-phone-alt" />
                </span>
                <span>
                  <strong>Call Us</strong>
                  <a href="tel:+919264496798">
                    +91 9264496798
                  </a>
                </span>
              </li>

              <li>
                <span className="footer-contact-icon">
                  <i className="fas fa-envelope" />
                </span>
                <span>
                  <strong>Email Us</strong>
                  <a href="mailto:hariomjanseva2021@gmail.com">
                    hariomjanseva2021@gmail.com
                  </a>
                </span>
              </li>
            </ul>
          </div>

          {/* Social media */}
          <div className="footer-section footer-connect">
            <h3 className="footer-heading">Stay Connected</h3>

            <p>
              हमारे सेवा कार्यों, स्वास्थ्य शिविरों और नई गतिविधियों
              की जानकारी के लिए हमसे जुड़ें।
            </p>

            <div className="social-icons">
              <a
                href="https://www.facebook.com/share/12Ljkpm1KJb/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f" />
              </a>

              <a href="/contact" aria-label="Instagram details">
                <i className="fab fa-instagram" />
              </a>

              <a href="/contact" aria-label="Twitter details">
                <i className="fab fa-twitter" />
              </a>

              <a href="/contact" aria-label="YouTube details">
                <i className="fab fa-youtube" />
              </a>
            </div>

            <div className="footer-connect-note">
              <i className="fas fa-heart" />
              आपकी सेवा, हमारा सौभाग्य
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p>
            © {currentYear} <strong>हरिओम जनसेवा संस्थान</strong>.
            All rights reserved.
          </p>

          <p className="footer-bottom-tagline">
            Made with <i className="fas fa-heart" /> for humanity
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
