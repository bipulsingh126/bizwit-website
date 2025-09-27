import "./TestAll.css";
import { testi, testimonial } from "../../assets/assets";
import OurClient from "../OurClient/OurClient";

const TestAll = () => {
  const testimonials = [
    {
      id: 1,
      quote: "What sets Bizwit apart is their ability to simplify complexity. From sector-specific reports to strategic consulting, they are our go-to research partner.",
      author: "Arun Bansal",
      company: "CellularVista - Managing Director"
    },
    {
      id: 2,
      quote: "What sets Bizwit apart is their ability to simplify complexity. From sector-specific reports to strategic consulting, they are our go-to research partner.",
      author: "Arun Bansal",
      company: "CellularVista - Managing Director"
    },
    {
      id: 3,
      quote: "What sets Bizwit apart is their ability to simplify complexity. From sector-specific reports to strategic consulting, they are our go-to research partner.",
      author: "Arun Bansal",
      company: "CellularVista - Managing Director"
    },
    {
      id: 4,
      quote: "What sets Bizwit apart is their ability to simplify complexity. From sector-specific reports to strategic consulting, they are our go-to research partner.",
      author: "Arun Bansal",
      company: "CellularVista - Managing Director"
    }
  ];

  return (
    <div className="test-page-container">
      <div className="test-title-container">
        <p className="test-title">TESTIMONIALS</p>
      </div>
      <p className="test-subtitle">Trusted Client <span>Review</span> </p>
      <p className="test-description">
        Learn how our trusted financial consulting has driven success for businesses—through real stories and client testimonials. Learn how our trusted financial consulting has driven success for businesses—through real stories and client testimonials.
      </p>
      
      <div className="test-container">
        <div className="test-title-container1">
        <div className="br1-left"></div>    
          <p className="test-title1">REVIEWS</p>
        <div className="br1-right"></div>  
        </div>
        <p className="test-subtitle1">
          Client <span>Success Stories</span> That Speak Volumes
        </p>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="quote-card">
              <img className="quote-mark" src={testi} alt="" />
              <p className="quote-text">"{testimonial.quote}"</p>
              <div className="quote-author">
                <div className="author-image"></div>
                <div className="author-info">
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="arrows">
          <div className="arrow arrow-left"></div>
          <div className="arrow arrow-right"></div>
        </div>
      </div>
      <div className=" testimonial-container">
         <div className="br2-left"></div> 
        <div className=" testimonial">
          <div className=" star-test">
             <img className=" star-test1" src={ testimonial} alt="" />
          </div>
            <div className=" star-test2">
            <p className="tile1">4.9</p>
            <p className="tile2">Trust Pilot</p>
            </div>
        </div>
           <div className="br2-right"></div>  
      </div>
      <div className=" our-client">
        <OurClient/>
      </div>
    </div>
  );
};

export default TestAll;
