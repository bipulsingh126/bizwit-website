import React from 'react';
import './Megatrends.css';

const Megatrends = () => {
  return (
    <div className="megatrends-container">
      <div className="megatrends-header">
        <span className="megatrends-badge">MEGATRENDS</span>
        <p>Understanding today's megatrends is the first step toward leading tomorrow.</p>
      </div>
      <div className="megatrends-grid">
        <div className="megatrend-card">
          <img src="/src/assets/mega1.png" alt="AI, Automation & the New Human-Machine Economy" />
          <div className="megatrend-card-content">
            <h3>The Age of Intelligence: AI, Automation & the New Human-Machine Economy</h3>
            <p>Explores how artificial intelligence, machine learning, and robotics are transforming every sector—from manufacturing and retail to finance and healthcare.</p>
            <div className="megatrend-card-footer">
              <button>DOWNLOAD WHITE PAPER</button>
              <span className="arrow-icon">↗</span>
            </div>
          </div>
        </div>
        <div className="megatrend-card">
          <img src="/src/assets/mega2.png" alt="Climate Capitalism" />
          <div className="megatrend-card-content">
            <h3>Climate Capitalism: The Green Transition and the Race for Sustainable Growth</h3>
            <p>Covers the global pivot toward net-zero, clean energy, ESG investing, and how businesses are adapting to both environmental risks and regulatory shifts.</p>
            <div className="megatrend-card-footer">
              <button>DOWNLOAD WHITE PAPER</button>
              <span className="arrow-icon">↗</span>
            </div>
          </div>
        </div>
        <div className="megatrend-card">
          <img src="/src/assets/mega3.png" alt="Geo-Economic Fragmentation" />
          <div className="megatrend-card-content">
            <h3>Geo-Economic Fragmentation: The End of Globalization as We Know It</h3>
            <p>Focuses on decoupling, regional supply chains, rising protectionism, and how geopolitical tensions (like U.S.-China, EU regulations, digital sovereignty) are redrawing economic alliances.</p>
            <div className="megatrend-card-footer">
              <button>DOWNLOAD WHITE PAPER</button>
              <span className="arrow-icon">↗</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Megatrends;