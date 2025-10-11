import React from "react";
import "./WhyChoose.css";

import imgA from "../../assets/first.png";
import imgB from "../../assets/sec.png";
import imgC from "../../assets/third.png";
import imgD from "../../assets/fourth.png";

export default function WhyChoose() {
  const items = [
    {
      img: imgA,
      title: "10+ years of market intelligence expertise",
      body: "10+ years of market intelligence expertise 10+ years of market intelligence expertise",
    },
    {
      img: imgB,
      title: "Global research and execution reach",
      body: "Global research and execution reach Global research and execution reach",
    },
    {
      img: imgC,
      title: "Strong domain expertise across 15+ industries",
      body: "Strong domain expertise across 15+ industries",
    },
    {
      img: imgD,
      title: "Strategic and creative approach",
      body: "Strategic and creative approach Strategic and creative approach",
    },
  ];

  return (
    <section className="wc">
      <div className="wc-pill">WHY CHOOSE BIZWIT?</div>

      <div className="wc-grid">
        {items.map((x, i) => (
          <div key={i} className="wc-item">
            {/* dotted ring outside with gap */}
            <div className="wc-badge-wrap">
              <div className="wc-badge">
                <img src={x.img} alt={x.title} />
              </div>
            </div>

            <div className="wc-copy">
              <h3>{x.title}</h3>
              <p>{x.body}</p>
            </div>

            {/* dotted connector */}
            <div className="wc-dots">
              <span className="wc-dot" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}