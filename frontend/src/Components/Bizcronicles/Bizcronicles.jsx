import React from 'react';
import './Bizcronicles.css';
import { Bicro1, Bicro2 } from '../../assets/assets';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Bizcronicles = () => {
  return (
    <div className="bizcronicles-section">
      <div className="bizcronicles-header">
        <span className="bizcronicles-badge">BIZCRONICLES</span>
      </div>
      <p className="bizcronicles-description">
        Here are some chronicles of businesses that dared to ask the right questions — and found powerful answers.
      </p>
      <div className="bizcronicles-carousel">
        <button className="carousel-arrow prev-arrow"><FaArrowLeft /></button>
        <div className="bizcronicles-carousel-inner">
          <div className="bizcronicles-carousel-item">
            <img src={Bicro2} alt="The Domino Effect" />
            <div className="bizcronicles-carousel-item-content">
              <h3>The Domino Effect: How Tariffs Are Reshaping the Auto Landscape</h3>
              <div className="read-more-arrow">
                <FaArrowRight />
              </div>
            </div>
          </div>
          <div className="bizcronicles-carousel-item">
            <img src={Bicro1} alt="Tariff Tremors" />
            <div className="bizcronicles-carousel-item-content">
              <h3>Tariff Tremors: How Trump’s New Trade Strategy is Squeezing the Global Auto Industry</h3>
              <div className="read-more-arrow">
                <FaArrowRight />
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-arrow next-arrow"><FaArrowRight /></button>
      </div>
    </div>
   
  );
};

export default Bizcronicles;