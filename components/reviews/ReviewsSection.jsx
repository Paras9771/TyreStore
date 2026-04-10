import React from 'react'
import Startsection from "./StarRating";

const ReviewsSection = () => {
    return (
        <div className="relative bg-[#ebebebf7] py-10 md:py-16">
             <div className="absolute inset-0 bg-[url('/images/review/test.webp')] bg-cover bg-center opacity-5 "></div>
            <div className="text-center px-4">

                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#004cac]">
                    Our Recent Google Reviews
                </h2>

                <div className="flex items-center justify-center my-5 md:my-6">

                    <div className="w-10 md:w-16 lg:w-20 h-[2px] bg-[#004cac]"></div>

                    <div className="w-3 h-3 md:w-4 md:h-4 border-2 border-[#004cac] rounded-full mx-3"></div>

                    <div className="w-10 md:w-16 lg:w-20 h-[2px] bg-[#004cac]"></div>

                </div>

                <Startsection />

            </div>

        </div>
    )
}

export default ReviewsSection