import React from "react";
import "./GeneralData.css";
import noiseBg from '../../assets/noisebg.jpg'

export default function GeneralData() {
  return (
    <section className="gdpr">
      <div className="gdpr__wrap">
        {/* Header banner */}
        <div className="gdpr__banner" style={{ backgroundImage: `url(${noiseBg})` }}>
          <h1 className="gdpr__title">GENERAL DATA PROTECTION REGULATION(GDPR)</h1>
        </div>

        {/* Effective date */}
        <p className="gdpr__date">
          <strong>Effective Date:</strong> 25 May 2025
        </p>

        {/* Introduction */}
        <h2 className="gdpr__h2">Introduction</h2>
        <p className="gdpr__p">
          In today’s interconnected, data‑driven world, responsible data handling and user privacy are critical pillars of trust.
          At <strong>Bizwit Research and Consulting LLP</strong> (“Bizwit Research”; “we”, “our”, or “us”), we understand the immense value of data and the obligations that come with managing it.
          As a firm specializing in market research and consulting, we collect and analyse large volumes of information—making it imperative to align our practices with the strongest global standards, including the <strong>General Data Protection Regulation (GDPR)</strong>.
        </p>
        <p className="gdpr__p">
          The GDPR, enforced across the European Union (EU) since <strong>25 May 2018</strong>, mandates how organizations collect, process, store, and protect personal data of EU residents.
          It emphasizes transparency, user control, and accountability in data usage.
          This policy outlines how Bizwit Research ensures compliance and safeguards your rights.
        </p>

        <hr className="gdpr__rule" />

        {/* Commitment */}
        <h2 className="gdpr__h2">Our Commitment to GDPR Compliance</h2>
        <p className="gdpr__p">
          At Bizwit Research, we are deeply committed to data privacy, integrity, and compliance.
          We believe that ethical data practices foster trust and long‑term relationships with our clients and users.
          We have implemented internal systems, controls, and awareness programs to align our operations with the GDPR framework.
        </p>
        <ul className="gdpr__list">
          <li>Ensuring transparency in how personal data is collected, processed, and stored.</li>
          <li>Establishing procedures for responding to data subject rights.</li>
          <li>Empowering our clients with tools and information to control their data.</li>
        </ul>

        <hr className="gdpr__rule" />

        {/* Applicability */}
        <h2 className="gdpr__h2">Applicability of GDPR</h2>
        <p className="gdpr__p">
          GDPR applies not only to companies within the EU, but also to those outside the EU who:
        </p>
        <ul className="gdpr__list">
          <li>Offer goods or services to EU residents.</li>
          <li>Monitor the behaviour of individuals within the EU.</li>
        </ul>
        <p className="gdpr__p">
          As Bizwit Research serves a global clientele, including EU‑based organizations and individuals, we have undertaken several measures to fully comply with the regulation.
        </p>

        <hr className="gdpr__rule" />

        {/* Readiness */}
        <h2 className="gdpr__h2">Our GDPR Readiness Measures</h2>
        <p className="gdpr__p">
          We have taken a comprehensive, organization‑wide approach to ensure GDPR compliance, including but not limited to the following:
        </p>

        <h3 className="gdpr__h3">1. Data Governance & Privacy Assessments</h3>
        <ul className="gdpr__list">
          <li>Conducted internal data audits and privacy impact assessments.</li>
          <li>Identified lawful bases for processing personal data (e.g., consent, legitimate interest, contract performance).</li>
        </ul>

        <h3 className="gdpr__h3">2. Enhanced Data Rights</h3>
        <p className="gdpr__p">We support and enable the following rights of EU individuals under GDPR:</p>
        {/* 2. Enhanced Data Rights (continued bullets) */}
<ul className="gdpr__list">
  <li>Right to Access — Know what data we hold.</li>
  <li>Right to Rectification — Request correction of inaccurate data.</li>
  <li>Right to Erasure (Right to be Forgotten) — Delete personal data upon valid request.</li>
  <li>Right to Restrict Processing — Limit how your data is used.</li>
  <li>Right to Data Portability — Request transfer of your data to another service.</li>
  <li>Right to Object — Object to processing based on legitimate interests.</li>
  <li>Rights related to Automated Decision Making — Transparency in profiling or AI‑driven decisions.</li>
</ul>

<h3 className="gdpr__h3">3. Consent Management</h3>
<ul className="gdpr__list">
  <li>Updated consent mechanisms to ensure clear, affirmative, and revocable opt‑ins.</li>
  <li>Logged time‑stamped consent records.</li>
  <li>Made it easy for users to withdraw consent at any time.</li>
</ul>

<h3 className="gdpr__h3">4. Data Security & Encryption</h3>
<ul className="gdpr__list">
  <li>Implemented robust technical and organizational controls.</li>
  <li>All sensitive data is encrypted both in transit and at rest.</li>
  <li>Access controls, password protections, and multi‑factor authentication are in place.</li>
  <li>Access to systems is restricted to authorized personnel only.</li>
</ul>

<h3 className="gdpr__h3">5. Third‑Party & International Transfers</h3>
<ul className="gdpr__list">
  <li>Conducted risk assessments and contractual commitments with all third‑party processors and partners.</li>
  <li>Implemented appropriate safeguards for international data transfers, including Standard Contractual Clauses (SCCs) where necessary.</li>
</ul>

<h3 className="gdpr__h3">6. Data Breach Response & Notification</h3>
<ul className="gdpr__list">
  <li>Developed a GDPR‑compliant data breach response plan.</li>
  <li>Established procedures for breach identification, escalation, investigation, and notification to relevant supervisory authorities and affected individuals, as required by law.</li>
</ul>

<h3 className="gdpr__h3">7. Workforce Training</h3>
<ul className="gdpr__list">
  <li>Integrated GDPR awareness and data privacy into induction and annual employee training.</li>
  <li>Ensured every team member, from research to sales, understands and respects data subject rights and our responsibilities.</li>
</ul>

<hr className="gdpr__rule" />

<h2 className="gdpr__h2">Shared Responsibility with Clients</h2>
<p className="gdpr__p">
  While Bizwit Research maintains responsibility for safeguarding data in our systems, compliance is a shared responsibility. Clients using our services must ensure their own internal processes, data handling, and data sharing practices are also GDPR‑compliant.
</p>
<p className="gdpr__p">
  We empower clients by:
</p>
<ul className="gdpr__list">
  <li>Offering clear role definitions for data controllers and processors.</li>
  <li>Enabling access management controls.</li>
  <li>Supporting GDPR‑aligned data retention, rectification, and deletion functionalities.</li>
</ul>

<hr className="gdpr__rule" />

<h2 className="gdpr__h2">Security by Design and Default</h2>
<p className="gdpr__p">
  From product design to backend architecture, we integrate security and privacy at every step. Our infrastructure supports:
</p>
<ul className="gdpr__list">
  <li>Multi‑layered encryption.</li>
  <li>Security vulnerability monitoring.</li>
  <li>Incident response playbooks.</li>
  <li>Minimal data retention policies aligned with contractual and legal requirements.</li>
</ul>

<hr className="gdpr__rule" />

<h2 className="gdpr__h2">Data Protection Officer (DPO)</h2>
<p className="gdpr__p">
  We have a dedicated <strong>Data Protection Desk</strong> to oversee GDPR compliance, answer data subject requests, and liaise with supervisory authorities when needed.
</p>
<p className="gdpr__p">
  If you have questions regarding how we collect, store, or use your personal data—or to exercise your GDPR rights—please contact:
</p>
<p className="gdpr__p"><strong>Email:</strong> info@bizwitresearch.com</p>

<hr className="gdpr__rule" />

<h2 className="gdpr__h2">Continuous Improvement</h2>
<p className="gdpr__p">
  Our GDPR journey is ongoing. We regularly review and refine our data protection practices to meet evolving legal obligations and user expectations. We are committed to staying transparent, responsive, and ethical in everything we do with your data.
</p>
<p className="gdpr__p">
  To learn more, please review our <a className="gdpr__link" href="#privacy">Privacy Policy</a> or write to us at 
</p>
<p className="gdpr_email">
    <a className="gdpr__email" href="mailto:info@bizwitresearch.com">info@bizwitresearch.com</a>.
</p>

<hr className="gdpr__rule" />

<p className="gdpr__consult"><strong>Bizwit Research and Consulting LLP</strong></p>
<p className="gdpr__consult_p">Empowering data‑driven decisions with integrity and compliance.</p>

      </div>
    </section>
  );
}
