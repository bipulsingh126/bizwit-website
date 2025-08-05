import React from 'react';
import './Industry.css';
import { trend1, trend2, trend3, trend4, trend5, bicro1, bicro2, mega1, mega2 } from '../../assets/assets';

const Industry = () => {
  const industries = [
    { name: 'AI in Education', image: trend1 },
    { name: 'AI in Healthcare', image: trend2 },
    { name: 'Green Energy', image: trend3 },
    { name: 'Sports & Fitness', image: trend4 },
    { name: 'Biotechnology', image: trend5 },
    { name: 'Industry 4.0', image: bicro1 },
    { name: 'Digital Agriculture', image: bicro2 },
    { name: 'Semiconductor', image: mega1 },
    { name: 'Cyber Security', image: mega2 },
      { name: 'Green Energy', image: trend3 },
       { name: 'Digital Agriculture', image: bicro2 },
        { name: 'AI in Healthcare', image: trend2 },
        { name: 'Green Energy', image: trend3 },
  ];

  // Split industries into rows: 4-5-4 pattern
  const row1 = industries.slice(0, 4);
  const row2 = industries.slice(4, 9);
  const row3 = industries.slice(9, 13);

  return (
    <div className="industry-container">
      <h2 className="industry-title">INDUSTRIES WE CATER</h2>
      <div className="industry-grid">
        {/* First row: 4 hexagons */}
        <div className="industry-row">
          {row1.map((industry, index) => (
            <div key={index} className="industry-card">
              <img src={industry.image} alt={industry.name} />
              <div className="industry-name">{industry.name}</div>
            </div>
          ))}
        </div>
        
        {/* Second row: 5 hexagons (offset) */}
        <div className="industry-row">
          {row2.map((industry, index) => (
            <div key={index + 4} className="industry-card">
              <img src={industry.image} alt={industry.name} />
              <div className="industry-name">{industry.name}</div>
            </div>
          ))}
        </div>
        
        {/* Third row: 4 hexagons */}
        <div className="industry-row">
          {row3.map((industry, index) => (
            <div key={index + 9} className="industry-card">
              <img src={industry.image} alt={industry.name} />
              <div className="industry-name">{industry.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industry;