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
            <h2>सरल इलाज, सच्ची सेवा </h2>
            <p>
              हरिओम जनसेवा संस्थान, बरौली (गोपालगंज, बिहार) में स्थित एक समर्पित और सेवा भाव से प्रेरित नि:शुल्क अस्पताल है, जिसकी स्थापना श्री दिलीप सिंह जी के द्वारा की गई थी। यह संस्थान केवल एक भवन नहीं, बल्कि एक सपने की पूर्ति है — एक ऐसा सपना जहाँ कोई भी व्यक्ति सिर्फ पैसों की कमी के कारण इलाज से वंचित न रहे।

दिलीप सिंह जी का यह दृढ़ विश्वास था कि "सेवा ही सच्चा धर्म है", और उन्होंने उसी सोच को मूर्त रूप देने के लिए इस संस्थान की नींव रखी। यहाँ जरूरतमंद, गरीब और असहाय मरीजों को पूरी तरह नि:शुल्क चिकित्सा सेवाएं प्रदान की जाती हैं। दवाइयों से लेकर डॉक्टर की सलाह तक, हर सुविधा बिना किसी शुल्क के दी जाती है — ताकि हर व्यक्ति को सम्मानजनक और स्वस्थ जीवन जीने का अवसर मिल सके।

हरिओम जनसेवा संस्थान न केवल एक अस्पताल है, बल्कि यह एक आंदोलन है — करुणा, सहानुभूति और समाज सेवा का। यह संस्थान आज सैकड़ों लोगों के लिए आशा की किरण बन चुका है, और आगे भी यही प्रयास रहेगा कि हम अधिक से अधिक लोगों तक निःस्वार्थ सेवा पहुँचा सकें।
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
            <h3>हम क्यों खास हैं?</h3>
            <div className="features-grid">
              <div className="feature" style={{ backgroundColor: '#C94C4C' }}>
                <i className="fas fa-hand-holding-heart icon" />
                <h4>24×7 Emergency</h4>
                <p>प्रशिक्षित डॉक्टरों की टीम, ICU और NICU जैसी विशेष सुविधाओं के साथ, लगभग शून्य त्रुटि वाली आपातकालीन चिकित्सा सेवा प्रदान करती है।"</p>
              </div>

              <div className="feature" style={{ backgroundColor: '#217A57' }}>
                <i className="fas fa-clinic-medical icon" />
                <h4>OPD Services</h4>
                <p>जो मरीज़ रातभर अस्पताल में नहीं ठहर सकते, उनके लिए विशेष बाह्य रोगी सेवा (OPD) उपलब्ध है, जिसमें व्यक्तिगत देखभाल और समय पर निदान सुनिश्चित किया जाता है।</p>
              </div>

              <div className="feature" style={{ backgroundColor: '#268FC5' }}>
                <i className="fas fa-vials icon" />
                <h4>Lab Services</h4>
                <p>कम लागत में सटीक, सुरक्षित और विश्वसनीय डायग्नोस्टिक सेवाएं एक संवेदनशील और सुरक्षित वातावरण में प्रदान की जाती हैं।</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
