import React from "react";
import "./Pillars.css";

// Use public/ paths or import from src/assets
import img1  from "../../assets/analysis.png";
import img2 from "../../assets/analysis.png";
import img3 from "../../assets/analysis.png";

export default function Pillars() {
  const cards = [
    { img: img1, title: "Competitor Analysis" },
    { img: img2, title: "Market Expansion Strategy" },
    { img: img3, title: "Branding & Social Media" },
  ];

  return (
    <section className="frame">
      <button className="frame-pill" type="button">
        ONE CORE PILLARS OF MARKET SHARE GROWTH
      </button>

      <div className="cards">
        {cards.map((c, i) => (
          <div className="card" key={i}>
            <div className="notch notch-top" />
            <div className="notch notch-bottom" />
            <img className="card-img" src={c.img} alt={c.title} />
            <h3 className="card-title">{c.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
