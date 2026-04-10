import React from "react";
import Image from "next/image";
import steps from "@/data/stepsData";

const HowItWorksSection = () => {
  return (
    <div className="max-w-[1300px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-16 px-6 mt-24">
      {steps.map((step) => (
        <div
          key={step.id}
          className="group relative bg-cover bg-center text-white p-6 md:p-8 rounded-2xl shadow-lg shadow-blue-500 transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-700 overflow-hidden"
          style={{ backgroundImage: "url('/images/howItWorks/shape-how.png')" }}
        >
          <span className="absolute top-1 right-5 text-3xl md:text-4xl font-bold text-gray-900 opacity-80">
            {step.number}
          </span>

          <Image
            src={step.icon}
            width={70}
            height={70}
            alt="step icon"
            className="transition-transform duration-300 group-hover:scale-110"
          />

          <h3 className="text-base md:text-lg lg:text-xl font-semibold mt-6 mb-2 transition-colors duration-300 group-hover:text-yellow-300">
            {step.title}
          </h3>

          <p className="text-sm text-gray-200">
            {step.desc}
          </p>
        </div>
      ))}
    </div>
  );
};

export default HowItWorksSection;