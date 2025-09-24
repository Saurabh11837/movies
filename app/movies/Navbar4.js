"use client";
import { Flame } from "lucide-react"; // or use 🔥 emoji if you don't want lucide

import React from "react";

const Navbar4 = () => {
  return (
    <>
      <section>
        <div className="">
          <div className="bg-[#1a1a1a] px-4 py-3 rounded-sm flex items-center justify-center shadow  m-5">
            {/* Icon */}
            <Flame size={20} className="text-blue-400 mr-2" />
            {/* Title */}
            <h2 className="text-white font-semibold">Latest Releases Movies</h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar4;
