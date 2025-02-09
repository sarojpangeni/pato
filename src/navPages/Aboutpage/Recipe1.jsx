import React from 'react'

function Recipe1() {
    return (

        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-8 py-10">
            <div className="grid md:grid-cols-2 items-center max-w-6xl">
                <div className="text-center justify-center  ml-5">
                    <h2 className="text-red-500 text-2xl font-semibold italic mb-2">
                        Delicious
                    </h2>
                    <h1 className="text-5xl font-bold text-gray-800 mb-6 uppercase tracking-widest">
                        Recipes
                    </h1>
                    <p className="text-gray-600 text-lg mb-8">
                        Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis ligula sem id neque.
                    </p>
                </div>
                <div className="flex items-center justify-center hover:opacity-100 transition duration-300">
                    <img
                        src="https://preview.colorlib.com/theme/pato/images/our-story-01.jpg"
                        alt="Delicious Food"
                        className="rounded-xl shadow-lg object-cover w-full max-w-sm"
                    />
                </div>
            </div>
            <div className="grid md:grid-cols-2 items-center max-w-6xl mt-32">
                <div className="flex items-center justify-center hover:opacity-100 transition duration-300">
                    <img
                        src="https://preview.colorlib.com/theme/pato/images/our-story-02.jpg"
                        alt="Delicious Food"
                        className="rounded-xl shadow-lg object-cover w-full max-w-sm"
                    />
                </div>
                <div className="text-center justify-center  ml-5 pt-3">
                    <h2 className="text-red-500 text-2xl font-semibold italic mb-2">
                        Romantic
                    </h2>
                    <h1 className="text-5xl font-bold text-gray-800 mb-6 uppercase tracking-widest">
                        Resturant
                    </h1>
                    <p className="text-gray-600 text-lg mb-8">
                        Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis ligula sem id neque.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Recipe1