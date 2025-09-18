import React from 'react'
import NavBar from '../components/NavBar.jsx'
import HeroSection from '../components/HeroSection.jsx'
import Footer from '../components/Footer.jsx'
import Form from '../components/Form.jsx'

const HomePage = () => {
  return (
    <div className='bg-black p-10 relative w-full'>
      
      <div className='border-2 border-white rounded-2xl p-4 mb-10 w-full'>
        <div className=' absolute top-12 z-20 flex w-'><NavBar/></div>
        <div><HeroSection/></div>
      </div>
      <div><Form/></div>
      <div><Footer/></div>
    </div>
  )
}

export default HomePage