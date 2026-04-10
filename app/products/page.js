'use client'

import React from 'react'
import products from '@/data/products'
import Link from 'next/link'
import { FaHeart, FaStar } from 'react-icons/fa'

const Page = () => {

  const handleAddToCart = (item) => {
    alert(`${item.name} added to cart 🛒`)
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <h1 className="text-3xl font-bold mb-8 text-center">
        Our Premium Cars 🚗
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        {products.map((item) => (
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
              <img 
                src={item.image}
                alt={item.name}
                className="w-full h-52 object-cover hover:scale-110 transition duration-500"
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

              <p className="text-gray-500 text-sm">
                Product ID: {item.id}
              </p>

              <div className="mt-4 flex gap-2">

                <Link 
                  href={`/products/${item.id}`}
                  className="flex-1 text-center bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 rounded-lg hover:scale-105 transition"
                >
                  View
                </Link>
            
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart(item)
                  }}
                  className="flex-1 bg-gradient-to-r from-green-500 to-green-700 text-white py-2 rounded-lg hover:scale-105 transition"
                >
                  Add
                </button>

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  )
}

export default Page