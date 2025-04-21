import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "@/assets/img/logo234.png"
// import Logo from "./Logo";

import { faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Header = () => {
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
    <>
      <header>
        <div className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target=".navbar-collapse"
              >
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a className="navbar-brand" href="index.html">
                <img style={{ height: 100 }} src={logo} alt="logo" />
              </a>
            </div>
            <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
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
          </div>
        </div>
      </header>

    </>
  );
};

export default Header;
