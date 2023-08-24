import React from "react";
import useModal from "@/hook/useModal";
import Link from "next/link";
import { Quicksand } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";

const quicksand = Quicksand({ subsets: ["latin"] });

type ModalProps = {
  title?: string;
  message?: string;
  action?: () => void;
  btnLabel: string;
};

const bgFadeAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { when: "beforeChildren", staggerChildren: 0.5 },
  },
  exit: { opacity: 0 },
};

const modalAnimation = {
  hidden: { y: "-100vh" },
  visible: { y: 0, transition: { delay: 0.2, type: "spring", stiffness: 150 } },
  exit: { y: "100vh", transition: { type: "spring", stiffness: 150 } },
};

const Modal = ({ title, message, action, btnLabel }: ModalProps) => {
  const modal = useModal();

  return (
    <AnimatePresence mode="wait">
      {modal.open && (
        <motion.div
          variants={bgFadeAnimation}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={`h-screen w-screen bg-black bg-opacity-60 absolute top-0 left-0`}
        >
          <motion.div
            variants={modalAnimation}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`p-2 flex fixed flex-col rounded-md w-1/3 mx-auto top-[35%] left-[35%]  z-30  bg-gray-200 gap-3`}
          >
            <div className="flex justify-between">
              <h3
                className={`${quicksand.className} text-xl font-bold text-gray-900`}
              >
                {title}
              </h3>
              <button onClick={() => modal.onClose()}>
                <AiOutlineClose size={18} />
              </button>
            </div>
            <div>
              <p className={`${quicksand.className} text-md `}>{message}</p>
            </div>
            <div>
              <button
                className="p-2 border rounded-xl bg-purple-700 text-white hover:opacity-60"
                onClick={action}
              >
                {btnLabel}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
