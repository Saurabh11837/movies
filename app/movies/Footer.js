"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 text-sm py-4 border-t border-gray-800">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left side */}
        <p className="mb-2 md:mb-0">
          2025 ©{" "}
          <Link
            href="https://HDHub4u.Tv"
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            HDHub4u.Tv
          </Link>{" "}
          | All Rights Reserved.
        </p>

        {/* Right side */}
        <div className="flex gap-4">
          <Link href="#" className="text-blue-500 hover:underline">
            Disclaimer
          </Link>
          <Link href="#" className="text-blue-500 hover:underline">
            Join Our Group !
          </Link>
          <Link href="#" className="text-blue-500 hover:underline">
            How To Download ?
          </Link>
          <Link href="#" className="text-blue-500 hover:underline">
            Movie Request Page
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
