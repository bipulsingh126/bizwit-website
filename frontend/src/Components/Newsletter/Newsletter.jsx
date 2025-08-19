import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <h2 className="newsletter-title">Subscribe to Our Newsletter for the Weekly Updates.</h2>
      <div className="newsletter-form">
        <input type="email" placeholder="Type here..." className="newsletter-input" />
        <button className="newsletter-button">SUBSCRIBE</button>
      </div>
    </div>
  );
};

export default Newsletter;
