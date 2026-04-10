import React from 'react'
import ProductList from '../ProductList'

const productlist = () => {
  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-16 py-6">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-4 md:mb-6 text-gray-800 mt-10 opacity-80">
        Featured Products
      </h1>

      <div className="max-w-7xl mx-auto pt-5">
        <ProductList limit={3} />
      </div>
    </div>
  )
}

export default productlist