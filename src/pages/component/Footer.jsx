import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const getActiveClass = (path) => (location.pathname === path ? "active-link" : "");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="custom-footer">
      <div className="footer-decoration footer-decoration-one" />
      <div className="footer-decoration footer-decoration-two" />

      <div className="footer-container">
        <div className="footer-top">
          <span className="footer-top-icon">
            <i className="fas fa-heartbeat" />
          </span>

          <div>
            <h2>Care that feels personal</h2>
            <p>Accessible healthcare, human connection, and support that reaches every family.
            </p>
          </div>

          {/* <Link to="/contact" className="footer-top-button">
            Book an appointment <i className="fas fa-arrow-right" />
          </Link> */}
        </div>

        <div className="footer-divider" />

        <div className="footer-columns">
          <div className="footer-section footer-about">
            <Link to="/" className="footer-brand">
              <span className="footer-brand-icon">
                <i className="fas fa-hospital" />
              </span>

              <span>
                Hariom Janseva Sansthan
                <small>COMMUNITY CARE HOSPITAL</small>
              </span>
            </Link>

            <p className="footer-about-text">
              We are committed to delivering respectful, affordable, and high-quality healthcare to everyone who needs support.
            </p>

            <div className="footer-trust">
              <i className="fas fa-hand-holding-heart" />
              <span>Service with compassion</span>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Quick links</h3>

            <ul className="footer-links">
              {[
                ["/", "Home"],
                ["/about", "About us"],
                ["/mission", "Mission & Vision"],
                ["/services", "Our services"],
                ["/gallery", "Gallery"],
                ["/contact", "Contact us"],
              ].map(([path, label]) => (
                <li key={path}>
                  <Link to={path} className={getActiveClass(path)}>
                    <i className="fas fa-angle-right" /> {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Contact information</h3>

            <ul className="footer-contact">
              <li>
                <span className="footer-contact-icon">
                  <i className="fas fa-map-marker-alt" />
                </span>
                <span>
                  <strong>Location</strong>
                  Badheya, Gopalganj, Bihar, India
                </span>
              </li>

              <li>
                <span className="footer-contact-icon">
                  <i className="fas fa-phone-alt" />
                </span>
                <span>
                  <strong>Call us</strong>
                  <a href="tel:+919264496798">+91 9264496798</a>
                </span>
              </li>

              <li>
                <span className="footer-contact-icon">
                  <i className="fas fa-envelope" />
                </span>
                <span>
                  <strong>Email us</strong>
                  <a href="mailto:hariomjanseva2021@gmail.com">hariomjanseva2021@gmail.com</a>
                </span>
              </li>
            </ul>
          </div>

          <div className="footer-section footer-connect">
            <h3 className="footer-heading">Stay connected</h3>

            <p>
              Follow our initiatives, community health camps, and service updates to stay informed and involved.
            </p>

            <div className="social-icons">
              <a href="https://www.facebook.com/share/12Ljkpm1KJb/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
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
              Your care, our commitment
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} <strong>Hariom Janseva Sansthan</strong>. All rights reserved.
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
