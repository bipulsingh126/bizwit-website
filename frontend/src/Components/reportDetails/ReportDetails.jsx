import React from "react";
import "./ReportDetails.css";
import {
  report,
  reportDetail,
  reportDetail2,
  reportpdf,
} from "../../assets/assets";

const ReportDetails = () => {
  return (
    <>
      <div className="report-details">
        <div className="report-details-container">
          {/* //left side */}
          <div className="report-details-left">
            <img className="report-details-left-img" src={report} alt="" />
          </div>
          {/* right side */}
          <div className="report-details-right">
            <h2 className="report-details-right-title">
              Global 3D Animation Software Market Size Study & Forecast, by
              Component, Deployment, Technique, End-User Verticals, and Regional
              Forecasts 2022-2032
            </h2>
            <p className="report-details-right-subtitle">
              Healthcare, Healthcare IT
            </p>
            <button className="report-details-left-button">
              INQUIRY BEFORE BUYING
            </button>
            <button className="report-details-right-button">BUY NOW </button>
          </div>
          <div className="report-details-right-bottom">
            <img
              className="report-details-right-bottom-img"
              src={reportpdf}
              alt=""
            />
            <div className="report-details-right-bottom-content">
              <p className="report-details-right-bottom-content-text">
                Report Code:{" "}
                <span className="report-details-right-bottom-content-text-span">
                  12345
                </span>
              </p>
              <div className="vertical-line1"></div>
              <p className="report-details-right-bottom-content-text">
                Pages:{" "}
                <span className="report-details-right-bottom-content-text-span">
                  200
                </span>
              </p>
              <div className="vertical-line1"></div>
              <p className="report-details-right-bottom-content-text">
                Published Date :{" "}
                <span className="report-details-right-bottom-content-text-span">
                  16 JUNE, 2025
                </span>
              </p>
              <div className="vertical-line1"></div>
              <p className="report-details-right-bottom-content-text">
                Author Name :{" "}
                <span className="report-details-right-bottom-content-text-span">
                  Anmol Meshram
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="report-details-bottom-container">
        {/* up side */}
        <div className="report-details-bottom">
          <div className="report-details-bottom-tabs">
            <h4 className="report-details-bottom-title">Report Description</h4>
            <h4 className="report-details-bottom-title">Table of Contents</h4>
            <h4 className="report-details-bottom-title">Segment/Companies</h4>
          </div>
          <div className="report-details-bottom-buttons">
            <button className="talk-to-analyst">TALK TO ANALYST!</button>
            <button className="download-sample">DOWNLOAD SAMPLE</button>
          </div>
        </div>
        {/* down side */}
        <div className="report-details-bottom-down">
          <div className="report-details-bottom-down-content">
            <p className="report-details-bottom-down-content-text">
              The Global 3D Animation Software Market is valued at approximately
              USD 28.15 billion in 2024 and is projected to expand with a
              striking compound annual growth rate (CAGR) of 11.70% over the
              forecast timeline 2025–2035. 3D animation software has evolved
              into a cornerstone technology across creative, educational,
              industrial, and commercial ecosystems, enabling users to create
              compelling visual content that spans film, television, games,
              product design, simulations, and digital learning environments.
              These advanced platforms empower artists and designers to model
              characters, simulate movement, create lifelike environments, and
              generate immersive visual effects. This market’s exponential
              growth is being catalyzed by the surging demand for high-quality
              content, an upsurge in virtual production workflows, and deeper
              integration with artificial intelligence (AI), machine learning
              (ML), and cloud-based rendering engines.
            </p>
            <img className="report-details-bottom-down-content-img" src={reportDetail} alt="" />
            <p className="report-details-bottom-down-content-text">
              The rising proliferation of 3D content across media &
              entertainment, healthcare, education, and architectural
              visualization domains has prompted enterprises to overhaul
              traditional design processes in favor of automated, immersive
              experiences. As audiences demand ultra-realistic visuals in films,
              streaming content, and video games, production studios and VFX
              teams are ramping up their investments in scalable, cross-platform
              3D animation suites. Moreover, sectors such as healthcare and
              manufacturing are leveraging 3D animation for surgical training,
              digital twins, and product prototyping, further widening the
              software’s utility footprint. A growing preference for on-demand
              deployment models and real-time rendering is further opening up
              the market for SaaS-based 3D animation solutions, significantly
              lowering the barrier to entry for startups and freelance
              professionals. Despite high upfront software costs and the need
              for skilled animators, the expanding use of 3D assets in metaverse
              applications, AR/VR integrations, and gamified marketing
              initiatives continues to unlock new monetization pathways
            </p>
            <p className="report-details-bottom-down-content-text">
              {" "}
              Geographically, North America retained its leading position in the
              global 3D Animation Software Market in 2025, underpinned by the
              presence of key technology innovators, major animation studios,
              and a robust ecosystem for media production. The U.S. is home to
              industry giants such as Pixar, Disney, and DreamWorks, which
              actively contribute to the development and application of
              cutting-edge animation technologies. Meanwhile, Europe’s market
              has been gaining steady momentum, particularly across Germany, the
              UK, and France, owing to rising demand for 3D visualization in
              architecture, automotive design, and academic training. Asia
              Pacific is expected to register the fastest CAGR during the
              forecast period, fueled by rapid digital transformation, booming
              e-learning adoption, and increased outsourcing of animation
              services to countries like India, China, South Korea, and Japan.
              In parallel, emerging economies in Latin America and the Middle
              East & Africa are beginning to harness 3D animation for
              educational initiatives, public health awareness campaigns, and
              localized content creation, thus presenting untapped avenues for
              global vendors.
            </p>
            <img  className="report-details-bottom-down-content-img" src={reportDetail2} alt="" />
            <p className="report-details-bottom-down-content-text" >
              {" "}
              • Market Estimates & Forecast for 10 years from 2025 to 2035. •
              Annualized revenues and regional level analysis for each market
              segment. • Detailed analysis of geographical landscape with
              country-level analysis of major regions. • Competitive landscape
              with information on major players in the market.• Analysis of
              key business strategies and recommendations on future market
              approach. • Analysis of competitive structure of the market. •
              Demand side and supply side analysis of the market.
            </p>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default ReportDetails;
