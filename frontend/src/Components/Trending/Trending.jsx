import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Trending.css';
import trend1 from '../../assets/trend1.png';
import trend2 from '../../assets/trend2.png';
import trend3 from '../../assets/trend3.png';
import trend4 from '../../assets/trend4.png';
import tremd5 from '../../assets/tremd5.png';

const Trending = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
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
      <h2 className="trending-title">TRENDING REPORTS</h2>
      <Slider {...settings}>
        {trendingReports.map((report, index) => (
          <div key={index} className="trending-card">
            <img src={report.img} alt={report.title} />
            <div className="year-badge">{report.year}</div>
            <div className="card-content">
              <p>{report.title}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Trending;