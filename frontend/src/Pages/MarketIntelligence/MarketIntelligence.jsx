import React from 'react'
import bg from '../../assets/bg.png'
import si from '../../assets/smarterInsight.png'
import './MarketIntelligence.css'
import SecondHero from '../../Components/Hero/SecondHero'
import study from '../../assets/study.png';
import marketEntry from '../../assets/marketEntry.png';
import marketExpension from '../../assets/marketExpension.png';
import market from '../../assets/market.png';
import demandForcast from '../../assets/demandForcast.png'
import idea from '../../assets/ideaIcon.png';
import workflow from '../../assets/intelligence-workflow.png';
import globalImg from '../../assets/global_reach.png';
import banner from '../../assets/businessOutcome.png';
import CaseStudy from '../../Components/Industry/CaseStudy'
import Connect from '../../Components/Connect/Connect'

const MarketIntelligence = () => {
    const paragraphs = [
  "Market intelligence combines data, expert insights, and competitive knowledge to help businesses understand where, when, and how to compete. Bizwit’s tailored intelligence helps you assess viability, design entry plans, and scale with certainty.",
  "Market intelligence combines data, expert insights, and competitive knowledge to help businesses understand where, when, and how to compete. Bizwit’s tailored intelligence helps you assess viability, design entry plans, and scale with certainty.",
  "Market intelligence combines data, expert insights, and competitive knowledge to help businesses understand where, when, and how to compete.",
  "Market intelligence combines data, expert insights, and competitive knowledge to help businesses understand where, when, and how to compete. Bizwit’s tailored intelligence helps you assess viability, design entry plans, and scale with certainty.",
  "Market intelligence combines data, expert insights, and competitive knowledge to help businesses understand where, when, and how to compete. Bizwit’s tailored intelligence helps you assess viability, design entry plans, and scale with certainty."
];
  return (
    <>
         <SecondHero 
                   title="Market Intelligence & Analysis"
                   subtitle="Gain clarity in a fast-moving world with unrivaled market intelligence—built to guide your strategies and maximize your success"
                   primaryCta={{ label: "KNOW MORE", href: "/#" }}
                   image={{ src: bg, alt: "Background Image" }}
               /> 
               <section className="mi-section">
                <div className='common-tag-container'>
                   <button className='tag'>SMARTER INSIGHTS. STRONGER STRATEGIES.</button>
                </div>
      <div className="mi-container">
        <div className="mi-left">
          <div className="mi-copy">
            {paragraphs.map((t, i) => (
              <p className="mi-paragraph" key={i}>{t}</p>
            ))}
          </div>
        </div>

        <div className="mi-right">
          <img src={si} alt="Feasibility Entry Expansion funnel" className="mi-image" />
        </div>
      </div>
    </section>

       {/* OUR STRETEGIC SERVICE  */}
      <section className="voc-service">
            <div className="voc-container">
              <div className="voc-header">
                <button className="voc-title">OUR STRATEGIC SERVICES</button>
              </div>
              <div className="card-container">
                <div className="card">
                  <p className="card-title">Feasibility <br /> Study</p>
                  <img src={study} alt="study icon" />
                  <p className="card-description">
                    Analyze the commercial, operational, financial, and regulatory feasibility of launching a new product, entering a region, or investing in an opportunity.
                  </p>
                  <button className="card-btn">DOWNLOAD SAMPLE STUDY</button>
                </div>
    
                <div className="card">
                  <p className="card-title">Market Entry <br />Strategy</p>
                  <img src={marketEntry} alt="marketEntry icon" />
                  <p className="card-description">
                    Custom go-to-market planning including entry barriers, distribution channels, partnerships, pricing, and regulatory checkpoints.
                  </p>
                  <button className="card-btn">EXPLORE ENTRY MODELS</button>
                </div>
    
                <div className="card">
                  <p className="card-title">Market Expansion <br /> Strategy</p>
                  <img src={marketExpension} alt="marketExpension icon" />
                  <p className="card-description">
                    Geographic, vertical, and segment-based expansion strategies using opportunity mapping, demand sizing, and competitor response simulation.
                  </p>
                  <button className="card-btn">REQUEST EXANSION BRIEF</button>
                </div>
                <div className="card">
                  <p className="card-title">Current Market <br /> Demand & Forecast</p>
                  <img src={demandForcast} alt="forcast icon" />
                  <p className="card-description">
                    Current Market Demand & Forecast using dynamic trend modeling, sector-specific consumption analysis, and macroeconomic scenario simulations.
                  </p>
                  <button className="card-btn">REQUEST SAMPLE ANALYSIS</button>
                </div>
                <div className="card">
                  <p className="card-title">Regional <br />Landscape</p>
                  <img src={market} alt="market icon" />
                  <p className="card-description">
                    Regional Market Demand & Forecast using dynamic trend modeling, sector-specific consumption analysis, and macroeconomic scenario simulations.
                  </p>
                  <button className="card-btn">REQUEST SAMPLE ANALYSIS</button>
                </div>
                <div className="card">
                  <p className="card-title">Market <br /> Motivators</p>
                  <img src={idea} alt="idea icon" />
                  <p className="card-description">
                    Analysing growth catalysts through decision trigger mapping, value creation levers, and environmental context analysis
                  </p>
                  <button className="card-btn">REQUEST SAMPLE ANALYSIS</button>
                </div>
              </div>
            </div>
          </section>


          {/* INTELLIGENCE WORKFLOW */}
          <section className='intelligence-workflow'>
                <div className='common-tag-container'>
                <button className='tag'>STRATEGIC INTELLIGENCE WORKFLOW</button>
                <img src={workflow} alt="workflow-img" className='workflow-img' />
                </div>
                <div className='intelligence-btn'>
                  <button className='know-more'>KNOW MORE</button>
                </div>
          </section>


          {/* GLOBAL REACH */}
          <section className='global-reach'>
            <div className='common-tag-container'>
              <button className='tag'>GLOBAL REACH + REGIONAL EXPERTISE</button>
            </div>
            <img src={globalImg} alt="globalImg" className='globalImg'/>
          </section>

          {/* BUSINESS OUTCOMES */}
          <section className='business-outcome'>
               <div className='common-tag-container'>
               <button className='tag'>BUSINESS OUTCOMES WE DRIVE</button>
               </div>
               <p className='title'>Web Development Company Business Need and Value Bizwit Delivers</p>
               <p className='outcome-desc'>This side describes the strengths of the company along with the reasons why the customer should choose the organization.</p>
               <div className='business-outcome-banner'>
                  <img src={banner} alt="banner" className='bannerImg' />
               </div>
               <div className='intelligence-btn'>
                  <button className='know-more'>REQUEST BUSINESS CASE TEMPLATE</button>
                </div>
          </section>

          {/* CASESTUDY */}
          <CaseStudy/>
          
          {/* CONNECT US */}
          <Connect/>
    </>
  )
}

export default MarketIntelligence