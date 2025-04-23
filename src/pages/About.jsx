import React from 'react';
import SectionHeader from './component/SectionHeader';

const About = () => {
  return (
    <>
      <SectionHeader
        title="हमारे बारे में | About Us"
        subtitle="हम क्यों हैं, क्या करते हैं, और कैसे आपकी मदद करते हैं | Why we are here and how we help."
      />

      <section className="about-section elegant-bg">
        <div className="container">
          <div className="intro-box">
            <h2 className="intro-title">सरल इलाज, सच्ची सेवा | Compassionate Care for All</h2>
            <p className="intro-text">
              हरिओम जनसेवा संस्थान एक गैर-लाभकारी संस्था है जो हर वर्ग के लोगों को बिना किसी भेदभाव के निशुल्क चिकित्सा सेवा प्रदान करती है।
              <br /><br />
              Hariom Jansewa Hospital is a non-profit organization dedicated to providing completely free healthcare to the underprivileged using simple and accessible communication methods.
            </p>
          </div>

          <div className="about-content-grid">
            <div className="about-card">
              <h3 className="card-title">हमारा उद्देश्य | Our Mission</h3>
              <p>
                हम यह सुनिश्चित करते हैं कि कोई भी व्यक्ति सिर्फ पैसों की वजह से इलाज से वंचित न रहे।
                हमारी सेवाएं 100% मुफ्त हैं और यह संस्था प्यार, सेवा और इंसानियत के मूल्यों पर टिकी हुई है।
              </p>
              <a href="#" className="learn-btn">और जानें | Learn More</a>
            </div>

            <div className="about-card values">
              <h3 className="card-title">हमारे मूल्य | Core Values</h3>
              <ul>
                <li>❤️ प्रेम और सेवा के साथ उपचार</li>
                <li>🚫 बिना किसी शुल्क के सेवा</li>
                <li>👨‍👩‍👧‍👦 समता और समान अवसर</li>
                <li>🙌 पारदर्शिता और विश्वास</li>
              </ul>
            </div>
          </div>

          <div className="features-section">
            <h3 className="features-title">हम क्यों खास हैं? | Why Choose Us</h3>
            <div className="feature-grid">
              <div className="feature-box">
                <i className="fas fa-hand-holding-heart icon" />
                <h4>100% मुफ्त इलाज</h4>
                <ul>
                  <li>अनुभवी डॉक्टर्स और नर्सिंग स्टाफ</li>
                  <li>स्वच्छ और सुरक्षित वातावरण</li>
                  <li>नियमित हेल्थ कैंप और सेवाएं</li>
                </ul>
              </div>
              <div className="feature-box">
                <i className="fas fa-clinic-medical icon" />
                <h4>सेवा का इतिहास</h4>
                <p><strong>2015 से:</strong> मुफ्त इलाज, ऑपरेशन, चिकित्सा शिविर</p>
                <p><strong>2013 से:</strong> टेलीमेडिसिन और परामर्श सेवा</p>
              </div>
              <div className="feature-box">
                <i className="fas fa-users icon" />
                <h4>सभी के लिए सुविधा</h4>
                <p>हम हर जाति, धर्म और वर्ग के मरीजों को एक समान सेवा प्रदान करते हैं।</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
