import React from "react";
import { useState } from "react";

function JobNavBar({ onSiteSelect, activeNavBarItem, setActiveNavBarItem }) {
  const navbarItems = [
    { label: "HelloWorld", value: "HelloWorld" },
    { label: "InfoStud", value: "InfoStud" },
    { label: "Joberty", value: "Joberty" },
    { label: "Jooble", value: "Jooble" },
  ];

  return (
    <nav className="container mx-auto flex justify-between items-center rounded-md dark:bg-gray-100/10 dark:text-gray-100">
      <ul className="flex flex-1 justify-between text-lg gap-2">
        {navbarItems.map((item) => (
          <li
            key={item.value}
            onClick={() => {
              onSiteSelect(item.value);
              setActiveNavBarItem(item.value);
            }}
            className={`cursor-pointer text-center w-full rounded-md transition duration-300 
            ${
              activeNavBarItem === item.value
                ? "bg-gray-500 text-white dark:bg-gray-400 dark:text-black"
                : "bg-gray-300 hover:bg-gray-400 dark:bg-gray-200/20 dark:hover:bg-gray-300/20"
            }`}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default JobNavBar;
