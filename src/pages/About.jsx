import React from 'react';
import SectionHeader from './component/SectionHeader';
import './About.css';

const highlights = [
  { label: 'दवाइयाँ', value: 'नि:शुल्क' },
  { label: 'डॉक्टर की सलाह', value: 'नि:शुल्क' },
  { label: 'आपातकालीन सेवा', value: '24×7' },
];

const values = [
  { icon: '❤️', text: 'प्रेम और सेवा के साथ उपचार' },
  { icon: '🚫', text: 'बिना किसी शुल्क के सेवा' },
  { icon: '👨‍👩‍👧‍👦', text: 'समता और समान अवसर' },
  { icon: '🙌', text: 'पारदर्शिता और विश्वास' },
];

const services = [
  {
    key: 'emergency',
    icon: 'fas fa-hand-holding-heart',
    title: '24×7 Emergency',
    text: 'प्रशिक्षित डॉक्टरों की टीम, ICU और NICU जैसी विशेष सुविधाओं के साथ, लगभग शून्य त्रुटि वाली आपातकालीन चिकित्सा सेवा प्रदान करती है।',
  },
  {
    key: 'opd',
    icon: 'fas fa-clinic-medical',
    title: 'OPD Services',
    text: 'जो मरीज़ रातभर अस्पताल में नहीं ठहर सकते, उनके लिए विशेष बाह्य रोगी सेवा (OPD) उपलब्ध है, जिसमें व्यक्तिगत देखभाल और समय पर निदान सुनिश्चित किया जाता है।',
  },
  {
    key: 'lab',
    icon: 'fas fa-vials',
    title: 'Lab Services',
    text: 'कम लागत में सटीक, सुरक्षित और विश्वसनीय डायग्नोस्टिक सेवाएं एक संवेदनशील और सुरक्षित वातावरण में प्रदान की जाती हैं।',
  },
];

const About = () => {
  return (
    <>
      <SectionHeader title="About-Us" subtitle="" />

      <main className="ab-page">
        {/* 1. Hero */}
        <section className="ab-hero">
          <div className="ab-wrap ab-hero__grid">
            <div className="ab-hero__text">
              <h2 className="ab-hero__title">सरल इलाज,<br />सच्ची सेवा</h2>
              <p className="ab-hero__lead">
                हरिओम जनसेवा संस्थान, बरौली (गोपालगंज, बिहार) का नि:शुल्क अस्पताल —
                जहाँ कोई भी व्यक्ति सिर्फ पैसों की कमी के कारण इलाज से वंचित नहीं रहता।
              </p>
            </div>

            <dl className="ab-hero__facts">
              {highlights.map((item) => (
                <div className="ab-fact" key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* 2. Story */}
        <section className="ab-section ab-story">
          <div className="ab-wrap ab-story__grid">
            <h3 className="ab-section__title">हमारी कहानी</h3>

            <div className="ab-story__body">
              <p>
                <strong>हरिओम जनसेवा संस्थान</strong> बरौली (गोपालगंज, बिहार) में स्थित एक समर्पित और
                सेवा भाव से प्रेरित <strong>नि:शुल्क अस्पताल</strong> है, जिसकी स्थापना{' '}
                <strong>श्री दिलीप सिंह जी</strong> के द्वारा की गई है। यह संस्थान केवल एक भवन नहीं,
                बल्कि एक सपने की पूर्ति है — एक ऐसा सपना जहाँ कोई भी व्यक्ति सिर्फ पैसों की कमी के
                कारण इलाज से वंचित न रहे।
              </p>

              <blockquote className="ab-quote">
                <p>"सेवा ही सच्चा धर्म है"</p>
                <footer>श्री दिलीप सिंह जी, संस्थापक</footer>
              </blockquote>

              <p>
                दिलीप सिंह जी के इसी विश्वास ने इस संस्थान की नींव रखी। यहाँ{' '}
                <strong>जरूरतमंद, गरीब और असहाय मरीजों को पूरी तरह नि:शुल्क चिकित्सा सेवाएं</strong>{' '}
                प्रदान की जाती हैं। दवाइयों से लेकर डॉक्टर की सलाह तक, हर सुविधा बिना किसी शुल्क के
                दी जाती है — ताकि हर व्यक्ति को सम्मानजनक और स्वस्थ जीवन जीने का अवसर मिल सके।
              </p>

              <p>
                यह संस्थान केवल एक अस्पताल नहीं, बल्कि करुणा, सहानुभूति और समाज सेवा का आंदोलन है।
                आज यह सैकड़ों लोगों के लिए आशा की किरण बन चुका है, और आगे भी हमारा प्रयास रहेगा कि
                हम अधिक से अधिक लोगों तक निःस्वार्थ सेवा पहुँचा सकें।
              </p>
            </div>
          </div>
        </section>

        {/* 3. Mission + values */}
        <section className="ab-section ab-mission">
          <div className="ab-wrap ab-mission__grid">
            <div className="ab-mission__main">
              <h3 className="ab-section__title">हमारा उद्देश्य | Our Mission</h3>
              <p className="ab-mission__text">
                हम यह सुनिश्चित करते हैं कि कोई भी व्यक्ति सिर्फ पैसों की वजह से इलाज से वंचित न रहे।
                हमारी सेवाएं 100% मुफ्त हैं और यह संस्था प्यार, सेवा और इंसानियत के मूल्यों पर टिकी
                हुई है।
              </p>
              <a href="#" className="ab-btn">और जानें | Learn More</a>
            </div>

            <div className="ab-values">
              <h3 className="ab-section__title">हमारे मूल्य | Core Values</h3>
              <ul className="ab-values__list">
                {values.map((v) => (
                  <li key={v.text}>
                    <span className="ab-values__icon" aria-hidden="true">{v.icon}</span>
                    <span>{v.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 4. Services */}
        <section className="ab-section ab-services">
          <div className="ab-wrap">
            <h3 className="ab-section__title">हम क्यों खास हैं?</h3>

            <ul className="ab-services__list">
              {services.map((s) => (
                <li className={`ab-service ab-service--${s.key}`} key={s.key}>
                  <span className="ab-service__icon" aria-hidden="true">
                    <i className={s.icon} />
                  </span>
                  <div>
                    <h4>{s.title}</h4>
                    <p>{s.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
