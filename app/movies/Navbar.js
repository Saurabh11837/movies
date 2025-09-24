"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function NavbarResponsive() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#0d1117] text-white shadow-md">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div>
          <h1
            className="text-3xl md:text-4xl font-extrabold tracking-tight 
               bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 
               bg-clip-text text-transparent animate-gradient"
          >
            MOVIES <span className="text-white">- HUB</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 font-medium">
          <Link href="/" className="hover:text-yellow-400">
            Home
          </Link>
          <Link href="#" className="hover:text-yellow-400">
            18+
          </Link>
          <Link href="#" className="hover:text-yellow-400">
            Bollywood
          </Link>
          <Link href="#" className="hover:text-yellow-400">
            Dual Audio
          </Link>
          <Link href="#" className="hover:text-yellow-400">
            Web Series
          </Link>
          <Link href="#" className="hover:text-yellow-400">
            TV Show
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {open && (
        <div className="md:hidden bg-[#111827] px-6 py-4 space-y-4 border-t border-gray-700">
          <Link
            href="/"
            className="block hover:text-yellow-400"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="#"
            className="block hover:text-yellow-400"
            onClick={toggleMenu}
          >
            18+
          </Link>
          <Link
            href="#"
            className="block hover:text-yellow-400"
            onClick={toggleMenu}
          >
            Bollywood
          </Link>
          <Link
            href="#"
            className="block hover:text-yellow-400"
            onClick={toggleMenu}
          >
            Dual Audio
          </Link>
          <Link
            href="#"
            className="block hover:text-yellow-400"
            onClick={toggleMenu}
          >
            Web Series
          </Link>
          <Link
            href="#"
            className="block hover:text-yellow-400"
            onClick={toggleMenu}
          >
            TV Show
          </Link>
        </div>
      )}
    </nav>
  );
}
