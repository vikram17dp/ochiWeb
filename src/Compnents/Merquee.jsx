import { motion } from 'framer-motion'
import React from 'react'

function Merquee() {
    
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-12 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl'>
        <div className="text flex border-t-2 border-b-2 pr-20  border-zinc-300  overflow-hidden whitespace-nowrap">
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:5}} className='text-[22vw] leading-none font-["Founder Grotesk_X_Condensed"] tracking-tighter font-bold uppercase  -mb-[-1vw] pt-5'>We are ochi</motion.h1>
           
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:5}} className='text-[22vw] leading-none font-["Founder Grotesk_X_Condensed"] tracking-tighter font-bold uppercase -mb-[-1vw] pt-5 '>We are ochi</motion.h1>

        </div>
      
    </div>
  )
}

export default Merquee
