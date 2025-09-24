"use client";
import Card2 from "../movies/Card2";
import { useEffect, useState } from "react";
import axios from "axios";

const ApiCall = () => {
  const [data1, setData1] = useState([]);
  const [loading, setLoading] = useState(true); // 👈 loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get("https://jsonfakery.com/movies/paginated");
        console.log("Resp data:", resp.data.data[0].casts);
        setData1(resp.data.data[0].casts); // API ka "data" array
      } catch (e) {
        console.error("Error fetching:", e);
      } finally {
        setLoading(false); // 👈 jab fetch complete ho jaye
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-white text-xl">
        Loading...
      </div>
    );
  }

  return (
    <>
      {/* <p className="text-white">ApiCall fetchData....</p> */}
      <div className="flex flex-wrap gap-6 justify-center items-start p-4">
        {/* {Array.isArray(data1) &&
          data1.map((item, index) => (
            <Card2 key={item.id || index} item={item} />
          ))} */}
        {/* {Array.isArray(data1) &&
          data1
            .filter((item) => item.Poster && item.Poster.trim() !== "") // ✅ sirf image wale
            .map((item, index) => <Card2 key={item.id || index} item={item} />)} */}
        {Array.isArray(data1) &&
          data1
            .filter(
              (item) =>
                (item.profile_path && item.profile_path.trim() !== "") ||
                (item.poster && item.poster.trim() !== "")
            )
            .map((item, index) => <Card2 key={item.id || index} item={item} />)}
      </div>
    </>
  );
};

export default ApiCall;
