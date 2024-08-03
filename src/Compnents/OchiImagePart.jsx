import React from 'react'

function OchiImagePart() {
  return (
    <div className="flex items-center relative justify-center min-h-screen bg-zinc-900">
    <div className="w-full flex h-1/2 gap-8 ">
        <div className='h-[30vw] relative flex  rounded-lg w-[42vw] ml-10 bg-green-400 justify-center items-center'>
        <h1 className='text-[4vw] font-["Neue Montreal"] font-semibold '>Ochi</h1>
        <button className="absolute bottom-4 left-4 border border-red-500 font-[16px] px-2 py-1 bg-white text-black rounded-[20px] uppercase gap-10 hover:bg-black hover:text-white hover:transition-transform duration-500 ease-in-out">©2019-2022</button>

        </div>
        <div className=' relative w-[26vw] h-[30vw] bg-[#2b2727] rounded-lg '>
            
            <img className='w-[10vw] h-[6vw] justify-center items-center ml-[8vw] mt-[12vw]'src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
            <button className="absolute bottom-6 left-4 border uppercase border-red-500 font-[16px] px-2 py-1 bg-white text-black rounded-[20px] gap-10 hover:bg-black hover:text-white hover:transition-transform duration-500 ease-in-out">rating5.0 on clutch</button>

        </div>
        <div className='w-[23vw] h-[30vw] relative mr-10  bg-[#2b2727] rounded-lg '>

        <img className='w-[12vw] h-[10vw] border-none justify-center rounded-[50%] bg-cover items-center ml-20 mt-36'src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
        <button className="absolute bottom-6 left-4 border uppercase border-red-500 font-[16px] px-2 py-1 bg-white text-black rounded-[20px] gap-10 hover:bg-black hover:text-white hover:transition-transform duration-500 ease-in-out">rating5.0 on clutch</button>

</div>
     
       
    </div>
  </div>
  )
}

export default OchiImagePart
