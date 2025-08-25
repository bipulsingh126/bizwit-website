import React from "react";
import "./Bizcronicles.css";
import biz1 from "../../assets/biz1.png";
import biz2 from "../../assets/biz2.png";

const Bizcronicles = () => {
  const articles = [
    {
      image: biz1,
      title: "Tariff Tremors: How Trump's New Trade Strategy is Squeezing the Global Auto Industry",
    },
    {
      image: biz2,
      title: "The Domino Effect: How Tariffs Are Reshaping the Auto Landscape",
    },
  ];

  return (
    <div className="bizcronicles-container">
      <div className="bizcronicles-header">
        <button className="bizcronicles-title-btn">BIZCRONICLES</button>
        <p className="bizcronicles-subtitle">
          Here are some chronicles of businesses that dared to ask the right questions — and found powerful answers.
        </p>
      </div>
      <div className="bizcronicles-slider">
        <button className="slider-arrow prev-arrow">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
        <div className="slider-track">
          {articles.map((article, index) => (
            <div className="biz-card" key={index}>
              <div className="Rectangle"></div>
              <div className="biz-card-image">
                <img src={article.image} alt={article.title} />
              </div>
              <div className="biz-card-content">
                <p className="biz-card-title">{article.title}</p>
                <button className="biz-card-arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
        <button className="slider-arrow next-arrow">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
      </div>
    </div>
  );
};

export default Bizcronicles;
