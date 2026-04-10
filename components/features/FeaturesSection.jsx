import React from 'react'
import FeatureCard from './FeatureCard'


const FeaturesSection = () => {
  return (
    <div>
        <div className='mt-8 lg:mt-12'>
        <h1 className='flex justify-center  text-black font-bold items-center text-2xl sm:text-3xl md:text-4xl opacity-70'>Welcome To Mstrain</h1>
        <div className='flex justify-center items-center gap-2 lg:gap-3 mt-3'>
            <div className='  w-10 lg:w-16 h-[2px] bg-blue-600'></div>
            <div className='w-4 h-4 border-2 border-blue-600 rounded-full'></div>
            <div className='w-10 lg:w-16 h-[2px] bg-blue-600'></div>
        </div>
    </div>
      <FeatureCard></FeatureCard>
    </div>
  )
}

export default FeaturesSection
