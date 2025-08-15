import React from 'react';
import './SearchPopup.css';
import { FaSearch, FaTimes } from 'react-icons/fa';

const SearchPopup = ({ setShowPopup }) => {
  return (
    <div className="search-popup-overlay" onClick={() => setShowPopup(false)}>
      <div className="search-popup" onClick={(e) => e.stopPropagation()}>
        <div className="search-popup-content">
          <div className="search-bar-container">
            <input type="text" placeholder="Search here..." />
            <FaSearch className="search-bar-icon" />
          </div>
          <FaTimes className="close-icon" onClick={() => setShowPopup(false)} />
        </div>
      </div>
    </div>
  );
};

export default SearchPopup;
