import React, { useState } from "react";
import "./ServicesPage.css";
import SectionHeader from "./component/SectionHeader";

import pediatricImage from "@/assets/img/ser1.webp";
import generalImage from "@/assets/img/2.png";
import cardiologyImage from "@/assets/img/4.png";
import gynecologyImage from "@/assets/img/1.png";
import orthopedicImage from "@/assets/img/3.png";

const services = [
  {
    title: "Pediatric Care",
    description: "Comprehensive child healthcare designed to support growth, development, and long-term wellness from infancy through adolescence.",
    image: pediatricImage,
  },
  {
    title: "General Physician",
    description: "Expert diagnosis and treatment for common illnesses, acute care, and long-term management of everyday health conditions.",
    image: generalImage,
  },
  {
    title: "Cardiology",
    description: "Dedicated heart care services focused on prevention, screening, treatment planning, and recovery support for cardiac patients.",
    image: cardiologyImage,
  },
  {
    title: "Gynecology & Obstetrics",
    description: "Complete care for women’s reproductive health, pregnancy support, preventive screening, and personalized treatment plans.",
    image: gynecologyImage,
  },
  {
    title: "Orthopedic Care",
    description: "Specialized treatment for joint pain, fractures, mobility issues, and ongoing musculoskeletal conditions with a patient-first approach.",
    image: orthopedicImage,
  },
];

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => setSelectedService(service);
  const closeModal = () => setSelectedService(null);

  return (
    <>
      <SectionHeader title="Our Services" subtitle="Modern care with a compassionate approach" />

      <div className="services-page">
        <div className="services-intro">
          <p>
            We offer reliable, patient-centered medical treatment with a strong focus on trust, outcomes, and long-term wellbeing.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={`${service.title}-${index}`} onClick={() => openModal(service)}>
              <img className="service-image" src={service.image} alt={service.title} />
              <div className="service-card__content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedService && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <img className="modal-image" src={selectedService.image} alt={selectedService.title} />
              <h3>{selectedService.title}</h3>
              <p>{selectedService.description}</p>
              <button className="close-btn" onClick={closeModal}>Close</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ServicesPage;
