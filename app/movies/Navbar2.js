"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { Search } from "lucide-react";
import Card2 from "./Card2";

export default function Navbar2() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]); // 👈 multiple results
  const [loading, setLoading] = useState(true);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(0);
  const [allPages, setAllPages] = useState([]);

  // 🔹 Fetch Movies from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get("https://jsonfakery.com/movies/paginated");

        setAllPages(resp.data.data);

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

  // 🔹 Live Search (input ke sath hi chal raha hai)
  useEffect(() => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    const results = movies.filter((movie) =>
      movie.original_name?.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  }, [query, movies]);

  // if (loading) {
  //   return (
  //     <div className="flex justify-center items-center h-screen text-white text-xl">
  //       Loading...
  //     </div>
  //   );
  // }

  if (loading) {
    return (
      <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4">
        {Array.from({ length: 15 }).map((_, idx) => (
          <div
            key={idx}
            className="w-full h-48 bg-gray-800 rounded-xl animate-pulse"
          ></div>
        ))}
      </div>
    );
  }
  
  

  // Total pages
  const totalPages = allPages.length;

  // Pagination logic
  const renderPagination = () => {
    const pages = [];
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
          onClick={() => setCurrentPage(page - 1)}
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
      <nav className="w-full bg-black text-white shadow-md border-b border-gray-800">
        <div className="px-6 py-3 -mt-3 md:mt-5 sticky top-[56px] ">
          <div className="w-full flex rounded-full border border-gray-700 bg-gray-900 focus-within:ring-2 focus-within:ring-yellow-500 overflow-hidden">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search movies, series, Hindi..."
              className="flex-1 px-4 py-2 bg-transparent text-white focus:outline-none"
            />
            <button className="bg-yellow-500 text-black px-6 flex items-center justify-center hover:bg-yellow-600 transition-colors">
              <Search size={18} />
            </button>
          </div>
        </div>
      </nav>

      {/* ✅ Search Result Section */}
      <div className="mt-5 flex flex-wrap gap-2 md:gap-4 justify-center items-start">
        {query && searchResults.length > 0 && (
          <>
            {searchResults.map((movie, idx) => (
              <Card2 key={idx} item={movie} />
            ))}
          </>
        )}

        {query && searchResults.length === 0 && (
          <p className="text-red-500 font-semibold text-lg">
            Movie Not Found ❌
          </p>
        )}
      </div>

      {/* ✅ Category Buttons */}
      {/* ... baki code same rahega ... */}

      {/* ✅ Movies Cards Render (jab search active na ho tab dikhana) */}
      {!query && (
        <div className="mt-5 flex flex-wrap gap-2 md:gap-4 justify-center items-start ">
          {Array.isArray(movies) &&
            movies
              .filter(
                (item) =>
                  (item.profile_path && item.profile_path.trim() !== "") ||
                  (item.poster && item.poster.trim() !== "")
              )
              .map((item, index) => (
                <Card2 key={item.id || index} item={item} />
              ))}
        </div>
      )}

      {/* ✅ Pagination Footer */}
      {!query && (
        <div className="flex justify-center items-center gap-2 mt-10 mb-6">
          {renderPagination()}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))
            }
            className="px-2 py-2 rounded bg-gray-800 hover:bg-gray-700 text-gray-200"
          >
            Next →
          </button>
        </div>
      )}
    </section>
  );
}
