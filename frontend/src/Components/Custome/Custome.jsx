import React from 'react';
import './Custome.css';
import { bgJpg } from '../../assets/assets';

const Custome = () => {
  return (
    <div className="custom-banner-container" style={{ backgroundImage: `url(${bgJpg})` }}>
      <div className="custom-banner-content">
        <p className="custom-banner-text">
          Looking for a customize solution? <strong>Get 10% off</strong>
        </p>
        <button className="custom-banner-button">
          REQUEST FOR CUSTOMIZATION
        </button>
      </div>
    </div>
  );
};

export default Custome;