import React from 'react'
import tyreData from '@/data/tyreData'
import TyreBrandCard from './TyreBrandCard'

const BottomHeading = () => {
    return (
        <section className="bg-[url('/images/backgroundImage/1.png')] bg-cover bg-center bg-no-repeat py-16">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 items-center'>
                <h1 className='text-center font-bold text-2xl md:text-3xl lg:text-4xl px-6 md:px-20 mt-20 tracking-wide'>Recommended Tyres That Make Your Car Proud</h1>
                <p className='text-left font-light px-6 md:px-10 lg:px-20 mt-20'>Regular tire rotation ensures even wear, extending the life of your tires and improving vehicle performance If your car struggles to start, the lights dim when idling or the battery is over</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-[1200px] mx-auto mt-16">

                {tyreData.map((item) => (
                    <TyreBrandCard key={item.id} item={item} />
                ))}

            </div>

        </section>
    )
}

export default BottomHeading
