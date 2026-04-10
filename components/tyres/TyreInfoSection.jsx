import Image from 'next/image'
import React from 'react'
import TyreInfo2 from './TyreInfo2'

const TyreInfoSection = () => {
  return (
    <>
      <div className="relative grid grid-cols-1 md:grid-cols-2 min-h-[500px] md:min-h-[750px] mt-16 md:mt-20">

        <div className="absolute inset-0 md:hidden">
          <Image
            src="/images/TyreInfo/1.jpg"
            alt="Car Image"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative w-full h-[300px] md:h-auto hidden md:block">
          <Image
            src="/images/TyreInfo/1.jpg"
            alt="Car Image"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 text-white px-6 md:px-16 lg:px-28 py-10 md:py-16 flex flex-col justify-start bg-[#0f4ea6]/80 md:bg-[#0f4ea6]">

          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
            Easy To Find Cheap Tyres Here
          </h3>

          <p className="mb-4 leading-relaxed font-light text-sm md:text-base">
            Cheap tyres are not easy to find these days - especially budget tyres of good quality. By using the easy to use search option on our website, you will find the right tyres for your budget in no time.
          </p>

          <p className="mb-4 leading-relaxed font-light text-sm md:text-base">
            Just like in our premium range, we also have all types of tyres Leicester available in our mid-range and budget tyre range. If you need advice, please do not hesitate to contact us.
          </p>

          <p className="mb-4 leading-relaxed font-light text-sm md:text-base">
            These tyres are a good compromise for all who want decent quality tyres without busting their budget.
          </p>

          <h3 className="text-lg md:text-xl font-semibold mt-4 mb-2">
            In our budget range you can find brands like:
          </h3>

          <p className="leading-relaxed font-light text-sm md:text-base">
            Excelon, Hifly, Kumho, Jinyu, Goodride, Atlas, Imperial, Firemax and many, many more.
          </p>

          <p className="mb-4 leading-relaxed mt-4 font-light text-sm md:text-base">
            There are many cheap tyre brands out there. We are very careful when choosing the budget tyres for our customers. We know what our customers want and we do not make any compromises on safety.
          </p>

        </div>

      </div>

      <TyreInfo2 />
    </>
  )
}

export default TyreInfoSection