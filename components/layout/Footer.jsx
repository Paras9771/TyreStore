import Image from 'next/image'
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaPercent } from "react-icons/fa6";
import React from 'react'
import FooterBottom from './FooterBottom';

const Footer = () => {
    return (
        <footer>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-[#1f5fb4] text-white pt-16 pb-8 px-6 md:px-12 lg:px-20 gap-10'>
                <div>
                    <Image
                        className='mb-6 w-[180px] md:w-[220px]'
                        src="/images/logo/logo.webp"
                        width={300}
                        height={300}
                        alt='logo image'
                    >

                    </Image>
                    <h2 className='text-2xl font-semibold'>Useful Links</h2>
                    <ul className='mt-5 space-y-2'>
                        <li className="border-b border-black pb-3">About Us</li>
                        <li className="border-b border-black pb-3 mt-2">Contact Us</li>
                        <li className="border-b border-black pb-3 mt-2">Sitemap</li>
                        <li className="border-b border-black pb-3 mt-2">Cookies</li>
                        <li className="border-b border-black pb-3 mt-2">Privacy Policy</li>
                        <li className="border-b border-black pb-3 mt-2">Cookies Policy</li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-2xl font-semibold'>Book Online</h2>
                    <ul>
                        <li className="border-b border-black pb-3 mt-2">MOT</li>
                        <li className="border-b border-black pb-3 mt-2">Tyres</li>
                        <li className="border-b border-black pb-3 mt-2">Wheel Alignment</li>
                        <li className="border-b border-black pb-3 mt-2">Engine Flush</li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-2xl font-semibold'>Tyre Manufacturers</h2>
                    <ul className='opacity-80 text-blue-500 space-y-2'>
                        <li>Continental Tyres</li>
                        <li>Goodyear Tyres</li>
                        <li>Dunlop Tyres</li>
                        <li>Bridgestone Tyres</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold mb-5">Talk to us</h2>

                    <div className="space-y-4">

                        <div className="flex items-center gap-3">
                            <div className="border border-white p-2 rounded-full">
                                <FaPhoneAlt />
                            </div>
                            <span>123456789</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="border border-white p-2 rounded-full">
                                <FaEnvelope />
                            </div>
                            <span>agns@test.com</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="border border-white p-2 rounded-full">
                                <FaPercent />
                            </div>
                            <span>VAT No: 987000321</span>
                        </div>

                    </div>
                </div>
            </div>
            <FooterBottom></FooterBottom>
        </footer>
    )
}

export default Footer