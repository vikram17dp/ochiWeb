import { motion, useAnimation } from 'framer-motion'
import React from 'react'

function Featured() {
  const cards = [useAnimation(),useAnimation(),useAnimation(),useAnimation()];
  const handleHover = (index)=>{
    cards[index].start({y:"0"})
  }
  const handleHoverEnd = (index)=>{
    cards[index].start({y:"100%"});
  }
  
  return (
    <div className='w-full py-20 '>
        <div className='w-full px-20 border-b-[1px]  border-zinc-600 pb-20'>
            <h1 className='text-7xl font-["Neue Montreal"] tracking-tight capitalize'>Featured projects</h1>
        </div>
       <div className='px-20'>
       <div className='w-full '>
        <div className='mt-20 gap-10 flex relative '>
          
           <motion.div 
              onHoverStart={()=>handleHover(0)}
              onHoverEnd={()=>handleHoverEnd(0)}
              className=' card conatiner relative w-1/2 h-[38vw] rounded-lg'>
                  <h1 className='absolute flex overflow-hidden text-[#CDEA68] left-full top-1/2 -translate-x-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl font-["Neue Montreal"] font-bold'>
                  {"FYDE".split("").map((item,index)=>{
                     return <motion.span 
                      initial={{y:"100%"}}
                      animate={cards[0]}
                      transition={{ease:[0.22,1,0.36,1],delay:index*0.05}}
                      className='inline-block'
                      key={index}>
                      {item}</motion.span>
                  })}
                  
                  
                  </h1>
                  <img  className='h-full w-full bg-cover rounded-lg' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />

                

           </motion.div>

           <motion.div 
                    onHoverStart={()=>handleHover(1)}
                    onHoverEnd={()=>handleHoverEnd(1)}
                  
                    className='card container relative w-1/2 h-[38vw] rounded-xl  '>
                    
                      <h1 className='absolute flex overflow-hidden text-8xl font-["Neue Montreal"] top-1/2 right-full font-bold text-[#CDEA68] translate-x-1/2 -translate-y-1/2 leading-none z-[9] uppercase'>
                        {"premium".split("").map((item,index)=>{
                             return <motion.span 
                             initial={{y:"100%"}}
                             animate={cards[1]}
                             transition={{ease:[0.22,1,0.36,1],delay:index*0.05}}
                            className='inline-block'
                             key={index}>{item}</motion.span>


                        })}
                      </h1>
                      <img  className='w-full h-full bg-cover rounded-lg' src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png" alt="" />

                    
           </motion.div>
        </div> 
       </div>
            <div className='w-full flex felx-wrap gap-4  '>
              
              {["aduit","copywriting","sales deck","slides desgin","agency","company presentation"].map((item,index)=>{
                return <button key={index} className={` border border-red-500  font-[16px] px-2 py-1 mt-6 bg-white text-black rounded-[20px]  uppercase  gap-10 hover:bg-black hover:text-white hover:transition-transform duration-500 ease-in-out
                  
                  ${index===4 ?"ml-60":"" }`}>{item}
                  
                  </button>
              })}


            </div>


       </div>
       <div className='px-20'>
       <div className='w-full '>
        <div className='mt-20 gap-10 flex relative'>
           <motion.div 
            onHoverStart={()=>handleHover(2)}
            onHoverEnd={()=>handleHoverEnd(2)}
           className=' card conatiner relative w-1/2 h-[38vw] rounded-xl '>
                
                  <h1 className='absolute flex overflow-hidden text-[#CDEA68] left-full top-1/2 -translate-x-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl font-["Neue Montreal"] font-bold'>
                  {"TRAWA".split("").map((item,index)=>{
                     return <motion.span 
                     initial={{y:"100%"}}
                     animate={cards[2]}
                     transition={{ease:[0.22,1,0.36,1],delay:index*0.05}}
                    className='inline-block'
                     key={index}>
                      
                      {item}</motion.span>
                  })}
                  
                  
                  </h1>
                  <img  className='h-full w-full bg-cover rounded-lg' src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" alt="" />

                

           </motion.div>

           <motion.div 
            onHoverStart={()=>handleHover(3)}
            onHoverEnd={()=>handleHoverEnd(3)}
           className='card container relative w-1/2 h-[38vw] rounded-xl  '>

                   

                      <h1 className='absolute flex overflow-hidden text-8xl font-["Neue Montreal"] top-1/2 right-full font-bold text-[#CDEA68] translate-x-1/2 -translate-y-1/2 leading-none z-[9] uppercase'>
                        {"FYED".split("").map((item,index)=>{
                             return <motion.span 
                             initial={{y:"100%"}}
                             animate={cards[3]}
                             transition={{ease:[0.22,1,0.36,1],delay:index*0.05}}
                            className='inline-block'
                             key={index}>
                              
                              {item}</motion.span>
                        })}
                      </h1>
                      <img  className='w-full h-full bg-cover rounded-lg ' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />

                    
           </motion.div>
        </div> 
       </div>
            <div className='w-full flex felx-wrap gap-4  '>
              
              {["brand identity","design research","investor deck ","branded template"].map((item,index)=>{
                return <button key={index} className={` border border-red-500  font-[16px] px-2 py-1 mt-6 bg-white text-black rounded-[20px]  uppercase  gap-10 hover:bg-black hover:text-white hover:transition-transform duration-500 ease-in-out
                  
                  ${index===3 ?"ml-60":"" }`}>{item}
                  
                  </button>
              })}


            </div>
            <div className='justify-center items-center text-center mt-16 flex'>
              <button className='px-6 py-4 bg-black rounded-[20px] text-[16px] uppercase'>view all case studies
                
              </button>

            </div>


       </div>
      
    </div>
  )
}

export default Featured
