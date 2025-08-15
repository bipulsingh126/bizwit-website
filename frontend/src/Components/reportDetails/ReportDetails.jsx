import React, { useState } from "react";
import "./ReportDetails.css";
import {
  report,
  reportDetail,
  reportDetail2,
  reportdetail3,
  reportdetail4,
  reportdetail5,
  reportpdf,
} from "../../assets/assets";
import Trending from "../Trending/Trending";
import TableofContents from "./TableofContents";
import SegmentCompanies from "./SegmentCompanies";
import Custome from "../Custome/Custome";

const ReportDetails = () => {
  const [activeTab, setActiveTab] = useState("description");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

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
            <h4
              className={`report-details-bottom-title ${
                activeTab === "description" ? "active" : ""
              }`}
              onClick={() => handleTabClick("description")}
            >
              Report Description
            </h4>
            <h4
              className={`report-details-bottom-title ${
                activeTab === "contents" ? "active" : ""
              }`}
              onClick={() => handleTabClick("contents")}
            >
              Table of Contents
            </h4>
            <h4
              className={`report-details-bottom-title ${
                activeTab === "segments" ? "active" : ""
              }`}
              onClick={() => handleTabClick("segments")}
            >
              Segment/Companies
            </h4>
          </div>
          <div className="report-details-bottom-buttons">
            <button className="talk-to-analyst">TALK TO ANALYST!</button>
            <button className="download-sample">DOWNLOAD SAMPLE</button>
          </div>
        </div>
        {/* down side */}
        <div className="report-details-bottom-down">
          {activeTab === "description" && (
            <div className="report-details-bottom-down-content">
              <p className="report-details-bottom-down-content-text">
                The Global 3D Animation Software Market is valued at
                approximately USD 28.15 billion in 2024 and is projected to
                expand with a striking compound annual growth rate (CAGR) of
                11.70% over the forecast timeline 2025–2035. 3D animation
                software has evolved into a cornerstone technology across
                creative, educational, industrial, and commercial ecosystems,
                enabling users to create compelling visual content that spans
                film, television, games, product design, simulations, and
                digital learning environments. These advanced platforms empower
                artists and designers to model characters, simulate movement,
                create lifelike environments, and generate immersive visual
                effects. This market's exponential growth is being catalyzed by
                the surging demand for high-quality content, an upsurge in
                virtual production workflows, and deeper integration with
                artificial intelligence (AI), machine learning (ML), and
                cloud-based rendering engines.
              </p>
              <img
                className="report-details-bottom-down-content-img"
                src={reportDetail}
                alt=""
              />
              <p className="report-details-bottom-down-content-text">
                The rising proliferation of 3D content across media &
                entertainment, healthcare, education, and architectural
                visualization domains has prompted enterprises to overhaul
                traditional design processes in favor of automated, immersive
                experiences. As audiences demand ultra-realistic visuals in
                films, streaming content, and video games, production studios
                and VFX teams are ramping up their investments in scalable,
                cross-platform 3D animation suites. Moreover, sectors such as
                healthcare and manufacturing are leveraging 3D animation for
                surgical training, digital twins, and product prototyping,
                further widening the software's utility footprint. A growing
                preference for on-demand deployment models and real-time
                rendering is further opening up the market for SaaS-based 3D
                animation solutions, significantly lowering the barrier to entry
                for startups and freelance professionals. Despite high upfront
                software costs and the need for skilled animators, the expanding
                use of 3D assets in metaverse applications, AR/VR integrations,
                and gamified marketing initiatives continues to unlock new
                monetization pathways
              </p>
              <p className="report-details-bottom-down-content-text">
                {" "}
                Geographically, North America retained its leading position in
                the global 3D Animation Software Market in 2025, underpinned by
                the presence of key technology innovators, major animation
                studios, and a robust ecosystem for media production. The U.S.
                is home to industry giants such as Pixar, Disney, and
                DreamWorks, which actively contribute to the development and
                application of cutting-edge animation technologies. Meanwhile,
                Europe's market has been gaining steady momentum, particularly
                across Germany, the UK, and France, owing to rising demand for
                3D visualization in architecture, automotive design, and
                academic training. Asia Pacific is expected to register the
                fastest CAGR during the forecast period, fueled by rapid digital
                transformation, booming e-learning adoption, and increased
                outsourcing of animation services to countries like India,
                China, South Korea, and Japan. In parallel, emerging economies
                in Latin America and the Middle East & Africa are beginning to
                harness 3D animation for educational initiatives, public health
                awareness campaigns, and localized content creation, thus
                presenting untapped avenues for global vendors.
              </p>
              <img
                className="report-details-bottom-down-content-img"
                src={reportDetail2}
                alt=""
              />
            </div>
          )}

          {activeTab === "contents" && (
            <div className="report-details-bottom-down-content">
              <TableofContents />
            </div>
          )}

          {activeTab === "segments" && (
            <div className="report-details-bottom-down-content">
              <SegmentCompanies />
            </div>
          )}
        </div>
      </div>
      {(activeTab === "contents" || activeTab === "segments") && (
        <div className="report-details-bottom-down-down">
          <Custome />
        </div>
      )}
      {(activeTab === "contents" || activeTab === "segments") && (
        <div className="report-details-bottom-down-down">
          <p className="related-reports-title">RELATED REPORTS</p>
        </div>
      )}
      <div className="report-details-bottom-down-down">
        <Trending showTitle={false} />
      </div>
      <div className="features-container">
        <p className="features-container-title">WHY CHOOSE US?</p>
        <div className="features-boxes-row">
          {/* left side */}
          <div className="report-details-bottom-down-down-left">
            <p className="report-details-bottom-down-down-left-title">
              Quality Over Quantity
            </p>
            <img
              className="report-details-bottom-down-down-left-img"
              src={reportdetail3}
              alt=""
            />
            <p className="report-details-bottom-down-down-left-text">
              Backed by 60+ paid data sources our reports deliver crisp insights
              with no compromise quality.{" "}
            </p>
          </div>
          {/* right side */}
          <div className="report-details-bottom-down-down-right">
            <p className="report-details-bottom-down-down-right-title">
              Analyst Support
            </p>
            <img
              className="report-details-bottom-down-down-right-img"
              src={reportdetail4}
              alt=""
            />
            <p className="report-details-bottom-down-down-right-text">
              24x7 Chat Support plus free analyst hours with every purchase{" "}
            </p>
          </div>
          {/* right side */}
          <div className="report-details-bottom-down-down-right">
            <p className="report-details-bottom-down-down-right-title">
              Flawless Methodology
            </p>
            <img
              className="report-details-bottom-down-down-right-img"
              src={reportdetail5}
              alt=""
            />
            <p className="report-details-bottom-down-down-right-text">
              Our 350-degree approach of market study, research methods leave
              stores unturned.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportDetails;
