"use client";
import React from "react";
import { Quicksand } from "next/font/google";
import Tittle from "@/components/Tittle";
import Link from "next/link";
import usePizza from "@/hook/usePizza";
import { motion } from "framer-motion";

const quicksand = Quicksand({ subsets: ["latin"] });

const buttonVariants = {
  show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 120 } },
  hidden: { opacity: 0, x: "-100vw" },
  hover: { boxShadow: "0px 0px 8px rgb(255,255,255)", },
};

const divVariant = {
  hidden: { x: "100vw", opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.5, type: "spring", stiffness: 120 },
  },
};

const BasePage = () => {
  const base = ["Classic", "Thin & Crispy", "Thick Crust"];
  const pizza = usePizza();

  return (
    <motion.div
      variants={divVariant}
      initial="hidden"
      animate="show"
      className="flex flex-col items-center justify-center mt-10 w-screen gap-1"
    >
      <Tittle label="Step 1: Choose Your Base" />
      <div className="flex flex-col">
        <ul
          className={`mt-1 text-white ${quicksand.className} flex flex-col justify-start w-52 gap-2`}
        >
          {base.map((item) => (
            <motion.li
              whileHover={{ scale: 1.3, originX: 0, color: "#f8e112" }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`${
                pizza.base === item && "active"
              } cursor-pointer hover:opacity-80`}
              key={item}
              onClick={() => pizza.setBase(item)}
            >
              {item}
            </motion.li>
          ))}
        </ul>

        {pizza.base !== "" && (
          <Link href={"/toppings"}>
            <motion.button
              className={`${quicksand.className} mt-4 w-fit px-2 text-gray-200 border border-gray-200 rounded-full text-xl`}
              variants={buttonVariants}
              initial="hidden"
              animate="show"
              whileHover="hover"
            >
              Next
            </motion.button>
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default BasePage;
