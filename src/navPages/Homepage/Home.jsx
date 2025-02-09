import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const images = [
    "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  ];
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };
  return (
    <div className="relative w-full h-lvh">
      <div className="relative w-full h-full">
        <Slider {...settings} ref={sliderRef}>
          {images.map((image, index) => (
            <div key={index} className="h-screen">
              <img
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Slider>
        <div className="absolute inset-0 flex justify-between items-center px-4 cursor-pointer">
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 bg-black bg-opacity-30">
          <h1 className="text-3xl font-lalw md:text-4xl lg:text-6xl font-bold mb-4 text-red-500">Welcome to</h1>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6">PATO PLACE</h2>
          <button className="bg-red-500 text-white py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-8 rounded-lg text-sm md:text-lg lg:text-xl font-semibold hover:bg-red-600 transition transform hover:scale-105">
            Look Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;