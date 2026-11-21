import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/Home";
import Header from "./pages/component/Header";
import Footer from "./pages/component/Footer";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Mission from "./pages/Mission";
import ServicesPage from "./pages/ServicesPage";
import Contact from "./pages/Contact";
import AppointmentButton from "./pages/component/AppointmentButton";
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/integration/jharkhand" element={<IntegrationJharkhand />} /> */}

      </Routes>
      <AppointmentButton/>
      <Footer />
    </Router>
  );
};

export default App;
