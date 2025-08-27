import React from "react";
import "./Megatrends.css";
import mega1 from "../../assets/mega1.png";
import mega2 from "../../assets/mega2.png";
import mega3 from "../../assets/mega3.png";
import { megaarrow, } from "../../assets/assets";

const Megatrends = () => {
  return (
    <div className="megatrends-container">
      <div className="megatrends-header">
        <span className="megatrends-badge">MEGATRENDS</span>
        <p>
          Understanding today's megatrends is the first step toward leading
          tomorrow.
        </p>
      </div>
      <div className="megatrends-grid">
        <div className="megatrend-card">
          <img
          className="megaimage"
            src={mega1}
            alt="AI, Automation & the New Human-Machine Economy"
          />
          <div className="megatrend-card-content">
            <h3>
              The Age of Intelligence: AI, Automation & the New Human-Machine
              Economy
            </h3>
            <p>
              Explores how artificial intelligence, machine learning, and
              robotics are transforming every sector—from manufacturing and
              retail to finance and healthcare.
            </p>
            <div className="megatrend-card-footer">
              <button className="usehover">DOWNLOAD WHITE PAPER</button>
              <img src={megaarrow} className="megaicon" alt="" />
            </div>
          </div>
        </div>
        <div className="megatrend-card">
          <img className="megaimage" src={mega2} alt="Climate Capitalism" />
          <div className="megatrend-card-content">
            <h3>
              Climate Capitalism: The Green Transition and the Race for
              Sustainable Growth
            </h3>
            <p>
              Covers the global pivot toward net-zero, clean energy, ESG
              investing, and how businesses are adapting to both environmental
              risks and regulatory shifts.
            </p>
            <div className="megatrend-card-footer">
              <button className="usehover">DOWNLOAD WHITE PAPER</button>
              <img src={megaarrow} className="megaicon" alt="" />
            </div>
          </div>
        </div>
        <div className="megatrend-card">
          <img className="megaimage" src={mega3} alt="Geo-Economic Fragmentation" />
          <div className="megatrend-card-content">
            <h3>
              Geo-Economic Fragmentation: The End of Globalization as We Know It
            </h3>
            <p>
              Focuses on decoupling, regional supply chains, rising
              protectionism, and how geopolitical tensions (like U.S.-China, EU
              regulations, digital sovereignty) are redrawing economic
              alliances.
            </p>
            <div className="megatrend-card-footer">
              <button className="usehover">DOWNLOAD WHITE PAPER</button>
              <img className=" megaicon" src={megaarrow} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Megatrends;
