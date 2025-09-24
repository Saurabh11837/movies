"use client";
import { useState, useEffect, useRef } from "react";
import React from "react";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  const resetTimer = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
    setTime(0);
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current); // cleanup
  }, []);

  return (
    <>
      <p>Timer</p>
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
        <div className="text-6xl font-bold mb-6">
          {String(Math.floor(time / 60)).padStart(2, "0")}:
          {String(time % 60).padStart(2, "0")}
        </div>
        <div className="flex gap-4">
          {!isRunning ? (
            <button
              onClick={startTimer}
              className="px-6 py-2 bg-green-500 rounded-2xl shadow-lg hover:bg-green-600 transition"
            >
              Start
            </button>
          ) : (
            <button
              onClick={stopTimer}
              className="px-6 py-2 bg-red-500 rounded-2xl shadow-lg hover:bg-red-600 transition"
            >
              Stop
            </button>
          )}
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

export default Timer;
