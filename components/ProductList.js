'use client'

import React from 'react'
import products from '@/data/products'
import Link from 'next/link'
import { FaHeart, FaStar } from 'react-icons/fa'
import { useCart } from "@/context/CartContext";

const ProductList = ({ limit }) => {

  const { addToCart} = useCart();

  const handleAddToCart = (item) => {
    console.log("clicked", item);        
    addToCart(item);                     
    alert(`${item.name} added to cart`); 
  };

  const displayedProducts = limit ? products.slice(0, limit) : products;

  return (
    <div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {displayedProducts.map((item) => (
          <div 
            key={item.id} 
            className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden relative"
          >

            <div className="absolute top-3 right-3 bg-white p-2 rounded-full shadow cursor-pointer hover:text-red-500">
              <FaHeart />
            </div>

            <div className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
              -10%
            </div>

            <div className="overflow-hidden">
              <img className="w-full h-48 object-cover hover:scale-110 transition duration-500"
                src={item.image}
                alt={item.name}
                loading='lazy'
              />
            </div>

            <div className="p-4">

              <h2 className="text-lg font-semibold">
                {item.name}
              </h2>

              <div className="flex items-center gap-1 text-yellow-500 mt-1">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>

              <p className="text-lg font-bold text-green-600 mt-2">
                ₹{item.price.toLocaleString()}
              </p>

              <div className="mt-4 flex gap-2">

                <Link 
                  href={`/products/${item.id}`}
                  className="flex-1 text-center bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 rounded-lg hover:scale-105 transition"
                >
                  View
                </Link>

                <button 
                  onClick={() => handleAddToCart(item)}
                  className="flex-1 bg-gradient-to-r from-green-500 to-green-700 text-white py-2 rounded-lg hover:scale-105 transition active:scale-95"
                >
                  Add
                </button>

              </div>

            </div>

          </div>
        ))}

      </div>

      {limit && products.length > limit && (
        <div className="text-center mt-8">
          <Link 
            href="/products"
            className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
          >
            All Products Details Are Here →
          </Link>
        </div>
      )}

    </div>
  )
}

export default ProductList