import React from "react";
import Image from "next/image";
import amazon from "../component/asset/Amazon-Logo.jpeg";
import portfolio from "../component/asset/portfolio.png";
import todo from "../component/asset/work3.jpg";
import { GoTriangleRight } from "react-icons/go";

const RcentProject = () => {
  return (
    <>
      <section id="Section">
        <div className="flex flex-wrap gap-3 items-center justify-center">
          <div>
            <div className="m-5 bg-gray-700 h-70 w-70 px-3 py-5 rounded-2xl flex flex-col items-center justify-between shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <div className=" w-43">
                <Image src={amazon} alt="#" className="rounded-2xl h-39 w-65" />
              </div>
              <div className="">
                <p className="font-bold text-xl text-gray-200">Amazon Clone </p>
                <div className="flex">
                  <p className="text-sm text-blue-500">Demo </p>
                  <GoTriangleRight className="text-sm text-blue-500 h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="m-5 bg-gray-700 h-70 w-70 px-3 py-5 rounded-2xl flex flex-col items-center justify-between shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <div className=" w-43">
                <Image
                  src={portfolio}
                  alt="#"
                  className="rounded-2xl h-39 w-65"
                />
              </div>
              <div className="">
                <p className="font-bold text-xl text-gray-200">Portfolio </p>
                <div className="flex">
                  <p className="text-sm text-blue-500">Demo </p>
                  <GoTriangleRight className="text-sm text-blue-500 h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="m-5 bg-gray-700 h-70 w-70 px-3 py-5 rounded-2xl flex flex-col items-center justify-between shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <div className=" w-43">
                <Image src={todo} alt="#" className="rounded-2xl h-39 w-65" />
              </div>
              <div className="">
                <p className="font-bold text-xl text-gray-200">To-do </p>
                <div className="flex">
                  <p className="text-sm text-blue-500">Demo </p>
                  <GoTriangleRight className="text-sm text-blue-500 h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="m-5 bg-gray-700 h-70 w-70 px-3 py-5 rounded-2xl flex flex-col items-center justify-between shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <div className=" w-43">
                <Image src={todo} alt="#" className="rounded-2xl h-39 w-65" />
              </div>
              <div className="">
                <p className="font-bold text-xl text-gray-200">To-do </p>
                <div className="flex">
                  <p className="text-sm text-blue-500">Demo </p>
                  <GoTriangleRight className="text-sm text-blue-500 h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="m-5 bg-gray-700 h-70 w-70 px-3 py-5 rounded-2xl flex flex-col items-center justify-between shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <div className=" w-43">
                <Image src={todo} alt="#" className="rounded-2xl h-39 w-65" />
              </div>
              <div className="">
                <p className="font-bold text-xl text-gray-200">To-do </p>
                <div className="flex">
                  <p className="text-sm text-blue-500">Demo </p>
                  <GoTriangleRight className="text-sm text-blue-500 h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="m-5 bg-gray-700 h-70 w-70 px-3 py-5 rounded-2xl flex flex-col items-center justify-between shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <div className=" w-43">
                <Image src={todo} alt="#" className="rounded-2xl h-39 w-65" />
              </div>
              <div className="">
                <p className="font-bold text-xl text-gray-200">To-do </p>
                <div className="flex">
                  <p className="text-sm text-blue-500">Demo </p>
                  <GoTriangleRight className="text-sm text-blue-500 h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RcentProject;
