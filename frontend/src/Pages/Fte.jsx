import React from 'react'
import FteModel from '../Components/Fte/FteModel'
import FteService from '../Components/Fte/FteService'
import WhyFte from '../Components/Fte/WhyFte'
import HowItWorks from '../Components/Fte/HowItWorks'
import SuccessMetrics from '../Components/Fte/SuccessMetrics'
import Contect from './ContectUs/Contect'
import CaseStudy from '../Components/Industry/CaseStudy'

const Fte = () => {
  return (
    <>
        <FteModel />
        <FteService/>
        <WhyFte/>
        <HowItWorks/>
        <SuccessMetrics/>
        <CaseStudy/>
        <Contect/>
    </>
  )
}

export default Fte