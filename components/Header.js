import Image from 'next/image'
import React from 'react'
import { FaSearch,FaUser } from "react-icons/fa";
import { IoGlobeSharp,IoMenu  } from "react-icons/io5";

const Header = () => {
  return (
      <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10">
          {/* left */}
          <div className="relative flex items-center h-10 cursor-pointer my-auto">
              <Image
                  src="https://links.papareact.com/qd3"
                  layout="fill"
                  objectFit="contain"
          objectPosition="left"
          alt="Airbnb"
              />
          </div>

          {/* Middle */}
          <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input className="placeholder-gray-400 flex-grow pl-5 bg-transparent outline-none text-gray-600" type="text" placeholder="Start your search" />
        <FaSearch className="h-8 w-8 p-2 bg-red-400 text-white rounded-full cursor-pointer hidden md:inline-flex md:mx-2"/>
        
          </div>

          {/* Right */}
      <div className="flex space-x-3 items-center text-gray-500 justify-end">
        <p className="text-lg hidden md:inline cursor-pointer">Become a host</p>
        <IoGlobeSharp className="h-6 cursor-pointer text-lg" />
        
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <IoMenu  className="h-6 cursor-pointer"/>
          <FaUser className="h-6 cursor-pointer"/>
        </div>
          </div>
    </header>
  )
}

export default Header