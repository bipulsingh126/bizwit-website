import React from 'react';
import './OurClient.css';
import { clients } from '../../assets/assets';

const OurClient = () => {
  return (
    <div className="our-client-container">
      <div className="our-client-header">
        <span className="our-client-tag">OUR CLIENTS</span>
      </div>
      <div className="our-client-logos">
        {clients.map((client, index) => (
          <div className="our-client-logo" key={index}>
            <img src={client} alt={`client-logo-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurClient;