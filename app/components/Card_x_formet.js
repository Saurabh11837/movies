import React from "react";
import { FaRupeeSign } from "react-icons/fa";
import Image from "next/image";
import joystic from "../components/asset/electronic/joystic.jpg";
import keyboard from "../components/asset/electronic/keyboard.jpg";
import mouse from "../components/asset/electronic/mouse.jpg";
import stand from "../components/asset/electronic/stand.jpg";

const Card_x_formet = () => {
  return (
    <>
      {/* <p>Card_x_formet</p> */}
      <div className="bg-white py-4 px-1 m-2 ">
        <div className="flex items-center gap-4">
          <h1 className="flex font-bold text-2xl">
            Starting
            <FaRupeeSign className="h-4 w-4 flex items-center justify-center" />
            499 | Gear up for victory, next-level gaming starts here
          </h1>
          <p className="text-blue-500">see all offers</p>
        </div>

        <div className="flex overflow-auto p- gap-6">
          <div className="w-48 h-48  flex-shrink-0 ">
            <Image
              src={joystic}
              alt="joystic"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-48 h-48  flex-shrink-0">
            <Image
              src={keyboard}
              alt="joystic"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-48 h-48  flex-shrink-0">
            <Image
              src={stand}
              alt="stand"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-48 h-48  flex-shrink-0">
            <Image
              src={mouse}
              alt="mouse"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-48 h-48  flex-shrink-0">
            <Image
              src={joystic}
              alt="joystic"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-48 h-48  flex-shrink-0">
            <Image
              src={keyboard}
              alt="Keyboard"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-48 h-48  flex-shrink-0">
            <Image
              src={stand}
              alt="stand"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card_x_formet;
