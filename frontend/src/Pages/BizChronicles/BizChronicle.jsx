import React, { useRef } from 'react';
import './BizChronicle.css';
import Vector from '../../assets/Vector.png';
import Vector2 from '../../assets/Vector-2.png';
import Vector3 from '../../assets/Vector-3.png';
import Vector4 from '../../assets/Vector-4.png';

import { 
    arrow,
  bizchronicles, 
  bizchronicles1, 
  bizchronicles2, 
  bizchronicles3, 
  bizchronicles4, 
  bizchronicles5, 
  bizchronicles6, 
  bizchronicles7 ,
  biz1,
  biz2,
  biz3,
  biz4,
  biz5,
  biz6,
  biz7,
  biz8,
  arrow1,
  arrow2,
  scroll,
  left,
} from '../../assets/assets';
import Newsletter from '../../Components/Newsletter/Newsletter';

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


const chroniclesData = [
  {
    img: bizchronicles,
    title: 'Global Anti stretchmarks product market',
  },
  {
    img: bizchronicles1,
    title: 'Indian handloom market',
  },
  {
    img: bizchronicles2,
    title: 'Global Camera Strap Market',
  },
  {
    img: bizchronicles3,
    title: 'Global Drug Delivery Market',
  },
  {
    img: bizchronicles4,
    title: 'Global Satellite Based Earth Observation Market',
  },
  {
    img: bizchronicles5,
    title: 'The US Fed Rate Cut & its impact on Indian Economy',
  },
  {
    img: bizchronicles6,
    title: 'Diverse Applications of Moringa Driving Global Moringa Products Market Growth',
  },
  {
    img: bizchronicles7,
    title: 'The quick commerce buzz in 2025',
  },
];

const chroniclesData2 = [
  {
    img: biz1,
    title: 'Top Agriculture Industry Trends to Watch in 202',
  },
  {
    img: biz2,
    title: 'Chemical Industry Trends to Watch in 2025',
  },
  {
    img: biz3,
    title: 'Top Healthcare Industry Trends in 2025'
  },
  {
    img: biz4,
    title: 'Top Automotive Industry Trends in 2025',
  },
  {
    img: biz5,
    title: 'Cybersecurity Trends to Watch in 2025',
  },
  {
    img: biz6,
    title: 'The Evolution of Retail: What’s Next in 2025 and Beyond?',
  },
  {
    img: biz7,
    title: 'Top AI Trends to Watch in 2025',
  },
  {
    img: biz8,
    title: 'Tourism Industry Trends to Watch in 2025',
  },
];

const BizChronicle = () => {
  const slider = useRef(null);

  const slide = (direction) => {
    const scrollAmount = 300; // Adjust scroll amount as needed
    if (slider.current) {
      if (direction === 'left') {
        slider.current.scrollLeft -= scrollAmount;
      } else {
        slider.current.scrollLeft += scrollAmount;
      }
    }
  };
  return (
   <>
   <div className='biz-chronicle-container'>
     <h1 className='biz-chronicle-title'>
      Here are some chronicles of businesses that dared to ask the right questions — and found powerful answers.
     </h1>
     <div className='biz-chronicle-grid'>
        {chroniclesData.map((item, index) => {
          return (
            <div className='biz-chronicle-card-item' key={index}>
              <img src={item.img} alt="" className='biz-chronicle-img' />
              <p className='biz-chronicle-card-title'>{item.title}</p>
              <img src={arrow} alt="" className='biz-chronicle-arrow' />
            </div>
          )
        })}
     </div>
   </div>
   <div className='biz-chronicle-container'>
    <p className='biz-chronicle-megatrends'>MEGATRENDS</p>
    <h1 className='biz-chronicle-title2'>
      Here are some chronicles of businesses that dared to ask the right questions — and found powerful answers.
     </h1>
     <div className='biz-chronicle-grid2'>
        {chroniclesData2.map((item, index) => {
          return (
            <div className='biz-chronicle-card-item2' key={index}>
              <img src={item.img} alt=""  className='biz-chronicle-img2' />
              <img src={arrow1} className='biz-chronicle-arrow2' alt="" />
              <p className='biz-chronicle-card-title2'>{item.title}</p>
            </div>
          )
        })}
     </div>
   </div>

   <div>
   <div className="casestudy-container1">
      <div className="casestudy-header">
        <span className="casestudy-tag1">CASE STUDY</span>
        <h2 className="casestudy-title1">Empowering Businesses <span>Worldwide</span>  with Research-Driven Insights.</h2>
      </div>
      <div className="casestudy-cards-container1">
       <img src={left}  className='left-arrow' alt="" onClick={() => slide('left')} />
        <div className="casestudy-cards1" ref={slider}>
          {caseStudies.map((study, index) => (
            <div className="casestudy-card1" key={index}>
              <div className="casestudy-card-image-wrapper">
                  <img src={study.image} alt={study.title} className="casestudy-card-image" />
              </div>
              <div className="casestudy-card-content">
                <p className='titlestudy'>{study.title}</p>
                <img  className='biz-chronicle-arrow1' src={arrow2} alt="" />
              </div>
            </div>
          ))}
        </div>
       <img src={scroll} className='right-arrow' alt="" onClick={() => slide('right')} />
      </div>
    </div>
   </div>
   <div>
    <Newsletter />
   </div>
   
   </>
  );
};

export default BizChronicle;