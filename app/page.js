"use client"

import BannerSection from "@/components/banner/BannerSection";
import HeroSlider from "@/components/hero/HeroSlider";
import ServicesSection from "@/components/services/ServicesSection";
import FeaturesSection from "@/components/features/FeaturesSection";
import HowItWorksSection from "@/components/howItWorks/HowItWorksSection";
import TyreInfoSection from "@/components/tyres/TyreInfoSection";
import BottomHeading from "@/components/bottomHeading/BottomHeading";
import DIscount from "@/components/promo/DIscount";
import ReviewsSection from "@/components/reviews/ReviewsSection";
import Manufacturers from "@/components/ManufacturersSection/Manufacturers";


const Page = () => {
  return (
    <div>
      <BannerSection></BannerSection>

      <HeroSlider></HeroSlider>

      <ServicesSection></ServicesSection>
      
      <FeaturesSection></FeaturesSection>

      <HowItWorksSection></HowItWorksSection>

      <TyreInfoSection></TyreInfoSection>

      <BottomHeading></BottomHeading>

      <DIscount></DIscount>

      <ReviewsSection></ReviewsSection>

      <Manufacturers></Manufacturers>

    </div>
  );
};

export default Page;  