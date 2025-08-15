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
      </Routes>
      <Footer />
      <Copyright />
    </div>
  );
};

export default App;
