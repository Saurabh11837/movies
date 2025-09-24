import React from "react";
import Home_furnishing from "../components/asset/Home_furnishings_1.jpg";
import Home_decor_1 from "../components/asset/Home_decor_1.jpg";
import Home_lighting_2 from "../components/asset/Home_lighting_2.jpg";
import Home_storage_1 from "../components/asset/Home_storage_1.jpg";
import Image from "next/image";

const CardBig2 = () => {
  return (
    <div className="p-8 bg-white my-8 mx-4">
      <p>Explore Items</p>
      <div className="flex w-full gap-4">
        <div className="w-full flex flex-col  gap-4">
          <div className="w-full h-1/2">
            <Image src={Home_decor_1} alt="img" className="w-full h-auto" />
            <p className="px-2 py-1 text-wrap text-xs">Subtitle asfdkjdskf </p>
          </div>
          <div>
            <Image src={Home_decor_1} alt="img" className="w-full" />
            <p className="px-2 py-1">Subtitle</p>
          </div>
        </div>
        <div className="w-full flex-col flex gap-4">
          <div>
            <Image src={Home_decor_1} alt="img" className="w-full" />
            <p className="px-2 py-1">Subtitle</p>
          </div>
          <div>
            <Image src={Home_decor_1} alt="img" className="w-full" />
            <p className="px-2 py-1">Subtitle</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBig2;
