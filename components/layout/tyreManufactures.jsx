'use client'

import Link from 'next/link'
import { FaChevronDown } from "react-icons/fa";

const TyreManufacturers = () => {
  return (
    <div className="relative group">

      <button className="cursor-pointer flex items-center gap-2">
        Tyre Manufacutres
        <FaChevronDown className="text-sm group-hover:rotate-180 transition duration-300" />
      </button>

      <div
        className=" absolute left-1/1 -translate-x-1/2 top-10 w-[95vw] md:w-[700px] lg:w-[1000px] xl:w-[1200px] bg-white p-5 md:p-6
        shadow-xl rounded z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ">

        <div
          className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10 text-black text-[15px]">

          <div className="flex flex-col gap-3">
            <Link href="#" className="hover:text-blue-600">Batteries Service</Link>
            <Link href="#" className="hover:text-blue-600">Wheel Balancing</Link>
            <Link href="#" className="hover:text-blue-600">Locking Wheel Nut Removal</Link>
            <Link href="#" className="hover:text-blue-600">Full Service</Link>
          </div>

          <div className="flex flex-col gap-3">
            <Link href="#" className="hover:text-blue-600">Exhaust Service</Link>
            <Link href="#" className="hover:text-blue-600">1x Wheel Balancing</Link>
            <Link href="#" className="hover:text-blue-600">DPF Cleaning</Link>
            <Link href="#" className="hover:text-blue-600">Major Service</Link>
          </div>

          <div className="flex flex-col gap-3">
            <Link href="#" className="hover:text-blue-600">Gearbox Repair</Link>
            <Link href="#" className="hover:text-blue-600">Engine Flush</Link>
            <Link href="#" className="hover:text-blue-600">Carbon Cleaning</Link>
            <Link href="#" className="hover:text-blue-600">Winter Wheels</Link>
          </div>

          <div className="flex flex-col gap-3">
            <Link href="#" className="hover:text-blue-600">Suspension</Link>
            <Link href="#" className="hover:text-blue-600">Brake Fluid Replacement</Link>
            <Link href="#" className="hover:text-blue-600">EML Diagnosis</Link>
            <Link href="#" className="hover:text-blue-600">Puncture Repair</Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default TyreManufacturers;