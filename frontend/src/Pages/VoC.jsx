import React from 'react';
import './VoC.css';
import doc from '../assets/doc.png';
import mic from '../assets/mic.png';
import social from '../assets/social.png';
import imgA from "../assets/first.png";
import imgB from "../assets/sec.png";
import imgC from "../assets/third.png";
import imgD from "../assets/fourth.png";
import impactChart from "../assets/impactChart.png";
import '../Components/MarketShareSolutions/WhyChoose.css'
import CaseStudy from '../Components/Industry/CaseStudy';
import step1 from "../assets/step1.png";
import step2 from "../assets/step2.png";
import step3 from "../assets/step3.png";
import step4 from "../assets/step4.png";
import step5 from "../assets/step5.png";
import Connect from '../Components/Connect/Connect';

const Voc = () => {

  const items = [
      {
        img: imgA,
        title: "Tailored frameworks for B2B and B2C environments",
        body: "Tailored frameworks for B2B and B2C environments",
      },
      {
        img: imgB,
        title: "Industry-specific VoC panels",
        body: "Industry-specific VoC pannels",
      },
      {
        img: imgC,
        title: "Global reach with multilingual capabilities",
        body: "Global reach with multilingual capabilities",
      },
      {
        img: imgD,
        title: "Combination of qualitative and quantitative tools",
        body: "Combination of qualitative and quantitative tools",
      },
       {
        img: imgD,
        title: "Combination of qualitative and quantitative tools",
        body: "Combination of qualitative and quantitative tools",
      }
    ];

    const steps = [
  {
    num: "1",
    title: "Requirement Understanding",
    img: step1,
    icon: "📝",
  },
  {
    num: "2",
    title: "Tool/Channel Selection",
    img: step2,
    icon: "💻",
  },
  {
    num: "3",
    title: "Survey/Interview Execution",
    img: step3,
    icon: "📋",
  },
  {
    num: "4",
    title: "Analysis & Insights Mapping",
    img: step4,
    icon: "📈",
  },
  {
    num: "5",
    title: "Strategy Recommendation",
    img: step5,
    icon: "🔍",
  },
];

  return (
    <>

       {/* VOC SERVICE  */}
       
      <section className="voc-service">
        <div className="voc-container">
          <div className="voc-header">
            <button className="voc-title">Our Voc Service Components</button>
          </div>
          <div className="card-container">
            <div className="card">
              <p className="card-title">Customer Survey & Feedback</p>
              <img src={doc} alt="Document icon" />
              <p className="card-description">
                Design and deploy customized surveys to gather detailed feedback across touchpoints.
              </p>
              <button className="card-btn">EXPLORE METHODOLOGY</button>
            </div>

            <div className="card">
              <p className="card-title">Customer Interview</p>
              <img src={mic} alt="Microphone icon" />
              <p className="card-description">
                In-depth 1:1 conversations conducted by experienced researchers to capture voice tone, pain points, and deeper insights.
              </p>
              <button className="card-btn">EXPLORE METHODOLOGY</button>
            </div>

            <div className="card">
              <p className="card-title">Social Listening</p>
              <img src={social} alt="Social icon" />
              <p className="card-description">
                Track and analyze conversations on social media and online platforms to assess sentiment, preferences, and brand perception.
              </p>
              <button className="card-btn">EXPLORE METHODOLOGY</button>
            </div>
          </div>
        </div>
      </section>


      {/* WHY BIZWIT FOR VOC */}
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


    {/* CLIENT IMPACT SECTION */}
<section className="impact-client">
  <div className="impact-client-title">
    <button className="impact-client-pill">CLIENT IMPACT ASSESSMENT</button>
  </div>

  <div className="impact-client-grid">
    {/* Left: chart image */}
    <div className="impact-client-chart">
      <img className="impact-client-chart-img" src={impactChart} alt="Client impact radar" />
    </div>

    {/* Right: mission card */}
    <div className="impact-client-card">
      <div className="impact-client-card-content">
        <p className="impact-client-card-title">Our Mission</p>
        <p className="impact-client-card-body-description">
          At Bizwit Research and Consulting, our vision is to empower businesses with reliable insights and strategic guidance that drive intelligent decision‑making and long‑term success. We strive to be a trusted partner for organizations seeking growth, innovation, and competitive advantage in a dynamic global marketplace by transforming data into actionable knowledge.
        </p>
      </div>
    </div>
  </div>
</section>

    {/* Case Study */}
     <CaseStudy/>

     {/* Invest Step */}
      <section className="investment-section">
        <div className='investment-heading'>
         <button className="tag">METHODOLOGY SNAPSHOT</button>
       </div>
      <div className="left-text">
        <h1>
          WHY NOW IS THE BEST <br /> TIME TO INVEST IN <span>INDIA?</span>
        </h1>
        <p>
          By 2030, India is projected to become the world's third-largest economy and
          consumer market, driven by strong growth in manufacturing, digital, and IT
          sectors. Venture capital in online retail surged from USD 8 billion in 2020
          to USD 22 billion in 2021—a 175% jump—signaling investor confidence. What
          sets India apart is the consistency of this exceptional growth.
        </p>
        <button className='download-button'>DOWNLOAD OUR VoC FRAMEWORK PDF</button>
      </div>

      <div className="right-steps">
        {steps.map((step, i) => (
          <div
            key={i}
            className={`step-box step-${i + 1}`}
            style={{ backgroundImage: `url(${step.img})` }}
          >
            <div className="step-content">
              <p>{step.title}</p>
              <i className="icon">{step.icon}</i>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Contact us */}
    <Connect/>

    </>
  );
};

export default Voc;
