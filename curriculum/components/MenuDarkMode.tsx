"use client";

import React, { useState, useEffect } from "react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

const MenuDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const darkModeOn = () => {
    const darkMode = localStorage.getItem("darkMode");
    setIsDarkMode(true)

    if (!darkMode) {
      localStorage.setItem("darkMode", "1");
     
      return;
    }

    
    return;
  };

  const lightModeOn = () => {
    const darkMode = localStorage.getItem("darkMode");
    setIsDarkMode(false)
    if (darkMode) {
      localStorage.removeItem("darkMode");
      
      return;
    }

    return;
  };

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode");

    if (isDarkMode) {
      setIsDarkMode(true)
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false)
      document.documentElement.classList.remove("dark");
      
    }


  }, [isDarkMode]);

  return (
    <div className="w-fit">
      <button
        type="button"
        className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 cursor-pointer"
        onClick={isDarkMode ? lightModeOn : darkModeOn}
      >
        {isDarkMode ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
      </button>
    </div>
  );
};

export default MenuDarkMode;
