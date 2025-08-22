import React, { useRef } from 'react';
import './Trending.css';
import trend1 from '../../assets/trend1.png';
import trend2 from '../../assets/trend2.png';
import trend3 from '../../assets/trend3.png';
import trend4 from '../../assets/trend4.png';
import tremd5 from '../../assets/tremd5.png';
import leftArrow from '../../assets/left.png';
import rightArrow from '../../assets/Scroller.png';

const Trending = ({ showTitle = true }) => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -270, // Card width + gap
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 270, // Card width + gap
        behavior: 'smooth'
      });
    }
  };

  const trendingReports = [
    { 
        img: trend1, 
        title: 'Global Rural Tourism Market to Reach USD 173.20 Billion', 
        year: '2023' 
    },
    { 
        img: trend2, 
        title: 'Global Peaking Power Plant Market to reach USD 159.52 Billion', 
        year: '2024' 
    },
    { 
        img: trend3, 
        title: 'Global Energy Security Market to Reach USD 38.2 Billion', 
        year: '2024' 
    },
    { 
        img: trend4, 
        title: 'Global Hybrid Capacitor Market to Reach USD 173.20 Billion', 
        year: '2024' 
    },
    { 
        img: tremd5, 
        title: 'Global Hybrid Capacitor Market to Reach USD 173.20 Billion', 
        year: '2024' 
    },
  ];

  return (
    <div className="trending-container">
      {showTitle && <h2 className="trending-title">TRENDING REPORTS</h2>}
      <div className="trending-scroll-wrapper">
        <button className="scroll-btn scroll-left" onClick={scrollLeft}>
          <img src={leftArrow} alt="Scroll Left" />
        </button>
        
        <div className="trending-cards-container" ref={scrollContainerRef}>
          {trendingReports.map((report, index) => (
            <div key={index} className='trending-card-wrapper'>
              <div className="trending-card">
                <img src={report.img} alt={report.title} />
                <div className="year-badge">{report.year}</div>
                <div className="card-content">
                  <p>{report.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button className="scroll-btn scroll-right" onClick={scrollRight}>
          <img src={rightArrow} alt="Scroll Right" />
        </button>
      </div>
    </div>
  );
};

export default Trending;