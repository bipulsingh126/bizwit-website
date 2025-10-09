import React from "react";
import "./ContentLed.css";
import contentled from "../../assets/contentled.png";
import { lead } from "../../assets/assets";

/**
 * ContentLed Section
 * A flexible, content-first split layout with media on one side and text on the other.
 * Props allow dynamic content and layout control.
 */
const ContentLed = ({
  title = "Drive Qualified Leads with Insightful Content",
  subtitle =
    "Turn thought leadership into a pipeline. Bizwit Research enables B2C & B2B brands to create, distribute, and convert through research-driven content strategies.",
  primaryCta = { label: "LET'S PLAN YOUR CAMPAIGN", href: "#contact" },
  secondaryCta = { label: "DOWNLOAD SAMPLE CAMPAIGN PLAN", href: "#download" },
  imageSrc = contentled,
  imageAlt = "Consultant having a conversation with a client",
}) => {
  const RootTag = "section";

  const renderCta = (cta, className) => {
    if (!cta || !cta.label) return null;
    if (cta.href) {
      return (
        <a className={className} href={cta.href} onClick={cta.onClick}>
          {cta.label}
        </a>
      );
    }
    return (
      <button className={className} onClick={cta.onClick} type="button">
        {cta.label}
      </button>
    );
  };

  return (
    <div className="content-led-container"> 
    <RootTag className="content-led">
      <div className="cl-container">
        <div className="cl-media">
          <img src={imageSrc} alt={imageAlt} loading="lazy" className="cl-bg-img" />
          <div className="cl-overlay"></div>
          <div className="cl-content">
            {title && (
              <h2 className="cl-title">
                Drive Qualified Leads with <span>Insightful Content</span>
              </h2>
            )}
             </div>
             <div className="cl-content1">
            {subtitle && <p className="cl-subtitle">{subtitle}</p>}
             </div>
            <div className="cl-actions">
              {renderCta(primaryCta, "btn-primary")}
            </div>
            <div className="cl-actions1">
            {renderCta(secondaryCta, "btn-secondary")}
            </div>
          
        </div>
      </div>
       <div className="cl-container2">
      <div className="cl-media2">
        <p className="cl-title2">WHAT IS CONTENT-LEAD DEMAND GENERATION?</p>
      </div>
      <div className="cl-media3">
        <p className="cl-title3">
          Content-led demand generation focuses on attracting, nurturing, and converting prospects using high-value content—such as whitepapers, infographics, and webinars—strategically aligned with buyer personas and journey stages.
Content-led demand generation focuses on attracting, nurturing, and converting prospects using high-value content—such as whitepapers, infographics, and webinars—strategically aligned with buyer personas and journey stages.Content-led demand generation focuses on attracting, nurturing, and converting prospects using high-value content—such as whitepapers, infographics, and webinars—strategically aligned with buyer personas and journey stages.
        </p>
      </div>
      <div className="underline"></div>
      <div className="cl-media4">
        <img src={lead} alt=""  className="cl-img"/>
      </div>
    </div>
        
    <div className="cl-container3">
      <div className="cl-media5">
        <p className="cl-titl7">Did you know?</p>
         <p className="cl-title4">4.6 billion pieces of content are produced daily. And in this sea of information, merely standing out is not enough.</p>
      </div>
      <div className="cl-media6">
        <p className="cl-titl6">Why TLDG?</p>
         <p className="cl-subtitle">A recent survey conducted by MarketsandMarkets-about 15,000 marketing leaders from Vps to CXOs who participated-suggests a staggering 83% of industry marketing leaders affirm the indispensable role of new economy positioning in augmenting B2B growth.</p>
      </div>
      
      {/* Moved cl-media7 and cl-media8 inside cl-container3 */}
      <div className="cl-media7">
        <p className="cl-title5">Effective Demand Generation Assets</p>
        <p className="cl-subtitle1">By leveraging events, webinars, whitepapers, and videos, we turn them into powerful tools for B2B demand generation, securing qualified leads and boosting your visibility and target market interaction.</p>
      </div>
      <div className="cl-media8">
        <p className="cl-title6">Overcoming Content Creation Challenges</p>
        <p className="cl-subtitle2">45% indicate the heightened difficulty of crafting distinctive, impactful content in the AI era, so adopting a meticulously crafted strategy is crucial for standing out.</p>
      </div>
    </div>
    </RootTag>
    <div div className="cl-container4">
      <div className="cl-media10">
        <p className=" cl-title10"> WHAT WE OFFER?</p>
      </div>
      <div className="what-we-offer-cards">
        <div className="offer-card">
          <h3>Asset Creation & Optimization</h3>
          <ul>
            <li>Whitepapers, eBooks, Blog series, infographics</li>
            <li>SEO-optimized + gated content</li>
          </ul>
        </div>
        <div className="offer-card">
          <h3>Content Strategy & Planning</h3>
          <ul>
            <li>Persona mapping</li>
            <li>Journey funnel alignment</li>
            <li>Editorial Calendar</li>
          </ul>
        </div>
        <div className="offer-card">
          <h3>Distribution & Lead Capture</h3>
          <ul>
            <li>Email + LinkedIn campaigns</li>
            <li>Media partnerships</li>
            <li>Performance monitoring</li>
          </ul>
        </div>
      </div>
    </div>
            {/* OUR 6-STEP DEMAND GEN ENGINE */}
    <div className="demand-gen-engine" >
            <div className="gen-title">
              <p className="gen-title1">OUR 6-STEP DEMAND GEN ENGINE</p>
            </div>
            <div>
              
            </div>
    </div>
    </div>
  );
};

export default ContentLed;