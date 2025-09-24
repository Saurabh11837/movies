"use client";
import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [sem, setSem] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Semester:", sem);

    // reset after submit
    setName("");
    setSem("");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 space-y-6"
      >
        <h1 className="text-3xl font-bold text-center text-blue-600">
          Contact Me
        </h1>

        <div className="flex flex-col">
          <label className="mb-1 font-medium">Name :</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name} // controlled
            onChange={(e) => setName(e.target.value)} // correct onChange
            required
            minLength={3}
            className="h-12 border rounded-xl px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium">Semester :</label>
          <input
            type="text"
            placeholder="Enter your semester"
            value={sem} // controlled
            onChange={(e) => setSem(e.target.value)} // correct onChange
            required
            min={1}
            max={8}
            className="h-12 border rounded-xl px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;

{
  /* <input
  type="text"
  value={name}
  placeholder="Enter your name"
  onChange={(e) => setName(e.target.value)}
  required            //  name empty nahi ho sakta
  minLength={3}       //  at least 3 characters
  className="h-12 border rounded-xl px-3"
/>

<input
  type="number"
  value={sem}
  placeholder="Enter your semester"
  onChange={(e) => setSem(e.target.value)}
  required            // semester empty nahi ho sakta
  min={1}             // semester >= 1
  max={8}             // semester <= 8
  className="h-12 border rounded-xl px-3"
/> */
}
