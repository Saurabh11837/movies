"use client";
import React from "react";
import axios from "axios";
import Homepage from "./Homepage";

const Fakestoreapi = () => {
  const fetchData = async () => {
    try {
      const resp = await axios.get("https://fakestoreapi.com/products");
      console.log(resp);
    } catch (e) {
      console.log("Error : ", e);
    }
  };

  return (
    <div>
      <div>
        <button onClick={fetchData} className="border px-4 py-4">
          Home
        </button>
      </div>
      fakestoreapi
      <Homepage />
    </div>
  );
};

export default Fakestoreapi;
