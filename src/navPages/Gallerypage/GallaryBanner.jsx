import React from 'react'

function GallaryBanner() {
  return (
<div className='relative min-h-96 bg-black flex items-center justify-center'>
    <div
    className='absolute inset-0 bg-cover bg-black opacity-50'
    style={{
        backgroundImage: `url("https://preview.colorlib.com/theme/pato/images/bg-title-page-02.jpg")`
    }}></div>
    <div className='relative text-center'>
        <h1 className='uppercase text-white text-4xl md:text-5xl font-bold tracking-wide'>Gallary</h1>
    </div>
</div>  )
}

export default GallaryBanner