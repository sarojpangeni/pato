import React from 'react'

function Lunch() {
    const menuItems = [
        {
            name: "Sed varius",
            description: "Aenean pharetra tortor dui in pellentesque",
            price: "$29.79",
            image: "https://preview.colorlib.com/theme/pato/images/lunch-01.jpg",
        },
        {
            name: "Tempus aliquet",
            description: "Aenean condimentum ante erat",
            price: "$45.09",
            image: "https://preview.colorlib.com/theme/pato/images/lunch-02.jpg",
        },
        {
            name: "Duis massa",
            description: "Proin lacinia nisl ut ultricies posuere nulla",
            price: "$12.75",
            image: "https://preview.colorlib.com/theme/pato/images/lunch-03.jpg",
        },
        {
            name: "Sbrisalona",
            description: "Proin lacinia nisl ut ultricies posuere nulla",
            price: "$29.79",
            image: "https://preview.colorlib.com/theme/pato/images/lunch-04.jpg",
        },
        {
            name: "Cras eget magna",
            description: "Sed fermentum eros vitae eros",
            price: "$45.09",
            image: "https://preview.colorlib.com/theme/pato/images/lunch-05.jpg",
        },
        {
            name: "Nullam maximus",
            description: "Duis massa nibh porttitor nec imperdiet eget",
            price: "$12.75",
            image: "https://preview.colorlib.com/theme/pato/images/lunch-06.jpg",
        }
    ];

    return (
        <div className='flex flex-col gap-8 items-center justify-center'>
            <div className="relative w-full min-h-60 bg-black flex items-center justify-center">
                <div
                    className="absolute inset-0 bg-cover bg-black opacity-50"
                    style={{
                        backgroundImage: `url("https://preview.colorlib.com/theme/pato/images/header-menu-01.jpg")`,
                    }}
                    role="img"
                    aria-label="Lunch background image"
                />
                <div className="relative text-center px-6 py-12">
                    <h1 className="uppercase text-white text-4xl md:text-5xl font-bold tracking-wider">
                        Lunch
                    </h1>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-center justify-center p-16">
                {menuItems.map((item) => (
                    <div
                        key={item}
                        className="flex px-3 flex-col sm:flex-row bg-white rounded-lg transition duration-300 items-center "
                    >
                        <div className="w-full md:w-1/5 h-60 md:h-auto flex-shrink-0 overflow-hidden rounded-lg">
                            <img
                                src={item.image}
                                alt="lunch"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-4 flex flex-col justify-between">
                            <h2 className="uppercase font-thin text-xl mb-2">{item.name}</h2>
                            <p className="text-sm text-gray-600 font-mono mb-4">{item.description}</p>
                            <p className="uppercase text-xl font-thin text-gray-900 mb-4">{item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Lunch;
