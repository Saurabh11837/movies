"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Card2 = ({ item }) => {
  const title = item.title || item.original_name || "Unknown";
  const poster = item.poster_path || item.profile_path;
  const character = item.character || item.release_date || "N/A";
  const popularity = item.popularity || 0;

  const rating = Math.min(5, (popularity / 100) * 5);
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  const imgUrl = poster
    ? `https://image.tmdb.org/t/p/w500${poster}`
    : "/fallback-image.jpg";

  return (
    // <Link href={`/card/${item.id}`} passHref>
    <Link
      href={{
        pathname: `/card/${item.movie_id}`,
        query: { data: JSON.stringify(item) }, // pura object bhej diya
      }}
    >
      <div className="cursor-pointer w-40 md:w-60 bg-black border border-gray-800 shadow-md rounded overflow-hidden hover:scale-105 transition-transform">
        {/* Poster */}
        <div className="relative w-full aspect-[2/3] bg-gray-900">
          <Image src={imgUrl} alt={title} fill className="object-cover" />
        </div>

        {/* Content */}
        <div className="p-2 md:p-3 text-gray-200">
          <h3
            className="font-semibold text-white text-sm md:text-base truncate"
            title={title}
          >
            {title}
          </h3>
          <p className="text-gray-400 text-xs md:text-sm mt-1 truncate">
            {item.character
              ? `Character: ${character}`
              : `Release: ${character}`}
          </p>

          {/* ⭐ Rating */}
          <div className="flex items-center space-x-1 mt-2 text-xs md:text-sm">
            {[...Array(fullStars)].map((_, i) => (
              <span key={`full-${i}`} className="text-yellow-400">
                ★
              </span>
            ))}
            {hasHalfStar && <span className="text-yellow-400">☆</span>}
            {[...Array(emptyStars)].map((_, i) => (
              <span key={`empty-${i}`} className="text-gray-600">
                ★
              </span>
            ))}

            <span className="ml-2 text-[10px] md:text-xs text-gray-400">
              {rating.toFixed(1)} / 5
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card2;
