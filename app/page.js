import Image from "next/image";
import Navbar from "./movies/Navbar";
import Navbar2 from "./movies/Navbar2";
import Navbar3 from "./movies/Navbar3";
import Navbar4 from "./movies/Navbar4";
import ApiFetch from "./movies/ApiFetch";
import Footer from "./movies/Footer";
import AutoScrollMovies from "./movies/AutoScrollMovies";
import ApiCall from "./movies/ApiCall";

export default function Home() {
  return (
    <>
      <div className="h-full w-full bg-[#0a0f1a] ">
        <Navbar />
        <div className="hidden md:block">
          <AutoScrollMovies />
        </div>

        {/* <Navbar3 /> */}
        <Navbar4 />
        <div>
          <Navbar2 />
        </div>

        {/* <ApiFetch /> */}

        {/* <ApiCall /> */}

        <Footer />
      </div>
    </>
  );
}
