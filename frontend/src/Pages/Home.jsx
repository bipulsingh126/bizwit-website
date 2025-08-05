 import React from 'react'
import Hero from '../Components/Hero/Hero'
import Card from '../Components/Card/Card'
import Megatrends from '../Components/Megatrends/Megatrends'
import Bizcronicles from '../Components/Bizcronicles/Bizcronicles'
import Trending from '../Components/Trending/Trending'

 
 const Home = () => {
   return (
     <div>
        <Hero/>
        <Card/>
        <Megatrends/>
        <Bizcronicles/>
        <Trending/>
        
        
     </div>
   )
 }
 
 export default Home