import React, { useState } from 'react';
import './Hero.css';
import { bg1, bg2, bg,  hero } from '../../assets/assets';

const bgImages = [ hero, bg1, bg2, bg ];

const Hero = () => {
  const [bgIndex, setBgIndex] = useState(0);

  const handleBgChange = (index) => {
    setBgIndex(index);
  };

  return (
    <div
      className="hero-container"
      style={{ backgroundImage: `url(${bgImages[bgIndex]})` }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          Your Trusted <span className="hero-underline"></span>
          <br />
          <span className="hero-subtitle">Consulting Partner</span>
        </h1>
        <div className="cta-container">
          <button className="hero-cta-button">
            Free Consultation
          </button>
        </div>
      </div>
      <div className="hero-bottom-buttons">
        {[3, 0, 1, 2].map((idx) => (
          <button
            key={idx}
            className={`consultation-btn${bgIndex === idx ? ' active' : ''}`}
            onClick={() => handleBgChange(idx)}
          >
            Consultation
          </button>
        ))}
      </div>
    </div>
  );
};

export default Hero;