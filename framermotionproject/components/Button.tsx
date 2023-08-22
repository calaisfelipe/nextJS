import React from "react";
import { Quicksand } from "next/font/google";
import { motion } from "framer-motion";

const quicksand = Quicksand({ subsets: ["latin"] });

type ButtonProps = {
  label?: string;
  onAction?: () => void;
  type?: "button" | "submit";
};

const buttonVariants = {

  hover:{ scale: [1,1.1], transition:{repeat: Infinity, duration:1},textShadow: "0px 0px 8px rgb(255,255,255)" },
};

const Button = ({ label, onAction, type }: ButtonProps) => {
  return (
    <motion.button
      variants={buttonVariants}
  
      whileHover="hover"
      type={type}
      onClick={onAction}
      className={`${quicksand.className} p-2 text-gray-200 border border-gray-200 rounded-full text-xl `}
    >
      {label}
    </motion.button>
  );
};

export default Button;
