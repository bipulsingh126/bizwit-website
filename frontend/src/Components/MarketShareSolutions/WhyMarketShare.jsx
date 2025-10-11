import React from "react";
import "./WhyMarketShare.css";
import chart from "../../assets/attachment (3) 1.png"

export default function WhyMarketShare() {
  const text =
    "Gaining market share is not just about selling more—it's about knowing where and how to compete. Our tailored frameworks help you outpace competition, optimize positioning, and build brand authority where it counts.";

  return (
    <section className="ms-section" aria-labelledby="ms-title">
      {/* centered pill outside grid */}
      <div className="ms-hero">
        <button id="ms-title" className="ms-pill" type="button">
          WHY MARKET SHARE MATTERS
        </button>
      </div>

      {/* two-column grid */}
      <div className="ms-container">
        <div className="ms-left">
          <p>{text}</p>
          <p>{text}</p>
          <p>{text}</p>
          <p>{text}</p>
        </div>

        <div className="ms-right">
          <img className="ms-image" src={chart} alt="Chart" />
        </div>
      </div>
    </section>
  );
}
