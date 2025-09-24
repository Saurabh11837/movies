import React from "react";
import Image from "next/image";
import Hero from "../components/asset/Hero_2.jpg";
// import Cardbig from "./Cardbig";
import Card_x_formet from "./Card_x_formet";
import CardBig2 from "./CardBig2";

import Cardbig from "./Cardbig";
import Formnew from "./Formnew";
import ImageSlider from "./ImageSlider";
const Homepage = () => {
  return (
    <>
      <div>
        {/* <Image src={Hero} alt="Error" /> */}
        <div className="relative">
          <ImageSlider />
        </div>

        <div className="absolute w-full h-full bg-amber-100 p-2 -mt-70">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Cardbig />
            <Cardbig />
            <Cardbig />
            <Cardbig />
            <Cardbig />
            <Cardbig />
            <Cardbig />
            <Cardbig />
          </div>

          <div className="relative w-full h-full mt-10">
            <Card_x_formet />
          </div>
        </div>
      </div>
      {/* <Cardbig /> */}
      {/* <div className="flex bg-gray-400 p-5">
        <CardBig2 />
        <CardBig2 />
        <CardBig2 />
        <CardBig2 />
      </div> */}

      <p></p>
      <input type="text" />
      <div className="flex flex-wrap items-center justify-center bg-blue-300 p-2 gap-5">
        <Cardbig />
        <Cardbig />
        <Cardbig />
        <Cardbig />
        <Cardbig />
        <Cardbig />
        <Cardbig />
        <Cardbig />
      </div>

      <Formnew />
    </>
  );
};

export default Homepage;
