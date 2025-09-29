import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { drop, logo, mobilelogo } from "../../assets/assets";
import SearchPopup from "../SearchPopup/SearchPopup";

const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showCapabilitiesDropdown, setShowCapabilitiesDropdown] = useState(false);
  const [showIndustriesDropdown, setShowIndustriesDropdown] = useState(false);
  const [showConsultingDropdown, setShowConsultingDropdown] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  const [industriesTimeout, setIndustriesTimeout] = useState(null);
  const [consultingTimeout, setConsultingTimeout] = useState(null);
  
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

  // Cleanup timeout on unmount
  React.useEffect(() => {
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
          <div className="nav-dropdown-container" 
               onMouseEnter={handleDropdownEnter}
               onMouseLeave={handleDropdownLeave}>
            <div className="nav-link capabilities-link">
              Capabilities <img className="drop-icon" src={drop} alt="Dropdown" />
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
                      <Link to="/content-lead-generation" 
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
        </li>
        <li className="has-dropdown">
          <Link to="/bizchronicles" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            BizChronicles™ <img className="drop-icon" src={drop} alt="Dropdown" />
          </Link>
        </li>
        <li className="has-dropdown">
          <div className="nav-dropdown-container" 
               onMouseEnter={handleIndustriesEnter}
               onMouseLeave={handleIndustriesLeave}>
            <div className="nav-link industries-link">
              Industries <img className="drop-icon" src={drop} alt="Dropdown" />
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
        </li>
        <li className="has-dropdown">
          <div className="nav-dropdown-container" 
               onMouseEnter={handleConsultingEnter}
               onMouseLeave={handleConsultingLeave}>
            <div className="nav-link consulting-link">
              Consulting Services <img className="drop-icon" src={drop} alt="Dropdown" />
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