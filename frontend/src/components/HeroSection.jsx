import React from 'react'
import NavBar from './NavBar'

const HeroSection = () => {
  return (
    
        <div className='text-white p-8 pt-24  '>
        <h1 className='text-6xl md:text-[90px] text-center mb-10'>OUR FOCUS YOUR HEATH</h1>
        {/* <h2></h2> */}
        <div className='flex flex-wrap '>
            <div className=' w-full sm:w-1/2 md:w-1/3 flex flex-col justify-between md:pt-16'>
                <div>
                    <p className='leading-normal text-base mb-8'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores modi perferendis quisquam necessitatibus repellat, aliquid quidem, aspernatur sed rerum ad eaque eius fuga dolore magni in! Vitae dolorem ea fugiat?</p>
                <button className='px-8 py-2 rounded-xl border-2 border-white bg-transparent hover:border-[#FF0099] text-white'>Don't Click Me</button>
                </div>
                <div className='flex gap-4 justify-center items-center mt-20'>
                    <button className='w-10 h-10 rounded-full bg-transparent border-2 border-white hover:border-[#FF0099]'>A</button>
                    <button className='w-10 h-10 rounded-full bg-transparent border-2 border-white hover:border-[#FF0099]'>A</button>
                    <button className='w-10 h-10 rounded-full bg-transparent border-2 border-white hover:border-[#FF0099]'>A</button>
                </div>
            </div>
            <div className='hidden sm:flex w-full sm:w-1/2 md:w-1/3 relative'>
                    <div className='border-2 absolute w-full -bottom-20  border-white rounded-xl h-full bg-zinc-700 p-4 hover:bg-zinc-400 transition-transform ease-in-out transition-all duration-100 hover:shadow-inner-xl'>

                    </div>
            </div>
            <div className=' w-full md:w-1/3 flex flex-col justify-center items-center mt-10'>
                <div className='border-2 border-white p-4 hover:border-[#FF0099] hover:text-[#FF0099] rounded-2xl text-center mb-8 w-2/4'>
                    <h3 className='text-lg font-medium'>30M+</h3>
                    <p className=''>Subscription</p>
                </div>
                <div className='border-2 border-white p-4 hover:border-[#FF0099] hover:text-[#FF0099] rounded-2xl text-center mb-8 w-2/4'>
                    <h3 className='text-lg font-medium'>30M+</h3>
                    <p className=''>Subscription</p>
                </div>
                <div className='border-2 border-white p-4 hover:border-[#FF0099] hover:text-[#FF0099] rounded-2xl text-center mb-8 w-2/4'>
                    <h3 className='text-lg font-medium'>30M+</h3>
                    <p className=''>Subscription</p>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default HeroSection