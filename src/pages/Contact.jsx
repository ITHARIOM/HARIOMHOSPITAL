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

  useEffect(() => {
    const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
    const doctorsToday = scheduleData[today] || [];
    setAvailableDoctors(doctorsToday);
  }, []);

  return (
    <>
      <SectionHeader title="Get in touch" subtitle="We are here to support your health and care needs" />

      <section id="contact" className="contact-section">
        <div className="contact-container">
          <div className="contact-grid">
            <div className="contact-form card-shadow enhanced-form">
              <h3 className="form-title">Send us a message</h3>
              <form>
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" placeholder="Your full name" className="input-style" />
                </div>

                <div className="form-group">
                  <label>Phone</label>
                  <input type="tel" placeholder="Your phone number" className="input-style" />
                </div>

                <div className="form-group">
                  <label>Address</label>
                  <input type="text" placeholder="Your address" className="input-style" />
                </div>

                <div className="form-group">
                  <label>Message</label>
                  <textarea placeholder="Tell us how we can help" className="textarea-style"></textarea>
                </div>

                <button type="submit" className="submit-button">Send Message</button>
              </form>
            </div>

            <div className="contact-side">
              <div className="info-card">
                <h3>Hospital details</h3>
                <ul>
                  <li><strong>Address:</strong> Badheya, Gopalganj, Bihar, India</li>
                  <li><strong>Phone:</strong> +91 9264496798</li>
                  <li><strong>Email:</strong> hariomjanseva2021@gmail.com</li>
                  <li><strong>Hours:</strong> 9:00 AM - 10:00 PM, Daily</li>
                </ul>
              </div>

              <div className="info-card info-card--accent">
                <h3>Today&apos;s availability</h3>
                <ul>
                  {availableDoctors.length > 0 ? (
                    availableDoctors.map((doctor) => <li key={doctor}>{doctor}</li>)
                  ) : (
                    <li>Doctor schedule will be updated soon.</li>
                  )}
                </ul>
              </div>

              <div className="map-container enhanced-map">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1102.3898661136377!2d84.61342821430645!3d26.394598434480308!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993210016ada50b%3A0xd27e2289b61b53cc!2z4KS54KSw4KS_4KST4KSuIOCknOCkqOCkuOClh-CkteCkviDgpLjgpILgpLjgpY3gpKXgpL7gpKg!5e1!3m2!1sen!2sin!4v1748334965606!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
