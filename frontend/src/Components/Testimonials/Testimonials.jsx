import React from 'react';
import './Testimonials.css';
import testimonial_img from '../../assets/testimonial.png';

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <div className="testimonials-header">
        <div className="testimonials-tag">TESTIMONIALS</div>
      </div>
      
      <div className="testimonials-content">
        <div className="testimonials-left">
          <h2 className="testimonials-title">
            <span className="client-text">Client</span> <span className="results-text">Results</span> <span style={{ color: '#0B7492' }}>That Tell the Story.</span>
          </h2>
          <p className="testimonials-description">
            Here are some chronicles of businesses that dared to ask the right questions — and found powerful answers.
          </p>
          <div className="button-rating-wrapper">
            <button className="read-all-btn">Read All Testimonials</button>
            <div className="rating-container">
            <img src={testimonial_img} alt="Rating stars" className="rating-image" />
            <div className="rating-text">4.9<br/>Trust Pilot</div>
            </div>
</div>
        </div>
        
        <div className="testimonials-right">
          <div className="quote-card">
            <div className="quote-mark">"</div>
            <p className="quote-text">
              "What sets Bizwit apart is their ability to simplify complexity. From sector-specific reports to strategic consulting, they are our go-to research partner."
            </p>
            <div className="quote-author">
              <div className="author-image"></div>
              <div className="author-info">
                <h4>Arun Bansal</h4>
                <p>CellularVista - Managing Director</p>
              </div>
            </div>
            <div className="quote-navigation">
              <button className="nav-btn prev-btn">←</button>
              <button className="nav-btn next-btn">→</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;