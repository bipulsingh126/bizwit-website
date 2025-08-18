import React, { useState } from 'react';
import './Header.css';
import logo from '../../assets/BIZWITLOGO.png';
import { Link,  useNavigate, useLocation } from 'react-router-dom';
import { logo1, logo3, sricon } from '../../assets/assets';
import SearchPopup from '../SearchPopup/SearchPopup';

const Header = () => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
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
        <div className="logo">
          {location.pathname === '/ReportStore' ? (
            <img className='storelogo' src={logo3} alt="Bizwit Research" />
          ) : location.pathname === '/reportDetails' || location.pathname === '/bizchronicles' ? (
            <img className='detaillogo' src={logo1} alt="Bizwit Research" />
          ) : (
            <img className='alllogo' src={logo} alt="Bizwit Research" />
          )}
        </div>
      
        <nav className="nav-links">
          <Link to="/capabilities">Capabilities</Link>
          <Link to="/bizchronicles">BizChronicles™</Link>
          <Link to="/industries">Industries</Link>
          <Link to="/consulting-services">Consulting Services</Link>
          <Link  to="/bizwit-insights">Bizwit Insights</Link>
        </nav>
        <div className="header-actions">
          <Link to="/ReportStore" className="report-store-button">Report Store</Link>
          <div className='search-ico' onClick={() => setShowPopup(true)}>
            <img className='search' src={sricon} alt="search-bar" />
          </div>
        </div>
      </div>
      {showPopup && <SearchPopup setShowPopup={setShowPopup} />}
    </header>
  );
}

export default Header;