import React from 'react'
import SecondHero from '../../Components/Hero/SecondHero'
import bg from '../../assets/bg.png'
import whySustain from '../../assets/whySustain.png'
import './Sustainability.css'
import circle from '../../assets/circle.png'
import approach from '../../assets/approach.png'
import CaseStudy from '../../Components/Industry/CaseStudy'
import Connect from '../../Components/Connect/Connect'
import left from '../../assets/rect_bgl.png'
import right from '../../assets/rect_bgr.png'
import consult from '../../assets/esgCunsulting.png'
import footPrint from '../../assets/footprint.png'
import report from '../../assets/envReporting.png'
import star from '../../assets/star.png'
import feature from '../../assets/feature.png'


const Sustainability = () => {
  return (
   <>
       <SecondHero 
           title="Turn Sustainability Into a Competitive Advantage"
           subtitle="Harness the power of ESG and environmental impact strategy with Bizwit Research. Uncover actionable insights and craft sustainable solutions that support your business and the planet.."
           primaryCta={{ label: "REQUEST A PROPOSAL", href: "/#" }}
           secondaryCta={{ label: "DOWNLOAD FTE MODEL DECK", href: "/#" }}
           image={{ src: bg, alt: "Background Image" }}
       />

       {/* Why Sustainability section */}
       <section className="why-sustainability-container" aria-label="Why sustainability matters">
  <div className="common-tag-container">
    <button className="tag" type="button">WHY SUSTAINABILITY MATTERS</button>
  </div>

  <div className="why-grid">
    <div className="why-media">
      <img
        className="why-img"
        src={whySustain}
        alt="Sustainability in practice diagram"
        loading="lazy"
        decoding="async"
      />
    </div>

    <div className="why-copy">
      <p>
        Sustainability is no longer a checkbox—it’s a foundation for resilience, innovation, and corporate responsibility. Bizwit helps businesses evolve from compliance to true sustainability leadership.
      </p>
      <p>
        Sustainability is no longer a checkbox—it’s a foundation for resilience, innovation, and corporate responsibility. Bizwit helps businesses evolve from compliance to true sustainability leadership. Sustainability is no longer a checkbox—it’s a foundation for resilience, innovation, and corporate responsibility. Bizwit helps businesses evolve from compliance to true sustainability leadership.
      </p>
      <p>
        Sustainability is no longer a checkbox—it’s a foundation for resilience, innovation, and corporate responsibility. Bizwit helps businesses evolve from compliance to true sustainability leadership.
      </p>
    </div>
  </div>
</section>

  {/* CORE SERVICE */}


<section className="svc" aria-label="Our core sustainability services">
  <div className="common-tag-container">
    <span className="tag">OUR CORE SUSTAINABILITY SERVICES</span>
  </div>

  <div className="svc__grid">
    <article className="svc-card">
      <div className="svc-card__skate" aria-hidden="true"></div>
      <div className="svc-card__inner">
        <h3 className="svc-card__title">ESG<br/>Consulting</h3>
        <div className="svc-card__icon">
          <img src={consult} alt="consult" aria-hidden="true" />
        </div>
        <p className="svc-card__desc">
          Develop tailored Environmental, Social, and Governance (ESG) strategies aligned with investor expectations and regulatory frameworks.
        </p>
      </div>
    </article>

    <article className="svc-card">
      <div className="svc-card__skate" aria-hidden="true"></div>
      <div className="svc-card__inner">
        <h3 className="svc-card__title">Carbon Footprint<br/>Analysis</h3>
        <div className="svc-card__icon">
          <img src={footPrint} alt="footprint" aria-hidden="true" />
        </div>
        <p className="svc-card__desc">
          Measure, track, and benchmark your emissions to identify reduction opportunities using GHG Protocol & ISO standards.
        </p>
      </div>
    </article>

    <article className="svc-card">
      <div className="svc-card__skate" aria-hidden="true"></div>
      <div className="svc-card__inner">
        <h3 className="svc-card__title">Environmental Impact<br/>Reporting</h3>
        <div className="svc-card__icon">
          <img src={report} alt="report" aria-hidden="true" />
        </div>
        <p className="svc-card__desc">
          Comprehensive life‑cycle assessment and environmental data insights for product or service impact transparency.
        </p>
      </div>
    </article>
  </div>
</section>


{/* APPROACH SECTION */}

 <section>
  <div className="common-tag-container">
    <button className="tag">APPROACH TO SUSTAINABILITY</button>
  </div>

  <div className="esg-section">
    <div className="esg-left">

      {/* Positioned wrapper for image + overlay text */}
      <div className="esg-figure">
        <img className="esg-circle" src={circle} alt="Data circle" />

        <div className="esg-copy over-image">
          <h2>Data Drives Better Decisions</h2>
          <p>Develop tailored Environmental, Social, and Governance (ESG) strategies aligned with investor expectations and regulatory frameworks.</p>
        </div>
      </div>

    </div>

    <div className="esg-right">
      <img className="esg-funnel" src={approach} alt="ESG funnel steps" />
    </div>
  </div>
</section>




   {/* CASE STUDY */}
    <CaseStudy/>

    {/* WHY CHOOSE BIZWIT */}
     
      <section className="why-section">
      <div className="common-tag-container">
        <button className="tag">WHY CHOOSE BIZWIT</button>
      </div>

      <div className="why-container">
        {/* Feature Box */}
        <div className="why-box feature-box">
          <img src={left} alt="" className="bg" />
          <div className="content">
            <h3>Feature</h3>
            <ul>
              <li>Industry-specific ESG frameworks</li>
              <li>Certified sustainability consultants</li>
              <li>Tech-enabled tracking tools</li>
              <li>Global execution capability</li>
            </ul>
          </div>
          <div className="icon-box">
            {/* icon image */}
            <img src={feature} alt="feature" className='icon'/>
          </div>
        </div>

        {/* Benefit Box */}
        <div className="why-box benefit-box">
          <img src={right} alt="" className="bg" />
          <div className="content">
            <h3>Benefit</h3>
            <ul>
              <li>Customized strategies, not one-size-fits-all</li>
              <li>Credible, globally aligned reporting</li>
              <li>Streamlined data collection and analysis</li>
              <li>Regional compliance + international alignment</li>
            </ul>
          </div>
          <div className="icon-box light">
            <img src={star} alt="star-icon" className='icon' />
          </div>
        </div>
      </div>
    </section>
     
   {/* CONTACT US SECTION */}
   <Connect/>
   </>
  )
}

export default Sustainability