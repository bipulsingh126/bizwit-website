import React, { useState } from "react";
import "./ReportActionPanel.css";
import {  reportpdf} from "../../assets/assets";
import contact from '../../assets/contactIcon.png'

export default function ReportActionPanel({
  coverSrc,
  title,
  subtitle,
  onInquiry,
  onBuy,
  inquiryLabel = "INQUIRY BEFORE BUYING",
  buyLabel = "BUY NOW",
  formats = [],
  meta = {},

  enableSampleForm = true,
  onSampleSubmit,
  sidebar = {
    imageSrc: "",
    titleTop: "Get the Sample",
    titleBottom: "Within 24 hours.",
    email: "Sales@bizwitresearch.com",
    phone: "+916 267 101417",
    address: "303, Atulya IT Park, Indore, India (452001)",
  },
}) {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
    message: "",
    captcha: false,
  });

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((s) => ({ ...s, [name]: type === "checkbox" ? checked : value }));
  };

  const submitForm = async (e) => {
    e.preventDefault();
    if (onSampleSubmit) await onSampleSubmit(form);
  };

  return (
    <>
      <section className="report-hero" role="banner">
        <div className="hero__media">
          <div className="media__cover">
            {coverSrc ? <img src={coverSrc} alt="Report cover" /> : <div className="cover__ph" />}
          </div>
        </div>

        <div className="hero__content">
          <h1 className="hero__title">{title}</h1>
          <p className="hero__subtitle">{subtitle}</p>

          <div className="hero__actions">
            <button className="btn btn--inquiry" onClick={onInquiry}>
              {inquiryLabel}
            </button>
            <button className="btn btn--buy" onClick={onBuy}>
              {buyLabel}
            </button>
          </div>

          <ul className="hero__meta">
              {formats.length > 0 && (
            <div className="media__formats">
              {formats.map((f, i) => (
                <img key={i} src={f.src} alt={f.alt} className="format__icon" />
              ))}
            </div>
          )}
            <li><span className="meta__label">Report Code:</span><span className="meta__value">{meta.code}</span></li>
            <li><span className="meta__label">Page:</span><span className="meta__value">{meta.pages}</span></li>
            <li><span className="meta__label">Published Date:</span><span className="meta__value">{meta.published}</span></li>
            <li><span className="meta__label">Author Name:</span><span className="meta__value">{meta.author}</span></li>
          </ul>
        </div>
      </section>

      {enableSampleForm && (
        <section className="report-grid">
          {/* Left: form */}
          <div className="ds-card">
            <div className="ds-card__header">
              <span className="ds-pill">DOWNLOAD SAMPLE</span>
            </div>

            <p className="ds-lead">
              “Download a sample report and explore the depth and quality of our research.”
            </p>

            <form className="ds-form" onSubmit={submitForm}>
              <label className="ds-field">
                <span className="ds-label">Full Name</span>
                <input name="fullName" value={form.fullName} onChange={onChange} required />
              </label>

              <label className="ds-field">
                <span className="ds-label">Business Email</span>
                <input type="email" name="email" value={form.email} onChange={onChange} required />
              </label>

              <label className="ds-field">
                <span className="ds-label">Phone Number</span>
                <input type="tel" name="phone" value={form.phone} onChange={onChange} required />
              </label>

              <div className="ds-row">
                <label className="ds-field">
                  <span className="ds-label">Company Name</span>
                  <input name="company" value={form.company} onChange={onChange} />
                </label>
                <label className="ds-field">
                  <span className="ds-label">Job title</span>
                  <input name="jobTitle" value={form.jobTitle} onChange={onChange} />
                </label>
              </div>

              <label className="ds-field">
                <span className="ds-label">Message</span>
                <textarea rows="3" name="message" value={form.message} onChange={onChange} />
              </label>

              <label className="ds-captcha">
                <input type="checkbox" name="captcha" checked={form.captcha} onChange={onChange} required />
                <span>I am not a robot.</span>
              </label>

              <button type="submit" className="ds-submit">SUBMIT</button>
            </form>
          </div>

          {/* Right: sidebar */}
          <aside className="sis-card" aria-label="Sample information">
            <div className="sis-image-wrap">
              {sidebar.imageSrc ? (
                <img className="sis-image" src={sidebar.imageSrc} alt="Team collaborating" />
              ) : (
                <div className="sis-image ph" />
              )}
            </div>

            <h3 className="sis-title">
              <span>{sidebar.titleTop}</span><br />
              <span className="sis-title--accent">{sidebar.titleBottom}</span>
            </h3>

            <div className="sis-icon" aria-hidden="true">
             <img src={contact} alt="contact-icon" />
            </div>

            <div className="sis-contact">
              <p className="sis-label">Email:</p>
              <a className="sis-link" href={`mailto:${sidebar.email}`}>{sidebar.email}</a>

              <p className="sis-label">Contact Number :</p>
              <p className="sis-text">{sidebar.phone}</p>

              <p className="sis-label">Address:</p>
              <p className="sis-text">{sidebar.address}</p>
            </div>
          </aside>
        </section>
      )}
    </>
  );
}
