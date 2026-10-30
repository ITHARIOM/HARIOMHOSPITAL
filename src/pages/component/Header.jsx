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
    { path: "/contact", label: "Contact" },
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
        <div className="container navbar__inner">
          <Link to="/" className="navbar__brand" aria-label="Hariom Janseva Sansthan home">
            <img src={logo} alt="Hariom Janseva Sansthan logo" />
          </Link>

          <button
            type="button"
            className="navbar__toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>

          <div className={`navbar__menu ${menuOpen ? "is-open" : ""}`}>
            <ul className="navbar__list">
              {navItems.map((item) => (
                <li key={item.path} className={getActiveClass(item.path)}>
                  <Link to={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
