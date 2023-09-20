"use client";

import { useDarkMode } from "@/hooks/useDarkMode";
import React, { useState, useEffect } from "react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

const MenuDarkMode = () => {
  const {isDark, setDark , setLight} = useDarkMode()
 // const [isDarkMode, setIsDarkMode] = useState(false);

  const darkModeOn = () => {
    const darkMode = localStorage.getItem("darkMode");
    //setIsDarkMode(true)
    setDark()
    

    if (!darkMode) {
      localStorage.setItem("darkMode", "1");
     
      return;
    }

    
    return;
  };

  const lightModeOn = () => {
    const darkMode = localStorage.getItem("darkMode");
    //setIsDarkMode(false)
    setLight()
    if (darkMode) {
      localStorage.removeItem("darkMode");
      
      return;
    }

    return;
  };

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode");

    if (isDarkMode) {
      //setIsDarkMode(true)
      setDark()
      document.documentElement.classList.add("dark");
    } else {
      //setIsDarkMode(false)
      setLight()
      document.documentElement.classList.remove("dark");
      
    }


  }, [isDark, setDark, setLight]);

  return (
    <div className="w-fit">
      <button
        type="button"
        className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 sm:px-4 px-2  sm:py-2 py-1 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 cursor-pointer"
        onClick={isDark ? lightModeOn : darkModeOn}
      >
        {isDark ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
      </button>
    </div>
  );
};

export default MenuDarkMode;
