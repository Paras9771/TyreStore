"use client";

import React, { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import Image from "next/image";

const ProductList = ({ products = [], filters }) => {
  const { addToCart } = useContext(CartContext);

  const filteredProducts = products.filter((item) => {
    return (
      (filters.width === "" || item.Width == filters.width) &&
      (filters.profile === "" || item.Profile == filters.profile) &&
      (filters.size === "" || item.Size == filters.size) &&
      (filters.speed === "" || item.Speed == filters.speed)
    );
  });

  // ❌ No Product UI (Better Design)
  if (filteredProducts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-gray-500">
        <div className="text-5xl mb-3">😕</div>
        <h2 className="text-xl font-semibold">No Tyres Found</h2>
        <p className="text-sm mt-2">Try adjusting your filters</p>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {filteredProducts.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl border shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden group relative"
          >

            {/* 🔥 Top Badge */}
            <div className="absolute top-3 left-3 z-10">
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded shadow">
                In Stock
              </span>
            </div>

            {/* ❤️ Wishlist */}
            <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition">
              <span className="bg-white p-1 rounded-full shadow cursor-pointer hover:scale-110">
                ❤️
              </span>
            </div>

            {/* Image Section */}
            <div className="bg-gray-100 h-[180px] flex items-center justify-center overflow-hidden">
              <Image
                src={item.image || "/images/default.jpg"}
                width={250}
                height={180}
                alt={item.name}
                className="object-contain group-hover:scale-110 transition duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-4">

              {/* Name */}
              <h3 className="text-gray-800 font-semibold text-base line-clamp-2 min-h-[40px]">
                {item.name}
              </h3>

              {/* Specs */}
              <p className="text-xs text-gray-500 mt-1">
                {item.Width}/{item.Profile} R{item.Size}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-1 text-yellow-500 text-sm mt-1">
                ⭐⭐⭐⭐☆
                <span className="text-gray-400 text-xs">(4.2)</span>
              </div>

              {/* Price Section */}
              <div className="mt-2 flex items-center gap-2">
                <span className="text-blue-600 font-bold text-lg">
                  ₹ {item.price}
                </span>
                <span className="text-gray-400 text-sm line-through">
                  ₹ {item.price + 1200}
                </span>
                <span className="text-green-600 text-xs font-semibold">
                  20% OFF
                </span>
              </div>

              {/* Buttons */}
              <div className="flex gap-2 mt-4">

                <button
                  onClick={() => addToCart(item)}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm transition"
                >
                  Add
                </button>

                <button
                  className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-50 py-2 rounded-lg text-sm transition"
                >
                  Buy
                </button>

              </div>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default ProductList;