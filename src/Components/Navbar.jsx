import React from "react";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from "react-router-dom";

export default function Navbar() {
    // State to manage the navbar's visibility
    const [nav, setNav] = useState(false);
  
    // Toggle function to handle the navbar's display
    const handleNav = () => {
      setNav(!nav);
    };

      // Array containing navigation items
  const navItems = [
    { id: 1, text: 'HOME' },
    { id: 2, text: 'SERVICES' },
    { id: 3, text: 'STUDIES' },
    { id: 4, text: 'PROJECTS' },
    { id: 5, text: 'ABOUT' },
    // { id: 6, text: 'CONTACT' },
  ];

  return (
    <div className='bg-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      {/* Logo */}
      <h1 className='w-full text-3xl font-bold text-black'>ISIS BRAIMBRIDGE</h1>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex '>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 hover:bg-[#00df9a] text-black rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
          >
          
            <Link to={item.text}> {item.text} </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} style={{ color: "black", fontSize: "1.5em" }} /> : <AiOutlineMenu size={20} style={{ color: "black", fontSize: "1.5em" }} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-20'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] '
        }
      >
        {/* Mobile Logo */}
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>Explore 🤗</h1>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            <Link to={item.text}> {item.text} </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

