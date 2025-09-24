"use client";
import React, { useState, useEffect, useRef } from "react";

const SetTimer = () => {
  const [time, setTime] = useState(0); // initially 0
  const [inputTime, setInputTime] = useState(""); // user input
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  // Start timer
  const startTimer = () => {
    if (!isRunning && time > 0) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime((prev) => {
          if (prev > 1) {
            return prev - 1; // countdown
          } else {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            return 0;
          }
        });
      }, 1000);
    }
  };

  // Reset timer
  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(0);
    setInputTime("");
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current); // cleanup on unmount
  }, []);

  // Format MM:SS
  const formatTime = (seconds) => {
    const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${mins}:${secs}`;
  };

  // Handle user input
  const handleInputChange = (e) => {
    setInputTime(e.target.value);
  };

  const setTimerValue = () => {
    const value = parseInt(inputTime, 10);
    if (!isNaN(value) && value > 0) {
      setTime(value);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      <h1 className="text-5xl font-bold mb-6">⏳ Set Timer</h1>

      {/* Display Timer */}
      <div className="text-6xl font-mono font-bold mb-6">
        {formatTime(time)}
      </div>

      {/* Input for setting timer */}
      <div className="flex gap-2 mb-6 bg-gray-50">
        <input
          type="number"
          value={inputTime}
          onChange={handleInputChange}
          placeholder="Enter seconds"
          className="px-4 py-2 rounded-lg text-black outline-none"
        />
        <button
          onClick={setTimerValue}
          className="px-4 py-2 bg-blue-500  shadow hover:bg-blue-600 transition"
        >
          Set
        </button>
      </div>

      {/* Controls */}
      <div className="flex gap-4">
        <button
          onClick={startTimer}
          disabled={isRunning || time === 0}
          className="px-6 py-2 bg-green-500 rounded-2xl shadow-lg hover:bg-green-600 transition disabled:opacity-50"
        >
          Start
        </button>
        <button
          onClick={resetTimer}
          className="px-6 py-2 bg-gray-700 rounded-2xl shadow-lg hover:bg-gray-800 transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default SetTimer;
