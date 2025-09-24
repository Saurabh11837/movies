import React from "react";
import Image from "next/image";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaLocationDot, FaMagnifyingGlass } from "react-icons/fa6";
import amazonLogo from "../components/asset/amazon_logo_new.png";
import indianFlag from "../components/asset/India.png";

const Navbar = () => {
  return (
    <>
      <div className="fixed bg-black  flex items-center justify-between h-16 p-2">
        {/* Amazon Logo */}
        <div className="flex items-center cursor-pointer">
          <Image src={amazonLogo} alt="Amazon Logo" className="w-28 h-auto" />
          <span className="text-white text-sm   ">.in</span>
        </div>

        {/* Location */}
        <div className="text-white flex items-center cursor-pointer px-2">
          <FaLocationDot className=" mt-3 w-4 h-4 " />
          <div className="leading-tight flex-grid">
            <p className="text-xs text-gray-300 mt-0.5">
              Deliver to Ranchi 834001
            </p>
            <p className="text-sm font-bold -mt-0.5">Update Location</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="text-white flex bg-blue-500 rounded-md w-160 ">
          <div className="flex items-center justify-center p-2 gap-1 bg-gray-200 text-black rounded-tl-md rounded-bl-md">
            <p className="text-sm text-gray-400">All</p>
            <IoMdArrowDropdown />
          </div>
          <div className="bg-white flex items-center w-140">
            <input
              type="text"
              placeholder="Search element here..."
              className="placeholder-gray-400 focus:outline-none  text-black pl-2 text-sm w-137"
            />
          </div>
          <div className="w-8 flex items-center justify-center rounded-tr-md rounded-br-md bg-amber-400">
            <FaMagnifyingGlass className="h-10 w-5 text-black" />
          </div>
        </div>

        {/* Indian flag and select language */}
        <div className="text-white flex items-center">
          <div className="flex items-center">
            <Image src={indianFlag} alt="indianFlag" className="h-4 w-6  " />
            <p className="text-sm font-bold ml-1">EN</p>
          </div>
          <IoMdArrowDropdown className=" text-xl" />
        </div>

        {/* Account Section */}
        <div className="text-white px-2 cursor-pointer">
          <p className="text-xs">Hello, Sign in</p>
          <p className="font-bold text-sm">Account & Lists</p>
        </div>

        {/* Returns & Orders */}
        <div className="text-white px-2 cursor-pointer">
          <p className="text-xs">Returns</p>
          <p className="font-bold text-sm">& Orders</p>
        </div>

        {/* Cart */}
        <div className="text-white flex items-center px-2 cursor-pointer">
          <FaShoppingCart className="text-4xl mr-1" />
          <p className="font-bold text-sm">Cart</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
