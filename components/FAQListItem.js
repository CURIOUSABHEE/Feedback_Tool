"use client";
import { useState } from "react";
const FAQListItem = ({ qa }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li key={qa.question}>
      <button
        className="py-5 font-semibold border-b border-gray-300 w-full text-left flex justify-between"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <p>{qa.question}</p>
        {isOpen ? "-" : "+"}
      </button>
      <div
        className={`${
          isOpen ? "block py-5 font-light  w-full text-left mb-3" : "hidden"
        }`}
      >
        {qa.answer}
      </div>
    </li>
  );
};
export default FAQListItem;
