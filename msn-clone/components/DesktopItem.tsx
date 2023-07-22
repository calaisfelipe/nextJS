"use client";
import React from "react";
import { IconType } from "react-icons/lib";
import Link from "next/link";

type DesktopItemType = {
  label: string;
  href: string;
  icon: IconType;
  active?: boolean;
  onClick?: () => void;
};

const DesktopItem = ({
  label,
  href,
  icon: Icon,
  active,
  onClick,
}: DesktopItemType) => {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
  };

  return (
    <li onClick={handleClick} className="list-none">
      <Link
        className={`group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-semibold text-gray-500 hover:text-black hover:bg-gray-100 ${
          active && "bg-gray-100 text-black"
        }`}
        href={href}
      >
        <Icon className="h-6 w-6 shrink-0" />
        <span className="sr-only">{label}</span>
      </Link>
    </li>
  );
};

export default DesktopItem;
