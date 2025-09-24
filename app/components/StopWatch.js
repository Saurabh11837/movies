"use client";
import React, { useState, useEffect, useRef } from "react";

const StopWatch = () => {
  const [sec, setSecond] = useState(0);
  const [min, setMinute] = useState(0);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (intervalRef.current) return; // prevent multiple intervals

    intervalRef.current = setInterval(() => {
      setSecond((prevSec) => {
        if (prevSec === 9) {
          setMinute((prevMin) => prevMin + 1); // minute +1
          return 0; // reset seconds
        }
        return prevSec + 1; // else increase seconds
      });
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const resetTimer = () => {
    stopTimer();
    setSecond(0);
    setMinute(0);
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current); // cleanup on unmount
  }, []);

  return (
    <>
      <p>⏱️ StopWatch</p>
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
        <div className="h-20 w-40 rounded-2xl text-6xl font-bold mb-6 flex items-center justify-center">
          {String(min).padStart(2, "0")} : {String(sec).padStart(2, "0")}
        </div>

        <div className="flex gap-4">
          <button
            onClick={startTimer}
            className="px-6 py-2 bg-green-500 rounded-2xl shadow-lg hover:bg-green-600 transition"
          >
            Start
          </button>
          <button
            onClick={stopTimer}
            className="px-6 py-2 bg-red-500 rounded-2xl shadow-lg hover:bg-red-600 transition"
          >
            Stop
          </button>
          <button
            onClick={resetTimer}
            className="px-6 py-2 bg-gray-700 rounded-2xl shadow-lg hover:bg-gray-800 transition"
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default StopWatch;
