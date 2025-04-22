import React from "react";

const About = () => {
  return (
    <div className="flex items-center justify-center h-screen md:h-full md:py-9 bg-gray-50 px-8">
      <div className="grid md:grid-cols-1 md:m-5 items-center max-w-6xl">
        <div className=" text-center justify-center  ml-5">
          <h2 className="text-red-500 text-xl font-semibold italic mb-2">
            Italian Restaurant
          </h2>
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            WELCOME
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, 
            nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis ligula sem id neque.
          </p>
          <div className="flex items-center justify-center ">
          <button className="text-gray-800 font-semibold text-lg gap-2 hover:text-red-500 transition mb-6">
            OUR STORY <span>&rarr;</span>
          </button>
          </div>
        </div>
        <div className="flex items-center justify-center hover:opacity-100 transition duration-300">
          <img
            src="https://preview.colorlib.com/theme/pato/images/our-story-01.jpg"
            alt="Delicious Food"
            className="rounded-xl shadow-lg object-cover w-full max-w-sm "
          />
        </div>
      </div>
    </div>
  );
};

export default About;
