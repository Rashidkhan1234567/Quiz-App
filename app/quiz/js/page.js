"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { javascriptQuestions } from "@/Components/Q-A";
import { FaRegHandPointLeft } from "react-icons/fa";
import style from "@/Style/Mix.module.css"

function QJavascript() {
  const [index, setIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);

  const handleOptionClick = (option) => {
    document.querySelector(".option").style.border = "2px solid #000"
    document.querySelector(".option").style.transform = "scale(1)"
    setSelectedOption(option);
    const isAnswerCorrect = javascriptQuestions[index].answer === option;
    setIsCorrect(isAnswerCorrect);
    if (option == javascriptQuestions[index].answer) {
      setCorrect(correct + 1);
    } else {
      setWrong(wrong + 1);
    }
    setTimeout(() => {
      setSelectedOption(null);
      setIsCorrect(null);
      if (index < javascriptQuestions.length - 1) {
          setIndex(index + 1);
      } else {
        document.querySelector(".quiz").style.display = "none"
        document.querySelector(".result").style.display = "block"
      }
    }, 1500);
  };

  const handlegame = ()=>{
    setIndex(0);
    setCorrect(0);
    setWrong(0);
    document.querySelector(".quiz").style.display = "block"
    document.querySelector(".result").style.display = "none"
  }

  
  const backChange = () => {
    setIndex(0);
    setCorrect(0);
    setWrong(0);
  };

  return (
    <div className="relative h-screen w-screen grid place-content-center font-mono bg-slate-300">
      <Link
        onClick={backChange}
        href="/qa"
        className="absolute top-8 left-8 text-3xl hover:bg-indigo-300 p-2 rounded-full"
      >
        <FaRegHandPointLeft />
      </Link>
      <div className="result hidden">
        <h1 className="text-7xl font-medium text-center mb-16">Result</h1>
        <p className="mb-3 capitalize text-4xl text-center">
          Correct: {correct}
        </p>
        <p className="mt-3 capitalize text-4xl text-center">wrong: {wrong}</p>
        <button
          type="button"
          class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-2xl px-14 py-3 mt-16 text-center ml-4"
          onClick={handlegame}
        >
          Restart
        </button>
      </div>
      <div className="quiz none">
        <h1 className="text-5xl font-medium text-center mb-16">
          Welcome to JAVASCIPT Quiz
        </h1>
        <div className=" w-[500px]">
          <p className="question text-3xl text-center mb-10">
            Q{index + 1}: {javascriptQuestions[index].question}
          </p>
          {javascriptQuestions[index].options.map((option) => {
            const isSelected = selectedOption === option;
            const optionClass =
              isSelected && isCorrect
                ? "bg-green-500"
                : isSelected && !isCorrect
                ? "bg-red-500"
                : "bg-gray-400";

            return (
              <div
                key={option}
                className={`${style.option} option border-solid border-2 border-black rounded-full py-2 px-6 ${optionClass} mt-2 mb-2 text-2xl cursor-pointer`}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default QJavascript;
