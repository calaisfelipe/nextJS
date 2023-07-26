"use client";
import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ClipLoader } from "react-spinners";

type LoadingModalType = {
    onClose: () => void
}

const LoadingModal = ({onClose}: LoadingModalType) => {
  return (
    <>
    <Transition.Root show as={Fragment}>
        <Dialog as="div" className='relative z-50' onClose={onClose}>
        <Transition.Child as="div"
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        > 
        <div className="fixed inset-0 bg-gray-100 bg-opacity-50 transition-opacity" />
           <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">

            <Dialog.Panel>
                <ClipLoader size={60} color='#0284c7' />

            </Dialog.Panel>


            </div>



           </div>
      


        </Transition.Child>
        </Dialog>
    </Transition.Root>
    
    </>
  )
};

export default LoadingModal;
