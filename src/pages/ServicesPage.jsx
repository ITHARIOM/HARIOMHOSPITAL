import React, { useState } from "react";
import "./ServicesPage.css";
import SectionHeader from "./component/SectionHeader";

const services = [
  {
    title: "Gynecology & Obstetrics",
    tag: null,
    icon: "fa-solid fa-person-breastfeeding",
    description:
      "Complete women's healthcare from adolescence to menopause, including preventive, diagnostic, and maternity support.",
    image: "/assets/images/gyencology.png",
  },
  {
    title: "General Physician",
    tag: null,
    icon: "fa-solid fa-stethoscope",
    description:
      "Expert evaluation and treatment for common illnesses, acute care, and long-term management of everyday health conditions.",
    image: "/assets/images/general physician.png",
  },
  {
    title: "Orthopedic Care",
    tag: null,
    icon: "fa-solid fa-bone",
    description:
      "Specialized treatment for bones, joints, and muscles to restore mobility, comfort, and confident movement.",
    image: "/assets/images/orthopedic.png",
  },
  {
    title: "Physical Therapy & Rehabilitation",
    tag: null,
    icon: "fa-solid fa-person-walking",
    description:
      "Customized physical therapy and rehabilitation programs to restore mobility, strength, and pain-free physical function.",
    image: "/assets/images/therapy.png",
  },
  {
    title: "Cardiology",
    tag: null,
    icon: "fa-solid fa-heart-pulse",
    description:
      "Dedicated heart care services focused on prevention, early diagnosis, screening, treatment planning, and long-term wellness.",
    image: "/assets/images/Cardiology.png",
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
              <div
                className="service-card__media"
                style={{
                  backgroundImage: `url("${service.image}")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="service-card__overlay" />
                <div className="service-card__icon-badge" aria-hidden="true">
                  <i className={service.icon} />
                </div>
              </div>

              <div className="service-card__content">
                <h3 className="service-card__title">{service.title}</h3>
                {service.tag && <span className="service-card__tag">{service.tag}</span>}
                <p className="service-card__desc">{service.description}</p>
                <div className="service-card__action">
                  <span>View Details</span>
                  <i className="fa-solid fa-arrow-right" />
                </div>
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
