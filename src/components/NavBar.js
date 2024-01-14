import React from 'react'
import { FaHome, FaNewspaper, FaList, FaUser, FaSearch } from 'react-icons/fa';
import butterfly from './assets/butterfly.png';
import notifi from './assets/noti.png';
import { IoExitOutline } from "react-icons/io5";


function NavBar() {
  return (
    <>
      <nav className="fixed bottom-0 left-0 w-full bg-white  p-2 flex justify-around items-center md:hidden">
        <a href="#" className="text-black p-2 hover:bg-blue-600 hover:rounded-lg hover:text-white" >
          <FaHome size={20} />
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


      <nav className='hidden md:flex md:flex-col md:p-2 md:items-center md:h-full'>

        <div className="logo flex flex-col space-y-4 items-center mb-12">
          <a href="#" className=" p-2 " >
            <img src={butterfly} alt="" className='h-8' />
          </a>

          <a href="#" className="text-gray-600 p-2 hover:bg-blue-600 hover:rounded-lg hover:text-white">
            <FaSearch size={20} />
          </a>

        </div>

        <div className="navitem  flex flex-col  items-center space-y-4 ">

          <a href="#" className="text-gray-600 p-2 hover:bg-blue-600 hover:rounded-lg hover:text-white" >
            <FaHome size={20} />
          </a>
          <a href="#" className="text-gray-600 p-2 hover:bg-blue-600 hover:rounded-lg hover:text-white">
            <FaNewspaper size={20} />
          </a>
          <a href="#" className="text-gray-600 p-2 hover:bg-blue-600 hover:rounded-lg hover:text-white">
            <FaList size={20} />
          </a>
          <a href="#" className="text-gray-600  p-2 hover:bg-blue-600 hover:rounded-lg hover:text-white">
            <FaUser size={20} />
          </a>

        </div>

        <div className="notify flex mt-72 flex-col space-y-6">
          <div className="notif flex   ">

            <img src={notifi} alt="" className='mt-1 cursor-pointer' />
            <div className='flex justify-end items-end rounded-full top-0 bg-blue-400 h-2 w-2'></div>

            
          </div>
          <IoExitOutline className=' text-gray-600 cursor-pointer' size={20} />
        </div>



      </nav>
    </>
  )
}

export default NavBar
