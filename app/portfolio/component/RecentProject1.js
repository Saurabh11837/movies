"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import amazon from "../component/asset/Amazon-Logo.jpeg";
import portfolio from "../component/asset/portfolio.png";
import todo from "../component/asset/work3.jpg";
import { GoTriangleRight } from "react-icons/go";
import AOS from "aos";
import "aos/dist/aos.css";

const RecentProject = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: false });
  }, []);

  return (
    <>
      <section id="Project">
        <div className="flex flex-col justify-center items-center p-10 ">
          <p className=" text-gray-400">My Project</p>
          <h1 className=" font-bold text-4xl text-blue-500 ">Recent Work</h1>
        </div>
        <div className="flex flex-wrap gap-3 items-center justify-center">
          {/* Amazon Clone */}
          <div data-aos="fade-up">
            <div className="m-5 bg-gray-700 h-70 w-70 px-3 py-5 rounded-2xl flex flex-col items-center justify-between shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="w-43">
                <Image src={amazon} alt="#" className="rounded-2xl h-39 w-65" />
              </div>
              <div>
                <p className="font-bold text-xl text-gray-200">Amazon Clone</p>
                <div className="flex">
                  <p className="text-sm text-blue-500">Demo</p>
                  <GoTriangleRight className="text-sm text-blue-500 h-5 w-5" />
                </div>
              </div>
            </div>
          </div>

          {/* Portfolio */}
          <div data-aos="zoom-in-up">
            <div className="m-5 bg-gray-700 h-70 w-70 px-3 py-5 rounded-2xl flex flex-col items-center justify-between shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="w-43">
                <Image
                  src={portfolio}
                  alt="#"
                  className="rounded-2xl h-39 w-65"
                />
              </div>
              <div>
                <p className="font-bold text-xl text-gray-200">Portfolio</p>
                <div className="flex">
                  <a
                    className="text-sm text-blue-500"
                    href="file:///H:/Delata%20Batch%20class/CSS/portfolioNew.html#about"
                  >
                    Demo
                  </a>

                  <GoTriangleRight className="text-sm text-blue-500 h-5 w-5" />
                </div>
              </div>
            </div>
          </div>

          {/* To-do Project */}
          <div data-aos="fade-right">
            <div className="m-5 bg-gray-700 h-70 w-70 px-3 py-5 rounded-2xl flex flex-col items-center justify-between shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="w-43">
                <Image src={todo} alt="#" className="rounded-2xl h-39 w-65" />
              </div>
              <div>
                <p className="font-bold text-xl text-gray-200">To-do</p>
                <div className="flex">
                  <p className="text-sm text-blue-500">Demo</p>
                  <GoTriangleRight className="text-sm text-blue-500 h-5 w-5" />
                </div>
              </div>
            </div>
          </div>

          {/* aur To-do projects bhi isi pattern me */}
        </div>
      </section>
    </>
  );
};

export default RecentProject;
