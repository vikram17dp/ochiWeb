import { transform } from 'framer-motion';
import React, { useEffect, useState } from 'react'

function Eyes() {
    const [rotate,setRotate] = useState(0);
    useEffect(()=>{
        window.addEventListener("mousemove",(e) =>{
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth/2;
            let deltaY = mouseY - window.innerHeight/2;

            var angle = Math.atan2(deltaY,deltaX) * (180/Math.PI);
            setRotate(angle-180);

        },[])
    })
  return (
    <div className='w-full h-screen overflow-hidden  '>
        <div data-scroll  data-scroll-speed="-.7" className=' relative w-full h-full bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")] bg-cover bg-center'>
            <div className='absolute flex h-56 gap-10  top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2'>
                    <div className=' w-[14vw] h-[14vw] flex justify-center items-center bg-zinc-100 rounded-full '>
                        <div className='w-2/3 h-2/3  relative  rounded-full bg-zinc-900'>
                        <div className='absolute top-1/2 left-1/2  uppercase -translate-x-1/2 -translate-y-1/2 text-white font-bold text-[1.4vw]'>play</div>
                        <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='line w-full absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] h-10 '>
                            <div className='w-8 h-8 rounded-full bg-zinc-100 '></div>
                        </div>

                        </div>

                    </div>
                    <div className=' w-[14vw] h-[14vw] flex justify-center items-center bg-zinc-100 rounded-full '>
                        
                    <div className='w-2/3 h-2/3  relative rounded-full bg-black'>
                    <div className='absolute top-1/2 left-1/2 uppercase transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-[1.4vw]'>Play</div>
                    <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='line w-full absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] h-10 '>
                            <div className='w-8 h-8 rounded-full bg-zinc-100 '></div>
                        </div>

                        </div>

                    </div>
            </div>
        </div>
    </div>
  )
}

export default Eyes
