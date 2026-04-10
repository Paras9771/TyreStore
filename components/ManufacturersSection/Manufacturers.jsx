import manufacturersData from "@/data/manufacturersData";
import Image from "next/image";
import React from "react";

const Manufacturers = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">

      <div className="bg-[#004CAC] text-white flex flex-col justify-center items-center text-center p-8 md:p-12">
        <h1 className="text-2xl md:text-4xl font-bold mb-6">
          We supply vehicle manufacturers
        </h1>

        <p className="max-w-md text-lg">
          It is a long established fact that a reader will be distracted by
          the readable content of a page when looking at its layout.
        </p>
      </div>

      <div className="bg-transparent p-10 ">

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 ">

          {manufacturersData.map((item) => (
            <div 
              key={item.id}
              className="bg-white p-4 flex justify-center items-center border-2 border-gray-500 rounded-lg"
            >

              <Image
                src={item.logo}
                width={60}
                height={60}
                alt={item.name}
                className="w-12 md:w-16 scale-125"
              />
            </div>
          ))}

        </div>

      </div>

    </div>
  );
};

export default Manufacturers;