"use client";

import Navbar from "@/Components/Navbar4";
import React, { useState, useEffect, useRef } from "react";
import style from "@/Style/welcomeAnimation.module.css";
import {
  FaCss3,
  FaHtml5,
  FaJava,
  FaLaravel,
  FaNodeJs,
  FaPhp,
  FaPython,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { DiRuby } from "react-icons/di";
import Link from "next/link";

function Qa() {
  const animationRef = useRef(null); // Reference to the animation div

  useEffect(() => {
    setTimeout(() => {
      changeAnimation();
    }, 1000);
  }, []);

  function changeAnimation() {
    if (animationRef.current) {
      animationRef.current.style.transform = "perspective(2000px) rotateY(360deg)";
      animationRef.current.style.left = "-4000px";

      setTimeout(() => {
        animationRef.current.style.display = "none";
      }, 3000);
    }
  }

  return (
    <div className="w-screen h-screen overflow-hidden">
      <Navbar />
      <div className="relative flex flex-col bg-blue-200 gap-10 items-center justify-center h-full w-full">
        <div ref={animationRef} className={`${style.animation} animation`}>
          Welcome to the awesome Quiz
        </div>
        <h1 className="text-3xl font-medium mb-5">Select your Quiz Language</h1>
        <div className="logo flex gap-8 min-w-[300px] justify-center items-center max-w-[500px] flex-wrap ">
          {/* HTML */}
          <label htmlFor="html">
            <Link href="/quiz/html">
              <FaHtml5
                className="text-7xl text-[#e34c26] hover:bg-indigo-300 rounded-sm p-1"
                title="HTML"
              />
            </Link>
            <input hidden type="radio" id="html" value={"html"} />
          </label>

          {/* CSS */}
          <label htmlFor="css">
            <Link href="/quiz/css">
              <FaCss3
                className="text-7xl hover:bg-indigo-300 rounded-sm p-1 text-blue-800"
                title="CSS"
              />
            </Link>
            <input hidden type="radio" id="css" value={"css"} />
          </label>

          {/* JavaScript */}
          <label htmlFor="js">
            <Link href="/quiz/js">
              <IoLogoJavascript
                className="text-7xl hover:bg-indigo-300 rounded-sm p-1 text-[#FFD43B]"
                title="JAVASCRIPT"
              />
            </Link>
            <input hidden type="radio" id="js" value={"javascript"} />
          </label>

          {/* TypeScript */}
          <label htmlFor="typescript">
            <Link href="/quiz/ts">
              <SiTypescript
                className="text-7xl hover:bg-indigo-300 rounded-sm p-1 text-[#007acc]"
                title="TYPESCRIPT"
              />
            </Link>
            <input hidden type="radio" id="typescript" value={"typescript"} />
          </label>

          {/* PHP */}
          <label htmlFor="php">
            <Link href="/quiz/php">
              <FaPhp
                className="text-7xl hover:bg-indigo-300 rounded-sm p-1 text-[#8892be]"
                title="PHP"
              />
            </Link>
            <input hidden type="radio" id="php" value={"php"} />
          </label>

          {/* Java */}
          <label htmlFor="java">
            <Link href="/quiz/java">
              <FaJava
                className="text-7xl hover:bg-indigo-300 rounded-sm p-1 text-[#5382a1]"
                title="JAVA"
              />
            </Link>
            <input hidden type="radio" id="java" value={"java"} />
          </label>

          {/* Python */}
          <label htmlFor="python">
            <Link href="/quiz/python">
              <FaPython
                title="PYTHON"
                className="text-7xl hover:bg-indigo-300 rounded-sm p-1 text-[#3e0692]"
              />
            </Link>
            <input hidden type="radio" id="python" value={"python"} />
          </label>

          {/* Laravel */}
          <label htmlFor="laravel">
            <Link href="/quiz/laravel">
              <FaLaravel className="text-7xl hover:bg-indigo-300 rounded-sm p-1 text-red-600" />
            </Link>
            <input hidden type="radio" id="laravel" value={"laravel"} title="LARAVEL" />
          </label>

          {/* Ruby */}
          <label htmlFor="ruby">
            <Link href="/quiz/ruby">
              <DiRuby className="text-7xl hover:bg-indigo-300 rounded-sm p-1 text-[#A91401]" />
            </Link>
            <input hidden type="radio" id="ruby" value={"ruby"} title="RUBY" />
          </label>

          {/* Node.js */}
          <label htmlFor="nodejs">
            <Link href="/quiz/node">
              <FaNodeJs className="text-7xl hover:bg-indigo-300 rounded-sm p-1 text-[#3C873A]" />
            </Link>
            <input hidden type="radio" id="nodejs" value={"node"} title="NODEJS" />
          </label>
        </div>
      </div>
    </div>
  );
}

export default Qa;
