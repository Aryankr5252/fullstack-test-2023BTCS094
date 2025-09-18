import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='fixed top-14 p-4 w-11/12 left-6 sm:left-auto flex justify-center z-50 '>
        <div className='flex w-full justify-between items-center text-lg md:text-xl bg-transparent border-2 bg-zinc-900 border-white text-zinc-100 p-4 rounded-3xl sm:px-6'>
            <div><h2>Company_Name</h2></div>
            <div className='md:flex hidden'>
              <ul className='flex gap-6'>
                <li className='hover:text-[#FF0099]'><a href="#">Home</a></li>
                <li className='hover:text-[#FF0099]'><a href="#About">About us</a></li>
                <li className='hover:text-[#FF0099]'><a href="#Contact">Contact us</a></li>
              </ul>
            </div>
            <div className='md:block hidden'>
              <button className='px-8 py-2 border-2 border-white hover:border-[#ff0099] transition-colors ease-in-out rounded-xl bg-transparent'>Click Me</button>
            </div>
            
        </div>
    </div>
  )
}

export default NavBar