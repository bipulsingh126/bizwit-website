import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { drop, logo, mobilelogo } from "../../assets/assets";
import SearchPopup from "../SearchPopup/SearchPopup";

const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Bizwit Research Logo" className="desktop-logo" />
          <img src={mobilelogo} alt="Bizwit Research Logo" className="mobile-logo" />
        </Link>
      </div>
      
      {/* Mobile Menu Button */}
      <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
        <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
      </button>
      
      <ul className={`navbar-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <li className="has-dropdown">
          <Link to="/capabilities" className="has-dropdown" onClick={() => setIsMobileMenuOpen(false)}>
            Capabilities <img className="drop-icon" src={drop} alt="Dropdown" />
          </Link>
        </li>
        <li className="has-dropdown">
          <Link to="/bizchronicles" className="has-dropdown" onClick={() => setIsMobileMenuOpen(false)}>
            BizChronicles™ <img className="drop-icon" src={drop} alt="Dropdown" />
          </Link>
        </li>
        <li className="has-dropdown">
          <Link to="/industries" className="has-dropdown" onClick={() => setIsMobileMenuOpen(false)}>
            Industries <img className="drop-icon" src={drop} alt="Dropdown" />
          </Link>
        </li>
        <li className="has-dropdown">
          <Link to="/consulting-services" className="has-dropdown" onClick={() => setIsMobileMenuOpen(false)}>
            Consulting Services <img className="drop-icon" src={drop} alt="Dropdown" />
          </Link>
        </li>
        <li className="has-dropdown1">
          <Link to="/bizwit-insights" onClick={() => setIsMobileMenuOpen(false)}>Bizwit Insights</Link>
        </li>
      </ul>
      <div className="navbar-actions">
        <Link to="/ReportStore" className="report-store-btn">Report Store</Link>
        <div className="search-ico1" onClick={() => setShowPopup(true)}>
          <svg className="search1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </div>
      </div>
      {showPopup && <SearchPopup setShowPopup={setShowPopup} />}
    </nav>
  );
};

export default Navbar;
