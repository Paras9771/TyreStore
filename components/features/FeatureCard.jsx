import React from 'react'
import featuresData from '../../data/FeatureData'
import Image from 'next/image'

const FeatureCard = () => {
  return (
    <div className="max-w-[1300px] mx-auto grid md:grid-cols-2 gap-10 px-6 py-6">
      
      {featuresData.map((item) => (
        <div key={item.id} className="flex items-start gap-4 pr-10">
          
          <Image
            src={item.icon}
            width={60}
            height={60}
            alt={item.title}
            className="shrink-0 "
          />

          <div>
            <h3 className=" font-bold text-black mb-2 text-2xl">
              {item.title}
            </h3>

            <p className="text-black leading-relaxed">
              {item.description}
            </p>
          </div>

        </div>
      ))}

    </div>
  )
}

export default FeatureCard