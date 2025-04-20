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
                        <h2>Touch Hospital</h2>
                        <p>
                            Touching lives through healing and hope. We are committed to providing
                            free healthcare to those in need.
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
                            <li className={getActiveClass("/services")}>
                                <Link to="/services">Services</Link>
                            </li>
                            <li className={getActiveClass("/gallery")}>
                                <Link to="/gallery">Gallery</Link>
                            </li>
                            <li className={getActiveClass("/contact")}>
                                <Link to="/contact">Contact</Link>
                            </li>
                            <li>
                                <Link to="/mission">Mission</Link>
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
                                <i className="fas fa-phone-alt" /> +91 98765 43210
                            </li>
                            <li>
                                <i className="fas fa-envelope" /> help@touchhospital.org
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
                            <a href="#">
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
                    <p>© 2025 Touch Hospital. All rights reserved.</p>
                </div>
            </div>
        </footer>

    );
}

export default Footer;
