import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";

function NavBar() {
  const [Active, setActive] = useState(0);
  const navItems = [
    { title: "Home", path: "/" },
    { title: "Menu", path: "/menu" },
    { title: "Reservation", path: "/reservation" },
    { title: "Gallery", path: "/gallery" },
    { title: "About", path: "/about" },
    { title: "Blog", path: "/blog" },
    { title: "Contact", path: "/contact" },
  ];
  return (
    <div className='relative z-10 bg-transparent '>
      <div className='w-full px-8 flex justify-center items-center gap-16 py-4'>
        <div className="flex">
          <img
            src="https://preview.colorlib.com/theme/pato/images/icons/logo.png"
            alt="Logo"
            className="bg-black cursor-pointer"
          />
        </div>
        <div className="flex gap-9 py-3 uppercase ml-5 bg-transparent">
          {navItems.map((val, i) => (
            <Link
              key={i}
              to={val.path}
              className={`${val.path === location.pathname ? "text-blue-300" : "text-black"} hover:text-blue-400`}>
              <div onClick={() => setActive(i)}>{val.title}</div>
            </Link>
          ))}
        </div>
        <div className='flex gap-6 py-4 ml-5 text-black cursor-pointer'>
          <div><FaTripadvisor /></div>
          <div><FaFacebookF /></div>
          <div><FaTwitter /></div>
          <div><CiMenuBurger /></div>
        </div>
      </div>
    </div>
  )
}

export default NavBar