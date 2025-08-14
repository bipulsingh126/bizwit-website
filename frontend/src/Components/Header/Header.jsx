import React from 'react';
import './Header.css';
import logo from '../../assets/BIZWITLOGO.png';
import { FaSearch } from 'react-icons/fa';
import { Link, Links, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  
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
          <img src={logo} alt="Bizwit Research" />
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
          <FaSearch className="search-icon" />
        </div>
      </div>
    </header>
  );
}

export default Header;