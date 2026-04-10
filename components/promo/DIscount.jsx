import React from 'react'

const DIscount = () => {
    return (
        <div
            className="relative grid grid-cols-1 lg:grid-cols-2 bg-[url('/images/tyreImage/dis.jpg')] bg-cover bg-center min-h-[570px] mt-12"
        >
            <div className="absolute inset-0 bg-[#004cac]/60 lg:hidden"></div>
            <div className='relative z-10 lg:absolute lg:bg-[#004cac] bg-transparent w-full lg:h-[570px] lg:max-w-[820px] text-white lg:[clip-path:polygon(0_0,100%_0,90%_100%,0%_100%)] p-5 md:p-8 lg:p-10' >
                <h1 className='text-2xl md:text-4xl lg:text-5xl mr-4 md:mr-6 lg:mr-8 my-5 font-bold leading-tight ml-4 md:ml-8 lg:ml-12'>Discounts on Bulk Orders or Multi Buys of Top Brands Tyres</h1>
                <p className='leading-7 mr-4 md:mr-6 lg:mr-8 ml-4 md:ml-8 lg:ml-12 mb-3'>If you are working in the motor trade, own a mechanical garage in Leicester or simply want to buy tyres Leicester for several vehicles in your family, why not ask us for our special bulk order prices and discounts.Please have a look on our extensive tyre range. Just let us know what kind of tyres and how many you are looking for. Even a mix of tyre brands and tyre sizes is not a problem.</p>
                <p className='leading-7 mr-4 md:mr-6 lg:mr-8 ml-4 md:ml-8 lg:ml-12 mb-3'>We might be able to offer you a direct discount on the tyre prices or give you a great discount on our other services. Some of our services we could even offer you for free.</p>
                <p className='leading-7 mr-4 md:mr-6 lg:mr-8 ml-4 md:ml-8 lg:ml-12 mb-3'>Please have a look at our "free service section" on our website.</p>
            </div>
        </div>
    )
}

export default DIscount