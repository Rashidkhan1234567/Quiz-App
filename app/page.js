"use client";

import Navbar from "@/Components/Navbar1";
import { useState } from "react";

export default function Home() {
  const [x, setX] = useState(100); // Set default initial x position
  const [y, setY] = useState(100); // Set default initial y position
  const [color, setColor] = useState("#000"); // Default color to black

  const handleDiv = (e) => {
    setY(e.clientY);
    setX(e.clientX);
  };

  const handleColor = (e) => {
    setColor(e.target.value);
  };

  return (
    <div className="w-screen h-screen overflow-hidden relative">
      <Navbar />
      <div
        onMouseMove={handleDiv}
        className="w-screen h-screen bg-slate-300 overflow-hidden relative"
      >
        <div
          className="h-14 w-14 absolute rounded-full"
          style={{
            top: `${y - 20}px`,
            left: `${x - 25}px`,
            backgroundColor: color,
          }}
        ></div>
        <input
          type="color"
          className="w-16 h-14 absolute top-[5.5em] right-5"
          onChange={handleColor}
        />
      </div>
    </div>
  );
}
