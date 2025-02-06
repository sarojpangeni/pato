import React from 'react'
import { FaCirclePlay } from "react-icons/fa6";

function Video() {
    const handleClick = () => {
        window.open("https://www.youtube.com/watch?v=IuedK_XpbDI", "_blank")
    }
    return (
        <div className='relative  min-h-lvh bg-black flex flex-col items-center justify-center'>
            <div
                className='absolute inset-0 bg-cover bg-black opacity-50'
                style={{
                    backgroundImage: `url("https://preview.colorlib.com/theme/pato/images/header-menu-01.jpg")`
                }}></div>
            <div className='relative text-center'>
                <h1 className='flex flex-col uppercase text-white text-4xl md:text-5xl font-bold tracking-wide '>
                    <span className="text-red-500 text-2xl font-semibold italic mb-2">Discover</span>
                    Our Video
                </h1>
                <button className='text-white h-10 w-10 text-6xl cursor-pointer hover:scale-110 transform transition-all duration-300 mt-2'
                    onClick={handleClick}
                ><FaCirclePlay /></button>

            </div>
        </div>
    )
}

export default Video