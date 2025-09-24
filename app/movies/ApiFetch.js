"use client";
import Card from "../movies/Card";
import { useEffect, useState } from "react";
import axios from "axios";

const ApiFetch = () => {
  const [data1, setData1] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get(
          "https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies"
        );
        console.log("Resp data:", resp.data);
        setData1(resp.data);
      } catch (e) {
        console.error("Error fetching:", e);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="flex flex-wrap gap-6 justify-center items-start p-4">
        {/* {Array.isArray(data1) &&
          data1.map((item, index) => (
            <Card key={item.Title || index} item={item} />
          ))} */}
        {Array.isArray(data1) &&
          data1
            .filter((item) => item.Poster && item.Poster.trim() !== "") // ✅ sirf image wale
            .map((item, index) => (
              <Card key={item.Title || index} item={item} />
            ))}
      </div>
    </>
  );
};

export default ApiFetch;
