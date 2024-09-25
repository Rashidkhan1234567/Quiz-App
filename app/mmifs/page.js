"use client";

import Navbar from "@/Components/Navbar2";
import { useState } from "react";

export default function Home() {
  const [x, setX] = useState(50); // Set default values to prevent small font size on page load
  const [y, setY] = useState(50);

  const handleDiv = (e) => {
    setY(e.clientY);
    setX(e.clientX);
  };

  return (
    <div className="w-screen h-screen overflow-hidden">
      <Navbar />
      <div
        onMouseMove={handleDiv}
        className="w-screen h-screen grid place-content-center bg-slate-300 overflow-hidden"
      >
        <h1 className="font-medium" style={{ fontSize: `${Math.max(20, x / 10 + y / 15)}px` }}>
          Mouse Move to change Font Size
        </h1>
      </div>
    </div>
  );
}
