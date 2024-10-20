import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id='hero' className='min-h-screen'>
      <Navbar />
      <div className='container grid lg:grid-cols-1 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[60px] sm:text-[80px] font-bold leading-tight flex justify-self-stretch items-baseline'>
          <div>
            <p  data-aos="zoom-in">I&apos;m</p>
            <p  data-aos="zoom-in">Nimra</p>
            <p  data-aos="zoom-in">Siddique</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
