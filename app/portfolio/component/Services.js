import React from "react";
import { GoTriangleRight } from "react-icons/go";

const Services = () => {
  return (
    <>
      <div className="w-full h-full  flex flex-wrap items-center justify-center">
        <div className="flex items-center justify-center m-5 gap-3">
          <div className="w-45 h-35 md:w-70 md:h-60 px-5 pt-8 pb-6 rounded-2xl bg-gray-700 flex flex-col justify-around shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="">
              <p className="font-bold text-xl  md:text-2xl text-gray-200">
                Product
              </p>
              <p className="font-bold text-xl md:text-2xl text-gray-200">
                Designing
              </p>
            </div>
            <p className="text-sm md:text-2xl text-blue-600 flex cursor-pointer">
              See More
              <GoTriangleRight className="h-5 w-5 md:h-8 md:w-8" />{" "}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center m-5 gap-3">
          <div className="w-45 h-35 md:w-70 md:h-60 px-5 pt-8 pb-6 rounded-2xl bg-gray-700 flex flex-col justify-around shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="">
              <p className="font-bold text-xl  md:text-2xl text-gray-200">
                UI / UX
              </p>
              <p className="font-bold text-xl md:text-2xl text-gray-200">
                Designing
              </p>
            </div>
            <p className="text-sm md:text-2xl text-blue-600 flex cursor-pointer">
              See More
              <GoTriangleRight className="h-5 w-5 md:h-8 md:w-8" />{" "}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center m-5 gap-3">
          <div className="w-45 h-35 md:w-70 md:h-60 px-5 pt-8 pb-6 rounded-2xl bg-gray-700 flex flex-col justify-around shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="">
              <p className="font-bold text-xl  md:text-2xl text-gray-200">
                Visual
              </p>
              <p className="font-bold text-xl md:text-2xl text-gray-200">
                Designing
              </p>
            </div>
            <p className="text-sm md:text-2xl text-blue-600 flex cursor-pointer">
              See More
              <GoTriangleRight className="h-5 w-5 md:h-8 md:w-8" />{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
