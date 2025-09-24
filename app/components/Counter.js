"use client";
import React, { useState, useEffect } from "react";

const Counter = () => {
  // Counter state
  const [num, setNum] = useState(0);
  function Increment() {
    setNum(num + 1);
    console.log(num + 1);
  }
  function Decrement() {
    setNum(num - 1);
    console.log(num - 1);
  }

  // Interval counter state
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Function to run in interval
    function sayHello() {
      console.log("Hello!");
    }

    // Run sayHello every 2 seconds
    const myInterval = setInterval(sayHello, 2000);

    // Run increase every 2 seconds
    const Interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 2000);

    // Stop intervals after given time
    const stopHello = setTimeout(() => {
      clearInterval(myInterval);
      console.log("sayHello Interval stopped.");
    }, 10000);

    const stopIncrease = setTimeout(() => {
      clearInterval(Interval);
      console.log("increase Interval stopped.");
    }, 5000);

    // Cleanup when component unmounts
    return () => {
      clearInterval(myInterval);
      clearInterval(Interval);
      clearTimeout(stopHello);
      clearTimeout(stopIncrease);
    };
  }, []);

  return (
    <>
      <h1>Counter App</h1>
      <h2>{num}</h2>
      <p>SetInterval Function count: {count}</p>

      <button onClick={Increment} className="p-2 border rounded-2xl">
        Increment
      </button>
      <button onClick={Decrement} className="p-2 border rounded-2xl">
        Decrement
      </button>
    </>
  );
};

export default Counter;
