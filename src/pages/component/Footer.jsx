import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    console.log(location);
    const getActiveClass = (path) => {
        return location.pathname === path ? "active" : "";

    }

    // Close menu and dropdown on route change
    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    return (
        <footer className="hospital-footer">
            <div className="container">
                <div className="footer-columns">
                    <div className="footer-branding">
                        <h2>हरिओम जनसेवा संस्थान </h2>
                        <p>
                            हर व्यक्ति को सम्मानपूर्वक, निःशुल्क और गुणवत्तापूर्ण चिकित्सा सेवा उपलब्ध कराना।
                            जरूरतमंदों की सेवा करना ही सच्ची मानवता है – यही हमारा संकल्प है।
                        </p>
                    </div>
                    <div className="footer-links">
                        <h4>Explore</h4>
                        <ul>
                            <li className={getActiveClass("/")}>
                                <Link to="/">Home</Link>
                            </li>
                            <li className={getActiveClass("/about")}>
                                <Link to="/about">About us</Link>
                            </li>
                            <li>
                                <Link to="/mission">Mission</Link>
                            </li>
                            <li className={getActiveClass("/services")}>
                                <Link to="/services">Services</Link>
                            </li>
                            <li className={getActiveClass("/gallery")}>
                                <Link to="/gallery">Gallery</Link>
                            </li>
                            <li className={getActiveClass("/contact")}>
                                <Link to="/contact">Contact</Link>
                            </li>
                            

                        </ul>
                    </div>
                    <div className="footer-contact">
                        <h4>Contact Us</h4>
                        <ul>
                            <li>
                                <i className="fas fa-map-marker-alt" /> 123 Hope Street, Pune
                            </li>
                            <li>
                                <i className="fas fa-phone-alt" /> +91 9264496798
                            </li>
                            <li>
                                <i className="fas fa-envelope" /> hariomjanseva2021@gmail.com
                            </li>
                        </ul>
                    </div>
                    <div className="footer-newsletter">
                        <h4>Stay Connected</h4>
                        <p>Subscribe for updates and wellness tips.</p>
                        <form>
                            <input type="email" placeholder="Enter your email" />
                            <button type="submit">
                                <i className="fas fa-paper-plane" />
                            </button>
                        </form>
                        <div className="social-icons">
                            <a href="https://www.facebook.com/share/12Ljkpm1KJb/">
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a href="#">
                                <i className="fab fa-instagram" />
                            </a>
                            <a href="#">
                                <i className="fab fa-twitter" />
                            </a>
                            <a href="#">
                                <i className="fab fa-youtube" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2025 हरिओम जनसेवा संस्थान . All rights reserved.</p>
                </div>
            </div>
        </footer>

    );
}

export default Footer;
