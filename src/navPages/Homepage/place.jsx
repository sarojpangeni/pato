import React from 'react'

function Place() {
    const blogs = [
        {
            title: "Romantic Restaurant",
            description: "Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.",
            image: "https://preview.colorlib.com/theme/pato/images/blog-01.jpg",
        },
        {
            title: "Delicious Food",
            description: "Duis elementum, risus sit amet lobortis nunc justo condimentum ligula, vitae feugiat.",
            image: "https://preview.colorlib.com/theme/pato/images/blog-02.jpg",
        },
        {
            title: "Red Wines You Love",
            description: "Sed ornare ligula eget tortor tempor, quis porta tellus dictum.",
            image: "https://preview.colorlib.com/theme/pato/images/blog-03.jpg",
        },
    ];
    return (
        <div className='bg-gray-50'>
            <div className=' relative min-h-96 bg-black flex items-center justify-center'>
                <div
                    className='absolute inset-0 bg-cover bg-black opacity-50'
                    style={{
                        backgroundImage: `url("https://preview.colorlib.com/theme/pato/images/bg-intro-01.jpg")`
                    }}></div>
                <div className='relative text-center'>
                    <span className='text-xl italic font-mono text-red-500'>Discover</span>
                    <h1 className='uppercase text-white text-4xl md:text-5xl font-bold tracking-wide'>Pato Place</h1>
                </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto py-16 ">
                {blogs.map((pato, index) => (
                    <div key={index}
                    className=" rounded-lg overflow-hidden">
                        <div className='relative'>
                            <img src={pato.image} alt="pato" 
                            className='w-full h-48 object-cover'/>
                        </div>
                        <div className="p-6">
                            <h1 className="text-xl font-semibold text-gray-800 mb-3 tracking-widest">{pato.title}</h1>
                            <p className="text-gray-600 mb-4">{pato.description}</p>
                            <button
                            className="text-black font-thin text-sm hover:text-red-400">Learn More <span>&rarr;</span></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Place