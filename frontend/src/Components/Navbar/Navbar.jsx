import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { logo } from '../../assets/assets';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Bizwit Research Logo" />
        </Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/capabilities" className="has-dropdown">Capabilities</Link></li>
        <li><Link to="/bizchronicles" className="has-dropdown">BizChronicles™</Link></li>
        <li><Link to="/industries" className="has-dropdown">Industries</Link></li>
        <li><Link to="/consulting-services" className="has-dropdown">Consulting Services</Link></li>
        <li><Link to="/bizwit-insights">Bizwit Insights</Link></li>
      </ul>
      <div className="navbar-actions">
        <button className="report-store-btn">Report Store</button>
        <div className="search-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;