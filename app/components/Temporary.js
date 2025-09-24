import React from "react";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaLocationDot, FaMagnifyingGlass } from "react-icons/fa6";
import amazonLogo from "../components/asset/amazon_logo_new.png";
import indianFlag from "../components/asset/India.png";
const Temporary = () => {
  return (
    <>
      <div className="bg-black flex items-center justify-between h-16 px-3 md:px-6">
        {/* Amazon Logo */}
        <div className="flex items-center cursor-pointer min-w-fit">
          <Image
            src={amazonLogo}
            alt="Amazon Logo"
            className="w-20 md:w-28 h-auto"
          />
          <span className="text-white text-sm hidden md:inline">.in</span>
        </div>

        {/* Location (hidden on small screens) */}
        <div className="hidden lg:flex text-white items-center cursor-pointer px-2">
          <FaLocationDot className="mt-3 w-4 h-4" />
          <div className="leading-tight ml-1">
            <p className="text-xs text-gray-300">Deliver to Ranchi 834001</p>
            <p className="text-sm font-bold">Update Location</p>
          </div>
        </div>

        {/* Search Bar (full width on mobile) */}
        <div className="flex flex-grow mx-2">
          <div className="flex w-full bg-white rounded-md overflow-hidden">
            {/* Dropdown */}
            <div className="hidden sm:flex items-center justify-center px-2 gap-1 bg-gray-200 text-black">
              <p className="text-sm text-gray-600">All</p>
              <IoMdArrowDropdown />
            </div>
            {/* Input */}
            <input
              type="text"
              placeholder="Search Amazon..."
              className="flex-grow text-black px-2 text-sm focus:outline-none"
            />
            {/* Search Icon */}
            <div className="w-10 flex items-center justify-center bg-amber-400">
              <FaMagnifyingGlass className="h-5 w-5 text-black" />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-3 md:space-x-6">
          {/* Flag & Language */}
          <div className="hidden md:flex items-center text-white cursor-pointer">
            <Image src={indianFlag} alt="indianFlag" className="h-4 w-6" />
            <p className="text-sm font-bold ml-1">EN</p>
            <IoMdArrowDropdown className="text-xl" />
          </div>

          {/* Account */}
          <div className="hidden sm:block text-white cursor-pointer">
            <p className="text-xs">Hello, Sign in</p>
            <p className="font-bold text-sm">Account & Lists</p>
          </div>

          {/* Returns & Orders */}
          <div className="hidden lg:block text-white cursor-pointer">
            <p className="text-xs">Returns</p>
            <p className="font-bold text-sm">& Orders</p>
          </div>

          {/* Cart */}
          <div className="flex items-center text-white cursor-pointer">
            <FaShoppingCart className="text-2xl md:text-3xl mr-1" />
            <p className="hidden sm:block font-bold text-sm">Cart</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Temporary;
