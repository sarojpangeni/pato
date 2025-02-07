import React from "react";

const Menu = () => {
  const menuItems = [
    { name: "Lunch", image: "https://preview.colorlib.com/theme/pato/images/our-menu-01.jpg" },
    { name: "Dinner", image: "https://preview.colorlib.com/theme/pato/images/our-menu-05.jpg" },
    { name: "Drink", image: "https://preview.colorlib.com/theme/pato/images/our-menu-08.jpg" },
    { name: "Starters", image: "https://preview.colorlib.com/theme/pato/images/our-menu-10.jpg" },
    { name: "Happy Hour", image: "https://preview.colorlib.com/theme/pato/images/our-menu-13.jpg" },
    { name: "Dessert", image: "https://preview.colorlib.com/theme/pato/images/our-menu-16.jpg" },
  ];

  return (
   <div className=" bg-gray-50 flex flex-col items-center pb-5">
     <div className=" items-center justify-center">
      <div className="flex flex-col items-center justify-center">
      <span className="text-4xl font-mono text-gray-800 ">Discover</span> 
      <h1 className="text-red-500 font-bold text-4xl uppercase">Our Menu</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 w-full max-w-6xl">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover transition duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
              <span className="text-white text-xl font-semibold px-4 py-2 bg-red-500 rounded-full">
                {item.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
   </div>
  );
};

export default Menu;
