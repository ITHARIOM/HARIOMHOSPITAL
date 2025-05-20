import React, { useState, useEffect } from "react";
import "./ContactSection.css";
import SectionHeader from "./component/SectionHeader";

const scheduleData = {
    Monday: ["Gynecologist", "General Physician"],
    Tuesday: ["General Physician (MD)"],
    Wednesday: ["General Physician (MD)"],
    Thursday: ["Orthopedic Specialist", "Gynecologist"],
    Friday: ["Cardiologist (DM)", "General Physician (MD)"],
    Saturday: ["General Physician (MD)"],
    Sunday: ["General Physician", "Gynecologist"],
};

const ContactSection = () => {
    const [availableDoctors, setAvailableDoctors] = useState([]);
    const [selectedDoctor, setSelectedDoctor] = useState("");

    useEffect(() => {
        const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

        const doctorsToday = scheduleData[today] || [];
        setAvailableDoctors(doctorsToday);
        setSelectedDoctor(doctorsToday[0] || "");
    }, []);

    return (
        <>
            <SectionHeader
                title="Get in Touch"
                subtitle="We’d love to hear from you. Whether you have a question, feedback, or just want to say hello — feel free to reach out!"
            />

            <section id="contact" className="contact-section">
                <div className="contact-container">
                    <div className="contact-content">
                        {/* Contact Form */}
                        <div className="contact-form">
                            <h3>Send us a Message</h3>
                            <form>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" placeholder="Your Name" />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" placeholder="Your Email" />
                                </div>
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input type="tel" placeholder="Your Phone" />
                                </div>

                                {/* Dynamic Doctor Dropdown */}


                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea placeholder="Your Message"></textarea>
                                </div>
                                <button type="submit">Send Message</button>
                            </form>
                        </div>

                        {/* Google Map */}
                        <div className="map-container">
                            {/* <iframe
                                title="Google Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.7611988019224!2d-73.96741332402088!3d40.8054780367601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f62db6d45fbb%3A0xa69e7a6e45e6bc67!2sThe%20Breslin!5e0!3m2!1sen!2sin!4v1713627229194!5m2!1sen!2sin"
                                allowFullScreen
                                loading="lazy"
                            ></iframe> */}
                            <iframe
                                title="Google Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14287.395979778961!2d84.42994646516965!3d26.46059604059586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39931ace38b4be2b%3A0xed4849770012e298!2sWard%20No.%2015%2C%20Gopalganj%2C%20Bihar%20841428!5e0!3m2!1sen!2sin!4v1747759602931!5m2!1sen!2sin"
                                width="600"
                                height="450"
                                style={{ border: 0 }} // ✅ Correct way to apply inline styles in React
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactSection;
