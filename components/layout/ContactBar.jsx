"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { useCart } from "@/context/CartContext";

const ContactBar = () => {

   const { cart } = useCart();

  return (
    <div className="flex justify-between items-center px-4 md:px-16 bg-blue-200 md:bg-transparent">

      <div className="flex items-center gap-4 md:gap-10">

        <Image
          src="/images/logo/logo.webp"
          width={70}
          height={70}
          alt="Logo"
          priority
        />

        <div className="hidden sm:flex items-center gap-2">
          <Image src="/images/icons/phone.webp" height={28} width={28} alt="Phone" className="w-7 h-7 object-contain"/>
          <div className="leading-tight">
            <p className="text-blue-600 text-xs md:text-base">Call</p>
            <p className="font-semibold text-xs md:text-base">123456789</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <Image src="/images/icons/email.webp" height={28} width={28} alt="Email" className="w-7 h-7 object-contain"/>
          <div className="leading-tight">
            <p className="text-blue-600 text-xs md:text-base">Email</p>
            <p className="font-semibold text-xs md:text-base">
              agns@test.com
            </p>
          </div>
        </div>

      </div>

      <Link
        href="/cart"
        className="flex items-center gap-2 font-semibold text-sm md:text-lg cursor-pointer bg-blue-900 text-white px-3 md:px-6 py-2 md:py-3 rounded-xl relative"
      >

        <div className="relative">
          <Image
            src="/images/icons/cart.webp"
            height={25}
            width={25}
            alt="Cart"
            className="w-7 h-7 object-contain"
          />

          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {cart.length}
          </span>
        </div>

        <span className="hidden sm:block">Cart</span>

      </Link>

    </div>
  );
};

export default ContactBar;