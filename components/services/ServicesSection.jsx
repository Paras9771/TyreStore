import React from 'react'
import OurServicesCard from './ServiceCard'

const ServicesSection = () => {
  return (
    <div>
      <h1 className='text-3xl md:text-4xl lg:text-5xl m-10 font-bold text-[#023371] text-center'>Our Services</h1>
      <div>
        <OurServicesCard></OurServicesCard>
      </div>
    </div>
  )
}

export default ServicesSection;
