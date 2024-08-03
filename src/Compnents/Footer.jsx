import React from 'react'

function Footer() {
  return (
    <div className='w-full min-h-screen flex gap-10 '>
        <div className='inline relative'>
            <h1 className='text-[6.2vw] ml-20 leading-none tracking-tighter font-["Neue Montreal"] font-bold'>EYE-
            <br />
            OPENING</h1>
            <h3 className='absolute bottom-0 left-0 text-[2.6vw] ml-20 mb-10 leading-none tracking-tighter font-["Neue Montreal"] font-semibold'>
          Ochi
        </h3>

        </div>
        <div className='flex flex-col ml-28 '>
            <h1 className='text-[6.2vw]  leading-none tracking-tighter font-["Neue Montreal"] font-bold'>PRESENTATIONS
            </h1>
            
           
            <div className="insta flex flex-col ml-2 mt-6 mb-10 cursor-pointer">
          <p className="text-[1.4vw]">S:</p>
          <a href="#" className="text-[1vw]">Instagram</a>
          <a href="#"className="text-[1vw] mt-2">Behance</a>
          <a href="#"className="text-[1vw] mt-2">FaceBook</a>
          <a href="#" className="text-[1vw] mt-2">Linkedin</a>
        </div>

        <div className="cannda inline ml-2 mt-6 mb-10">
          <p className="text-[1.4vw]">L:</p>
          <p className="text-[1vw] mt-2">202-1965 W 4th Ave</p>
          <p className="text-[1vw] mt-2">Vancouver, Canada</p>
          <p className="text-[1vw] mt-8">30 Chukarina St</p>
          <p className="text-[1vw] mt-2">Lviv, Ukraine</p>
          <p className="text-[1.4vw] mt-10">E:</p>
          <p className="text-[1vw] mt-2">hello@ochi.design</p>
          <h2 className='text-[1vw] mt-10 ml-80 text-gray-400'>© ochi design 2024. Legal Terms</h2>
          
        </div>
</div>
<div className='flex flex-col relative'>
<div className="absolute left-0 ml-2 mt-[22.5vw] cursor-pointer ">
          <a href="#" className="text-[1.4vw] ">M:</a>
          <p className="text-[13px] mt-1">Home</p>
          <p className="text-[13px] mt-1">Services</p>
          <p className="text-[13px] mt-1">Our Work</p>
          <p className="text-[13px] mt-1">Aboutus</p>
          <p className="text-[13px] mt-1">Insights</p>
          <p className="text-[13px] mt-1">ContactUs</p>
        </div>
</div>
    
      
    </div>
  )
}

export default Footer
