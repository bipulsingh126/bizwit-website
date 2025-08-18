import React from 'react';
import './BizChronicle.css';
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
} from '../../assets/assets';
import CaseStudy from '../../Components/Industry/CaseStudy';

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
    <CaseStudy/>
   </div>
   
   </>
  );
};

export default BizChronicle;