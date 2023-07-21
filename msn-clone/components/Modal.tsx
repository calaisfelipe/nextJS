"use client"
import React, {Fragment} from 'react'
import { Transition, Dialog } from '@headlessui/react'
import {AiOutlineReload} from 'react-icons/ai'
import {FiAlertTriangle} from 'react-icons/fi'

type ModalType = {
    isOpen: boolean
    onClose: () => void
    title:string
    message: string
    btn1: {
        title:string
        action?: () => void
    }
    btn2: {
        title:string
        action?: () => void
    }
    loading: boolean
    
}

const Modal = ({isOpen, onClose, title, message, btn1, btn2, loading}:ModalType) => {
  return (
    <>
    <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 flex gap-2 items-center"
                  >
                   <FiAlertTriangle size={20} className='text-red-500' /> {title}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      {message}
                    </p>
                  </div>

                  <div className="mt-4 flex gap-2">
                    {loading ? <p className='text-xl font-bold flex gap-2 justify-center items-center'>Loading <AiOutlineReload className='animate-spin'/></p>  : <><button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-200 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                      onClick={btn1.action}
                    >
                      {btn1.title}
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-sky-100 px-4 py-2 text-sm font-medium text-sky-900 hover:bg-sky-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
                      onClick={btn2.action} 
                    >
                      {btn2.title}
                    </button></>}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    
    
    </>


  )
}

export default Modal