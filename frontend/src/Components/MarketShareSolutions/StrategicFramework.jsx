import React from "react";
import "./StrategicFramework.css";

export default function StrategicFramework() {
  const steps = [
    "BUSINESS OBJECTIVE ALIGNMENT",
    "MARKET & COMPETITOR MAPPING",
    "GRP/WHITE SPACE ANALYSIS",
    "CHANNEL ACTIVATION (ONLINE + OFFLINE)",
    "PERFORMANCE MONITORING",
  ];

  return (
    <section className="sf">
      <div className="sf-pill">STRATEGIC APPROACH FRAMEWORK</div>

      <div className="sf-row">
        {/* Left curved info panel */}
        <div className="sf-left">
          <p>
            A Strategic Approach Framework helps break down complex goals into manageable and logical steps. It involves analyzing the situation, setting objectives, designing strategies, implementing actions, and measuring results.
          </p>
        </div>

        {/* Right stacked bars */}
        <div className="sf-right">
          {steps.map((label, i) => (
            <div className={`sf-item sf-i${i + 1}`} key={label}>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
