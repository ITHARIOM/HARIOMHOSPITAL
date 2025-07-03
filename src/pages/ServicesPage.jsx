import React, { useState } from "react";
import "./ServicesPage.css";
import SectionHeader from "./component/SectionHeader";

const services = [
    {
        title: "शिशु रोग विशेषज्ञ ",
        description: "Comprehensive pediatric services tailored to ensure your child's health, growth, and development from infancy through adolescence.",
        image: "src/assets/img/ser1.webp",
    },
    {
        title: "जेनरल फिजिशियन",
        description: "Expert diagnosis and treatment for a wide range of general health concerns and illnesses.",
        image: "src/assets/img/2.png",
    },
    // {
    //     title: "Family Care",
    //     description: "One-stop medical solutions for every family member, providing personalized care across all ages and health needs.",
    //     image: "src/assets/img/ser3.jpg",
    // },
    {
        title: "कार्डियोलॉजिस्ट",
        description: "Advanced cardiology services offering heart disease prevention, diagnosis, treatment, and rehabilitation by leading specialists.",
        image: "src/assets/img/4.png",
    },
    {
        title: "स्त्री एवं प्रसूति रोग विशेषज्ञ",
        description: "Comprehensive care for women’s reproductive health, from adolescence through menopause.",
        image: "src/assets/img/1.png",
    },
    {
        title: "हड्डी रोग विशेषज्ञ",
        description: "Specialized care for bones, joints, and muscles — helping you move with ease.",
        image: "src/assets/img/3.png",
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
            <SectionHeader title="Our Services" subtitle={""} />

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
