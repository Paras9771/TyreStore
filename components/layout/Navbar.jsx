'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import ServicesDropdown from './ServicesDropdown'
import MobileSidebar from './MobileSidebar'
import TyreManufacturers from './tyreManufactures'
import products from '@/data/products'

const Navbar = () => {

  const [open, setOpen] = useState(false)

  return (
    <>

      <div className='relative flex justify-between items-center bg-blue-700 px-6 md:px-16 py-3 text-white font-medium'>

        <div className='hidden md:flex gap-6 ml-6 lg:ml-56'>
          <Link href='/'>Home</Link>
          <Link href='/'>Blog</Link>
          <Link href='/'>Tyres Information</Link>
          <TyreManufacturers></TyreManufacturers> 
          <ServicesDropdown />
          <Link href='/products'>Products</Link>
          <Link href='/'>About Us</Link>
          <Link href='/'>Contact Us</Link>
          <Link href='/careers'>Careers</Link>
          <Link href='/'>CarDealer</Link>
        </div>

        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(true)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Sidebar */}
      <MobileSidebar open={open} setOpen={setOpen} />

    </>
  )
}

export default Navbar