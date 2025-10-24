import React from 'react'
import './AboutUs.css'
import SecondHero from '../../Components/Hero/SecondHero'
import bg from '../../assets/aboutUsBg.png';
import market from '../../assets/market.png';
import handshake from '../../assets/handshake.jpg';
import mind from '../../assets/mind.png';
import scaleup from '../../assets/scaleup.png';
import bird from '../../assets/bird.png';
import expertise from '../../assets/expertise.png';
import teamImg1 from '../../assets/teamImg1.png';
import teamImg2 from '../../assets/teamImg2.png';
import wc1 from '../../assets/work-culture1.png';
import wc2 from '../../assets/work-culture2.png';
import wc3 from '../../assets/work-culture3.png';
import wc4 from '../../assets/work-culture4.png';
import wc5 from '../../assets/work-culture5.png';
import wc6 from '../../assets/work-culture6.png';
import wc7 from '../../assets/work-culture7.png';
import wc8 from '../../assets/work-culture8.png';

const AboutUs = () => {

   const images = [
      wc1,
      wc2,
      wc3,
      wc4,
      wc5,
      wc6,
      wc7,
      wc8
  ];

    const teamMembers = [
  {
    name: "Amol Meshram",
    title: "Co Founder",
    image: teamImg1, // replace with your image path
    description: [
      "Amol Meshram is a dynamic entrepreneur and strategic leader with over 7 years of experience in building and scaling businesses across diverse industries. As Co-Founder of Bizwit Research & Consulting LLP, he plays a pivotal role in shaping the firm’s vision, driving business development, and optimising operations to deliver high-impact results for clients.",
      "Holding an MBA in Finance and a Bachelor’s degree in Electronics & Instrumentation, Amol brings a unique blend of analytical rigour and practical insight to his leadership approach. His deep expertise in market research, consumer behaviour, and digital strategy enables him to craft data-driven solutions that address real-world business challenges.",
      "Amol is known for his hands-on leadership style, strong client relationship management, and focus on long-term, sustainable growth. His experience spans strategic planning, digital marketing, and financial oversight—ensuring the effective use of resources while maintaining a strong competitive edge.",
    ],
  },
  {
    name: "Honey Rajput",
    title: "Co Founder",
    image: teamImg2, // replace with your image path
    description: [
      "With over a decade of experience in market research and strategic consulting, Honey Rajput has played a pivotal role in shaping Bizwit Research & Consulting LLP into a trusted partner for businesses worldwide.",
      "She brings deep expertise in delivering data-driven insights and tailored solutions that empower organizations to make informed, strategic decisions. As Co-Founder of Bizwit Research & Consulting LLP, Honey leads initiatives that translate complex market data into actionable strategies, fostering growth and competitive advantage across diverse industries.",
      "Holding an MBA in Marketing and a Bachelor’s degree in E-Commerce, Honey’s leadership style blends strategic vision with a strong focus on digital innovation, customer-centric growth, and data-driven decision-making. Passionate about innovation, mentoring emerging talent, and driving sustainable success, Honey consistently inspires excellence throughout the organisation and beyond.",
    ],
  },
];

 const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollBy({ left: -300, behavior: "smooth" });
    } else {
      current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };
  return (
 <>
   <div className='about-hero-button'>
    <button className='tag'>WHO WE ARE</button>
   </div>
  <SecondHero
       className='hsh_aboutUs'
       title={ <>
      Empowering Insights.<br/> Enabling Decisions.
     </>}
       subtitle='Bizwit Research is a global market research and consulting company helping businesses make data-driven decisions through actionable intelligence, strategic insights, and high-quality custom studies.'
       primaryCta={{ label: "DOWNLOAD INDIA ENTRY PLAYBOOK", href: "/#" }}
       image={{ src: bg, alt: "Background Image" }}
       />

     {/* ABOUT SECTION */}

       <section className="about-stats">
         <div className="common-tag-container">
            <button className='tag'>MARKET RESEARCH FOR THE 21st CENTURY</button>
          </div>
        <div className="as-container">

          <div className="as-band">
            <div className="as-cards">
              <div className="as-card as-card--clients">
                <div className="as-left">
                    <p className="as-title">Clients in</p>
                  <span className="as-icon">
                    <img src={market} alt="market-icon" />
                  </span>
                    <span className='as-value'>40+</span>
                    <p className="as-value">countries</p>
            
                </div>
                <div className="as-thumb">
                  <img
                    src={handshake}
                    alt="hand-shake"
                  />
                </div>
              </div>

              <div className="as-card  as-card--respondents">
                <div className="as-left">
               
                    <p className="as-title">Primary respondents</p>
                    <p className="as-value">1000+</p>
              
                  <span className="as-icon">
                    <img src={mind} alt="mind-icon" />
                  </span>
        
                </div>
                <div className="as-avatars">
                  <img src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=64&h=64&crop=faces&auto=format" alt="" />
                  <img src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=64&h=64&crop=faces&auto=format" alt="" />
                  <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=64&h=64&crop=faces&auto=format" alt="" />
                </div>
              </div>

              <div className="as-card as-card--reports">
                <div className="as-left">
                  <span className="as-icon">
                    <img src={scaleup} alt="scale-up" />
                  </span>
                  <p className="as-title">reports delivered</p>
                    <p className="as-value">1000+</p>
                </div>

              </div>
            </div>

           <div className='caption-container'>
             <p className="as-caption">
              Bizwit Research is the premier provider of market intelligence and consulting services, serving clients in over 150
              countries. In addition to these, BRC also carries out business development and client engagement through its US and UK
              offices.
            </p>
           </div>
          </div>
        </div>
      </section>


      {/* VISION SECTION */}
      <section className='about-vision'>
           <img src={bird} alt="bird-img"  className='visionImg'/>
           <div className='vision-content'>
      <h1 className='title'>Our Vision</h1>
      <p className='desc'>At Bizwit Research and Consulting, our vision is to empower businesses with reliable insights and strategic guidance that drive intelligent decision-making and long-term success. We strive to be a trusted partner for organizations seeking growth, innovation, and competitive advantage in a dynamic global marketplace by transforming data into actionable knowledge.</p>
           </div>
      </section>


      {/* EXPERTISE */}
      <section className='ab-expertise'>
           <div className='common-tag-container'>
               <button className='tag'>OUR EXPERTISE</button>
           </div>
           <img src={expertise} alt="expertise" className='expertiseImg' />
      </section>

      {/* EXCUTIVE TEAM */}
      <section className="executive-section">
      <div className="common-tag-container">
        <button className="tag">OUR EXECUTIVE TEAM</button>
      </div>

      {teamMembers.map((member, index) => (
        <div
          key={index}
          className={`executive-member ${index % 2 !== 0 ? "reverse" : ""}`}
        >
          <img
            src={member.image}
            alt={member.name}
            className="executive-image"
          />
          <div className="executive-content">
            <h2>
              {member.name} – <span>{member.title}</span>
            </h2>
            {member.description.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      ))}
    </section>

       {/* WORK CULLTURE */}
       <section className="work-culture-section">
      <div className="work-culture-header">
        <button className="tag">WORK CULTURE & OUR MOTTO</button>
        <h2>
          “<span>Work With Purpose.</span> Grow With Data.” 
        </h2>
        <p>
          Bizwit Research is a global market research and consulting company helping 
          businesses make data-driven decisions through actionable intelligence, 
          strategic insights, and high-quality custom studies.
        </p>
      </div>

      <div className="work-culture-gallery">
        {images.map((img, index) => (
          <div className="work-culture-image-box" key={index}>
            <img src={img} alt={`work culture ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>

    {/* connect us */}
  <section className="about-connect">
      <div className="demo-container">
        <p>
          Ready to grow your business with research-backed insights?
        </p>

        <div className="contact-btn">
          <button className="contact-us">CONTACT US</button>
          <button className="explore-services">EXPLORE OUR SERVICES</button>
        </div>
      </div>
    </section>
 </>
  )
}

export default AboutUs