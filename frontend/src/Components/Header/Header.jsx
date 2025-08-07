import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import logo from '../../assets/BIZWITLOGO.png';
import { FaSearch, FaChevronDown } from 'react-icons/fa';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdownToggle = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="header-container">
      <div className="top-bar">
        <div className="top-bar-links">
          <a href="/about">About Us</a>
          <a href="/contact">Contact Us</a>
          <a href="/empanel" className="empanel-button">Empanel With Us</a>
        </div>
      </div>
      <div className="main-header">
        <a href="/">
          <img src={logo} alt="Bizwit Research Logo" className="logo" />
        </a>
        <nav className="nav-links" ref={dropdownRef}>
          <div 
            className={`dropdown ${activeDropdown === 'capabilities' ? 'active' : ''}`}
            onClick={() => handleDropdownToggle('capabilities')}
          >
            Capabilities <FaChevronDown className="dropdown-indicator" />
            {activeDropdown === 'capabilities' && (
              <div className="dropdown-menu">
                <a href="/capabilities/market-research">Market Research</a>
                <a href="/capabilities/competitive-intelligence">Competitive Intelligence</a>
                <a href="/capabilities/market-entry">Market Entry</a>
                <a href="/capabilities/go-to-market">Go-to-Market</a>
              </div>
            )}
          </div>
          <div 
            className={`dropdown ${activeDropdown === 'bizchronicles' ? 'active' : ''}`}
            onClick={() => handleDropdownToggle('bizchronicles')}
          >
            BizChronicles™ <FaChevronDown className="dropdown-indicator" />
            {activeDropdown === 'bizchronicles' && (
              <div className="dropdown-menu">
                <a href="/bizchronicles/blogs">Blogs</a>
                <a href="/bizchronicles/case-studies">Case Studies</a>
                <a href="/bizchronicles/white-papers">White Papers</a>
                <a href="/bizchronicles/infographics">Infographics</a>
              </div>
            )}
          </div>
          <div 
            className={`dropdown ${activeDropdown === 'industries' ? 'active' : ''}`}
            onClick={() => handleDropdownToggle('industries')}
          >
            Industries <FaChevronDown className="dropdown-indicator" />
            {activeDropdown === 'industries' && (
              <div className="dropdown-menu">
                <a href="/industries/healthcare">Healthcare</a>
                <a href="/industries/technology">Technology</a>
                <a href="/industries/finance">Finance</a>
                <a href="/industries/retail">Retail</a>
                <a href="/industries/manufacturing">Manufacturing</a>
              </div>
            )}
          </div>
          <div 
            className={`dropdown ${activeDropdown === 'consulting' ? 'active' : ''}`}
            onClick={() => handleDropdownToggle('consulting')}
          >
            Consulting Services <FaChevronDown className="dropdown-indicator" />
            {activeDropdown === 'consulting' && (
              <div className="dropdown-menu">
                <a href="/consulting-services/strategy">Strategy Consulting</a>
                <a href="/consulting-services/operations">Operations Consulting</a>
                <a href="/consulting-services/digital">Digital Transformation</a>
                <a href="/consulting-services/marketing">Marketing Consulting</a>
              </div>
            )}
          </div>
          <a href="/bizwit-insights">Bizwit Insights</a>
        </nav>
        <div className="header-actions">
          <a href="/report-store" className="report-store-button">Report Store</a>
          <FaSearch className="search-icon" />
          <div 
            className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`mobile-nav ${mobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-nav-links">
          <div 
            className="dropdown"
            onClick={() => handleDropdownToggle('capabilities-mobile')}
          >
            Capabilities <FaChevronDown className="dropdown-indicator" />
            {activeDropdown === 'capabilities-mobile' && (
              <div className="dropdown-menu">
                <a href="/capabilities/market-research">Market Research</a>
                <a href="/capabilities/competitive-intelligence">Competitive Intelligence</a>
                <a href="/capabilities/market-entry">Market Entry</a>
                <a href="/capabilities/go-to-market">Go-to-Market</a>
              </div>
            )}
          </div>
          <div 
            className="dropdown"
            onClick={() => handleDropdownToggle('bizchronicles-mobile')}
          >
            BizChronicles™ <FaChevronDown className="dropdown-indicator" />
            {activeDropdown === 'bizchronicles-mobile' && (
              <div className="dropdown-menu">
                <a href="/bizchronicles/blogs">Blogs</a>
                <a href="/bizchronicles/case-studies">Case Studies</a>
                <a href="/bizchronicles/white-papers">White Papers</a>
                <a href="/bizchronicles/infographics">Infographics</a>
              </div>
            )}
          </div>
          <div 
            className="dropdown"
            onClick={() => handleDropdownToggle('industries-mobile')}
          >
            Industries <FaChevronDown className="dropdown-indicator" />
            {activeDropdown === 'industries-mobile' && (
              <div className="dropdown-menu">
                <a href="/industries/healthcare">Healthcare</a>
                <a href="/industries/technology">Technology</a>
                <a href="/industries/finance">Finance</a>
                <a href="/industries/retail">Retail</a>
                <a href="/industries/manufacturing">Manufacturing</a>
              </div>
            )}
          </div>
          <div 
            className="dropdown"
            onClick={() => handleDropdownToggle('consulting-mobile')}
          >
            Consulting Services <FaChevronDown className="dropdown-indicator" />
            {activeDropdown === 'consulting-mobile' && (
              <div className="dropdown-menu">
                <a href="/consulting-services/strategy">Strategy Consulting</a>
                <a href="/consulting-services/operations">Operations Consulting</a>
                <a href="/consulting-services/digital">Digital Transformation</a>
                <a href="/consulting-services/marketing">Marketing Consulting</a>
              </div>
            )}
          </div>
          <a href="/bizwit-insights">Bizwit Insights</a>
        </div>
      </div>
    </header>
  );
}

export default Header;