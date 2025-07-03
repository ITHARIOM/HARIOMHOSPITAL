import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Footer.css'; // Link the CSS file

const Footer = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const getActiveClass = (path) => location.pathname === path ? "active-link" : "";

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <footer className="custom-footer">
      <div className="footer-container">
        <div className="footer-columns">
          {/* Branding */}
          <div className="footer-section">
            <h2 className="footer-brand">हरिओम जनसेवा संस्थान</h2>
            <p>
              हर व्यक्ति को सम्मानपूर्वक, निःशुल्क और गुणवत्तापूर्ण चिकित्सा सेवा उपलब्ध कराना।<br />
              जरूरतमंदों की सेवा करना ही सच्ची मानवता है – यही हमारा संकल्प है।
            </p>
          </div>

          {/* Explore Links */}
          <div className="footer-section">
            <h4>Explore</h4>
            <ul>
              <li><Link to="/" className={getActiveClass("/")}>Home</Link></li>
              <li><Link to="/about" className={getActiveClass("/about")}>About us</Link></li>
              <li><Link to="/mission">Mission</Link></li>
              <li><Link to="/services" className={getActiveClass("/services")}>Services</Link></li>
              <li><Link to="/gallery" className={getActiveClass("/gallery")}>Gallery</Link></li>
              <li><Link to="/contact" className={getActiveClass("/contact")}>Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h4>Contact Us</h4>
            <ul>
              <li><i className="fas fa-map-marker-alt"></i> Badheya, Gopalganj, Bihar</li>
              <li><i className="fas fa-phone-alt"></i> +91 9264496798</li>
              <li><i className="fas fa-envelope"></i> hariomjanseva2021@gmail.com</li>
            </ul>
          </div>

          {/* Newsletter and Social Icons */}
          <div className="footer-section">
            <h4>Stay Connected</h4>
            <p>Subscribe for updates and wellness tips.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit"><i className="fas fa-paper-plane"></i></button>
            </form>
            <div className="social-icons">
              <a href="https://www.facebook.com/share/12Ljkpm1KJb/"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 हरिओम जनसेवा संस्थान. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
