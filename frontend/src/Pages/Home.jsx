import React from 'react'
import Hero from '../Components/Hero/Hero'
import Card from '../Components/Card/Card'
import Megatrends from '../Components/Megatrends/Megatrends'
import Bizcronicles from '../Components/Bizcronicles/Bizcronicles'
import Trending from '../Components/Trending/Trending'
import Industry from '../Components/Industry/Industry'
import CaseStudy from '../Components/Industry/CaseStudy'
import OurClient from '../Components/OurClient/OurClient'
import Testimonials from '../Components/Testimonials/Testimonials'
import Connect from '../Components/Connect/Connect'


 
const Home = ({ heroRef }) => {
  return (
    <div>
      <div ref={heroRef}>
        <Hero />
      </div>
      <Card />
      <Megatrends />
      <Bizcronicles />
      <Trending />
      <Industry />
      <CaseStudy />
      <OurClient />
      <Testimonials />
      <Connect />
    </div>
   )
 }
 
 export default Home