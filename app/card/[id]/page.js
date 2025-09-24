"use client";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const DetailedPage = ({ params }) => {
  const searchParams = useSearchParams();

  let movie = null;
  try {
    const data = searchParams.get("data");
    if (data) {
      movie = JSON.parse(data);
    }
  } catch (err) {
    console.error("Error parsing movie data:", err);
  }

  if (!movie) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        ❌ Movie data not found!
      </div>
    );
  }

  // ⭐ Rating calculation
  const popularity = parseFloat(movie.popularity) || 0;
  const rating = Math.min(5, (popularity / 100) * 5);
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  // Dummy download links
  const downloadLinks = [
    { label: "Sample [17.52 MB]", url: "#" },
    { label: "480p [515.81 MB]", url: "#" },
    { label: "720p [1.19 GB]", url: "#" },
    { label: "1080p [2.51 GB]", url: "#" },
    { label: "HQ 1080p [11.11 GB]", url: "#" },
  ];

  return (
    <div className="flex md:flex-row flex-col items-center text-white bg-gray-900 gap-5 ">
      {/* Poster */}
      <div className="relative w-48 h-72 md:w-100 md:h-screen rounded overflow-hidden shadow-lg flex mt-5">
        <Image
          src={movie.profile_path || "/fallback-image.jpg"}
          alt={movie.original_name || "Movie"}
          fill
          className="object-contain"
        />
      </div>

      {/* Details */}
      <div>
        <div className="md:mt-6 w-full  p-6 rounded-lg shadow-md">
          <h1 className="text-2xl md:text-4xl font-bold">
            Movies Name: {movie.original_name}
          </h1>
          <p>Character: {movie.character}</p>

          {/* ⭐ Rating */}
          <div className="flex items-center space-x-1 mt-2 text-sm md:text-base">
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
            <span className="ml-2 text-xs text-gray-400">
              {rating.toFixed(1)} / 5
            </span>
          </div>
        </div>

        {/* 🔽 Download Links */}
        <div className="mt-6 space-y-3">
          {downloadLinks.map((link, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-800 p-3 rounded-lg shadow-md"
            >
              <span className="text-sm text-green-400 font-semibold">
                {link.label}
              </span>
              <Link
                href={link.url}
                target="_blank"
                className="mt-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg font-bold"
              >
                Download Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailedPage;
