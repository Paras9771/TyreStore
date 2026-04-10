import Image from "next/image";

const TyreBrandCard = ({ item }) => {
  return (
    <div className="bg-white border border-gray-300 rounded-xl overflow-hidden text-center shadow-md transition duration-300 hover:shadow-xl hover:-translate-y-2">

      <div className="relative">
        <div className="p-3 bg-gray-600">
          <Image
            src={item.image}
            width={500}
            height={300}
            alt={item.title}
            className="w-full h-[260px] object-cover transition duration-500 hover:scale-110"
          />
        </div>

        <div className="h-[4px] bg-blue-700"></div>

        <div className="absolute left-1/2 -bottom-5 -translate-x-1/2 bg-white border-2 border-blue-700 px-5 py-2 flex items-center justify-center shadow-sm">
          <Image
            src={item.logo}
            width={120}
            height={50}
            alt="logo"
            className="object-contain h-[35px] w-auto"
          />
        </div>
      </div>

      <div className="pt-14 pb-8 px-6">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          {item.title}
        </h3>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
          {item.description}
        </p>
        <button className="bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition duration-300 hover:bg-blue-900 hover:scale-105 cursor-pointer">
          VIEW ALL {item.title.toUpperCase()} →
        </button>

      </div>

    </div>
  );
};

export default TyreBrandCard;