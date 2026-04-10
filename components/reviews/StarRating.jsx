"use client"

import React from "react";
import Slider from "react-slick";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import reviewData from "../../data/reviewData";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Starsection = () => {

  const NextArrow = ({ onClick }) => {
    return (
      <div
        className="absolute right-2 md:right-[-40px] top-1/2 -translate-y-1/2 cursor-pointer text-blue-600 text-xl md:text-3xl z-10"
        onClick={onClick}
      >
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div
        className="absolute left-2 md:left-[-40px] top-1/2 -translate-y-1/2 cursor-pointer text-blue-600 text-xl md:text-3xl z-10"
        onClick={onClick}
      >
        <FaArrowLeft />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <div className="max-w-3xl mx-auto text-center px-4 md:px-6 mt-10">

      <Slider {...settings}>

        {reviewData.map((item) => (
          <div key={item.id}>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed px-2">
              {item.review}
            </p>

            <h3 className="mt-6 font-semibold text-base md:text-lg">
              {item.name}
            </h3>

            <div className="flex justify-center gap-1 mt-2 text-sm md:text-base">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={
                    i < item.rating
                      ? "text-orange-500"
                      : "text-gray-400"
                  }
                />
              ))}
            </div>

          </div>
        ))}

      </Slider>

    </div>
  );
};

export default Starsection;