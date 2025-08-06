import React from 'react'
import Hero from '../Components/Hero/Hero'
import Card from '../Components/Card/Card'
import Megatrends from '../Components/Megatrends/Megatrends'
import Bizcronicles from '../Components/Bizcronicles/Bizcronicles'
import Trending from '../Components/Trending/Trending'
import Industry from '../Components/Industry/Industry'
import CaseStudy from '../Components/Industry/CaseStudy'
import OurClient from '../Components/OurClient/OurClient'

 
 const Home = () => {
   return (
     <div>
        <Hero/>
        <Card/>
        <Megatrends/>
        <Bizcronicles/>
        <Trending/>
        <Industry/>
        <CaseStudy/>
        <OurClient/>
     </div>
   )
 }
 
 export default Home