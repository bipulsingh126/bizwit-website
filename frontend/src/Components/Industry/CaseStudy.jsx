import React from 'react';
import './CaseStudy.css';

// Sample data for the cards
const caseStudies = [
  {
    image: '/src/assets/trend1.png',
    title: 'Global Erythropoietin Drugs Market to Reach USD 7.7 Billion',
  },
  {
    image: '/src/assets/trend2.png',
    title: 'Global Ear Infection Treatment Market to Reach USD 8.29 Billion',
  },
  {
    image: '/src/assets/trend3.png',
    title: 'Global Albumin ELISA Test Market to Reach USD 61.62 Billion',
  },
  {
    image: '/src/assets/trend4.png',
    title: 'Global Cellular IoT Market to Reach USD 23.66 Billion',
  },
];

const CaseStudy = () => {
  return (
    <div className="casestudy-container">
      <div className="casestudy-header">
        <span className="casestudy-tag">CASE STUDY</span>
        <h2 className="casestudy-title">Empowering Businesses Worldwide with Research-Driven Insights.</h2>
      </div>
      <div className="casestudy-cards-container">
        <button className="casestudy-arrow left-arrow">&#8592;</button>
        <div className="casestudy-cards">
          {caseStudies.map((study, index) => (
            <div className="casestudy-card" key={index}>
              <div className="casestudy-card-image-wrapper">
                  <img src={study.image} alt={study.title} className="casestudy-card-image" />
              </div>
              <div className="casestudy-card-content">
                <p>{study.title}</p>
                <button className="casestudy-card-arrow">&#8594;</button>
              </div>
            </div>
          ))}
        </div>
        <button className="casestudy-arrow right-arrow">&#8594;</button>
      </div>
    </div>
  );
};

export default CaseStudy;