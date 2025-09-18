import React from 'react'

const Journey = () => {
  return (
    <div className='w-full flex flex-col items-center '>
        <div className='text-center text-white md:w-3/5 w-full'>
            <h1 className='text-2xl md:text-5xl my-4'>Journey of Our Success</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero debitis dolor facilis voluptate nostrum perspiciatis, earum, distinctio adipisci animi illum, fuga praesentium laborum beatae saepe deserunt ullam hic. Odio, voluptatibus?</p>
        </div>
        <div className='text-white w-full flex  gap-5 mt-24 flex-wrap justify-around '>
            <div className='border-2 border-white rounded-2xl p-4 mb-10 w-[320px] h-[400px] flex items-end bg-zinc-700'>
                <button className='px-10 w-full py-4 mt-14 rounded-xl border-2 border-white bg-black hover:border-[#FF0099] text-white'>Don't Click Me</button>
            </div>
            <div className='border-2 border-white rounded-2xl p-4 mb-10 w-[320px] h-[400px] flex items-end bg-zinc-700'>
                <button className='px-10 w-full py-4 mt-14 rounded-xl border-2 border-white bg-black hover:border-[#FF0099] text-white'>Don't Click Me</button>
            </div>
            <div className='border-2 border-white rounded-2xl p-4 mb-10 w-[320px] h-[400px] flex items-end bg-zinc-700'>
                <button className='px-10 w-full py-4 mt-14 rounded-xl border-2 border-white bg-black hover:border-[#FF0099] text-white'>Don't Click Me</button>
            </div>
        </div>
    </div>
  )
}

export default Journey