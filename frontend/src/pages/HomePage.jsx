import React from 'react'
import NavBar from '../components/NavBar.jsx'
import HeroSection from '../components/HeroSection.jsx'
import Footer from '../components/Footer.jsx'
import Form from '../components/Form.jsx'
import About from '../components/About.jsx'
import Journey from '../components/journey.jsx'
import Department from '../components/Department.jsx'

const HomePage = () => {
  return (
    <div className='bg-black p-10  w-full scroll-smooth'>
      
      <div className='border-2 border-white rounded-2xl p-4 mb-10 w-full'>
        <div className=' absolute top-12 z-20 flex '><NavBar/></div>
        <div><HeroSection/></div>
      </div>
      <div className='w-full'><About/></div>
      <div className='w-full'><Journey/></div>
      <div className='w-full'><Department/></div>

      <div><Form/></div>
      <div><Footer/></div>
    </div>
  )
}

export default HomePage