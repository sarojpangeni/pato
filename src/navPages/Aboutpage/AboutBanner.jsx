import React from 'react'

function AboutBanner() {
  return (
    <div className='relative min-h-96 bg-black flex items-center justify-center'>
    <div
    className='absolute inset-0 bg-cover bg-black opacity-50'
    style={{
        backgroundImage: `url("https://preview.colorlib.com/theme/pato/images/bg-title-page-03.jpg")`
    }}></div>
    <div className='relative text-center'>
        <h1 className='uppercase text-white text-4xl md:text-5xl font-bold tracking-wide'>About Us</h1>
    </div>
</div>
  )
}

export default AboutBanner