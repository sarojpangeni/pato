import React, { useState } from 'react'

function Photos() {

    const [selectedCategory, setSelectedCategory] = useState("All Photo")
    
    const photo = [
        {
            url: "https://preview.colorlib.com/theme/pato/images/photo-gallery-21.jpg",
            category: "Events"
        },
        {
            url: "https://preview.colorlib.com/theme/pato/images/photo-gallery-20.jpg",
            category: "Interior"
        },
        {
            url: "https://preview.colorlib.com/theme/pato/images/photo-gallery-19.jpg",
            category: "Interior"
        },
        {
            url: "https://preview.colorlib.com/theme/pato/images/photo-gallery-18.jpg",
            category: "Interior"
        },
        {
            url: "https://preview.colorlib.com/theme/pato/images/photo-gallery-17.jpg",
            category: "Food"
        },
        {
            url: "https://preview.colorlib.com/theme/pato/images/photo-gallery-16.jpg",
            category: "Food"
        },
        {
            url: "https://preview.colorlib.com/theme/pato/images/photo-gallery-15.jpg",
            category: "Events"
        },
        {
            url: "https://preview.colorlib.com/theme/pato/images/photo-gallery-14.jpg",
            category: "Food"
        },
        {
            url: "https://preview.colorlib.com/theme/pato/images/photo-gallery-13.jpg",
            category: "Events"
        }
    ]

    const categories = ["All Photo", "Interior", "Food", "Events"] 

    const filterPhotos = selectedCategory === "All Photo" ? photo : photo.filter(p => p.category === selectedCategory)

  return (
    <div className='container mx-auto p-9'>
        <div className='flex flex-col sm:flex-row justify-center gap-4 flex-wrap mb-6 p-5'>
            {categories.map((category) => (
                <button
                    key={category}
                    className={`px-4 py-2 rounded-lg border-gray-400 uppercase font-semibold text-xl transition-all duration-300 ${selectedCategory === category ? "bg-gray-800 text-white " : "bg-white text-gray-700 hover:bg-gray-200"}`}
                    onClick={() => setSelectedCategory(category)}
                >{category}</button>
            ))}
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {filterPhotos.map((photo, index) => (
                <div
                key={index}
                className='overflow-hidden rounded-lg shadow-md'>
                    <img 
                    src={photo.url} 
                    alt="catagory" 
                    className='w-full h-auto object-cover transform transition-transform duration-300'/>
                    
                </div>
            ))}
        </div>
    </div>
  )
}

export default Photos