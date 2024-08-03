import React from 'react'

function Clinets() {
  return (
    <div className='w-full min-h-screen bg-zinc-900 '>
        <h1 className='text-[4vw] font-["Neue Montreal"] font-light m-14'>Clients reviews</h1>
        <div className='border-b-2 border-gray-600 mt-8 '></div>
        <div className='clents w-full flex justify-between'>
            {["Karman Ventures","Services:","William Barnes","READ"].map((item,index)=>{
                return <h2 key={index} className={` mt-8 text-[1.08vw] ${index===0 ? "ml-14 border-b-2":""} ${index===3 ? "mr-14":""}  ${index===1 ? "mr-28":""} ${index===2 ? "mr-28":""} `}>{item}</h2>
            })}
     
        </div>
        <div className='card-inner flex justify-around mt-20'>
            <div className='flex flex-col ml-40'>
                <button className='border ml-2 border-red-500  font-[16px] px-2 py-1 mt-6 bg-white text-black rounded-[20px]  uppercase  gap-10 hover:bg-black hover:text-white hover:transition-transform duration-500 ease-in-out '>investor deck</button>
                <button className='border mr-1 border-red-500  font-[16px] px-2 py-1 mt-6 bg-white text-black rounded-[20px]  uppercase  gap-10 hover:bg-black hover:text-white hover:transition-transform duration-500 ease-in-out'>Sales deck</button>
            </div>
            <div className='inline h-[40vh] w-[35%]'>
                <img className='h-20 w-22 rounded-lg mb-6' src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png" alt="" />
                <p className='text-[1.06vw] font-\
                '>They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5</p>
            </div>

        </div>
        <div className='border-b-2 border-gray-600 mt-10 '></div>
        <div className='flex justify-between'>
                <p className='ml-20 mt-6 border-b-2 border-gray-400'>Planetly</p>
                <p className='mt-6'>Nina Walloch</p>
                <p className='mt-6 mr-20'>READ</p>
        </div>
        <div className='border-b-2 border-gray-600 mt-6 '></div>
        <div className='flex justify-between'>
                <p className='ml-20 mt-6 border-b-2 border-gray-400'>Workiz Easy</p>
                <p className='mt-6 mr-10'>Tomer Levy</p>
                <p className='mt-6 mr-20'>READ</p>
        </div>
        <div className='border-b-2 border-gray-600 mt-6 '></div>
        <div className='flex justify-between'>
                <p className='ml-20 mt-6 border-b-2 border-gray-400'>Premium Blend</p>
                <p className='mt-6 mr-20'>Ellen Kim</p>
                <p className='mt-6 mr-20'>READ</p>
        </div>
        <div className='border-b-2 border-gray-600 mt-6 '></div>
        <div className='flex justify-between'>
                <p className='ml-20 mt-6 border-b-2 border-gray-400'>Hypercare Systems</p>
                <p className='mt-6 mr-20'>
                Brendan Goss</p>
                <p className='mt-6 mr-20'>READ</p>
        </div>
        <div className='border-b-2 border-gray-600 mt-6 '></div>
        <div className='flex justify-between'>
                <p className='ml-20 mt-6 border-b-2 border-gray-400'>Officevibe</p>
                <p className='mt-6 mr-10'> 
                Raff Labrie</p>
                <p className='mt-6 mr-20'>READ</p>
        </div>
        <div className='border-b-2 border-gray-600 mt-6 '></div>
        <div className='flex justify-between'>
                <p className='ml-20 mt-6 border-b-2 border-gray-400'>Orderlion</p>
                <p className='mt-6'>Stefan Strohmer</p>
                <p className='mt-6 mr-20'>READ</p>
        </div>
        <div className='border-b-2 border-gray-600 mt-6 '></div>
        <div className='flex justify-between'>
                <p className='ml-20 mt-6 border-b-2 border-gray-400'>Black Book</p>
                <p className='mt-6 mr-14'>
                Jaci Smith</p>
                <p className='mt-6 mr-20'>READ</p>
        </div>
        <div className='border-b-2 border-gray-600 mt-6 '></div>

        <div className='flex justify-between'>
                <p className='ml-20 mt-6 border-b-2 border-gray-400'>Trawa Energy</p>
                <p className='mt-6 mr-12'>
               
David Budde</p>
                <p className='mt-6 mr-20'>READ</p>
        </div>
        <div className='border-b-2 border-gray-600 mt-6 '></div>

      
    </div>
  )
}

export default Clinets
