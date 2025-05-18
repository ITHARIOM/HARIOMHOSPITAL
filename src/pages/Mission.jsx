import React from 'react';
import SectionHeader from './component/SectionHeader';
import ims from "@/assets/img/misi.jpg";
import "./MissionVision.css";
const Mission = () => {
    return (
        <div>
            <SectionHeader
                title="Mission & Vision"
                subtitle="सेवा ही सबसे बड़ा धर्म है"
            />
            <div className="mission-container">
                <div className="section-title">
                    <h1>Mission & Vision</h1>
                    <p>सेवा ही सबसे बड़ा धर्म है</p>
                </div>

                <div className="grid">
                    {/* Mission */}
                    <div className="card mission-card">
                        <h2>🎯 Mission</h2>
                        <p>
                            <strong>"सेवा ही सबसे बड़ा धर्म है"</strong> – इसी विचारधारा को आधार
                            बनाकर...
                        </p>
                        <h3>🏥 प्राथमिकताएं:</h3>
                        <ul>
                            <li><strong>1. निःशुल्क इलाज:</strong> पैसे की कमी से कोई वंचित न रहे।</li>
                            <li><strong>2. गरिमापूर्ण सेवा:</strong> सम्मानपूर्वक सेवा देना।</li>
                            <li><strong>3. सेवा विस्तार:</strong> मोबाइल हेल्थ यूनिट आदि।</li>
                            <li><strong>4. नारी व बाल स्वास्थ्य:</strong> विशेष ध्यान।</li>
                        </ul>
                        <h3>🧬 सेवा मॉडल:</h3>
                        <ul>
                            <li>निःशुल्क OPD व परामर्श</li>
                            <li>दवाइयाँ, जाँच, सर्जरी मुफ्त</li>
                            <li>विशेषज्ञ डॉक्टर व शिविर</li>
                        </ul>
                        <h3>💊 सहयोग की भूमिका:</h3>
                        <ul>
                            <li>स्वयंसेवक</li>
                            <li>दानदाता</li>
                            <li>CSR भागीदार</li>
                        </ul>
                        <p><em>"जहाँ सेवा है, वहाँ ही ईश्वर का वास है।"</em></p>
                        <a href="/contact" className="cta">Contact Us for Support</a>
                    </div>

                    {/* Vision */}
                    <div className="card vision-card">
                        <h2>🌟 Vision</h2>
                        <p><strong>"जहाँ सेवा है, वहाँ भविष्य की आशा है।"</strong></p>
                        <p>हर व्यक्ति को गरिमापूर्ण स्वास्थ्य सेवा उपलब्ध हो...</p>
                        <h3>🌈 उद्देश्य:</h3>
                        <ul>
                            <li>हर कोने तक स्वास्थ्य सुविधा</li>
                            <li>गरीबों के लिए हेल्थ क्रांति</li>
                        </ul>
                        <h3>🧒 प्रमुख फोकस:</h3>
                        <ul>
                            <li>गर्भवती महिलाओं हेतु कार्यक्रम</li>
                            <li>किशोरियों के लिए मेंटल हेल्थ</li>
                            <li>बुजुर्गों के लिए सेवा केंद्र</li>
                        </ul>
                        <h3>🏥 भविष्य की योजना:</h3>
                        <ul>
                            <li>फ्री मेडिकल कॉलेज</li>
                            <li>महिला स्वास्थ्य कार्यकर्ताओं का नेटवर्क</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mission;