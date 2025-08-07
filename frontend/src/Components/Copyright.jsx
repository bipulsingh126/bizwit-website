import React from 'react';
import './Copyright.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Copyright = () => {
  return (
    <div className="copyright-footer">
      <div className="copyright-content">
        <p className="copyright-text">
          Copyright © 2017 - 2025 Bizwit Research & Consulting, LLP. All Rights Reserved.
        </p>
        <div className="social-icons">
          <a href="#" aria-label="Facebook"><FaFacebookF /></a>
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
          <a href="#" aria-label="Twitter"><FaTwitter /></a>
          <a href="#" aria-label="WhatsApp"><FaWhatsapp /></a>
        </div>
      </div>
    </div>
  );
};

export default Copyright;