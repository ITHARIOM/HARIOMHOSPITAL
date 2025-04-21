import React from 'react';
import SectionHeader from './component/SectionHeader';

const About = () => {
  return (
    <>
      <SectionHeader
        title="हमारे बारे में | About Us"
        subtitle="हम क्यों हैं, क्या करते हैं, और कैसे आपकी मदद करते हैं | Why we are here and how we help."
      />

      <section className="about-section1 py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h3 className="fw-bold text-universal">
              सरल इलाज, सच्ची सेवा | <span className="text-dark">Care for All</span>
            </h3>
          
            <p className="text-muted">
            हरिओम जनसेवा संस्थान एक गैर-लाभकारी, मानवसेवा को समर्पित संस्था है, जिसकी स्थापना समाज के सबसे वंचित, गरीब और जरूरतमंद वर्गों को निःशुल्क स्वास्थ्य सेवाएं उपलब्ध कराने के उद्देश्य से की गई थी। 
            इस संस्थान की नींव करुणा, सेवा और सामाजिक समानता के सिद्धांतों पर रखी गई है। हमारा उद्देश्य है कि कोई भी व्यक्ति केवल आर्थिक अभाव के कारण उपचार से वंचित न रहे।
              <br />
              Hariom Jansewa Hospital is made for people who may not read or write. We use simple ways to help and treat everyone.
            </p>
            
          </div>
          <div className="row mb-5">
            <div className="col-md-6">
              <p className="text-secondary">
                यहां इलाज मुफ्त है। किसी को पैसे देने की जरूरत नहीं। हमारा स्टाफ इशारों, तस्वीरों और आसान शब्दों में बात करता है ताकि हर मरीज समझ सके।
              </p>
              <p className="text-secondary">
                We treat without asking for money. Our team uses hand signs, pictures, and simple Hindi/vernacular to communicate with every patient.
              </p>
              <a href="#" className="btn btn-primary mt-3">
                और जानें | Learn More
              </a>
            </div>
            {/* <div className="col-md-6">
              <img
                src="images/about-touch.jpg"
                className="img-fluid rounded shadow"
                alt="हमारी टीम | Our Team"
              />
            </div> */}
          </div>

          {/* Why Choose Us & Our Work */}
          <section className="why-choose-us py-5">
            <div className="container">
              <div className="row text-center mb-5">
                {/* Easy Understanding */}
                <div className="col-md-4 mb-4">
                  <div className="info-box">
                    <h4 className="box-title">हम क्यों खास हैं?</h4>
                    <p className="box-text">
                    100% निःशुल्क इलाज
                    </p>
                    <p className="box-text">
                    अनुभवी और सेवाभावी डॉक्टरों की टीम
                    </p>
                    <p className="box-text">
                    साफ-सुथरा और रोगी अनुकूल वातावरण
                    </p>
                    <p className="box-text">
                    मानवता आधारित सेवा
                    </p>
                    <p className="box-text">
                    नियमित स्वास्थ्य शिविर और जागरूकता अभियान
                    </p>
                    <p className="box-text">
                    
                    </p>
                    <p className="box-text">
                   
                    </p>

                  </div>
                </div>
                {/* Free Services */}
                <div className="col-md-4 mb-4">
                  <div className="info-box">
                    <h4 className="box-title">मुफ्त सेवा</h4>
                    <p>
                      <strong>2015 से</strong> हम मुफ्त इलाज, ऑपरेशन, और हेल्थ कैंप चला रहे हैं।<br />
                      <strong>2013 से</strong> दूर-दराज़ इलाकों को जोड़ने के लिए टेलीमेडिसिन सेवा भी है।
                    </p>
                  </div>
                </div>
                {/* Our Values */}
                <div className="col-md-4 mb-4">
                  <div className="info-box">
                    <h4 className="box-title">हमारे मूल्य</h4>
                    <ul className="list-unstyled">
                      <li>
                        ❤️ प्यार और सेवा से इलाज
                      </li>
                      <li>
                        🚫 कोई पैसा नहीं लिया जाता
                      </li>
                      <li>
                        👨‍👩‍👧‍👦 सबके लिए बराबर सुविधा
                      </li>
                      <li>
                        🙌 भरोसा और पारदर्शिता
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Team Section */}
          {/* <div className="text-center mb-4">
            <h4 className="fw-bold text-primary">हमारी टीम | Meet Our Team</h4>
            <p className="text-muted">प्यारे लोग, प्यारे इरादे। Kind hearts, true mission.</p>
          </div>
          <div className="row g-4">
            <div className="col-md-3 col-sm-6">
              <div className="team-card text-center">
                <img src="img/team1.jpg" className="team-img" alt="Doctor" />
                <div className="team-info">
                  <h5 className="team-name">डॉ. रमेश कुमार</h5>
                  <p className="team-role text-primary">वरिष्ठ डॉक्टर</p>
                  <p className="team-desc text-muted">
                    15 साल का अनुभव, हर मरीज को समझदारी और स्नेह से देखते हैं।
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="team-card text-center">
                <img src="img/team2.jpg" className="team-img" alt="Surgeon" />
                <div className="team-info">
                  <h5 className="team-name">डॉ. सीमा शर्मा</h5>
                  <p className="team-role text-primary">वरिष्ठ सर्जन</p>
                  <p className="team-desc text-muted">
                    कई मुफ्त ऑपरेशन किए हैं। मरीजों से दिल से जुड़ी हैं।
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="team-card text-center">
                <img src="img/team3.jpg" className="team-img" alt="Manager" />
                <div className="team-info">
                  <h5 className="team-name">सुनील वर्मा</h5>
                  <p className="team-role text-primary">प्रबंधक</p>
                  <p className="team-desc text-muted">
                    अस्पताल की व्यवस्था को सरल और सहज रखते हैं।
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="team-card text-center">
                <img src="img/team4.jpg" className="team-img" alt="Chairman" />
                <div className="team-info">
                  <h5 className="team-name">शिवकुमार पांडे</h5>
                  <p className="team-role text-primary">चेयरमैन</p>
                  <p className="team-desc text-muted">
                    सबको समान स्वास्थ्य सेवा देने का सपना साकार कर रहे हैं।
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default About;
