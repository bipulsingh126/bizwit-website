import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/BIZWITLOGO.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { logo1, logo3, sricon, headerbg, drop } from "../../assets/assets";
import SearchPopup from "../SearchPopup/SearchPopup";

const Header = () => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="header-container">
      <div className="top-bar">
        <div className="top-bar-links">
          <Link className="top-bar-link" to="/about">
            About Us
          </Link>
          <Link className="top-bar-link1" to="/contact">
            Contact Us
          </Link>
          <Link className="top-bar-link2" to="/empanel">
            Empanel With Us
          </Link>
        </div>
      </div>
      <div className="main-header">
        <div className="logo">
          {location.pathname === "/ReportStore" ? (
            <img className="storelogo" src={logo3} alt="Bizwit Research" />
          ) : location.pathname === "/reportDetails" ||
            location.pathname === "/bizchronicles" ||
            location.pathname === "/contact" ? (
            <img className="detaillogo" src={logo1} alt="Bizwit Research" />
          ) : (
            <img className="alllogo" src={logo} alt="Bizwit Research" />
          )}
        </div>

        <nav className="nav-links">
          <Link className="nav-link" to="/capabilities">
            Capabilities <img className="drop-icon" src={drop} alt="Dropdown" />
          </Link>
          <Link className="nav-link" to="/bizchronicles">
            BizChronicles™
            <img className="drop-icon" src={drop} alt="Dropdown" />
          </Link>
          <Link className="nav-link" to="/industries">
            Industries
            <img className="drop-icon" src={drop} alt="Dropdown" />
          </Link>
          <Link className="nav-link" to="/consulting-services">
            Consulting Services
            <img className="drop-icon" src={drop} alt="Dropdown" />
          </Link>
          <Link className="nav-link1" to="/bizwit-insights">
            Bizwit Insights
          </Link>
        </nav>
        <div className="header-actions">
          <Link to="/ReportStore" className="report-store-button">
            Report Store
          </Link>
          <div className="search-ico" onClick={() => setShowPopup(true)}>
            <img className="search" src={sricon} alt="search-bar" />
          </div>
        </div>
      </div>
      {showPopup && <SearchPopup setShowPopup={setShowPopup} />}
    </header>
  );
};

export default Header;
