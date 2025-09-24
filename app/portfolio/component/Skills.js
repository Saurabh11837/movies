import React from "react";

const Skills = () => {
  return (
    <>
      <div className="w-full h-full flex flex-wrap items-center justify-center gap-2 ">
        <div className="w-full md:w-1/3 px-10 py-10 flex flex-col bg-gray-800 rounded-2xl cursor-pointer hover:shadow-[0_4px_6px_rgba(0,0,0,1)] m-5">
          <div className=" flex md:flex-col  items-center justify-center ">
            <p className="text-blue-500 text-xl font-bold">Frontend</p>
            <p className="text-blue-500 text-xl font-bold">Development</p>
          </div>
          <div className="flex  items-center justify-around gap-3">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col">
                <h1 className="font-bold text-xl text-white">HTML</h1>
                <p className="text-sm text-gray-400">Advaced</p>
              </div>
              <div className="flex flex-col">
                <h1 className="font-bold text-xl text-white">CSS/CSS3</h1>
                <p className="text-sm text-gray-400">Advaced</p>
              </div>
              <div className="flex flex-col">
                <h1 className="font-bold text-xl text-white">JavaScript</h1>
                <p className="text-sm text-gray-400">Advaced</p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col">
                <h1 className="font-bold text-xl text-white">Bootstrap</h1>
                <p className="text-sm text-gray-400">Intermediate</p>
              </div>
              <div className="flex flex-col">
                <h1 className="font-bold text-xl text-white">Git</h1>
                <p className="text-sm text-gray-400">Advaced</p>
              </div>
              <div className="flex flex-col">
                <h1 className="font-bold text-xl text-white">React</h1>
                <p className="text-sm text-gray-400">Advaced</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-10 py-10 flex flex-col bg-gray-800 rounded-2xl cursor-pointer hover:shadow-[0_4px_6px_rgba(0,0,0,1)] m-5">
          <div className=" flex md:flex-col  items-center justify-center ">
            <p className="text-blue-500 text-xl font-bold">Backend</p>
            <p className="text-blue-500 text-xl font-bold">Development</p>
          </div>
          <div className="flex  items-center justify-around gap-3">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col">
                <h1 className="font-bold text-xl text-white">Node JS</h1>
                <p className="text-sm text-gray-400">Advaced</p>
              </div>
              <div className="flex flex-col">
                <h1 className="font-bold text-xl text-white">Java</h1>
                <p className="text-sm text-gray-400">Intermediate</p>
              </div>
              <div className="flex flex-col">
                <h1 className="font-bold text-xl text-white">MySQL</h1>
                <p className="text-sm text-gray-400">Advaced</p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col">
                <h1 className="font-bold text-xl text-white">PHP</h1>
                <p className="text-sm text-gray-400">Intermediate</p>
              </div>
              <div className="flex flex-col">
                <h1 className="font-bold text-xl text-white">FireBase</h1>
                <p className="text-sm text-gray-400">Advaced</p>
              </div>
              <div className="flex flex-col">
                <h1 className="font-bold text-xl text-white">Mongo DB</h1>
                <p className="text-sm text-gray-400">Advaced</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
