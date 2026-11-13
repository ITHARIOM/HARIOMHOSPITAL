import React, { useState } from "react";
import "./ServicesPage.css";
import SectionHeader from "./component/SectionHeader";

const services = [
  {
    title: "Pediatric Care",
    tag: null,
    icon: "fa-solid fa-microscope",
    description:
      "Comprehensive child healthcare designed to support growth, development, and long-term wellness from infancy through adolescence.",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "General Physician",
    tag: null,
    icon: "fa-solid fa-dna",
    description:
      "Expert diagnosis and treatment for common illnesses, acute care, and long-term management of everyday health conditions.",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Cardiology",
    tag: null,
    icon: "fa-solid fa-stethoscope",
    description:
      "Dedicated heart care services focused on prevention, screening, treatment planning, and recovery support for cardiac patients.",
    image:
      "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Physical Therapy & Rehabilitation",
    tag: "(new service)",
    icon: "fa-solid fa-person-walking",
    description:
      "Customized physical therapy and rehabilitation programs to restore mobility, strength, and pain-free physical function.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Neurology",
    tag: "(new service)",
    icon: "fa-solid fa-brain",
    description:
      "Comprehensive diagnosis and advanced neurological care for brain, spine, nerve disorders, and cognitive health.",
    image:
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=1000&q=80",
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
            <div
              className={`service-card service-card--${index + 1}`}
              key={`${service.title}-${index}`}
              onClick={() => openModal(service)}
            >
              <img
                className="service-card__bg"
                src={service.image}
                alt={service.title}
                loading="lazy"
              />
              <div className="service-card__overlay" />

              <div className="service-card__icon-badge" aria-hidden="true">
                <i className={service.icon} />
              </div>

              <div className="service-card__content">
                <h3 className="service-card__title">{service.title}</h3>
                {service.tag && <span className="service-card__tag">{service.tag}</span>}
                <p className="service-card__desc">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedService && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <img className="modal-image" src={selectedService.image} alt={selectedService.title} />
              <h3>{selectedService.title}</h3>
              {selectedService.tag && <span className="service-card__tag">{selectedService.tag}</span>}
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
