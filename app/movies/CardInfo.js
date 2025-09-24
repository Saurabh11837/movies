"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import React from "react";

const CardInfo = (itemInfo) => {
  const { id } = useParams(); // URL se id le li
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!id) return;
    // 🔹 API se detail fetch karo
    const fetchData = async () => {
      try {
        const res = await fetch(`https://jsonfakery.com/movies/${id}`);
        const movie = await res.json();
        setData(movie);
      } catch (err) {
        console.error("Error fetching movie detail:", err);
      }
    };
    fetchData();
  }, [id]);

  if (!data) {
    return (
      <div className="flex justify-center items-center h-screen text-white">
        Loading...
      </div>
    );
  }
  return (
    <>
      <div className="min-h-screen bg-black text-white p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">
            {data.title || data.original_name}
          </h1>
          <Image
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            alt={data.title}
            width={400}
            height={600}
            className="rounded mb-4"
          />
          <p className="text-gray-300 mb-2">
            Release: {data.release_date || "N/A"}
          </p>
          <p className="text-gray-300 mb-2">Popularity: {data.popularity}</p>
          <p className="text-gray-400 mt-4">
            {data.overview || "No description available."}
          </p>
        </div>
      </div>
    </>
  );
};

export default CardInfo;
