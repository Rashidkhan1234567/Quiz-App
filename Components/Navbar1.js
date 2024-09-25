"use client";
"use strict";

import Style from "@/Style/Mix.module.css"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import img from "@/app/assets/img.png"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <a
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
          className="drop-shadow-md  shadow-sm shadow-slate-500"
            src={img}
            width={60}
            height={60}
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            M-Rashid Khan
          </span>
        </a>
        
      
        {/* Desktop menu */}
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="/"
                className = {`${Style.a} a block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500`}
                aria-current="page"
                title="Mouse Move to Object"
              >
                MMO
              </Link>
            </li>
            <li>
              <Link
                href="/mmifs"
                className={`${Style.b} b block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                title="Mouse Move to Increase Font Size"
              >
                MMIFS
              </Link>
            </li>
            <li>
              <Link
                href="/mmcbc"
                className={`${Style.c} c block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                title="Mouse Move to Change Background Color"
              >
                MMCBC
              </Link>
            </li>
            <li>
              <Link
                href="/qa"
                className={`${Style.d} block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                title="Quiz App"
              >
                QA
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
