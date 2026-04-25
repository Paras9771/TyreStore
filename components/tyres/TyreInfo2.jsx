import Image from "next/image";
import whyChooseData from "@/data/whyChooseData";

const TyreInfo2 = () => {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2">

       {/* BACKGROUND IMAGE FOR MOBILE */}
      <div className="absolute inset-0 md:hidden">
        <Image
          src="/images/tyreInfo/2.jpg"
          alt="Car Service"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* LEFT SIDE */}
      <div className="relative z-10 text-white py-10 px-6 md:px-20 bg-[#0f4ea6]/80 md:bg-[#0f4ea6]">

        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-10">
          Why Choose Us
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">

          {whyChooseData.map((item) => (
            <div key={item.id} className="flex gap-4">

              <Image
                src={item.icon}
                width={50}
                height={50}
                alt={item.title}
                className="w-10 h-10 md:w-12 md:h-12"
              />

              <div>
                <h2 className="text-base md:text-lg font-bold">
                  {item.title}
                </h2>

                <p className="text-sm md:text-base">
                  {item.description}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative hidden md:block">

        <Image
          src="/images/TyreInfo/2.jpg"
          alt="Car Service"
          fill
          className="object-cover"
        />

      </div>

    </div>
  );
};

export default TyreInfo2;