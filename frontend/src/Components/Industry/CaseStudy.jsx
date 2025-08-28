import React, { useState, useRef } from 'react';
import './CaseStudy.css';
import Vector from '../../assets/Vector.png';
import Vector2 from '../../assets/Vector-2.png';
import Vector3 from '../../assets/Vector-3.png';
import Vector4 from '../../assets/Vector-4.png';
import { casebutton, left, scroll } from '../../assets/assets';

// Sample data for the cards
const caseStudies = [
  {
    image: Vector,
    title: 'Global Erythropoietin Drugs Market to Reach USD 7.7 Billion',
  },
  {
    image: Vector2,
    title: 'Global Ear Infection Treatment Market to Reach USD 8.29 Billion',
  },
  {
    image: Vector3,
    title: 'Global Albumin ELISA Test Market to Reach USD 61.62 Billion',
  },
  {
    image: Vector4,
    title: 'Global Cellular IoT Market to Reach USD 23.66 Billion',
  },
];

const CaseStudy = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsRef = useRef(null);

  const slide = (direction) => {
    const cardWidth = 320; // Approximate card width + gap
    const maxIndex = caseStudies.length - 1;
    
    if (direction === 'left' && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      cardsRef.current.scrollLeft -= cardWidth;
    } else if (direction === 'right' && currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
      cardsRef.current.scrollLeft += cardWidth;
    }
  };

  return (
    <div className="casestudy-container">
      <div className="casestudy-header">
        <span className="casestudy-tag">CASE STUDY</span>
        <h2 className="casestudy-title">Empowering Businesses <span>Worldwide </span> with Research-Driven Insights.</h2>
      </div>
      <div className="casestudy-cards-container">
         <img src={left}  className='left-arrow2' alt="" onClick={() => slide('left')} />
        <div className="casestudy-cards" ref={cardsRef}>
          {caseStudies.map((study, index) => (
            <div className="casestudy-card" key={index}>
              <div className="casestudy-card-image-wrapper">
                  <img src={study.image} alt={study.title} className="casestudy-card-image" />
              </div>
              <div className="casestudy-card-content">
                <p>{study.title}</p>
                <button className="casestudy-card-arrow"><img className='cardbutton' src={casebutton} alt="" /></button>
              </div>
            </div>
          ))}
        </div>
         <img src={scroll} className='right-arrow2' alt="" onClick={() => slide('right')} />
      </div>
    </div>
  );
};

export default CaseStudy;