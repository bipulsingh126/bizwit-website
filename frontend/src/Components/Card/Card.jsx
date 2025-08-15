import React from 'react';
import './Card.css';
import { LuLayers } from 'react-icons/lu';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { IoBarChartOutline } from 'react-icons/io5';
import { FaArrowRight } from 'react-icons/fa';
import { HiQuestionMarkCircle } from 'react-icons/hi';
import { card1,card2,card3, card4, hero, graph } from '../../assets/assets';

// Placeholder data - in a real app, this would come from an API
const cardData = {
  assets: {
    aum: '$28.90M',
    chartData: [
      0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.75, 0.85, 0.9, 0.95, 1.0, 0.9, 0.8,
      0.7, 0.65, 0.75, 0.85, 0.95, 1.0, 0.95, 0.9, 0.85, 0.8, 0.75, 0.8, 0.85, 0.9,
      0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65, 0.6, 0.55, 0.5, 0.45, 0.4,
    ],
  },
  professionals: {
    count: '120+',
    avatars: [
      'https://placehold.co/150x150/E9D5FF/312E81?text=P1',
      'https://placehold.co/150x150/C7D2FE/312E81?text=P2',
      'https://placehold.co/150x150/A5B4FC/312E81?text=P3',
    ],
  },
  trust: {
    year: '2016',
    backgroundImage: hero,
  },
};

const Bar = ({ height }) => (
  <div className="bar-wrapper">
    <div className="bar" style={{ height: `${height * 100}%` }}></div>
  </div>
);

const Card = () => {
  return (
    <div className="card-container">
      <div className="card-grid">
        {/* Assets Card */}
        <div className="card assets-card">
          <div className="assets-left-panel">
            <h3 className="assets-title">Assets</h3>
            <a href="#" className="learn-more">
              Learn more <FaArrowRight className="learn-more-icon" />
            </a>
          </div>
          <div className="assets-right-panel">
            <div className="assets-info-card">
              <div className="assets-info-icon">
                <LuLayers />
              </div>
              <p className="assets-subtitle">Assets under management</p>
              <p className="assets-amount">{cardData.assets.aum}</p>
            </div>
            <div className="assets-chart">
              <img src={graph} alt="Assets chart" />
            </div>
          </div>
        </div>

        {/* Professionals Card */}
        <div className="card professionals-card">
          <div className="professionals-icon">
            <HiOutlineUserGroup />
          </div>
          <div className="professionals-content">
            <div>
              <h3 className="professionals-title">Professionals</h3>
              <p className="professionals-count">{cardData.professionals.count}</p>
            </div>
            <div className="professionals-avatars">
              <img src={card1} alt="Professional 1" />
              <img src={card2} alt="Professional 2" />
              <img src={card3} alt="Professional 3" />
            </div>
          </div>
        </div>
         

        {/* Trust Card */}
        <div className="card trust-card">
          <img
            src={card4}
            alt="Team working"
            className="trust-bg-image"
          />
          <div className="trust-info-overlay">
            <div className="trust-icon">
              <IoBarChartOutline />
            </div>
            <p className="trust-text">Earning client</p>
            <p className="trust-text">trust since</p>
            <p className="trust-year">{cardData.trust.year}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;