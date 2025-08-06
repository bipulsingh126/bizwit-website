import React from 'react';
import './Connect.css';
import { connect } from '../../assets/assets.js';

const Connect = () => {
  return (
    <div className="connect-container">
      <div className="connect-form-section">
        <div className="schedule-consultant-tag">SCHEDULE CONSULTANT</div>
        <h2 className="connect-title">Let's Connect</h2>
        <p className="connect-description">
          "Your challenges, our solutions — connect with Bizwit for a free, personalized consultation."
        </p>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="full-name">Full Name*</label>
            <input type="text" id="full-name" name="full-name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email*</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-row">
            <div className="form-group form-group-half">
              <label htmlFor="phone-number">Phone Number</label>
              <div className="phone-input">
                <select id="country-code" name="country-code">
                  <option value="+91">+91 (IND)</option>
                </select>
                <input type="tel" id="phone-number" name="phone-number" />
              </div>
            </div>
            <div className="form-group form-group-half">
              <label htmlFor="company-name">Company Name</label>
              <input type="text" id="company-name" name="company-name" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message*</label>
            <textarea id="message" name="message"></textarea>
          </div>
          <div className="form-group-checkbox">
            <input type="checkbox" id="robot-check" name="robot-check" />
            <label htmlFor="robot-check">I am not a robot.</label>
          </div>
          <button type="submit" className="schedule-consultation-btn">SCHEDULE CONSULTATION</button>
        </form>
      </div>
      <div className="connect-image-section">
        <img src={connect} alt="Consultation" />
        <div className="contact-info-bubble">
          <div className="phone-icon"></div>
          <p>We're just a call (<a href="tel:+919993115879">+91 99931 15879</a>) or form away — we'll be in touch within one business day.</p>
        </div>
      </div>
    </div>
  );
};

export default Connect;
