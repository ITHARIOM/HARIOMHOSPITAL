import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/img/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const getActiveClass = (path) => (location.pathname === path ? "active" : "");

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/mission", label: "Mission" },
    { path: "/services", label: "Services" },
    { path: "/gallery", label: "Gallery" },
  ];

  return (
    <header className="site-header">
      <div className="header-topbar">
        <div className="container header-topbar__inner">
          <div className="header-topbar__content">
            <span className="header-topbar__item">
              <i className="fas fa-map-marker-alt" aria-hidden="true" />
              Badheya, Gopalganj, Bihar 841405
            </span>
            <span className="header-topbar__item">
              <i className="fas fa-phone-alt" aria-hidden="true" />
              +91 9264496798
            </span>
            <span className="header-topbar__item">
              <i className="far fa-clock" aria-hidden="true" />
              9:00 AM - 10:00 PM
            </span>
          </div>
        </div>
      </div>

      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar__inner">
            <Link to="/" className="navbar__brand" aria-label="Hariom Janseva Sansthan home">
              <div className="navbar__logo-box">
                <img src={logo} alt="Hariom Janseva Sansthan logo" />
              </div>
            </Link>

            <button
              type="button"
              className="navbar__toggle"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <i className={menuOpen ? "fas fa-times" : "fas fa-bars"} aria-hidden="true" />
            </button>

            <div className={`navbar__menu ${menuOpen ? "is-open" : ""}`}>
              <ul className="navbar__list">
                {navItems.map((item) => (
                  <li key={item.path} className={getActiveClass(item.path)}>
                    <Link to={item.path}>
                      <span>{item.label}</span>
                      {location.pathname === item.path && <span className="nav-active-pill" />}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="navbar__cta-wrap">
                <Link
                  to="/contact"
                  className={`navbar__cta-btn ${location.pathname === "/contact" ? "is-active" : ""}`}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
