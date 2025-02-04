import React from 'react';
import { IoMail } from "react-icons/io5";


function Email() {
    return (
        <div className='flex items-center justify-center p-4 bg-gray-50'>
            <form className='flex flex-col md:flex-row items-center justify-between rounded-lg w-full max-w-3xl p-6 gap-4'>
                <h1 className='uppercase font-semiblod text-2xl text-gray-800'>Special Sign Up</h1>
                <div className="relative w-full md:w-auto flex-1">
                    <input 
                        type='email' 
                        name='email' 
                        placeholder='Email Address' 
                        className='w-full border border-gray-400 rounded-lg p-3  transition focus:ring-2 focus:ring-red-500' 
                    />
                    <IoMail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                </div>
                <button 
                    type='submit' 
                    className='bg-black text-white font-semibold uppercase py-3 px-6 rounded-lg hover:bg-red-600 transition duration-300 ease-in-out shadow-md'>
                    Sign-Up
                </button>
            </form>
        </div>
    );
}

export default Email;
