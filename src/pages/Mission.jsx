import React from 'react';
import SectionHeader from './component/SectionHeader';
import ims from "@/assets/img/misi.jpg";
const Mission = () => {
    return (
        <div>
            <SectionHeader
                title="Mission & Vision"
                subtitle="Discover our purpose and future goals that drive excellence in healthcare and patient service."
            />
            <section className="container">
                <div className="section-title">Our Mission</div>
                <div className="mission-vision">
                    <div className="mission">
                        <i className="fas fa-heartbeat" />
                        <h3>Mission</h3>
                        <p>
                            At Touch Hospital, we are driven by the belief that healthcare is a
                            fundamental right for everyone. We are committed to providing free,
                            high-quality medical services to the underprivileged, ensuring no one is
                            left behind due to financial barriers.
                        </p>
                        <p>
                            Every service we offer—from routine checkups to complex surgeries—is
                            provided without cost to those in need. With compassion at our core, we
                            work tirelessly to create a healthier, more inclusive society.
                        </p>
                        <a href="contact.html" className="cta-button">
                            Contact Us for Support
                        </a>
                    </div>
                    <div className="vision">
                        <i className="fas fa-eye" />
                        <h3>Vision</h3>
                        <p>
                            We envision a world where healthcare is universally accessible,
                            regardless of financial or social standing. Our goal is to create a
                            network of free healthcare providers, ensuring every individual has the
                            opportunity to live a healthy life.
                        </p>
                        <p>
                            We aim to not only heal physical ailments but also to bring hope,
                            restore lives, and build a stronger, more compassionate community.
                            Together, we believe we can break down the barriers to healthcare and
                            inspire a movement toward universal care.
                        </p>
                    </div>
                </div>
                <div className="image-section">
                    <img src={ims} alt="Mission & Vision Image" />
                </div>
            </section>

        </div>
    );
}

export default Mission;
