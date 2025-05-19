import React from 'react';
import SectionHeader from './component/SectionHeader';
import './About.css'; // Make sure you have this CSS file

const About = () => {
  return (
    <>
      <SectionHeader
        title="हमारे बारे में | About Us"
        subtitle="हम क्यों हैं, क्या करते हैं, और कैसे आपकी मदद करते हैं | Why we are here and how we help."
      />

      <section className="about-elegant">
        <div className="container">
          <div className="intro">
            <h2>सरल इलाज, सच्ची सेवा | Compassionate Care for All</h2>
            <p>
              हरिओम जनसेवा संस्थान एक गैर-लाभकारी संस्था है जो हर वर्ग के लोगों को बिना किसी भेदभाव के निशुल्क चिकित्सा सेवा प्रदान करती है।
              <br /><br />
              Hariom Jansewa Hospital is a non-profit organization dedicated to providing completely free healthcare to the underprivileged using simple and accessible communication methods.
            </p>
          </div>

          <div className="about-grid">
            <div className="card">
              <h3>हमारा उद्देश्य | Our Mission</h3>
              <p>
                हम यह सुनिश्चित करते हैं कि कोई भी व्यक्ति सिर्फ पैसों की वजह से इलाज से वंचित न रहे।
                हमारी सेवाएं 100% मुफ्त हैं और यह संस्था प्यार, सेवा और इंसानियत के मूल्यों पर टिकी हुई है।
              </p>
              <a href="#" className="button">और जानें | Learn More</a>
            </div>

            <div className="card values">
              <h3>हमारे मूल्य | Core Values</h3>
              <ul>
                <li>❤️ प्रेम और सेवा के साथ उपचार</li>
                <li>🚫 बिना किसी शुल्क के सेवा</li>
                <li>👨‍👩‍👧‍👦 समता और समान अवसर</li>
                <li>🙌 पारदर्शिता और विश्वास</li>
              </ul>
            </div>
          </div>

          <div className="features">
            <h3>हम क्यों खास हैं? | Why Choose Us</h3>
            <div className="features-grid">
              <div className="feature" style={{ backgroundColor: '#C94C4C' }}>
                <i className="fas fa-hand-holding-heart icon" />
                <h4>24×7 Emergency</h4>
                <p>Highly trained doctors available 24×7 with ICU & NICU specialties, delivering near-zero error emergency care.</p>
              </div>

              <div className="feature" style={{ backgroundColor: '#217A57' }}>
                <i className="fas fa-clinic-medical icon" />
                <h4>OPD Services</h4>
                <p>Special outpatient care for those who cannot stay overnight, with personalized support and timely diagnosis.</p>
              </div>

              <div className="feature" style={{ backgroundColor: '#268FC5' }}>
                <i className="fas fa-vials icon" />
                <h4>Lab Services</h4>
                <p>Cost-effective, accurate, and safe diagnostics delivered in a compassionate and secure environment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
