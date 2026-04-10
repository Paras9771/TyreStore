import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaRegClock } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-[#0b2c4d] px-4 md:px-12 py-2 text-white gap-3">

      <div className="flex items-center gap-2 text-xs md:text-sm text-center md:text-left">
        <FaRegClock className="text-blue-500" />
        <p>
          Mon - Fri: 08:30 - 17:30, Sat: 08:30 - 17:00, Sun: Closed
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 text-xs md:text-sm">

        <p>Please download our mobile app</p>

        <Image
          src="/images/buttons/playstore.png"
          width={100}
          height={35}
          alt="google playstore"
          className='h-10 w-auto'
          loading='lazy'
        />

        <Image
          src="/images/buttons/ipad.png"
          width={100}
          height={35}
          alt="Apple Store"
          className='h-10 w-auto'
          loading='lazy'
        />

        <div className="relative group">

          <button className="px-3 py-1 hover:text-blue-400">
            My Account ▼
          </button>

          <div className="absolute right-0 top-full w-36 bg-[#0b2c4d] rounded-md shadow-lg hidden group-hover:block z-50">

            <Link
              href="/clients/register"
              className="block px-4 py-2 text-sm hover:bg-[#13406b]"
            >
              Sign Up
            </Link>
            <Link
              href="/clients/login"
              className="block px-4 py-2 text-sm hover:bg-[#13406b]"
            >
              Sign In
            </Link>

          </div>

        </div>

      </div>

    </div>
  )
}

export default TopBar