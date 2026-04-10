"use client"

import Image from 'next/image'
import Link from 'next/link'
import { services } from '../../data/servicesData'
import React, { useState } from 'react'

const OurServicesCard = () => {

    const [showAll, setshowAll] = useState(false)

    let visibleServices;
    if(showAll) {
        visibleServices = services;
    } else {
        visibleServices = services.slice(0,12)
    }

    return (
        <div className='max-w-7xl mx-auto'>
            <div className='max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 '>
                {visibleServices.map((service) => (
                    <Link href={service.link} key={service.id}>
                        <div className="group whitespace-nowrap relative cursor-pointer p-3 md:p-4 flex flex-col items-center justify-center bg-white/20 backdrop-blur-lg shadow transition-all duration-300 
                    hover:scale-105 hover:shadow-2xl hover:bg-blue-900">

                            <Image
                                src={service.image}
                                width={80}
                                height={80}
                                alt={service.title}
                                className="opacity-70 rounded-lg w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
                            />

                            <h2 className="absolute top-3 left-1/2 -translate-x-1/2 text-black font-bold text-xs md:text-sm lg:text-base     whitespace-nowrap 
                    transition-colors mt-6 duration-300 group-hover:text-white">
                                {service.title}
                            </h2>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="flex justify-center mt-8">
                <button
                    onClick={() => setshowAll(!showAll)}
                    className="text-lg md:text-2xl lg:text-3xl font-semibold text-white px-6 md:px-8 lg:px-10 py-2 md:py-3 lg:py-4 cursor-pointer bg-[url('/images/icons/button.png')] bg-center bg-no-repeat bg-contain">
                    {showAll ? "Show Less" : "Show More"}
                    
                </button>
            </div>
        </div>
    )
}

export default OurServicesCard