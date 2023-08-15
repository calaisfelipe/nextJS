"use client";
import { useSearchParams } from "next/navigation";
import React, { useRef, useEffect } from "react";

type DialogProps = {
  title: string;
  onClose: () => void;
  onOk: () => void;
  children: React.ReactNode;
};

const Dialog = ({ title, onClose, onOk, children }: DialogProps) => {
  const searchParams = useSearchParams();
  const dialogRef = useRef<null | HTMLDialogElement>(null);

  const showDialog = searchParams.get("showDialog");

  useEffect(() => {
    if (showDialog === "y") {
      dialogRef.current?.show();
    } else {
      dialogRef.current?.close();
    }
  }, [showDialog]);

  const closeDialog = () => {
    dialogRef.current?.close();
    onClose();
  };
  const clickOk = () => {
    onOk();
    closeDialog();
  };

  const dialog: JSX.Element | null = showDialog === 'y' ?(<dialog ref={dialogRef}>
        <div className="flex flex-col gap-2 w-96 p-2 bg-gray-300 mt-2">
          <div className="flex flex-row w-full justify-between">
            <h2 className="text-xl font-bold capitalize">{title}</h2>
            <button onClick={closeDialog} className="hover:text-red-500">X</button>
          </div>
          <div className="flex flex-col gap-2 text-sm text-gray-600 tracking-tight">
            {children}
            <button
              className="p-2 bg-green-600 text-white rounded-md w-20 hover:opacity-80"
              onClick={clickOk}
            >
              Ok
            </button>
          </div>
        </div>
      </dialog>) : null;
   

  return dialog;
};

export default Dialog;
