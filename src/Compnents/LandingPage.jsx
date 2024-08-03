import { animate, motion } from 'framer-motion'
import React from 'react'

function LandingPage() {
  
  return (
    <div  data-scroll data-scroll-section data-scroll-speed="-.2" className='w-full h-screen bg-zinc-900 pt-1'>
        <div className="text-structure mt-52 px-20">

                {["WE CREATE","EYE-OPENING","PRESENTATIONS"].map((item,index)=>{
                    return <div  key={index}className="masker">
                      <div className='w-fit flex'>
                        {index === 1 && (<motion.div 
                          initial={{width:0}} animate={{width:"8.6vw"}} transition={{ease:[0.76,0,0.24,1],duration:0.65}}
                        className='w-[8vw] h-[5vw] relative rounded-lg bg-red-400 top-[1vw]'>
                          <img src="https://zenprospect-production.s3.amazonaws.com/uploads/pictures/66384d5eae54d10001e8b4af/picture" alt="" className='h-[5.15vw] w-[8.6vw] rounded-lg' />
                        </motion.div>)}
                    <h1  key={index}
                    className='text-[6.5vw] font-bold leading-[6vw] tracking-tighter font-["Neue Montreal"] font-regular'>{item}
                   </h1>
                   </div>
                    </div>

                })}
            
        </div>
        <div className='border-t-[1px] border-zinc-700 mt-28 flex justify-between items-center  py-5 px-20'>
            {["For public and private companies","From the first pitch to IPO","start the project"].map((item,index)=>{
               return <p key={index} className={`text-md font-light leading-none ${index === 2 ?'px-4 py-2 border-[1px]  hover:bg-white hover:text-zinc-800 rounded-full `':''}`}>
                    {item}
                </p>

            })}

        </div>
      

      
    </div>
  )
}

export default LandingPage
