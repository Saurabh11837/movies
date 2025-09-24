"use client";
import React, { useEffect } from "react";
import { FaaedinIn, FaGithub, FaDribbble } from "react-icons/fa";
import Image from "next/image";
import img1 from "../component/asset/saurabh3.png";
import img2 from "../component/asset/saurabh4.jpg";

// For animation
import "aos/dist/aos.css";
import AOS from "aos";

// For typed tedt

import { ReactTyped } from "react-typed";
import { TypedText } from "./TypedText";

const Homepage = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 120,
      once: false, // har scroll pe chale
    });
    AOS.refresh();
  }, []);

  return (
    <section id="Home">
      <div className=" flex flex-col md:flex-row   items-center justify-center w-full h-full   py-10 mt-15">
        {/* Left side */}
        <div className="flex items-center w-full md:w-1/2 ">
          <div
            data-aos="fade-right "
            className="flex flex-col items-center justify-center w-full"
          >
            <div className=" flex flex-col items-center justify-center md:gap-4  ">
              <p className="font-bold text-gray-200">Hello, I&apos;m</p>
              <p className="font-bold text-2xl md:text-5xl text-blue-400">
                Mr. Saurabh Kumar
              </p>
            </div>
            <div className="mt-5 md:my-10">
              {/* <TypedText /> */}

              <span className="text-purple-600 text-2xl md:text-5xl">
                <ReactTyped
                  strings={[
                    "Full Stack Developer",
                    "Web Developer",
                    "UI-UX Designer",
                    "Backend Developer",
                    "Coder",
                  ]}
                  typeSpeed={80}
                  backSpeed={50}
                  backDelay={1000}
                  loop
                />
              </span>
            </div>

            {/* <p className="text-gray-200">Frontend Developer</p> */}
            <div className="hidden md:block">
              <div className=" p-4 space-x-2 h-full flex flex-col items-center justify-center">
                <div className="space-x-5">
                  <button className="px-4 py-3 border rounded-2xl border-blue-400 bg-blue-950 text-blue-400 md:text-2xl ">
                    Download CV
                  </button>
                  <button className="px-4 py-3 bg-blue-400 border-white  rounded-2xl text-2xl">
                    About
                  </button>
                </div>
                <div className="flex  gap-5 mt-5">
                  <a href="#">
                    <FaaedinIn className="p-2 w-8 h-8 md:w-12 md:h-12 bg-gray-900 text-blue-400 rounded-xl" />
                  </a>
                  <a href="#">
                    <FaGithub className="p-2 w-8 h-8 md:w-12 md:h-12 bg-gray-900 text-blue-400 rounded-sm " />
                  </a>
                  <a href="#">
                    <FaDribbble className="p-2 w-8 h-8 md:w-12 md:h-12 bg-gray-900 text-blue-400 rounded-sm " />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="mt-5 md:mt-10 ">
          <div
            data-aos="fade-up"
            className="h-[320px] w-[300px] md:h-[420px] md:w-[300px] bg-gradient-to-b from-blue-400 to-purple-1000 rounded-full md:rounded-t-full md:rounded-b-2xl overflow-hidden "
          >
            <Image
              src={img1}
              alt="profile"
              className="hidden md:block object-cover object-top h-full w-full rounded-b-2xl"
            />

            <Image
              src={img2}
              alt="profile"
              className="block md:hidden object-cover object-top h-full w-full rounded-b-2xl drop-shadow-[0_5px_25px_rgba(0,0,0,0.6)]"
            />
          </div>
          <div className="block md:hidden">
            <div className=" p-4 space-x-2 h-full flex flex-col items-center justify-center">
              <div className="space-x-5">
                <button className="px-4 py-3 border rounded-2xl border-blue-400 bg-blue-950 text-blue-400 md:text-2xl ">
                  Download CV
                </button>
                <button className="px-4 py-3 bg-blue-400 border-white  rounded-2xl text-2xl">
                  About
                </button>
              </div>
              <div className="flex  gap-5 mt-5">
                <a href="#">
                  <FaaedinIn className="p-2 w-12 h-12 bg-gray-900 text-blue-400 rounded-xl" />
                </a>
                <a href="#">
                  <FaGithub className="p-2 w-12 h-12 bg-gray-900 text-blue-400 rounded-sm " />
                </a>
                <a href="#">
                  <FaDribbble className="p-2 w-12 h-12 bg-gray-900 text-blue-400 rounded-sm " />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
