import React from 'react'
import './IndiaMarket.css'
import SecondHero  from '../../Components/Hero/SecondHero'
import insight from '../../assets/insights.png';
import invest from '../../assets/investIndia.png';
import roadmap from '../../assets/roadmap.png';
import Megatrends from '../../Components/Megatrends/Megatrends';
import imgA from "../../assets/first.png";
import imgB from "../../assets/sec.png";
import imgC from "../../assets/third.png";
import imgD from "../../assets/fourth.png";
import { testi, testimonial } from "../../assets/assets";
import Connect from '../../Components/Connect/Connect';


const IndiaMarket = () => {
   const testimonials = [
    {
      id: 1,
      quote: "What sets Bizwit apart is their ability to simplify complexity. From sector-specific reports to strategic consulting, they are our go-to research partner.",
      author: "Arun Bansal",
      company: "CellularVista - Managing Director"
    },
    {
      id: 2,
      quote: "What sets Bizwit apart is their ability to simplify complexity. From sector-specific reports to strategic consulting, they are our go-to research partner.",
      author: "Arun Bansal",
      company: "CellularVista - Managing Director"
    }
  ];

   const items = [
    {
      img: imgA,
      title: "10+ years of market intelligence expertise",
      body: "10+ years of market intelligence expertise 10+ years of market intelligence expertise",
    },
    {
      img: imgB,
      title: "Global research and execution reach",
      body: "Global research and execution reach Global research and execution reach",
    },
    {
      img: imgC,
      title: "Strong domain expertise across 15+ industries",
      body: "Strong domain expertise across 15+ industries",
    },
    {
      img: imgD,
      title: "Strategic and creative approach",
      body: "Strategic and creative approach Strategic and creative approach",
    },
      {
      img: imgD,
      title: "Strategic and creative approach",
      body: "Strategic and creative approach Strategic and creative approach",
    },
      {
      img: imgD,
      title: "Strategic and creative approach",
      body: "Strategic and creative approach Strategic and creative approach",
    },
  ];
  return (
    <>
      <SecondHero
      className='hsh_indiaMarket'
      title={ <>
      Enter India with Confidence,<br/>
      Power by Insight
    </>}
      subtitle='Gain clarity in a fast-moving world with unrivaled market intelligence—built to guide your strategies and maximize your success'
      primaryCta={{ label: "DOWNLOAD INDIA ENTRY PLAYBOOK", href: "/#" }}
      secondaryCta={{label: "BOOK A DISCOVERY CALL", href: "/#" }}
      image={{ src: insight, alt: "Background Image" }}
      />


      {/* WHY INVEST INDIA  */}
      <section className='invest-india'>
           <img src={invest} alt="invest-india-image" />
      </section>

      <section className="ind-market" aria-label="Our core sustainability services">
  <div className="common-tag-container">
    <span className="tag">INDIA INTELLIGENCE - RESEARCH-LED APPROACH</span>
  </div>

  <div className="svc__grid">
    <article className="svc-card">
      <div className="svc-card__skate1" aria-hidden="true"></div>
      <div className="svc-card__inner">
        <h3 className="svc-card__title">Consumer & Channel Insights</h3>
        <p className="svc-card__desc">
         Behavioral studies, buying patterns, and digital adoption rates
        </p>
      </div>
    </article>

    <article className="svc-card">
      <div className="svc-card__skate2" aria-hidden="true"></div>
      <div className="svc-card__inner">
        <h3 className="svc-card__title">Consumer & Channel Insights</h3>
        
        <p className="svc-card__desc">
         Behavioral studies, buying patterns, and digital adoption rates
        </p>
      </div>
    </article>

    <article className="svc-card">
      <div className="svc-card__skate3" aria-hidden="true"></div>
      <div className="svc-card__inner">
        <h3 className="svc-card__title">Consumer & Channel Insights</h3>
        <p className="svc-card__desc">
         Behavioral studies, buying patterns, and digital adoption rates
        </p>
      </div>
    </article>
  </div>
  <div className='intelligence-btn'>
                  <button className='know-more'>DOWNLOAD SAMPLE RESEARCH BRIEF</button>
                </div>
</section>


{/* ROADMAP */}
<section className='market-entry-blueprint'>
      <div className='common-tag-container'>
        <button className='tag'>BIZWIT BLUEPRINT FOR MARKET ENTRY</button>
      </div>
      <img src={roadmap} alt="roadmap" className='roadmapImg'/>
</section>

{/* MARKET ENTRY USE CASES */}
<Megatrends/>
 <section className="wc">
      <div className="wc-pill">WHY CHOOSE BIZWIT?</div>

      <div className="wc-grid">
        {items.map((x, i) => (
          <div key={i} className="wc-item">
            {/* dotted ring outside with gap */}
            <div className="wc-badge-wrap">
              <div className="wc-badge">
                <img src={x.img} alt={x.title} />
              </div>
            </div>

            <div className="wc-copy">
              <h3>{x.title}</h3>
              <p>{x.body}</p>
            </div>

            {/* dotted connector */}
            <div className="wc-dots">
              <span className="wc-dot" />
            </div>
          </div>
        ))}
      </div>
    </section>

     {/* CLIENT REVIEW */}
         <section className='strategic-client-say'>
            <div className="test-container">
        <div className="test-title-container1">   
          <div className='common-tag-container'>
            <p className="tag">WHAT OUR CLIENTS SAY</p>
          </div> 
        </div>      
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="quote-card">
              <img className="quote-mark" src={testi} alt="" />
              <p className="quote-text">"{testimonial.quote}"</p>
              <div className="quote-author">
                <div className="author-image"></div>
                <div className="author-info">
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="arrows">
          <div className="arrow arrow-left"></div>
          <div className="arrow arrow-right"></div>
        </div>
      </div>
      </section>

          <Connect/>
    </>
  )
}

export default IndiaMarket