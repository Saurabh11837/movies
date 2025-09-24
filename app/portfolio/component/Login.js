"use client";

import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};
// import React, { useEffect } from "react";
// import "aos/dist/aos.css";
// import AOS from "aos";

export const Login = () => {
  // useEffect(() => {
  //   AOS.init({ duration: 1000 }); // 1 second animation
  // }, []);
  // AOS.init({
  //   duration: 1000,
  //   offset: 120, // kitna scroll karna hai before trigger
  // });

  // return (
  //   <>
  //     <div className="p-10 space-y-10">
  //       <h1 data-aos="fade-up" className="text-3xl font-bold text-blue-500">
  //         Hello from Top
  //       </h1>
  //       <p data-aos="fade-right" className="text-xl text-gray-700">
  //         I slide from Left → Right
  //       </p>
  //       <p data-aos="fade-left" className="text-xl text-gray-700">
  //         I slide from Right → Left
  //       </p>
  //     </div>
  //     {/* <div data-aos="fade-up">
  //       <p className="text-4xl text-amber-800">I slide botton to top</p>
  //     </div> */}
  //     <div className="h-[150vh] bg-gray-100">
  //       <div data-aos="fade-up" className="mt-[50vh]">
  //         <p className="text-4xl text-amber-800">I slide bottom to top</p>
  //       </div>
  //     </div>
  //   </>
  // );
  const cardVariantsLeft = {
    hidden: { opacity: 0, x: -200, rotateY: -90 },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: { duration: 3, ease: "easeOut" },
    },
  };

  const cardVariantsRight = {
    hidden: { opacity: 0, x: 200, rotateY: 90 },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: { duration: 3, ease: "linear" },
    },
  };
  return (
    <div className="w-full h-full flex flex-wrap items-center justify-center gap-6 p-6 bg-gray-900">
      {/* Frontend Card */}
      <motion.div
        className="w-full md:w-1/3 px-10 py-10 flex flex-col bg-gray-800 rounded-2xl 
                 cursor-pointer hover:shadow-xl hover:scale-105 transition-transform duration-300 m-5"
        variants={cardVariantsLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="flex md:flex-col items-center justify-center mb-6">
          <p className="text-blue-500 text-2xl font-bold">Frontend</p>
          <p className="text-blue-500 text-2xl font-bold">Development</p>
        </div>
        <div className="flex items-center justify-around gap-6">
          <div className="flex flex-col gap-4">
            {[
              { name: "HTML", level: "Advanced" },
              { name: "CSS/CSS3", level: "Advanced" },
              { name: "JavaScript", level: "Advanced" },
            ].map((skill, i) => (
              <motion.div
                key={i}
                className="flex flex-col"
                whileHover={{ x: 10, scale: 1.05 }}
              >
                <h1 className="font-bold text-xl text-white">{skill.name}</h1>
                <p className="text-sm text-gray-400">{skill.level}</p>
              </motion.div>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {[
              { name: "Bootstrap", level: "Intermediate" },
              { name: "Git", level: "Advanced" },
              { name: "React", level: "Advanced" },
            ].map((skill, i) => (
              <motion.div
                key={i}
                className="flex flex-col"
                whileHover={{ x: 10, scale: 1.05 }}
              >
                <h1 className="font-bold text-xl text-white">{skill.name}</h1>
                <p className="text-sm text-gray-400">{skill.level}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Backend Card */}
      <motion.div
        className="w-full md:w-1/3 px-10 py-10 flex flex-col bg-gray-800 rounded-2xl 
                 cursor-pointer hover:shadow-xl hover:scale-105 transition-transform duration-300 m-5"
        variants={cardVariantsRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
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
              <motion.div
                key={i}
                className="flex flex-col"
                whileHover={{ x: 10, scale: 1.05 }}
              >
                <h1 className="font-bold text-xl text-white">{skill.name}</h1>
                <p className="text-sm text-gray-400">{skill.level}</p>
              </motion.div>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {[
              { name: "PHP", level: "Intermediate" },
              { name: "Firebase", level: "Advanced" },
              { name: "MongoDB", level: "Advanced" },
            ].map((skill, i) => (
              <motion.div
                key={i}
                className="flex flex-col"
                whileHover={{ x: 10, scale: 1.05 }}
              >
                <h1 className="font-bold text-xl text-white">{skill.name}</h1>
                <p className="text-sm text-gray-400">{skill.level}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
