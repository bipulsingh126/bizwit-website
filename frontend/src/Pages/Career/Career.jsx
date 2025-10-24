import React from 'react'
import './Career.css'
import bg from '../../assets/thridHI.png'
import work from '../../assets/why-work.png'
import heroImg from '../../assets/benifit.png'
import value from '../../assets/ourValues.png'
import noiseBg from '../../assets/noisebg.jpg'
import Connect from '../../Components/Connect/Connect'
import office from '../../assets/officeSpace.png'
import team from '../../assets/teamsMem.png'

const Career = () => {
  return (
    <>
     <section className="career-hero">
      <div className="career-hero__wrap">
        {/* Left copy */}
        <div className="career-hero__left">
          <h1 className="career-hero__title">
            <span>Start Your Career in</span>
            <br />
            <span className="career-hero__brand">Bizwit Research</span>
          </h1>

          <p className="career-hero__lead">
            We are the people who dream &amp; do.
          </p>

          <div className="career-hero__actions">
            <a href="#about" className="career-hero__btn career-hero__btn--primary">ABOUT US</a>
            <a href="#vacancies" className="career-hero__btn career-hero__btn--ghost">VACANCIES</a>
          </div>

          <p className="career-hero__hot">
            Hot vacancies: UX Designer, JS Developer, iOS Developer, Product Mannager
          </p>
        </div>

        {/* Right image mosaic */}
        <div className="career-hero__right">
          <div className="career-hero__frame"></div>

          <img src={bg} alt="Happy teammate" className="career-hero__img career-hero__img--main" />

          <div className="career-hero__stack">
            <img src={office} alt="Office space" className="career-hero__img career-hero__img--small" />
            <img src={team} alt="Team talk" className="career-hero__img career-hero__img--small" />
          </div>
        </div>
      </div>
    </section>


                   {/* WHY SHOULD WORK HERE  */}
    <section className='why-work'>
        <div className='common-tag-container'>
               <button className='tag'>MAIN REASONS WHY YOU SHOULD WORK HERE</button>
               <p className='desc'>Being a part of Outer Web means enjoying every working day!</p>
        </div>
        <img src={work} alt="why-work" className='workImg' />
    </section>

      {/* BENEFIT */}
      <section className="benefits">
      <div className="benefits__wrap">
        <div className="benefits__left">
          <span className="tag">BENEFITS</span>
          <h1 className="title">Feel and Do Your Best</h1>
          <p className="lead">
            We really care about our employees.
          </p>

          <p className="desc">
            Working in Bizwit Research, you get a range of benefits, resources, and expert guidance to help you prioritize your well‑being and find a work‑life balance. The main benefits include:
          </p>

          <ul className="list">
            <li>Full healthcare coverage for you and your family.</li>
            <li>Wellbeing reimbursement (up to $500 every month).</li>
            <li>Home office budget to make your home workplace comfortable.</li>
          </ul>

          <p className="fineprint">
            You also can get paid sick leaves, 28 vacation days per year, separate budgets on education, your hobbies, family time, and so on. Being a part of our team is beneficial and really exciting!
          </p>

          <button className="cta">Learn more</button>
        </div>

        <div className="benefits__right">
          <img src={heroImg} alt="Person working on a laptop" className="benefits__image" />
        </div>
      </div>
    </section>

    {/* EMPLOYEE NUMBERS */}
   <section className="career-stats">
      <div className="career-stats__wrap">
        <div className="career-stats__item">
          <div className="career-stats__value">
            <span>1000</span><span className="career-stats__suffix">+</span>
          </div>
          <div className="career-stats__label">Employees worldwide</div>
        </div>

        <div className="career-stats__item">
          <div className="career-stats__value">
            <span>10</span>
          </div>
          <div className="career-stats__label">Years of work</div>
        </div>

        <div className="career-stats__item">
          <div className="career-stats__value">
            <span>5</span>
          </div>
          <div className="career-stats__label">Offices around the world</div>
        </div>

        <div className="career-stats__item">
          <div className="career-stats__value">
            <span>50</span><span className="career-stats__suffix">+</span>
          </div>
          <div className="career-stats__label">Fascinating projects</div>
        </div>
      </div>
    </section>

    {/* VALUE SECTION */}
    <section className='our-value'>
       <img src={value} alt="Employee-number" className='our-value-img' />
    </section>

    {/* CAREER START */}

     <section className="career-cta" style={{ backgroundImage: `url(${noiseBg})` }}>
      <div className="career-cta__content">
        <div className="career-cta__text">
          <h2 className="career-cta__title">
            Start Your Career in Bizwit Research
          </h2>

          <p className="career-cta__subtitle">
            If you are motivated and driven to succeed, we invite you to apply today!
          </p>

          <ul className="career-cta__features">
            <li>Friendly team</li>
            <li>Beautiful office</li>
            <li>Flexible working hours</li>
            <li>Competitive salary</li>
          </ul>
        </div>

        <a className="career-cta__button" href="#apply">
          APPLY NOW
        </a>
      </div>
    </section>

    {/* CONNECT SECTION */}
    <Connect/>
    </>
  )
}

export default Career