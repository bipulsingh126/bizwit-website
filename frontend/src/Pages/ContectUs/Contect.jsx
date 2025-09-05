import React from "react";
import './Contect.css';
import { connect, contecticon1, contecticon2, contecticon3, contectpic } from "../../assets/assets";
import Connect from "../../Components/Connect/Connect";

const Contect = () => {
  return (
    <>
      <div className="contect-container">
          <div className="contect-title-container">
          <p className="contect-title">Let’s <span className="contect-span">Connect</span></p>
          </div>
          <p className="contect-subtitle">
            We look forward to understanding your strategic vision and unlocking
            new insights together. We look forward to understanding your
            strategic vision and unlocking new insights together.{" "}
          </p>
        <div className="contect-info-container">
          <div className="contect-info-item">
            <div className="contect-icon-wrapper">
              <img className="contect-icon" src={contecticon1} alt="Address" />
            </div>
            <div className="contect-info-text">
              <p className="contect-icon-title">Our Address</p>
              <p className="contect-icon-subtitle">303, Atulya IT Park,Indore 452001</p>
            </div>
          </div>
          <div className="contect-info-item">
            <div className="contect-icon-wrapper">
              <img src={contecticon2} className="contect-icon" alt="Phone" />
            </div>
            <div className="contect-info-text">
              <p className="contect-icon-title">Our Phone</p>
              <p className="contect-icon-subtitle">+91 99931 15879, +91 99931 15879</p>
            </div>
          </div>
          <div className="contect-info-item">
            <div className="contect-icon-wrapper">
              <img src={contecticon3} className="contect-icon" alt="Email" />
            </div>
            <div className="contect-info-text">
              <p className="contect-icon-title">Our Email</p>
              <p className="contect-icon-subtitle">sales@bizwitresearch.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="connect-wrapper1">
      <div className="connect-container1">
         <div className="connect-form-section">
          <div className="schedule-consultant-tag">SCHEDULE CONSULTANT</div>
          <h2 className="connect-title">Let's Connect</h2>
          <p className="connect-description">
            "Your challenges, our solutions — connect with Bizwit for a free, personalized consultation."
          </p>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="full-name">Full Name*</label>
              <input type="text" id="full-name" name="full-name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email*</label>
              <input type="email" id="email" name="email" required />
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
              <textarea id="message" name="message" required></textarea>
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
      </div>
      <div className="contect-pic-container"> 
        <div className=" contect-pic-wrapper">
           <img className="contect-pic" src={contectpic} alt="" /> 
        </div>
        <div className="contect-connect-container1">
          <p className=" contect-connect-title"> CONTACT US</p>
            <p className=" contect-connect-subtitle">Set up a free consultation—whenever it’s convenient for you</p>
              <button className=" contect-connect-button">
                <p className=" contect-connect-button-text"> Free Consultation</p>
              </button>
              <button className=" contect-connect-button-arrow"><span className=" contect-connect-button-arrow-icon">→</span></button>            
          </div>    
      </div>
    </>
  );
};

export default Contect;
