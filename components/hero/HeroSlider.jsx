"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SearchService from "./SearchVehicle";

const HeroSlider = () => {
  return (
    <div className="relative w-full">
      <div className="hidden md:block h-[600px] lg:h-[750px]">

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
          className="h-full"
        >
          <SwiperSlide>
            <div className="relative w-full h-full">
              <Image
                src="/images/banners/them_3_banner.webp"
                alt="Car Banner"
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative w-full h-full">
              <Image
                src="/images/banners/them_3_banner3.webp"
                alt="Car Banner"
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative w-full h-full">
              <Image
                src="/images/banners/them_3_banner2.webp"
                alt="Car Banner"
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>

        </Swiper>

      </div>

{/*---------------------------------------- Search Box ---------------------------------------------*/}

      <div className=" relative md:absolute left-1/2 md:left-16 -translate-x-1/2 md:translate-x-0 z-20
        md:top-1/2 md:-translate-y-1/2  w-[95%] sm:w-[420px] mx-auto md:mx-0 py-10 md:py-0">
        <SearchService />
      </div>

    </div>
  );
};

export default HeroSlider;