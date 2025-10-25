import React from 'react'
import SecondHero from '../../Components/Hero/SecondHero'
import bg from '../../assets/bg.png'
import mark from '../../assets/questionMark.png'
import strat from '../../assets/strat_arrow.png'
import target from '../../assets/target.png'
import scan from '../../assets/scan.png'
import assess from '../../assets/assess.png'
import prior_market from '../../assets/prior_market.png'
import idea_icon from '../../assets/idea_icon.png'
import icon1 from '../../assets/Group.png'
import icon2 from '../../assets/popMaps.png'
import icon3 from '../../assets/sheet.png'
import icon4 from '../../assets/analysis.png'
import icon5 from '../../assets/notebook.png'
import icon6 from '../../assets/battlecard.png'
import './Strategic.css'
import CaseStudy from '../../Components/Industry/CaseStudy'
import left from '../../assets/rect_bgl.png'
import right from '../../assets/rect_bgr.png'
import strength from '../../assets/dumble.png'
import questionMark from '../../assets/quesMarkIcon.png'
import { testi, testimonial } from "../../assets/assets";
import TestAll from '../../Components/Testimonials/TestAll'
import Connect from '../../Components/Connect/Connect'

const Strategic = () => {
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

const ITEMS = [
  {
    icon: icon1,
    title: "Competitive Positioning Matrix",
    subtitle: "Competitive Positioning Matrix competitive Positioning Matrix",
  },
  {
    icon: icon2,
    title: "SWOT & Value Pop Maps",
    subtitle: "SWOT & Value Pop Maps SWOT & Value Pop Maps",
  },
  {
    icon: icon3,
    title: "Feature Comparison Sheets",
    subtitle: "Feature Comparison Sheets feature Comparison Sheets",
  },
  {
    icon: icon4,
    title: "Deal Pipeline Analysis",
    subtitle: "Deal Pipeline Analysis deal Pipeline Analysis",
  },
  {
    icon: icon5,
    title: "Social/Content Tracker",
    subtitle: "Social/Content Tracker Social/Content Tracker",
  },
  {
    icon: icon6,
    title: "Visual Battlecards",
    subtitle: "Visual Battlecards Visual Battlecards Visual Battlecards",
  },
];
  const steps = [
  {
    icon: target,
    title: "DEFINE STRATEGIC OBJECTIVES",
    text:
      "Align with your business goals to understand what success looks like in new or existing markets."
  },
  {
    icon: scan,
    title: "CONDUCT MARKET SCANNING",
    text:
      "Analyze macro trends, regulatory factors, and emerging shifts that impact market dynamics."
  },
  {
    icon: assess,
    title: "ASSESS COMPETITIVE LANDSCAPE",
    text:
      "Benchmark key players, assess strategies, and identify white spaces or underserved segments."
  },
  {
    icon: prior_market,
    title: "PRIORITIZE MARKET OPPORTUNITIES",
    text:
      "Score and compare markets by growth potential, competitive intensity, risk, and strategic fit."
  }
];
  return (
    <>
       <SecondHero
       title="Competitive Intelligence & Strategic Analysis"
                 subtitle="Accelerating impactful growth through bold, insight-led strategies."
                 primaryCta={{ label: "REQUEST A COMPETITOR SCAN", href: "/#" }}
                 secondaryCta={{ label: "DOWNLOAD SAMPLE COMPETITIVE DASHBOARD", href: "/#" }}
                 image={{ src: bg, alt: "Background Image" }}
       />

       {/* WHAT WE OFFER TO THE CLIENT */}
       <section className="strat-offer" aria-label="Our strategic sustainability services">
  <div className="common-tag-container">
    <button className="tag">OUR CORE STRATEGIC SERVICES</button>
  </div>

  <div className="strat-offer__grid">
    <article className="strat-card">
      <div className="strat-card__skate" aria-hidden="true"></div>
      <div className="strat-card__inner">
        <h3 className="strat-card__title">BENCHMARKING &<br/>POSITIONING</h3>
        <p className="strat-card__desc">
          With our Benchmarking & Positioning services, gain a clear view of your competitive standing, uncover performance gaps, and lead with confidence.
        </p>
      </div>
    </article>

    <article className="strat-card">
      <div className="strat-card__skate" aria-hidden="true"></div>
      <div className="strat-card__inner">
        <h3 className="strat-card__title">PIPELINE <br/>ANALYSIS</h3>
        <p className="strat-card__desc">
          Evaluate market opportunities, spot weaknesses in your growth funnel, and optimize for strategic success. 
        </p>
      </div>
    </article>

    <article className="strat-card">
      <div className="strat-card__skate" aria-hidden="true"></div>
      <div className="strat-card__inner">
        <h3 className="strat-card__title">GO-TO-MARKET <br/>INSIGHTS</h3>
        <p className="strat-card__desc">
          With our actionable GTM strategies, enter chosen markets with confidence—covering positioning, channels, customer segments, pricing, and competitive tactics. 
        </p>
      </div>
    </article>

    <article className="strat-card">
      <div className="strat-card__skate" aria-hidden="true"></div>
      <div className="strat-card__inner">
        <h3 className="strat-card__title">IDENTIFY MARKET<br/>ATTRACTIVENESS</h3>
        <p className="strat-card__desc">
          With our Market Attractiveness services, assess market potential, prioritize opportunities, and invest where growth and alignment are strongest.
        </p>
      </div>
    </article>
  </div>
</section>

{/* Demo */}
  <section className='demo-container'>
    <div className='demo-content'>
          <div className='demo-text'>
            <h2>Harness the power of insight to drive</h2>
            <p>Schedule a call with our experts to uncover market opportunities, refine your strategy and drive smarter business decisions.</p>
          </div>
          <div className='demo-button'>
            <button className='demo-button'>Schedule a Demo</button>
          </div>
      </div>
  </section>

      {/* Market Share */}
       <section className="market-section">
      <div className="market-left">
        <ul className="market-list">
          <li>
            Are you exploring new markets without clear visibility into their true potential?
          </li>
          <li>
            Is your team struggling to separate high‑value opportunities from saturated or low‑growth segments?
          </li>
        </ul>
         <img className='question-mark' src={mark} alt="Bg image" />
      </div>

      <div className="divider" aria-hidden />

      <div className="market-right">
       <p>As you expand into new or unfamiliar territories, it's critical to base decisions on more than instinct or past success. Our Competitive Intelligence & Strategy Analysis services empower your team with a clear understanding of market dynamics, customer needs, and competitive realities—so you can prioritize the right opportunities and shape strategies that win.</p>
      </div>
    </section>


    {/* APPROACH SECTION */}
     <section className="strat-approach-container">
      <div className="common-tag-container">
        <button className="tag">OUR APPROACH</button>
      </div>

      <div className="strat-approach-desc">
        <p>
          Here are some chronicles of businesses that dared to ask the right questions — and found powerful answers.
        </p>
      </div>

      <div className="strat-approach-cards">
        {steps.map((s, i) => (
          <div className="strat-approach-card" key={s.title}>
            <div className="icon-wrap">
              <img src={s.icon} alt="icon-img" className='icon' />
            </div>
            <p className="card-title">{s.title}</p>
            <p className="card-text">{s.text}</p>
            {i < steps.length - 1 && <img src={strat} alt="" className='strat-arrow'/>}
          </div>
        ))}
      </div>

      <div className="strat-rectengle-card">
        <div className="rect-icon-wrap">
         <img src={idea_icon} alt="icon" className='icon' />
        </div>
        <div className='rect-text-content'>
          <h4 className="rect-title">DEVELOP MARKET‑DRIVEN STRATEGY</h4>
        <p className="rect-text">
          Systemize findings into actionable insights and recommend market entry, positioning, and growth strategies.
        </p>
        </div>
      </div>
    </section>

  {/* DELIVERABLES YOU GET */}
<section className="deliverable-container">
      <div className="common-tag-container">
        <button className="tag" aria-label="Deliverables you get">
          DELIVERABLES YOU GET
        </button>
      </div>

      <div className="deliverable-card-container">
        <div className="deliverable-grid">
          {ITEMS.map((it) => (
            <article className="deliverable-card deliverable-card--column" key={it.title}>
              <div className="deliverable-icon deliverable-icon--circle">
                <img src={it.icon} alt="" loading="lazy" />
              </div>
              <h4 className="deliverable-title">{it.title}</h4>
              <p className="deliverable-subtitle">{it.subtitle}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* SAMPLE USE CASES */}
    <CaseStudy/>

     {/* WHY CHOOSE BIZWIT */}
         
          <section className="why-section">
          <div className="common-tag-container">
            <button className="tag">WHY BIZWIT FOR COMPETITIVE ANALYSIS?</button>
          </div>
    
          <div className="why-container">
            {/* Strength Box */}
            <div className="why-box feature-box">
              <img src={left} alt="" className="bg" />
              <div className="content">
                <h3>Strength</h3>
                <ul>
                  <li>Deep domain-specific expertise</li>
                  <li>Global competitor tracking capabilities</li>
                  <li>Primary + secondary intelligence fusion</li>
                  <li>Visual dashboards + strategy inputs</li>
                </ul>
              </div>
              <div className="icon-box">
                {/* icon image */}
                <img src={strength} alt="icon" className='icon' />
              </div>
            </div>
    
            {/* What It Means For You Box */}
            <div className="why-box benefit-box">
              <img src={right} alt="" className="bg" />
              <div className="content">
                <h3>What It Means For You</h3>
                <ul>
                 <li>Contextual benchmarking, not surface-level</li>
          <li>Multi-region support + localization analysis</li>
<li>Real-time + verified insights</li>
<li>More than data—get clear actions</li>
                </ul>
              </div>
              <div className="icon-box light">
                <img src={questionMark} alt="icon" className='icon'/>
              </div>
            </div>
          </div>
        </section>

         {/* CLIENT REVIEW */}
      <section className='strategic-client-say'>
            <div className="strategic-client-say test-container">
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

export default Strategic