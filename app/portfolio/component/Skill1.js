"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Skill1 = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, once: false });
  }, []);

  return (
    <section id="Skills">
      <div className="flex flex-col justify-center items-center p-10 md:mt-20 ">
        <p className=" text-gray-400">My Abilities</p>
        <h1 className=" font-bold text-4xl text-blue-500 ">My Experience</h1>
      </div>
      <div className="w-full h-full flex flex-wrap items-center justify-center gap-6 p-6 ">
        {/* Frontend Card */}
        <div
          className="w-full md:w-1/3 px-10 py-10 flex flex-col bg-gray-800 rounded-2xl 
                   cursor-pointer hover:shadow-xl hover:scale-105 transition-transform duration-300 m-5"
          data-aos="fade-right"
        >
          <div className="flex md:flex-col items-center justify-center mb-6">
            <p className="text-blue-500 text-2xl font-bold">Frontend</p>
            <p className="text-blue-500 text-2xl font-bold">Development</p>
          </div>
          <div className="flex items-center justify-around gap-6">
            <div className="flex flex-col gap-4">
              {[
                { name: "HTML", level: "Advanced" },
                { name: "CSS", level: "Advanced" },
                { name: "JavaScript", level: "Advanced" },
              ].map((skill, i) => (
                <div key={i} className="flex flex-col" data-aos="fade-up">
                  <h1 className="font-bold text-xl text-white">{skill.name}</h1>
                  <p className="text-sm text-gray-400">{skill.level}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              {[
                { name: "Bootstrap", level: "Intermediate" },
                { name: "Git", level: "Advanced" },
                { name: "React", level: "Advanced" },
              ].map((skill, i) => (
                <div key={i} className="flex flex-col" data-aos="fade-up">
                  <h1 className="font-bold text-xl text-white">{skill.name}</h1>
                  <p className="text-sm text-gray-400">{skill.level}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Backend Card */}
        <div
          className="w-full md:w-1/3 px-10 py-10 flex flex-col bg-gray-800 rounded-2xl 
                   cursor-pointer hover:shadow-xl hover:scale-105 transition-transform duration-300 m-5"
          data-aos="fade-left"
        >
          <div className="flex md:flex-col items-center justify-center mb-6">
            <p className="text-blue-500 text-2xl font-bold">Backend</p>
            <p className="text-blue-500 text-2xl font-bold">Development</p>
          </div>
          <div className="flex items-center justify-around gap-6">
            <div className="flex flex-col gap-4">
              {[
                { name: "Node JS", level: "Advanced" },
                { name: "Java", level: "Intermediate" },
                { name: "MySQL", level: "Advanced" },
              ].map((skill, i) => (
                <div key={i} className="flex flex-col" data-aos="fade-up">
                  <h1 className="font-bold text-xl text-white">{skill.name}</h1>
                  <p className="text-sm text-gray-400">{skill.level}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              {[
                { name: "PHP", level: "Intermediate" },
                { name: "Firebase", level: "Advanced" },
                { name: "MongoDB", level: "Advanced" },
              ].map((skill, i) => (
                <div key={i} className="flex flex-col" data-aos="fade-up">
                  <h1 className="font-bold text-xl text-white">{skill.name}</h1>
                  <p className="text-sm text-gray-400">{skill.level}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill1;
