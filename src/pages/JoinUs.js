import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/JoinUs.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
function JoinUs() {
  const navigate = useNavigate();
  const positions = [
    {
      title: "Web Designer",
      icon: "🎨",
      description: "Create stunning user interfaces and experiences",
      path: "web-designer"
    },
    {
      title: "Web Developer",
      icon: "💻",
      description: "Build robust and scalable web applications",
      path: "web-developer"
    },
    {
      title: "Mobile App Designer",
      icon: "📱",
      description: "Design intuitive mobile experiences",
      path: "mobile-designer"
    },
    {
      title: "Mobile App Developer",
      icon: "⚡",
      description: "Develop cutting-edge mobile applications",
      path: "mobile-developer"
    },
    {
      title: "Digital Marketer",
      icon: "📊",
      description: "Drive growth through digital channels",
      path: "digital-marketer"
    }
  ];

  const handlePositionClick = (path) => {
    navigate(`/join-us/${path}`);
  };
  return (
    <>
      <Header />
      <section className="joinus-section">
        <h1 className="heading">Join Our Team</h1>
        <div className="positions-container">
          {positions.map((pos, index) => (
            <div 
              className="position-card" 
              key={index}
              onClick={() => handlePositionClick(pos.path)}
            >
              <span className="position-icon">{pos.icon}</span>
              <h3>{pos.title}</h3>
              <p>{pos.description}</p>
              <button className="apply-btn">Apply Now</button>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
export default JoinUs; 