import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "../../assets/BIZWITLOGO.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { logo1, logo3, sricon, headerbg, drop } from "../../assets/assets";
import SearchPopup from "../SearchPopup/SearchPopup";

const Header = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show header if:
      // 1. At the top of the page (within 10px)
      // 2. Scrolling up
      // 3. Mobile menu is open
      if (currentScrollY < 10) {
        setIsHeaderVisible(true);
      } else if (currentScrollY < lastScrollY || isMobileMenuOpen) {
        // Scrolling up or mobile menu is open
        setIsHeaderVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px
        setIsHeaderVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, isMobileMenuOpen]);

  // Ensure header is visible when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsHeaderVisible(true);
    }
  }, [isMobileMenuOpen]);

  return (
    <header className={`header-container ${!isHeaderVisible ? 'header-hidden' : ''}`}>
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

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn-header" onClick={toggleMobileMenu}>
          <span className={`hamburger-line-header ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line-header ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line-header ${isMobileMenuOpen ? 'open' : ''}`}></span>
        </button>
        
        <nav className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link className="nav-link" to="/capabilities" onClick={() => setIsMobileMenuOpen(false)}>
            Capabilities <img className="drop-icon" src={drop} alt="Dropdown" />
          </Link>
          <Link className="nav-link" to="/bizchronicles" onClick={() => setIsMobileMenuOpen(false)}>
            BizChronicles™
            <img className="drop-icon" src={drop} alt="Dropdown" />
          </Link>
          <Link className="nav-link" to="/industries" onClick={() => setIsMobileMenuOpen(false)}>
            Industries
            <img className="drop-icon" src={drop} alt="Dropdown" />
          </Link>
          <Link className="nav-link" to="/consulting-services" onClick={() => setIsMobileMenuOpen(false)}>
            Consulting Services
            <img className="drop-icon" src={drop} alt="Dropdown" />
          </Link>
          <Link className="nav-link1" to="/bizwit-insights" onClick={() => setIsMobileMenuOpen(false)}>
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
