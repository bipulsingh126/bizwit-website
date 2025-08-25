import React, { useRef } from "react";
import "./Bizcronicles.css";
import { Bicro1, Bicro2 } from "../../assets/assets";


const Bizcronicles = () => {
  const sliderRef = useRef(null);
  
  const articles = [
    {
      image: Bicro1,
      title: "Tariff Tremors: How Trump's New Trade Strategy is Squeezing the Global Auto Industry",
    },
    {
      image: Bicro2,
      title: "The Domino Effect: How Tariffs Are Reshaping the Auto Landscape",
    },
    {
      image: Bicro1,
      title: "Another Business Chronicle Article",
    },
    {
      image: Bicro2,
      title: "Future of Global Trade Relations",
    },
  ];

  const getCardWidth = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 480) {
      return 270; // mobile: 260px card + 10px gap
    } else if (screenWidth <= 768) {
      return 362; // tablet: 350px card + 12px gap
    } else if (screenWidth <= 1200) {
      return 515; // medium: 500px card + 15px gap
    }
    return 625; // desktop: 600px card + 25px gap
  };

  const scrollNext = () => {
    if (sliderRef.current) {
      const cardWidth = getCardWidth();
      sliderRef.current.scrollLeft += cardWidth;
    }
  };

  const scrollPrev = () => {
    if (sliderRef.current) {
      const cardWidth = getCardWidth();
      sliderRef.current.scrollLeft -= cardWidth;
    }
  };

  return (
    <div className="bizcronicles-container">
      <div className="bizcronicles-header">
        <button className="bizcronicles-title-btn">BIZCRONICLES</button>
        <p className="bizcronicles-subtitle">
          Here are some chronicles of businesses that dared to ask the right questions — and found powerful answers.
        </p>
      </div>
      <div className="bizcronicles-slider">
        <button className="slider-arrow prev-arrow" onClick={scrollPrev}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
        <div className="slider-track" ref={sliderRef}>
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
        <button className="slider-arrow next-arrow" onClick={scrollNext}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
      </div>
    </div>
  );
};

export default Bizcronicles;
