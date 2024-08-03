import React from 'react'

function About() {
  return (
    <div className='w-full   p-20 bg-[#CDEA68] text-black rounded-tl-3xl rounded-tr-3xl '>
        <h1 className='text-[4vw] tracking-tight leading-[5vw] font-["Neue_Montreal"]'>Ochi is a strategic partner for fast-growing tech businesses that need to <span className='relative group mr-2'>
             raise funds
                <span className=' absolute left-0 bottom-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out'> </span>
               </span>,
               <span className='relative group mr-2'>
             sell products
                <span className=' absolute left-0 bottom-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out'> </span>
               </span>
               <span className='relative group mr-2'>
               explain complex ideas
                <span className=' absolute left-0 bottom-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out'> </span>
               </span> and <span className='relative group mr-2'>
                      hire great peoples.
                <span className=' absolute left-0 bottom-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out'> </span>
               </span>
                 .</h1>
                 <hr className="border-t-[1px] border-zinc-500 mt-6 w-full absolute left-0" />
        <div className=' w-full  mt-10 flex justify-around mb-10  '>
            <div className='flex-1'>
                <h1 className='text-[20px]'>What you can expect:</h1>
            </div>
            <div className='flex-1 flex mr-20'>
                <div className='inline'>
                <p className='text-[16px] leading-1  w-[50%] pb-10'>
                We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether its live or digital, delivered for one or a hundred people.</p>
                
                <p className='text-[16px] leading-1  w-[50%] pb-10'>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
                </div>
                <div className=' mt-40 '>
                <p className='mb-5'>S:</p>
                <div className='flex flex-col cursor-pointer mr-20'>

                <span className='border-b-[1px] border-zinc-700 mx-2'>Instagram</span>
                <span className='border-b-[1px] border-zinc-700 mx-2'>Behance</span>
                <span className='border-b-[1px] border-zinc-700 mx-2'>FaceBook</span>
                <span className='border-b-[1px] border-zinc-700 mx-2'>Linkedin</span>
                </div>
                </div>
            </div>

        </div>
        <hr className="border-t-[1px] border-zinc-500  w-full absolute left-0" />

        <div className='flex w-full'>
            <div className='inline flex-1 w-[50%]'>
                <h1 className='text-[4.5vw]'>Our approach:</h1>
                <button className='uppercase text-[1vw] text-white bg-zinc-600 rounded-[25px] px-10 py-4 mt-5'>Read more</button>

            </div>
            <div className='flex-1 mt-6 '>
                    <img  className='rounded-lg' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
            </div>

        </div>
        


      
    </div>
    
  )
}

export default About
