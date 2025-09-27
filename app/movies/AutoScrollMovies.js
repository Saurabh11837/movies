"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import axios from "axios";

export default function AutoScrollMovies() {
  const scrollRef = useRef(null);

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get("https://jsonfakery.com/movies/paginated");

        const imageUrls = resp.data.data[0].casts
          .filter(
            (cast) =>
              cast.profile_path &&
              typeof cast.profile_path === "string" &&
              cast.profile_path.trim() !== ""
          )
          .map((cast) => `https://image.tmdb.org/t/p/w500${cast.profile_path}`);

        setMovies(imageUrls);
      } catch (e) {
        console.error("Error fetching:", e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // 🔹 Smooth auto-scroll
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;

    const step = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
        scrollAmount = 0;
      } else {
        scrollAmount += 1; // 🔹 slower scroll (1px per frame)
        scrollContainer.scrollLeft = scrollAmount;
      }
      requestAnimationFrame(step);
    };

    requestAnimationFrame(step);

    return () => cancelAnimationFrame(step);
  }, [movies]);

  // 🔹 Remove broken images
  const handleImageError = (src) => {
    setMovies((prev) => prev.filter((url) => url !== src));
  };

  // if (loading) {
  //   return (
  //     <div className="flex justify-center items-center h-screen text-white text-xl">
  //       Loading...
  //     </div>
  //   );
  // }
  if (loading) {
    return (
      <div className="mt-5 flex flex-wrap gap-2 md:gap-4 justify-center items-start">
        {Array.from({ length: 14 }).map((_, idx) => (
          <div
            key={idx}
            className="w-20 h-30 bg-gray-800 rounded-lg animate-pulse mt-3"
          ></div>
        ))}
      </div>
    );
  }
  

  return (
    <div className="bg-black  overflow-hidden w-full h-30">
      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-[1px] hide-scrollbar"
      >
        {[...movies, ...movies].map((src, i) => (
          <div
            key={i}
            className="w-20 h-30 flex items-center justify-center flex-shrink-0 bg-transparent"
          >
            <Image
              src={src}
              alt={`Movie ${i}`}
              width={176}
              height={128}
              className="max-w-full max-h-full  object-contain"
              onError={() => handleImageError(src)} // ✅ broken image ko hata do
            />
          </div>
        ))}
      </div>
    </div>
  );
}
