// SecondHero.jsx
import React from "react";
import "./SecondHero.css";

export default function SecondHero({
  title,                          
  subtitle,                       
  primaryCta,                     
  secondaryCta,                   
  image,                          
  accentColor = "#B9E28C",        
  align = "left",                 
  maxWidth = 1200,                
  className = "",                 
}) {
  const renderButton = (cta, variant = "primary") => {
    if (!cta) return null;
    const commonProps = {
      className: `hsh-btn hsh-btn--${variant}`,
      "aria-label": cta.label,
    };
    if (cta.href) {
      return (
        <a {...commonProps} href={cta.href}>
          {cta.label}
        </a>
      );
    }
    return (
      <button {...commonProps} type="button" onClick={cta.onClick}>
        {cta.label}
      </button>
    );
  };

  return (
    <section
      className={`hsh ${className}`}
      style={{ "--hsh-accent": accentColor, "--hsh-max": `${maxWidth}px` }}
      aria-label="Sustainability hero section"
    >
      <div className={`hsh__inner hsh__inner--${align}`}>
        <div className="hsh__content">
         {title ? (
  <div className="hsh__titleRow">
    <h1 className="hsh__title">{title}</h1>
    <span className="hsh__titleDash" aria-hidden="true" />
  </div>
) : null}

          {subtitle ? <p className="hsh__subtitle">{subtitle}</p> : null}
          {(primaryCta || secondaryCta) && (
            <div className="hsh__actions">
              {renderButton(primaryCta, "primary")}
              {renderButton(secondaryCta, "secondary")}
            </div>
          )}
        </div>

        <div className="hsh__media">
          <div className="hsh__accent" aria-hidden="true" />
          {image?.src ? (
            <img
              className="hsh__img"
              src={image.src}
              alt={image.alt || ""}
              loading="lazy"
              decoding="async"
            />
          ) : null}
        </div>
      </div>
    </section>
  );
}
