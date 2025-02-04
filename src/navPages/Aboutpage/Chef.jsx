import React from "react";

const Chef = () => {
  const chefs = [
    {
      name: "Peter Hart",
      role: "CHEF",
      description:"Donec porta eleifend mauris ut efficitur. Quisque non velit vestibulum, lobortis mi eget, rhoncus nunc.",
      image: "https://preview.colorlib.com/theme/pato/images/avatar-02.jpg",
    },
    {
      name: "Joyce Bowman",
      role: "CHEF",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies felis a sem tempus tempus.",
      image: "https://preview.colorlib.com/theme/pato/images/avatar-03.jpg",
    },
    {
      name: "Peter Hart",
      role: "CHEF",
      description:"Phasellus aliquam libero a nisi varius, vitae placerat sem aliquet. Ut at velit nec ipsum iaculis posuere quis in sapien.",
      image: "https://preview.colorlib.com/theme/pato/images/avatar-05.jpg",
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <h1 className="text-center text-2xl font-bold text-red-600 mb-3">Meet Our</h1>
      <h2 className="text-center text-5xl font-bold text-gray-800 tracking-widest">CHEF</h2>
      <div className="grid grid-cols-3 gap-8 mt-10 px-6 md:px-20">
        {chefs.map((chef, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 text-center flex flex-col items-center -top-0"
          >
            <img
              src={chef.image}
              alt={chef.name}
              className="w-24 h-24 rounded-full border-4 border-red-500 mb-4 relative"
            />
            <h3 className="text-xl font-bold text-gray-800 mb-2">{chef.name}</h3>
            <p className="text-sm font-semibold text-gray-600 mb-4">{chef.role}</p>
            <p className="text-gray-500 text-sm">{chef.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chef;
