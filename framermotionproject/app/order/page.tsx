"use client";
import React, {useEffect} from "react";
import { Quicksand } from "next/font/google";
import Tittle from "@/components/Tittle";
import usePizza from "@/hook/usePizza";
import {motion } from "framer-motion";
import Modal from "@/components/Modal";
import { useRouter } from "next/navigation";
import useModal from "@/hook/useModal";

const quicksand = Quicksand({ subsets: ["latin"] });

const divVariant = {
  hidden: { x: "-100vw", opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      when: "beforeChildren",
      mass: 0.2,
      damping: 8,
      staggerChildren: 2,
    },
  },
};

const liVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 1, duration: 0.5 } },
};

const childVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 3 } },
};




const OrderPage = () => {


  const router = useRouter()
  const pizza = usePizza();
  const modal = useModal()

  useEffect(() => {
    setTimeout(() => {
      modal.onShow()
    }, 5000)
  }, [])


  function goToHome() {

    modal.onClose();
    pizza.reset();
    router.push('/');


  }

  return (
    <>
    <Modal title="Want to make another pizza?" message="Go to home page and start again" btnLabel="Go to Home" action={goToHome} />
    <motion.div
      
      variants={divVariant}
      initial="hidden"
      animate="show"
      className="flex flex-col items-center justify-center mt-10 w-screen gap-1"
    >
   
        <Tittle label="Thank you for your order" />
     

      <motion.h3
        variants={childVariant}
        initial="hidden"
        animate="visible"
        className={`${quicksand.className} text-white text-sm mt-1`}
      >
        You ordered a {pizza.base} with:
      </motion.h3>
      <div className="flex flex-col">
        <ul
          className={`mt-1 text-white ${quicksand.className} flex flex-col justify-center items-center w-52 gap-1`}
        >
          {pizza.toppings.map((item) => (
            <motion.li
              variants={liVariant}
              initial="hidden"
              animate="visible"
              key={item}
            >
              <p>{item}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
    </>
  );
};

export default OrderPage;
