import React from "react";
import './Contect.css';
import { contecticon1, contecticon2, contecticon3 } from "../../assets/assets";
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
      <div className="contect-connect-container">
        <Connect/>
      </div>
      <div>
        
      </div>
    </>
  );
};

export default Contect;
