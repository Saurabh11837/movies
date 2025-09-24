"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { Search } from "lucide-react";
import Card2 from "./Card2";

export default function Navbar2() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [loading, setLoading] = useState(true);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(0); // 👈 ab 0-based index
  const [allPages, setAllPages] = useState([]); // API se jo data aayega uska array

  // 🔹 Fetch Movies from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get("https://jsonfakery.com/movies/paginated");

        // Yaha poora array store karo
        setAllPages(resp.data.data);

        // Starting me first page ka data set karo
        if (resp.data.data.length > 0) {
          setMovies(resp.data.data[0].casts);
        }
      } catch (e) {
        console.error("Error fetching:", e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // 🔹 Jab currentPage change hoga tab us page ka data load karo
  useEffect(() => {
    if (allPages.length > 0 && allPages[currentPage]) {
      setMovies(allPages[currentPage].casts);
    }
  }, [currentPage, allPages]);

  // 🔹 Search Function
  const handleSearch = () => {
    if (!query.trim()) {
      setSearchResult(null);
      return;
    }

    const found = movies.find((movie) =>
      movie.original_name?.toLowerCase().includes(query.toLowerCase())
    );

    if (found) {
      setSearchResult(found);
    } else {
      setSearchResult("not-found");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-white text-xl">
        Loading...
      </div>
    );
  }

  // Total pages API ke response ke hisaab se
  const totalPages = allPages.length;

  // Pagination logic
  const renderPagination = () => {
    const pages = [];

    // Always show page 1
    pages.push(1);

    if (currentPage > 2) {
      pages.push("...");
    }

    for (
      let i = Math.max(2, currentPage);
      i <= Math.min(totalPages - 1, currentPage + 2);
      i++
    ) {
      pages.push(i);
    }

    if (currentPage < totalPages - 3) {
      pages.push("...");
    }

    // Always show last page
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages.map((page, idx) =>
      page === "..." ? (
        <span key={idx} className="px-3 py-2 text-gray-400">
          ...
        </span>
      ) : (
        <button
          key={idx}
          onClick={() => setCurrentPage(page - 1)} // 👈 page - 1 kyunki index 0 se start
          className={`px-4 py-2 rounded ${
            page - 1 === currentPage
              ? "bg-red-600 text-white"
              : "bg-gray-800 hover:bg-gray-700 text-gray-200"
          }`}
        >
          {page}
        </button>
      )
    );
  };

  return (
    <section className="bg-black text-white">
      {/* ✅ Sticky Navbar */}
      <nav className="relative w-full bg-black text-white shadow-md border-b border-gray-800">
        {/* ✅ Search Bar inside Navbar (sticky effect) */}
        <div className="px-6 py-3 -mt-10 md:mt-5 sticky top-[56px] ">
          <div className="w-full  flex rounded-full border border-gray-700 bg-gray-900 focus-within:ring-2 focus-within:ring-yellow-500 overflow-hidden">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search movies, series, Hindi..."
              className="flex-1 px-4 py-2 bg-transparent text-white focus:outline-none"
            />
            <button
              onClick={handleSearch}
              className="bg-yellow-500 text-black px-6 flex items-center justify-center hover:bg-yellow-600 transition-colors"
            >
              <Search size={18} />
            </button>
          </div>
        </div>
      </nav>

      {/* ✅ Search Result Section */}
      <div className="p-6 flex flex-col items-center gap-6">
        {searchResult && searchResult !== "not-found" && (
          <Card2 item={searchResult} />
        )}

        {searchResult === "not-found" && (
          <p className="text-red-500 font-semibold text-lg">
            Movie Not Found ❌
          </p>
        )}
      </div>

      {/* ✅ Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mt-6 px-4">
        {[
          "18+",
          "Bangali",
          "Bollywood",
          "Chinese",
          "Dual Audio",
          "English",
          "Gujarati",
          "Hindi",
          "Hollywood",
          "Kannada Movie",
          "Korean",
          "Malayalam",
          "Marathi",
          "Odia",
          "Punjabi",
          "South Indian",
          "Tamil",
          "Telugu",
          "TV Show",
          "Web Series",
        ].map((cat, idx) => (
          <span
            key={idx}
            className="px-3 py-2 rounded-lg text-center bg-red-600 hover:bg-red-700 text-xs sm:text-sm md:text-base font-semibold cursor-pointer shadow-md transition"
          >
            {cat}
          </span>
        ))}
      </div>

      {/* ✅ Movies Cards Render */}
      <div className="mt-5 flex flex-wrap gap-2 md:gap-4 justify-center items-start ">
        {Array.isArray(movies) &&
          movies
            .filter(
              (item) =>
                (item.profile_path && item.profile_path.trim() !== "") ||
                (item.poster && item.poster.trim() !== "")
            )
            .map((item, index) => <Card2 key={item.id || index} item={item} />)}
      </div>

      {/* ✅ Pagination Footer */}
      <div className="flex justify-center items-center gap-2 mt-10 mb-6">
        {renderPagination()}
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))
          }
          className="px-4 py-2 rounded bg-gray-800 hover:bg-gray-700 text-gray-200"
        >
          Next →
        </button>
      </div>
      {/* ✅ Pagination Footer */}
      {/* <div className="flex justify-center items-center gap-2 mt-10 mb-6"> */}
      {/* Prev Button */}
      {/* <button
          onClick={() =>
            setCurrentPage(
              (prev) => (prev === 0 ? totalPages - 1 : prev - 1) // 👈 wrap-around
            )
          }
          className="px-4 py-2 rounded bg-gray-800 hover:bg-gray-700 text-gray-200"
        >
          ← Prev
        </button> 

        {renderPagination()}*/}

      {/* Next Button */}
      {/* <button
          onClick={() =>
            setCurrentPage(
              (prev) => (prev === totalPages - 1 ? 0 : prev + 1) // 👈 wrap-around
            )
          }
          className="px-4 py-2 rounded bg-gray-800 hover:bg-gray-700 text-gray-200"
        >
          Next →
        </button>
      </div> */}
    </section>
  );
}
