import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";

function NavBar() {

  const [Active, setActive] = useState(0);
  const [isFixed, setIsFixed] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const location = useLocation();

  const navItems = [
    { title: "Home", path: "/" },
    { title: "Menu", path: "/menu" },
    { title: "Reservation", path: "/reservation" },
    { title: "Gallery", path: "/gallery" },
    { title: "About", path: "/about" },
    { title: "Blog", path: "/blog" },
    { title: "Contact", path: "/contact" },
  ];

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setActive(null)
  }, [location.pathname])

  return (
    <div className={`z-10 fixed  transition-all duration-300
     ${isFixed ? 'fixed w-full bg-white shadow-lg ' : ' left-0 right-0 mx-auto  bg-transparent'}`}>
      <div
        className='w-full justify-between px-8 flex md:justify-center items-center  md:items-center gap-16 py-4'>
        <div
          className="flex">
          <img
            src="https://preview.colorlib.com/theme/pato/images/icons/logo.png"
            alt="Logo"
            className={`cursor-pointer rounded-xl ${isFixed ? ' bg-red-500' : 'bg-transparent'} `}
          />
        </div>
        <div className="hidden md:flex gap-9 py-3  uppercase ml-5 bg-transparent">
          {navItems.map((val, i) => (
            <Link
              key={i}
              to={val.path}
              className={`hover:text-blue-400 transition ${isFixed ? 'text-black' : 'text-white'}`}>
              <div onClick={() => setActive(i)}>{val.title}</div>
            </Link>
          ))}
        </div>
        <div className={`flex items-center gap-6 ${isFixed ? 'text-black' : 'text-white'}`}>
          <div className={`gap-4 hidden md:flex`}>
            <FaTripadvisor className='hover:text-blue-400 cursor-pointer' />
            <FaFacebookF className='hover:text-blue-400 cursor-pointer' />
            <FaTwitter className='hover:text-blue-400 cursor-pointer' />
          </div>
          <div className='flex md:hidden'>
            <button className='hover:text-blue-400 text-xl'
              onClick={() => setOpenMenu(!openMenu)}><CiMenuBurger /></button>
          </div>
        </div>
      </div>
      <div className='  h-full flex justify-end'>
        {
          openMenu && (
            <div className='bg-white w-1/2 absolute  h-lvh flex flex-col gap-9 '>
              {navItems.map((value, index) => (
                <Link
                  key={index}
                  to={value.path}
                  className='py-2 text-black hover:text-blue-500 w-full text-center'
                >{value.title}</Link>
              ))}
            </div>
          )
        }
      </div>
    </div>
  )
}

export default NavBar