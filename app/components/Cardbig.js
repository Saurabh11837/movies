import React from "react";
import Image from "next/image";
import Home_furnishing from "../components/asset/Home_furnishings_1.jpg";
import Home_decor_1 from "../components/asset/Home_decor_1.jpg";
import Home_lighting_2 from "../components/asset/Home_lighting_2.jpg";
import Home_storage_1 from "../components/asset/Home_storage_1.jpg";

const Cardbig = () => {
  return (
    <>
      <div className="p-2 w-80 bg-white shadow-lg">
        <h1 className="font-bold text-2xl p-2 text-wrap">
          Revamap your home in style
        </h1>
        <div className="flex gap-5  pl-3">
          <div className="flex flex-col gap-3">
            <div className="w-30 h-30">
              <Image
                src={Home_furnishing}
                alt="api image"
                height={200}
                width={220}
              />
              <p className="text-wrap p-1 text-xs">
                Cushion covers, bedsheets & more
              </p>
            </div>
            <div className="w-30 h-30">
              <Image
                src={Home_decor_1}
                alt="api image"
                height={120}
                width={120}
              />
              <p className="text-wrap p-1 text-xs">Figurines, vases & more</p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="w-30 h-30">
              <Image
                src={Home_storage_1}
                alt="api image"
                height={120}
                width={120}
              />
              <p className="text-wrap p-1 text-xs">Home storage</p>
            </div>
            <div className="w-30 h-10">
              <Image
                src={Home_lighting_2}
                alt="api image"
                height={120}
                width={120}
              />
              <p className="text-wrap p-1 text-xs">Lighting solutions</p>
            </div>
          </div>
        </div>
        <p className="text-blue-600 pl-3">Explore all</p>
      </div>
    </>
  );
};

export default Cardbig;
