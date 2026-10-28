
import React from "react";
import SectionHeader from "./component/SectionHeader";
import "./MissionVision.css";

const missionItems = [
  {
    icon: "🏥",
    title: "हर जरूरतमंद तक निःशुल्क स्वास्थ्य सेवा",
    text: "हमारा उद्देश्य है कि कोई भी व्यक्ति इलाज या दवा के अभाव में पीड़ा न सहे। बरौली, गोपालगंज और आसपास के ग्रामीण क्षेत्रों में गरीब व वंचित लोगों को निःशुल्क इलाज और जरूरी दवाइयाँ उपलब्ध कराई जाएँ।",
  },
  {
    icon: "❤️",
    title: "स्वास्थ्य हर व्यक्ति का अधिकार",
    text: "Hariom Jansheva Sansthan का विश्वास है कि स्वास्थ्य कोई विशेषाधिकार नहीं, बल्कि हर इंसान का मूलभूत अधिकार है। हमारा प्रयास है कि अंतिम व्यक्ति तक गुणवत्तापूर्ण स्वास्थ्य सेवा पहुँचे।",
  },
  {
    icon: "🌿",
    title: "स्वास्थ्य के प्रति जागरूकता",
    text: "हम इलाज के साथ-साथ लोगों को स्वस्थ जीवनशैली, समय पर जाँच और बीमारियों की रोकथाम के प्रति जागरूक करते हैं।",
  },
  {
    icon: "🤝",
    title: "मानवता और करुणा से सेवा",
    text: "हम बिना किसी भेदभाव के प्रत्येक मरीज को सम्मान, प्रेम और अपनापन देते हैं। हमारे लिए हर मरीज परिवार का सदस्य है।",
  },
];

const visionItems = [
  {
    icon: "🌱",
    title: "स्वस्थ और आत्मनिर्भर ग्रामीण भारत",
    text: "हमारा सपना है कि हर गाँव का व्यक्ति स्वस्थ, जागरूक और आत्मनिर्भर हो, जहाँ बीमारी डर नहीं बल्कि इलाज की उम्मीद लेकर आए।",
  },
  {
    icon: "🏘️",
    title: "हर गाँव तक स्वास्थ्य सेवाएँ",
    text: "हम ऐसा भविष्य बनाना चाहते हैं जहाँ प्रत्येक गाँव में लोगों को आसानी से और किफायती दर पर गुणवत्तापूर्ण स्वास्थ्य सेवाएँ मिल सकें।",
  },
  {
    icon: "💚",
    title: "आर्थिक स्थिति इलाज में बाधा न बने",
    text: "हमारा लक्ष्य है कि किसी भी व्यक्ति को पैसों की कमी के कारण इलाज से वंचित न रहना पड़े।",
  },
  {
    icon: "🇮🇳",
    title: "सेवा का राष्ट्रीय उदाहरण बनना",
    text: "Hariom Jansheva Sansthan बिहार से लेकर पूरे देश तक मानव सेवा और समर्पण की एक प्रेरणादायक पहचान बनाना चाहता है।",
  },
];

const ServiceList = ({ items }) => (
  <ul className="mv-service-list">
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

const InfoCard = ({ item, index }) => (
  <div className="mv-info-item" style={{ "--item-index": index }}>
    <span className="mv-item-icon" aria-hidden="true">
      {item.icon}
    </span>
    <div>
      <h3>{item.title}</h3>
      <p>{item.text}</p>
    </div>
  </div>
);

const Mission = () => {
  return (
    <main className="mv-page">
      <SectionHeader
        title="Mission & Vision"
        subtitle="नर सेवा नारायण सेवा"
      />

      <section className="mv-container">
        <div className="mv-intro">
          <span className="mv-eyebrow">
            सेवा • समर्पण • मानवता
          </span>

          <h1>
            एक स्वस्थ समाज, <span>एक बेहतर भविष्य</span>
          </h1>

          <p>
            हरिओम जनसेवा संस्थान का संकल्प है कि स्वास्थ्य सेवा
            समाज के प्रत्येक व्यक्ति तक पहुँचे। हमारा हर कदम
            मानवता, विश्वास और सेवा की भावना से प्रेरित है।
          </p>
        </div>

        <div className="mv-grid">
          {/* Mission Card */}
          <article className="mv-card mv-mission">
            <div className="mv-card-top">
              <div className="mv-card-icon">🎯</div>
              <span className="mv-card-label">OUR MISSION</span>
            </div>

            <h2>हमारा लक्ष्य</h2>
            <p className="mv-card-description">
              सेवा के माध्यम से हर जीवन में स्वास्थ्य और आशा
              का संचार करना।
            </p>

            <div className="mv-items">
              {missionItems.map((item, index) => (
                <InfoCard
                  key={item.title}
                  item={item}
                  index={index}
                />
              ))}
            </div>

            <div className="mv-highlight">
              <span>✦</span>
              <p>
                जहाँ सेवा है, वहाँ ही ईश्वर का वास है।
              </p>
            </div>

            <h3 className="mv-service-heading">
              हमारी सेवा के प्रमुख क्षेत्र
            </h3>

            <ServiceList
              items={[
                "निःशुल्क OPD एवं विशेषज्ञ परामर्श",
                "निःशुल्क दवाइयाँ एवं सामान्य जाँच",
                "मेडिकल शिविर एवं विशेषज्ञ डॉक्टरों की टीम",
              ]}
            />

            <a href="/contact" className="mv-button">
              सहयोग करें <span>→</span>
            </a>
          </article>

          {/* Vision Card */}
          <article className="mv-card mv-vision">
            <div className="mv-card-top">
              <div className="mv-card-icon">🌈</div>
              <span className="mv-card-label">OUR VISION</span>
            </div>

            <h2>हमारा दृष्टिकोण</h2>
            <p className="mv-card-description">
              एक ऐसा भारत जहाँ हर व्यक्ति को स्वास्थ्य,
              सम्मान और बेहतर जीवन का अवसर मिले।
            </p>

            <div className="mv-items">
              {visionItems.map((item, index) => (
                <InfoCard
                  key={item.title}
                  item={item}
                  index={index}
                />
              ))}
            </div>

            <div className="mv-highlight">
              <span>✦</span>
              <p>
                जहाँ सेवा है, वहाँ भविष्य की आशा है।
              </p>
            </div>

            <h3 className="mv-service-heading">
              भविष्य की हमारी परिकल्पना
            </h3>

            <ServiceList
              items={[
                "निःशुल्क मेडिकल कॉलेज की स्थापना की दिशा में प्रयास",
                "महिला स्वास्थ्य कार्यकर्ताओं का ग्रामीण नेटवर्क",
                "बुजुर्गों के लिए सेवा केंद्र एवं मानसिक स्वास्थ्य सहायता",
              ]}
            />

            <a href="/contact" className="mv-button">
              हमारे साथ जुड़ें <span>→</span>
            </a>
          </article>
        </div>

        <div className="mv-footer-note">
          <span>♥</span>
          <p>
            हमारा संकल्प — हर जीवन की रक्षा, हर चेहरे पर मुस्कान।
          </p>
        </div>
      </section>
    </main>
  );
};

export default Mission;
