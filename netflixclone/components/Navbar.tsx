"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import profileImg from "@/public/images/default-blue.png";
import NavbarItem from "./NavbarItem";
import { BsChevronDown, BsSearch, BsBell } from "react-icons/bs";
import MobileMenu from "@/components/MobileMenu";
import AccountMenu from "./AccountMenu";

export const navItems = [
  "Home",
  "Series",
  "Films",
  "New & Popular",
  "My list",
  "Browse by languages",
];

const OFF_SCROLL = 66;

function Navbar() {
  const [mobileVisible, setMobileVisible] = useState(false);
  const [accountMenuVisible, setaccountMenuVisible] = useState(false);
  const [bgColorDefault, setbgColorDefault] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= OFF_SCROLL) {
        setbgColorDefault(true);
      } else {
        setbgColorDefault(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="w-full fixed z-50">
      <div
        className={`px-4 md:px-16 flex  py-6 items-center transition duration-500  ${
          bgColorDefault ? "bg-zinc-900 bg-opacity-90" : ""
        }`}
      >
        <Image
          src={logo}
          className="h-4 md:h-7 w-16 md:w-20"
          alt="netflix logo"
        />
        <div className="flex-row ml-8 gap-7 hidden md:flex">
          {navItems.map((item) => (
            <NavbarItem title={item} />
          ))}
        </div>
        <div
          className="md:hidden flex flex-row items-center gap-2 ml-4 cursor-pointer relative"
          onClick={() => setMobileVisible(!mobileVisible)}
        >
          <p className="text-white">Browse</p>

          <BsChevronDown
            className={`text-white transition ${mobileVisible && "rotate-180"}`}
          />

          <MobileMenu visible={mobileVisible} />
        </div>
        <div className="flex flex-row ml-auto gap-7 items-center">
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsBell />
          </div>
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsSearch />
          </div>
          <div
            className="flex flex-row items-center gap-2 cursor-pointer relative"
            onClick={() => setaccountMenuVisible(!accountMenuVisible)}
          >
            <div className="w-6 h-6 md:w-10 md:h-10 rounded-md overflow-hidden">
              <Image src={profileImg} alt="profile logo" />
            </div>
            <BsChevronDown
              className={`text-white transition ${
                accountMenuVisible && "rotate-180"
              } `}
            />

            <AccountMenu visible={accountMenuVisible} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
