"use client";
import React from "react";
import { ReactTyped } from "react-typed";

export const TypedText = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="text-2xl md:text-3xl font-bold">
        {/* I am Saurabh Kumar{" "} */}
        <span className="text-purple-600">
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
      </h1>
      {/* <p className="text-gray-600 mt-4 text-lg">
        I am a software developer and here is my portfolio website.
      </p> */}
    </div>
  );
};
