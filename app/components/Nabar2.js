import React from "react";
import { FaAlignJustify } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import {} from "react-icons/fa6";
import Image from "next/image";
import nav from "../components/asset/nav2.jpg";

("../components/asset/nav2.jpg");
const Nabar2 = () => {
  return (
    <>
      <div className="flex items-center bg-cyan-950 text-white h-10 overflow-x-auto whitespace-nowrap">
        <div className="flex items-center justify-center min-w-[60px] gap-1 px-2">
          <FaAlignJustify />
          <p>All</p>
        </div>
        <div className="flex items-center gap-6 text-sm px-4">
          <p>Fresh</p>
          <p>MX Player</p>
          <p>Sell</p>
          <p>Bestsellers</p>
          <p>Today's Deals</p>
          <p>Mobiles</p>
          <p className="flex items-center gap-1">
            Prime <IoMdArrowDropdown />
          </p>
          <p>Customer Service</p>
          <p>Electronics</p>
          <p>Fashion</p>
        </div>
        <div>
          <Image src={nav} alt="#" className="h-8 w-auto" />
        </div>
      </div>
    </>
  );
};

export default Nabar2;
