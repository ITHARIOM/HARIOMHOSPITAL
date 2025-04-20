import React, { useState } from "react";
import "./ServicesPage.css";
import SectionHeader from "./component/SectionHeader";

const services = [
    {
        title: "Child Care",
        description: "Dedicated pediatric care, ensuring your little ones grow up healthy and happy.",
        image: "src/assets/img/ser1.webp",
    },
    {
        title: "Women Care",
        description: "Holistic health  services designed to support every phase of a woman's life.",
        image: "src/assets/img/ser2.jpg",
    },
    {
        title: "Family Care",
        description: "Comprehensive care for your entire family under one trusted roof.",
        image: "src/assets/img/ser3.jpg",
    },
    {
        title: "Heart Care",
        description: "Advanced cardiac care focused on prevention, diagnosis, and recovery.",
        image: "src/assets/img/ser4.jpg",
    },
    {
        title: "Eye Care",
        description: "Expert ophthalmology services helping you see the world clearly.",
        image: "src/assets/img/ser5.webp",
    },
    {
        title: "Diagnostics",
        description: "State-of-the-art diagnostic tools for accurate and timely health insights.",
        image: "src/assets/img/ser6.jpg",
    },
];

const ServicesPage = () => {
    const [selectedService, setSelectedService] = useState(null);

    const openModal = (service) => {
        setSelectedService(service);
    };

    const closeModal = () => {
        setSelectedService(null);
    };

    return (
        <>
            <SectionHeader title="Our Services" subtitle={"Explore our comprehensive range of healthcare services tailored to meet your unique needs."} />

            <div className="services-page">
                {/* <div className="services-header">
        <h1>Our Services</h1>
        <p>We offer a wide range of creative and technical solutions for your business.</p>
        <div className="underline" />
      </div> */}

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div className="service-card" key={index} onClick={() => openModal(service)}>
                            <img className="service-image" src={service.image} alt={service.title} />
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>

                {/* Modal */}
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
