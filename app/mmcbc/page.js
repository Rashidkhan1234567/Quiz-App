"use client";

import Navbar from "@/Components/Navbar3";
import React, { useState } from "react";

function MMCBC() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
  
    const handleDiv = (e) => {
      const newX = Math.min(e.clientX, 255);  // Cap x at 255
      const newY = Math.min(e.clientY, 255);  // Cap y at 255
      setY(newY);
      setX(newX);
    };

  return (
    <div className="w-screen h-screen overflow-hidden">
      <Navbar />
      <div
        onMouseMove={handleDiv}
        style={{ backgroundColor: `rgb(${x},${y},${Math.max(0, x - y)})` }}
        className="w-screen h-screen overflow-hidden grid place-content-center"
      >
      </div>
    </div>
  )
}

export default MMCBC;
