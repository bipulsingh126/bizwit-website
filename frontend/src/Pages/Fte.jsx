import React from 'react'
import FteModel from '../Components/Fte/FteModel'
import FteService from '../Components/Fte/FteService'
import WhyFte from '../Components/Fte/WhyFte'
import HowItWorks from '../Components/Fte/HowItWorks'
import SuccessMetrics from '../Components/Fte/SuccessMetrics'
import CaseStudy from '../Components/Industry/CaseStudy'
import Connect from '../Components/Connect/Connect'

const Fte = () => {
  return (
    <>
        <FteModel />
        <FteService/>
        <WhyFte/>
        <HowItWorks/>
        <SuccessMetrics/>
        <CaseStudy/>
        <Connect/>
    </>
  )
}

export default Fte