import Image from "next/image";
import React from "react";
import footerData from "@/data/footerData";

const FooterBottom = () => {
  return (
    <div className="bg-black text-white text-center py-4 px-4">

      <p className="text-xs md:text-sm font-light mb-4 leading-relaxed">
        © Mstrain 2026. All Rights Reserved. Website Design, Developed &
        Online Marketing By Autogaragenetwork.com
      </p>

      <div className="flex justify-center items-center gap-3 md:gap-4 flex-wrap">
        {footerData.map((footer) => (
          <Image
            key={footer.id}
            src={footer.logo}
            width={35}
            height={35}
            alt={footer.name}
            className="opacity-80 hover:opacity-100 transition"
          />
        ))}
      </div>

    </div>
  );
};

export default FooterBottom;