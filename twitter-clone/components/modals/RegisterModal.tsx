"use client";
import React, { useState, useCallback } from "react";
import Modal from "../Modal";
import useRegisterModal from "@/hooks/useRegisterModal";
import Input from "../Input";
import useLoginModal from "@/hooks/useLogginModel";
import axios from 'axios'
import {toast} from 'react-hot-toast'
import {signIn} from 'next-auth/react'

const RegisterModal = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      //TODO ADD REGISTER AND LOG IN

      await axios.post('/api/register', {
        name, username, email, password
      } ).then((res) => {
        if(res.status === 200 ){
          //toast success
          toast.success('Account Created')
          signIn('credentials', {email, password} )

        }})

      registerModal.onClose();
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong')
    } finally {
      setIsLoading(false);
    }
  }, [registerModal, name, username, email, password]);

  const onToggle = useCallback(() => {
      if(isLoading){
        return
      }

      registerModal.onClose()
      loginModal.onOpen()


  } , [isLoading, registerModal, loginModal]) 

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        disabled={isLoading}
      />
      <Input
        type="text"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Username"
        disabled={isLoading}
      />
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email@example.com"
        disabled={isLoading}
      />
      <Input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        disabled={isLoading}
      />
    </div>
  );

  const footerContent = (
    <div className="text-neutral-400 text-center mt-4">
      Already had an account?{" "}
      <span
        className="text-white cursor-pointer hover:underline"
        onClick={onToggle}
      >
        Sign in
      </span>
    </div>
  );

  return (
    <>
      <Modal
        disabled={isLoading}
        isOpen={registerModal.isOpen}
        title="Register"
        actionLabel="Register"
        onClose={registerModal.onClose}
        onSubmit={onSubmit}
        body={bodyContent}
        footer={footerContent}
      />
    </>
  );
};

export default RegisterModal;
