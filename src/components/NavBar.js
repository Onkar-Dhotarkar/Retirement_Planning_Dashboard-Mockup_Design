import React from 'react'
import { FaHome,MdHome,FaNewspaper , FaList, FaUser, FaSearch } from 'react-icons/fa';
import { TiHome } from "react-icons/ti";
import { IoHomeSharp } from "react-icons/io5";
import { useState } from 'react';

function NavBar() {
    

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white fixed  p-4 flex justify-around items-center md:hidden">
      <a href="#" className="text-black p-2 hover:bg-blue-600 hover:rounded-lg hover:text-white" >
       <FaHome  size={20} /> 
      </a>
      <a href="#" className="text-black p-2 hover:bg-blue-600 hover:rounded-lg hover:text-white">
        <FaNewspaper size={20} />
      </a>
      <a href="#" className="text-black p-2 hover:bg-blue-600 hover:rounded-lg hover:text-white">
        <FaList size={20} />
      </a>
      <a href="#" className="text-black p-2 hover:bg-blue-600 hover:rounded-lg hover:text-white">
        <FaUser size={20} />
      </a>
      <a href="#" className="text-black p-2 hover:bg-blue-600 hover:rounded-lg hover:text-white">
        <FaSearch size={20} />
      </a>
    </nav>
  )
}

export default NavBar
