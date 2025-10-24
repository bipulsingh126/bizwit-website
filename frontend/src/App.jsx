import React, { useState, useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import Footer from "./Pages/Footer";
import Copyright from "./Components/Copyright";
import Header from "./Components/Header/Header";
import ReportStore from "./Pages/ReportStore";
import ReportDetails from "./Components/reportDetails/ReportDetails";
import TableofContents from "./Components/reportDetails/TableofContents";
import SegmentCompanies from "./Components/reportDetails/SegmentCompanies";
import BizChronicle from "./Pages/BizChronicles/BizChronicle";
import Contect from "./Pages/ContectUs/Contect";
import TestAll from "./Components/Testimonials/TestAll";
import ContentLed from "./Components/Content-Led/ContentLed";
import Fte from "./Pages/Fte";
import MarketShareGainSolutions from "./Pages/MarketShareGainSolutions";
import Voc from "./Pages/Voc";
import Sustainability from "./Pages/Sustainability/Sustainability";
import Strategic from "./Pages/Intelligence&Strategic/Strategic";
import MarketIntelligence from "./Pages/MarketIntelligence/MarketIntelligence";
import IndiaMarket from "./Pages/IndiaMarketEntry/IndiaMarket";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Career from "./Pages/Career/Career";
import GeneralData from "./Pages/GeneralData/GeneralData";
import ReportActionPanel from "./Components/ReportActionPanel/ReportActionPanel";
import cover from './assets/downloadHeader.png'
import supportImg from './assets/support.png'
import ppt from './assets/ppt.png'
import pdf from './assets/pdf.png'
import xls from './assets/xls.png'
import DetailCaseStudy from "./Pages/DetailCaseStudy/DetailCaseStudy";
import MegaTrendDetails from "./Pages/MegaTrendsDetail/MegaTrendDetails";
import BizwitCronicles from "./Pages/BizwitCronicles";








const App = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const heroRef = useRef(null);
  const location = useLocation();

  // For home page, use scroll-based navbar/header switching
  useEffect(() => {
    if (location.pathname === "/") {
      const handleScroll = () => {
        const heroBottom = heroRef.current
          ? heroRef.current.getBoundingClientRect().bottom
          : 0;
        if (window.scrollY > heroBottom) {
          setShowNavbar(false);
        } else {
          setShowNavbar(true);
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [location.pathname]);

  // For non-home pages, always show header
  const shouldShowNavbar = location.pathname === "/" && showNavbar;

  return (
    <div>
      {shouldShowNavbar ? <Navbar /> : <Header />}
      <Routes>
        <Route path="/" element={<Home heroRef={heroRef} />} />
        <Route path="/ReportStore" element={<ReportStore />} />
        <Route path="/reportDetails" element={<ReportDetails />} />
        <Route path="/TableofContents" element={<TableofContents />} />
        <Route path="/SegmentCompanies" element={<SegmentCompanies />} />
        <Route path="/bizchronicles" element={<BizChronicle/>} />
        <Route path="/contact" element={<Contect/>}/>
        <Route path="/testall" element={<TestAll/>} />
        <Route path="/contentled" element={<ContentLed/>} />
        <Route path="/fte" element={<Fte />} />
        <Route path="/marketshare" element={<MarketShareGainSolutions/>}/>
        <Route path="/voc" element={<Voc/>}/>
         <Route path="/sustainability" element={<Sustainability/>}/>
         <Route path="/strategic" element={<Strategic />} />
         <Route path="/market-intelligence" element = {<MarketIntelligence/>}/>
         <Route path="/india-market" element = {<IndiaMarket/>}/>
         <Route path="/about" element={<AboutUs/>}/>
         <Route path="/career" element={<Career/>}/>
         <Route path="/general-data" element={<GeneralData/>}/>
         <Route path="/download-sample"  element={<ReportActionPanel
   coverSrc={cover}
  title="Global 3D Animation Software Market Size Study & Forecast, by Component, Deployment, Technique, End-User Verticals, and Regional Forecasts 2022–2032"
  subtitle="Healthcare, Healthcare IT"
  onInquiry={()=>console.log("inquiry")}
  onBuy={()=>console.log("buy")}
  formats={[{alt:"PDF", src:pdf}, {alt:"PPT", src:ppt}, {alt:"XLS", src:xls}]}
  meta={{ code:"12345", pages:"200", published:"16 JUN, 2025", author:"Anmol Meshram" }}
  enableSampleForm
  onSampleSubmit={(payload)=>fetch("/api/leads/sample",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)})}
  sidebar={{
    imageSrc:supportImg,
    titleTop: "Get the Sample",
    titleBottom: "Within 24 hours.",
    email: "Sales@bizwitresearch.com",
    phone: "+916 267 101417",
    address: "303, Atulya IT Park, Indore, India (452001)",
  }}/>
}/>
<Route path="/details-case-study" element={<DetailCaseStudy/> }/>
<Route path="/megatrends-details" element={<MegaTrendDetails/>}/>
<Route path="/bizwit-cronicles-details"  element={<BizwitCronicles/>}/>
      </Routes>
      <Footer />
      <Copyright />
    </div>
  );
};

export default App;
