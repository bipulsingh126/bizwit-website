import React from 'react'
import './Footer.css'
import { logo, footer1, footer2, footer3, footer4, footer5, footer6, footer7, footer8, footer9 } from '../assets/assets'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo-section">
            <img src={logo} alt="Bizwit Research" className="footer-logo" />
            <p className="footer-tagline">Accelerate growth with research that transforms challenges into opportunities.</p>
            <div className="contact-info">
              <p>Contact Us</p>
              <p>Email: <a href="mailto:sales@bizwitresearch.com">sales@bizwitresearch.com</a></p>
              <p>Contact Number: <a href="tel:+919207104127">+919 207 104127</a></p>
              <p>Address: 303, Alappat IT Park, Infopark, Kochi, 682030(I)</p>
            </div>
          </div>
          
          <div className="footer-links-section">
            <div className="footer-links-columns">
              <div className="footer-links-column">
                <h3 className="footer-links-title">FAQs</h3>
                <ul className="footer-links">
                  <li className="footer-link"><a href="#">Privacy Policy</a></li>
                  <li className="footer-link"><a href="#">How to order</a></li>
                  <li className="footer-link"><a href="#">Cookie Policy</a></li>
                  <li className="footer-link"><a href="#">Testimonials & Case Studies</a></li>
                </ul>
              </div>
              
              <div className="footer-links-column">
                <h3 className="footer-links-title">News Room</h3>
                <ul className="footer-links">
                  <li className="footer-link"><a href="#">Terms & Conditions</a></li>
                  <li className="footer-link"><a href="#">Refund Policy</a></li>
                  <li className="footer-link"><a href="#">Disclaimer</a></li>
                  <li className="footer-link"><a href="#">Sitemap</a></li>
                </ul>
              </div>
              
              <div className="footer-links-column">
                <h3 className="footer-links-title">Become our reseller</h3>
                <ul className="footer-links">
                  <li className="footer-link"><a href="#">Career</a></li>
                  <li className="footer-link"><a href="#">Contact Us</a></li>
                  <li className="footer-link"><a href="#">GDPR Policy</a></li>
                </ul>
              </div>
            </div>

            <div className="footer-links-column">
              <h3 className="footer-links-title">We accept</h3>
              <div className="payment-methods">
                <img src={footer1} alt="Payment method" className="payment-method-icon" />
                <img src={footer2} alt="Payment method" className="payment-method-icon" />
                <img src={footer3} alt="Payment method" className="payment-method-icon" />
                <img src={footer4} alt="Payment method" className="payment-method-icon" />
              </div>
              <div className="payment-methods">
                <img src={footer5} alt="Payment method" className="payment-method-icon" />
                <img src={footer6} alt="Payment method" className="payment-method-icon" />
                <img src={footer7} alt="Payment method" className="payment-method-icon" />
              </div>
              <div className="iso-certified">
                <img src={footer8} alt="ISO Certified" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">Copyright 2017 - 2023, Bizwit Research & Consulting, LLP. All Rights Reserved.</p>
          <div className="footer-social">
            <a href="#" aria-label="Facebook"><img src={footer1} alt="Facebook" className="footer-social-icon" /></a>
            <a href="#" aria-label="Instagram"><img src={footer2} alt="Instagram" className="footer-social-icon" /></a>
            <a href="#" aria-label="LinkedIn"><img src={footer3} alt="LinkedIn" className="footer-social-icon" /></a>
            <a href="#" aria-label="Twitter"><img src={footer4} alt="Twitter" className="footer-social-icon" /></a>
            <a href="#" aria-label="WhatsApp"><img src={footer5} alt="WhatsApp" className="footer-social-icon" /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer