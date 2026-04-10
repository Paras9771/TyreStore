'use client'

import Link from "next/link"
import { useState, useEffect } from "react"

const MobileSidebar = ({ open, setOpen }) => {

  const [menu, setMenu] = useState("main")

  useEffect(() => {
    if (open) {
      setMenu("main")
    }
  }, [open])

  return (

    <div className={`fixed top-0 right-0 h-screen w-[260px] bg-black text-white z-50
    transform transition-transform duration-300
    ${open ? "translate-x-0" : "translate-x-full"} md:hidden`}>

      <button
        className="text-2xl p-4"
        onClick={() => setOpen(false)}
      >
        ✕
      </button>

      <div className="flex flex-col px-6 mt-6">

        {menu === "main" && (
          <>
            <Link href="/" onClick={() => setOpen(false)} className="py-4 border-b">HOME</Link>
            <Link href="/" onClick={() => setOpen(false)} className="py-4 border-b">BLOG</Link>
            <Link href="/" onClick={() => setOpen(false)} className="py-4 border-b">TYRES INFORMATION</Link>


            <div
              onClick={() => setMenu("manufactures")}
              className="py-4 border-b flex justify-between cursor-pointer"
            >
              TYRES MANUFACTURES
              <span>›</span>
            </div>

            <div
              onClick={() => setMenu("services")}
              className="py-4 border-b flex justify-between cursor-pointer"
            >
              SERVICES
              <span>›</span>
            </div>
            <Link href="/products" onClick={() => setOpen(false)} className="py-4 border-b">Product</Link>
            <Link href="/" onClick={() => setOpen(false)} className="py-4 border-b">ABOUT US</Link>
            <Link href="/" onClick={() => setOpen(false)} className="py-4 border-b">CONTACT US</Link>
            <Link href="/" onClick={() => setOpen(false)} className="py-4 border-b">CAREERS</Link>
          </>
        )}

        {menu === "services" && (
          <>
            <div className="flex items-center justify-between py-4 border-b">

              <button onClick={() => setMenu("main")}>←</button>

              <span className="font-semibold">Services</span>

              <button onClick={() => setOpen(false)}>✕</button>

            </div>

            <div className="flex flex-col gap-4 mt-4">

              <Link href="#" onClick={() => setOpen(false)}>Batteries Service</Link>
              <Link href="#" onClick={() => setOpen(false)}>Exhaust Service</Link>
              <Link href="#" onClick={() => setOpen(false)}>Gearbox Repair</Link>
              <Link href="#" onClick={() => setOpen(false)}>Suspension</Link>
              <Link href="#" onClick={() => setOpen(false)}>Wheel Balancing</Link>
              <Link href="#" onClick={() => setOpen(false)}>1x Wheel Balancing</Link>
              <Link href="#" onClick={() => setOpen(false)}>Engine Flush</Link>
              <Link href="#" onClick={() => setOpen(false)}>Brake Fluid Replacement</Link>
              <Link href="#" onClick={() => setOpen(false)}>Full Service</Link>

            </div>
          </>
        )}

        {menu === "manufactures" && (
          <>
            <div className="flex items-center justify-between py-4 border-b">

              <button onClick={() => setMenu("main")}>←</button>

              <span className="font-semibold">Tyre Manufactures</span>

              <button onClick={() => setOpen(false)}>✕</button>

            </div>

            <div className="flex flex-col gap-4 mt-4">

              <Link href="#" onClick={() => setOpen(false)}>Michelin</Link>
              <Link href="#" onClick={() => setOpen(false)}>Bridgestone</Link>
              <Link href="#" onClick={() => setOpen(false)}>Goodyear</Link>
              <Link href="#" onClick={() => setOpen(false)}>Pirelli</Link>
              <Link href="#" onClick={() => setOpen(false)}>Continental</Link>
              <Link href="#" onClick={() => setOpen(false)}>Dunlop</Link>
              <Link href="#" onClick={() => setOpen(false)}>Apollo</Link>
              <Link href="#" onClick={() => setOpen(false)}>MRF</Link>

            </div>
          </>
        )}

      </div>

    </div>

  )
}

export default MobileSidebar