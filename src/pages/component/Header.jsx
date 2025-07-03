import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/img/logo.png";
import { faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const getActiveClass = (path) => {
    return location.pathname === path ? "active" : "";
  };

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Top Strip */}


      {/* Navbar */}
      <header style={{ position: "fixed", width: "100%", zIndex: 999, top: 0 }}>
        {/* Elegant Top Strip */}
        <div style={{ background: "#0F1A2F", padding: "10px 0", fontSize: "14px", color: "#fff" }}>
          <div
            className="container"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "nowrap", // Force single line
            }}
          >
            {/* Left - Address */}
            <div style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              <a
                //href="https://goo.gl/maps/KriuXMTHBWFyEgCHA"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  color: "#fff",
                }}
              >
                <i className="fas fa-map-marker-alt" style={{ marginRight: 6, color: "#e74c3c" }}></i>
                <span>बढ़ेया, गोपालगंज, बिहार  - 841405</span>
              </a>
            </div>

            {/* Right - Horizontal Contact Info */}
            <div
              style={{
                display: "flex",
                gap: "20px",
                alignItems: "center",
                flexWrap: "nowrap",
                whiteSpace: "nowrap",
              }}
            >
              <a
                href="https://wa.me/+919264496798"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  color: "#fff",
                }}
              >
                <i className="fab fa-whatsapp" style={{ marginRight: 6, color: "#25D366" }}></i>
                <span>(+91) 9264496798</span>
              </a>

              <a
                href="tel:+919264496798"
                style={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  color: "#fff",
                }}
              >
                <i className="fas fa-phone-alt" style={{ marginRight: 6, color: "#1abc9c" }}></i>
                <span>(+91) 9264496798 </span>
              </a>

              <div style={{ display: "flex", alignItems: "center" }}>
                <i className="far fa-clock" style={{ marginRight: 6, color: "#f1c40f" }}></i>
                <span>9:00 AM to 10:00 PM</span>
              </div>
            </div>
          </div>
        </div>







        {/* Main Navbar */}
        <div className="navbar navbar-default">
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
              <a className="navbar-brand" href="/">
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
