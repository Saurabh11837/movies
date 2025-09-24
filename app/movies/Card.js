"use client";
import Image from "next/image";
import React from "react";

const Card = ({ item }) => {
  const imgUrl = item.Poster || "/fallback-image.jpg";

  return (
    <div className="w-60 bg-black border border-gray-800 shadow-md rounded overflow-hidden ">
      {/* Poster */}
      <div className="relative w-full h-80 bg-gray-900">
        <Image
          src={imgUrl}
          alt={item.Title || "Movie Poster"}
          fill
          className="object-cover hover:scale-105 transition-transform"
        />
      </div>

      {/* Content */}
      <div className="p-3 text-sm text-gray-200">
        <h3 className="font-semibold text-white truncate">{item.Title}</h3>
        <p className="text-gray-400 text-xs mt-1">
          Year: {item.Year || "N/A"} | {item.Runtime || "Unknown"}
        </p>
      </div>
    </div>
  );
};

export default Card;
