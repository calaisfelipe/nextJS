"use client";
import React from "react";
import { Quicksand } from "next/font/google";
import Tittle from "@/components/Tittle";
import Link from "next/link";
import usePizza from "@/hook/usePizza";
import { motion } from "framer-motion";

const quicksand = Quicksand({ subsets: ["latin"] });

const divVariant = {
  hidden: { y: "100vh", opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.5, type: "spring", stiffness: 120 },
  },
};

const ToppingsPage = () => {
  const toppings = [
    "Peppers",
    "Onions",
    "Mushrooms",
    "olives",
    "extra cheese",
    "tomatoes",
  ];
  const pizza = usePizza();

  const addToppings = (topping: string) => {
    if (pizza.toppings.includes(topping)) {
      let removeTop = pizza.toppings.filter((item) => item !== topping);
      pizza.setToppins(removeTop);
    } else {
      let addTopping = [...pizza.toppings, topping];
      pizza.setToppins(addTopping);
    }
  };

  return (
    <motion.div 
    variants={divVariant}
    initial='hidden'
    animate='show'
    
    className="flex flex-col items-center justify-center mt-10 w-screen gap-1">
      <Tittle label="Step 2: Choose Toppings" />
      <div className="flex flex-col">
        <ul
          className={`mt-1 text-white ${quicksand.className} flex flex-col justify-start w-52 gap-2`}
        >
          {toppings.map((item) => (
            <motion.li 
            whileHover={{scale:1.3, originX:0, color:'#f8e112'}}
            transition={{type:'spring', stiffness: 300}}

              className={`${
                pizza.toppings.includes(item) && "active"
              } cursor-pointer hover:opacity-80`}
              key={item}
              onClick={() => addToppings(item)}
            >
              {item}
            </motion.li>
          ))}
        </ul>

        {pizza.toppings.length > 0 && (
          <Link href={"/order"}>
            <motion.button
              className={`${quicksand.className} mt-4 w-fit px-2 text-gray-200 border border-gray-200 rounded-full text-xl`}
              whileHover={{ boxShadow: "0px 0px 8px rgb(255,255,255)", textShadow:'0px 0px 8px rgb(255,255,255)' }}
            >
              Next
            </motion.button>
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default ToppingsPage;
