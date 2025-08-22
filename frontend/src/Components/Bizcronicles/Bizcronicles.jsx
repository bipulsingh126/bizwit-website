import React from "react";
import "./Bizcronicles.css";
import { Bicro1, Bicro2 } from "../../assets/assets";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Bizcronicles = () => {

  return (
    <>
      <div className="bizcronicl-container">
     <div className="bizcronicl-heading">
      <p className="heading">BIZCRONICLES</p>
      <p className="subtitle">
            Here are some chronicles of businesses that dared to ask the right
            questions — and found powerful answers.
          </p>
     </div>
      <div className="bizcronicl-cardcontainer">
        {/* left side */}
        <div className="bizcronicl-cardtrangle">
          <div className="bizcronicl-trangle"></div>
          <img src={Bicro1} className="bizcronicl-img" alt="" />
          <p className="bizcronicl-title">Tariff Tremors: How Trump's New Trade Strategy is Squeezing the Global Auto Industry</p>
        </div>
        {/* right side */}
        <div className="bizcronicl-cardtrangle">
          <div className="bizcronicl-trangle"></div>
          <img src={Bicro2} className="bizcronicl-img" alt="" />
          <p className="bizcronicl-title">The Domino Effect: How Tariffs Are Reshaping the Auto Landscape</p>
        </div>
      </div>
       
      </div>
    </>
  );
};

export default Bizcronicles;
