import React from "react";
import "./Footer.css";
import {
  footer,
  Footerlogo
} from "../assets/assets";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo-section">
            <img src={Footerlogo} alt="Bizwit Research" className="footer-logo1" />
            <p className="footer-tagline">
              Accelerate growth with research that transforms challenges into
              opportunities.
            </p>
            <div className="contact-info">
              <p>Contact Us</p>
              <p>
                Email:{" "}
                <a href="mailto:sales@bizwitresearch.com">
                  sales@bizwitresearch.com
                </a>
              </p>
              <p>
                Contact Number: <a href="tel:+919207104127">+919 207 104127</a>
              </p>
              <p>Address: 303, Alappat IT Park, Infopark, Kochi, 682030(I)</p>
            </div>
          </div>

          <div className="footer-links-section">
            <div className="footer-links-columns">
              <div className="footer-links-column">
                <h3 className="footer-links-title">FAQs</h3>
                <ul className="footer-links">
                  <li className="footer-link">
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li className="footer-link">
                    <a href="#">How to order</a>
                  </li>
                  <li className="footer-link">
                    <a href="#">Cookie Policy</a>
                  </li>
                  <li className="footer-link">
                    <a href="#">Testimonials & Case Studies</a>
                  </li>
                </ul>
              </div>

              <div className="footer-links-column">
                <h3 className="footer-links-title">News Room</h3>
                <ul className="footer-links">
                  <li className="footer-link">
                    <a href="#">Terms & Conditions</a>
                  </li>
                  <li className="footer-link">
                    <a href="#">Refund Policy</a>
                  </li>
                  <li className="footer-link">
                    <a href="#">Disclaimer</a>
                  </li>
                  <li className="footer-link">
                    <a href="#">Sitemap</a>
                  </li>
                </ul>
              </div>

              <div className="footer-links-column">
                <h3 className="footer-links-title">Become our reseller</h3>
                <ul className="footer-links">
                  <li className="footer-link">
                    <a href="#">Career</a>
                  </li>
                  <li className="footer-link">
                    <a href="#">Contact Us</a>
                  </li>
                  <li className="footer-link">
                    <a href="#">GDPR Policy</a>
                  </li>
                </ul>
              </div>

              <div className="footer-links-column footer-acceptance-section">
                <div className="iso-certified">
                  <img src={footer[0].img} alt="ISO Certified" />
                  <img src={footer[1].img} alt="ISO Certified" />
                </div>
                <div className="payment-acceptance-box">
                  <h3 className="footer-links-title">We accept</h3>
                  <div className="payment-methods">
                    <img src={footer[7].img} alt="Payment method" className="payment-method-icon" />
                    <img src={footer[8].img} alt="Payment method" className="payment-method-icon" />
                    <img src={footer[2].img} alt="Payment method" className="payment-method-icon" />
                    <img src={footer[3].img} alt="Payment method" className="payment-method-icon" />
                  </div>
                  <div className="payment-methods">
                    <img src={footer[4].img} alt="Payment method" className="payment-method-icon" />
                    <img src={footer[5].img} alt="Payment method" className="payment-method-icon" />
                    <img src={footer[6].img} alt="Payment method" className="payment-method-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
