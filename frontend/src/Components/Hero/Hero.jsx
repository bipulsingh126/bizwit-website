import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          Your Trusted
          <br />
          <span className="hero-subtitle">
            Consulting Partner
            <span className="hero-underline"></span>
          </span>
        </h1>
        <button className="hero-cta-button">
          Free Consultation
          <span className="arrow-icon">↗</span>
        </button>
      </div>
      <div className="hero-bottom-buttons">
        <button className="consultation-btn active">Consultation</button>
        <button className="consultation-btn">Consultation</button>
        <button className="consultation-btn">Consultation</button>
        <button className="consultation-btn">Consultation</button>
      </div>
    </div>
  );
};

export default Hero;