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
  const [showCapabilitiesDropdown, setShowCapabilitiesDropdown] = useState(false);
  const [showIndustriesDropdown, setShowIndustriesDropdown] = useState(false);
  const [showConsultingDropdown, setShowConsultingDropdown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  const [industriesTimeout, setIndustriesTimeout] = useState(null);
  const [consultingTimeout, setConsultingTimeout] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDropdownEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setShowCapabilitiesDropdown(true);
  };

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setShowCapabilitiesDropdown(false);
    }, 300); // 300ms delay before hiding
    setDropdownTimeout(timeout);
  };

  const handleIndustriesEnter = () => {
    if (industriesTimeout) {
      clearTimeout(industriesTimeout);
      setIndustriesTimeout(null);
    }
    setShowIndustriesDropdown(true);
  };

  const handleIndustriesLeave = () => {
    const timeout = setTimeout(() => {
      setShowIndustriesDropdown(false);
    }, 300); // 300ms delay before hiding
    setIndustriesTimeout(timeout);
  };

  const handleConsultingEnter = () => {
    if (consultingTimeout) {
      clearTimeout(consultingTimeout);
      setConsultingTimeout(null);
    }
    setShowConsultingDropdown(true);
  };

  const handleConsultingLeave = () => {
    const timeout = setTimeout(() => {
      setShowConsultingDropdown(false);
    }, 300); // 300ms delay before hiding
    setConsultingTimeout(timeout);
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

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeout) {
        clearTimeout(dropdownTimeout);
      }
      if (industriesTimeout) {
        clearTimeout(industriesTimeout);
      }
      if (consultingTimeout) {
        clearTimeout(consultingTimeout);
      }
    };
  }, [dropdownTimeout, industriesTimeout, consultingTimeout]);

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
          <Link to="/" aria-label="Bizwit Research - Go to homepage">
            {location.pathname === "/ReportStore" ? (
              <img className="storelogo" src={logo3} alt="Bizwit Research" />
            ) : location.pathname === "/reportDetails" ||
              location.pathname === "/bizchronicles" ||
              location.pathname === "/contact" ||
              location.pathname=== '/testall' ||
              location.pathname==='/ContentLed'
   ?  (
              <img className="detaillogo" src={logo1} alt="Bizwit Research" />
            ) : (
              <img className="alllogo" src={logo} alt="Bizwit Research" />
            )}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn-header" onClick={toggleMobileMenu}>
          <span className={`hamburger-line-header ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line-header ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line-header ${isMobileMenuOpen ? 'open' : ''}`}></span>
        </button>
        
        <nav className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <div className="nav-dropdown-container" 
               onMouseEnter={handleDropdownEnter}
               onMouseLeave={handleDropdownLeave}>
            <div className="nav-link capabilities-link" 
                 aria-label="Capabilities menu - View our service offerings">
              Capabilities <img className="drop-icon" src={drop} alt="Dropdown arrow" />
            </div>
            {showCapabilitiesDropdown && (
              <div className="capabilities-dropdown" 
                   role="menu" 
                   aria-labelledby="capabilities-menu"
                   onMouseEnter={handleDropdownEnter}
                   onMouseLeave={handleDropdownLeave}>
                <div className="capabilities-content">
                  <div className="capabilities-column">
                    <h3 className="column-title" id="voice-of-customer">Voice of Customer</h3>
                    <ul className="capabilities-list" role="menuitem">
                      <li><Link to="/customer-survey" 
                               aria-label="Customer Survey & Feedback services"
                               onClick={() => { setShowCapabilitiesDropdown(false); setIsMobileMenuOpen(false); }}>
                               Customer Survey & Feedback</Link></li>
                      <li><Link to="/customer-interviews" 
                               aria-label="Customer Interview services"
                               onClick={() => { setShowCapabilitiesDropdown(false); setIsMobileMenuOpen(false); }}>
                               Customer Interviews</Link></li>
                      <li><Link to="/social-listening" 
                               aria-label="Social Listening services"
                               onClick={() => { setShowCapabilitiesDropdown(false); setIsMobileMenuOpen(false); }}>
                               Social Listening</Link></li>
                      <li><Link to="/nps-survey" 
                               aria-label="Net Promoter Score Survey services"
                               onClick={() => { setShowCapabilitiesDropdown(false); setIsMobileMenuOpen(false); }}>
                               Net Promoter Score(NPS) Survey</Link></li>
                      <li><Link to="/focus-group" 
                               aria-label="Focus Group Study services"
                               onClick={() => { setShowCapabilitiesDropdown(false); setIsMobileMenuOpen(false); }}>
                               Focus Group Study</Link></li>
                    </ul>
                  </div>
                  <div className="capabilities-column">
                    <h3 className="column-title" id="market-share-gain">Market Share Gain</h3>
                    <ul className="capabilities-list" role="menuitem">
                      <li><Link to="/competitor-analysis" 
                               aria-label="Competitor Analysis services"
                               onClick={() => { setShowCapabilitiesDropdown(false); setIsMobileMenuOpen(false); }}>
                               Competitor Analysis</Link></li>
                      <li><Link to="/market-expansion" 
                               aria-label="Market Expansion services"
                               onClick={() => { setShowCapabilitiesDropdown(false); setIsMobileMenuOpen(false); }}>
                               Market Expansion</Link></li>
                      <li><Link to="/branding-marketing" 
                               aria-label="Branding & Social Media Marketing services"
                               onClick={() => { setShowCapabilitiesDropdown(false); setIsMobileMenuOpen(false); }}>
                               Branding & Social Media Marketing</Link></li>
                      <li><Link to="/nps-survey-market" 
                               aria-label="Net Promoter Score Survey for Market Share"
                               onClick={() => { setShowCapabilitiesDropdown(false); setIsMobileMenuOpen(false); }}>
                               Net Promoter Score(NPS) Survey</Link></li>
                      <li><Link to="/focus-group-market" 
                               aria-label="Focus Group Study for Market Research"
                               onClick={() => { setShowCapabilitiesDropdown(false); setIsMobileMenuOpen(false); }}>
                               Focus Group Study</Link></li>
                    </ul>
                  </div>
                  <div className="capabilities-column">
                    <h3 className="column-title1" id="full-time-equivalent">Full Time Equivalent (FTE)</h3>
                    <div className="fte-content">
                      <Link to="/contentled" 
                            className="fte-highlight" 
                            aria-label="Content Lead Demand Generation services"
                            onClick={() => { setShowCapabilitiesDropdown(false); setIsMobileMenuOpen(false); }}>
                            Content Lead Demand Generation
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <Link className="nav-link" to="/bizchronicles" onClick={() => setIsMobileMenuOpen(false)}>
            BizChronicles™
            <img className="drop-icon" src={drop} alt="Dropdown" />
          </Link>
          <div className="nav-dropdown-container" 
               onMouseEnter={handleIndustriesEnter}
               onMouseLeave={handleIndustriesLeave}>
            <div className="nav-link industries-link" 
                 aria-label="Industries menu - View industry sectors we serve">
              Industries <img className="drop-icon" src={drop} alt="Dropdown arrow" />
            </div>
            {showIndustriesDropdown && (
              <div className="industries-dropdown" 
                   role="menu" 
                   aria-labelledby="industries-menu"
                   onMouseEnter={handleIndustriesEnter}
                   onMouseLeave={handleIndustriesLeave}>
                <div className="industries-content">
                  <div className="industries-column">
                    <ul className="industries-list" role="menuitem">
                      <li><Link to="/aerospace-defense" 
                               aria-label="Aerospace & Defense industry"
                               onClick={() => { setShowIndustriesDropdown(false); setIsMobileMenuOpen(false); }}>
                               Aerospace & Defense</Link></li>
                      <li><Link to="/agriculture" 
                               aria-label="Agriculture industry"
                               onClick={() => { setShowIndustriesDropdown(false); setIsMobileMenuOpen(false); }}>
                               Agriculture</Link></li>
                      <li><Link to="/automotive-logistics" 
                               aria-label="Automotive, Logistics & Transportation industry"
                               onClick={() => { setShowIndustriesDropdown(false); setIsMobileMenuOpen(false); }}>
                               Automotive, Logistics & Transportation</Link></li>
                      <li><Link to="/bfsi" 
                               aria-label="BFSI industry"
                               onClick={() => { setShowIndustriesDropdown(false); setIsMobileMenuOpen(false); }}>
                               BFSI</Link></li>
                      <li><Link to="/chemicals-materials" 
                               aria-label="Chemicals & Materials industry"
                               onClick={() => { setShowIndustriesDropdown(false); setIsMobileMenuOpen(false); }}>
                               Chemicals & Materials</Link></li>
                      <li><Link to="/consumer-goods-services" 
                               aria-label="Consumer Goods and Services industry"
                               onClick={() => { setShowIndustriesDropdown(false); setIsMobileMenuOpen(false); }}>
                               Consumer Goods and Services</Link></li>
                    </ul>
                  </div>
                  <div className="industries-column">
                    <ul className="industries-list" role="menuitem">
                      <li><Link to="/healthcare-life-sciences" 
                               aria-label="Healthcare & Life Sciences industry"
                               onClick={() => { setShowIndustriesDropdown(false); setIsMobileMenuOpen(false); }}>
                               Healthcare & Life Sciences</Link></li>
                      <li><Link to="/ict" 
                               aria-label="Information, Communication & Technologies (ICT) industry"
                               onClick={() => { setShowIndustriesDropdown(false); setIsMobileMenuOpen(false); }}>
                               Information, Communication & Technologies (ICT)</Link></li>
                      <li><Link to="/industrial-manufacturing" 
                               aria-label="Industrial, Manufacturing & Construction industry"
                               onClick={() => { setShowIndustriesDropdown(false); setIsMobileMenuOpen(false); }}>
                               Industrial, Manufacturing & Construction</Link></li>
                      <li><Link to="/semiconductor-electronics" 
                               aria-label="Semiconductor & Electronics industry"
                               onClick={() => { setShowIndustriesDropdown(false); setIsMobileMenuOpen(false); }}>
                               Semiconductor & Electronics</Link></li>
                      <li><Link to="/environment-energy-power" 
                               aria-label="Environment, Energy & Power industry"
                               onClick={() => { setShowIndustriesDropdown(false); setIsMobileMenuOpen(false); }}>
                               Environment, Energy & Power</Link></li>
                    </ul>
                  </div>
                  <div className="industries-column trending-column">
                    <h3 className="trending-title" id="trending-industries">Trending Industries</h3>
                    <div className="trending-content">
                      <Link to="/ai-healthcare" 
                            className="trending-highlight" 
                            aria-label="AI in Healthcare trending industry"
                            onClick={() => { setShowIndustriesDropdown(false); setIsMobileMenuOpen(false); }}>
                            AI in Healthcare
                      </Link>
                      <Link to="/ai-education" 
                            className="trending-highlight" 
                            aria-label="AI in Education trending industry"
                            onClick={() => { setShowIndustriesDropdown(false); setIsMobileMenuOpen(false); }}>
                            AI in Education
                      </Link>
                      <Link to="/green-energy" 
                            className="trending-highlight" 
                            aria-label="Green Energy trending industry"
                            onClick={() => { setShowIndustriesDropdown(false); setIsMobileMenuOpen(false); }}>
                            Green Energy
                      </Link>
                      <Link to="/industry-4" 
                            className="trending-highlight" 
                            aria-label="Industry 4.0 trending sector"
                            onClick={() => { setShowIndustriesDropdown(false); setIsMobileMenuOpen(false); }}>
                            Industry 4.0
                      </Link>
                      <Link to="/cyber-security" 
                            className="trending-highlight" 
                            aria-label="Cyber Security trending industry"
                            onClick={() => { setShowIndustriesDropdown(false); setIsMobileMenuOpen(false); }}>
                            Cyber Security
                      </Link>
                      <Link to="/sports-fitness" 
                            className="trending-highlight" 
                            aria-label="Sports & Fitness trending industry"
                            onClick={() => { setShowIndustriesDropdown(false); setIsMobileMenuOpen(false); }}>
                            Sports & Fitness
                      </Link>
                      <Link to="/biotechnology" 
                            className="trending-highlight" 
                            aria-label="Biotechnology trending industry"
                            onClick={() => { setShowIndustriesDropdown(false); setIsMobileMenuOpen(false); }}>
                            Biotechnology
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="nav-dropdown-container" 
               onMouseEnter={handleConsultingEnter}
               onMouseLeave={handleConsultingLeave}>
            <div className="nav-link consulting-link" 
                 aria-label="Consulting Services menu - View our consulting offerings">
              Consulting Services <img className="drop-icon" src={drop} alt="Dropdown arrow" />
            </div>
            {showConsultingDropdown && (
              <div className="consulting-dropdown" 
                   role="menu" 
                   aria-labelledby="consulting-menu"
                   onMouseEnter={handleConsultingEnter}
                   onMouseLeave={handleConsultingLeave}>
                <div className="consulting-content">
                  <div className="consulting-column">
                    <h3 className="column-title" id="market-intelligence">Market Intelligence Services</h3>
                    <ul className="consulting-list" role="menuitem">
                      <li><Link to="/feasibility-study" 
                               aria-label="Feasibility Study consulting services"
                               onClick={() => { setShowConsultingDropdown(false); setIsMobileMenuOpen(false); }}>
                               Feasibility Study</Link></li>
                      <li><Link to="/market-entry-strategy" 
                               aria-label="Market Entry Strategy consulting services"
                               onClick={() => { setShowConsultingDropdown(false); setIsMobileMenuOpen(false); }}>
                               Market Entry Strategy</Link></li>
                      <li><Link to="/market-expansion-strategy" 
                               aria-label="Market Expansion Strategy consulting services"
                               onClick={() => { setShowConsultingDropdown(false); setIsMobileMenuOpen(false); }}>
                               Market Expansion Strategy</Link></li>
                      <li><Link to="/market-demand-forecast" 
                               aria-label="Market Demand & Forecast consulting services"
                               onClick={() => { setShowConsultingDropdown(false); setIsMobileMenuOpen(false); }}>
                               Market Demand & Forecast</Link></li>
                      <li><Link to="/regional-landscape" 
                               aria-label="Regional Landscape consulting services"
                               onClick={() => { setShowConsultingDropdown(false); setIsMobileMenuOpen(false); }}>
                               Regional Landscape</Link></li>
                      <li><Link to="/market-motivation" 
                               aria-label="Market Motivation consulting services"
                               onClick={() => { setShowConsultingDropdown(false); setIsMobileMenuOpen(false); }}>
                               Market Motivation</Link></li>
                    </ul>
                  </div>
                  <div className="consulting-column">
                    <h3 className="column-title-long" id="competitive-intelligence">Competitive Intelligence and Strategic Analysis</h3>
                    <ul className="consulting-list" role="menuitem">
                      <li><Link to="/benchmarking-positioning" 
                               aria-label="Benchmarking & Positioning consulting services"
                               onClick={() => { setShowConsultingDropdown(false); setIsMobileMenuOpen(false); }}>
                               Benchmarking & Positioning</Link></li>
                      <li><Link to="/pipeline-analysis" 
                               aria-label="Pipeline Analysis consulting services"
                               onClick={() => { setShowConsultingDropdown(false); setIsMobileMenuOpen(false); }}>
                               Pipeline Analysis</Link></li>
                      <li><Link to="/go-to-market-insights" 
                               aria-label="Go-To-Market Insights consulting services"
                               onClick={() => { setShowConsultingDropdown(false); setIsMobileMenuOpen(false); }}>
                               Go-To-Market Insights</Link></li>
                      <li><Link to="/market-attractiveness" 
                               aria-label="Identify Market Attractiveness consulting services"
                               onClick={() => { setShowConsultingDropdown(false); setIsMobileMenuOpen(false); }}>
                               Identify Market Attractiveness</Link></li>
                    </ul>
                  </div>
                  <div className="consulting-column">
                    <h3 className="column-title-short" id="sustainability">Sustainability</h3>
                    <ul className="consulting-list" role="menuitem">
                      <li><Link to="/esg-consulting" 
                               className="sustainability-link"
                               aria-label="ESG Consulting services"
                               onClick={() => { setShowConsultingDropdown(false); setIsMobileMenuOpen(false); }}>
                               ESG Consulting</Link></li>
                      <li><Link to="/carbon-footprint-analysis" 
                               className="sustainability-link"
                               aria-label="Carbon Footprint and Environmental Impact Analysis"
                               onClick={() => { setShowConsultingDropdown(false); setIsMobileMenuOpen(false); }}>
                               Carbon Footprint and Environmental Impact Analysis</Link></li>
                    </ul>
                  </div>
                  <div className="consulting-column gtm-column">
                    <h3 className="gtm-title" id="bizwit-gtm-strategy">Bizwit India (GTM) Entry Strategy</h3>
                    <div className="gtm-content">
                      <p className="gtm-description">
                        India Intelligence – Research-Led Approach<br />
                        Deep dive into the localized Indian Entry Strategy<br />
                        Ready to Enter India? <Link to="/lets-talk" className="lets-talk-link">Let's Talk</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
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
