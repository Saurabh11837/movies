"use client";

import AOS from "aos";
import { useEffect } from "react";
import a from "next/a";
import { useRouter } from "next/navigation";
import React from "react";
import Navbar1 from "./component/Navbar1";
import Navbar2 from "./component/Navbar2";
import Homepage from "./component/Homepage";
import About from "./component/About";
import { Login } from "./component/Login";
import Skills from "./component/Skills";
import Services from "./component/Services";
import RcentProject from "./component/RcentProject";
import Contact from "./component/Contact";
import Skill1 from "./component/Skill1";
import Services1 from "./component/Services1";
import RecentProject from "./component/RecentProject1";
import Footer from "./component/Footer";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // 1 second animation
  }, []);
  const router = useRouter();
  return (
    <>
      <div className="bg-[#0a0f1a] overflow-x-hidden">
        <Navbar1 />

        <Homepage />
        <About />
        <Skill1 />
        <Services1 />
        <RecentProject />
        <Contact />
        <Footer />
      </div>
      {/* <Login /> */}
    </>
  );
}

// bg-[#0a0f1a]
