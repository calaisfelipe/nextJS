"use client";
import React, { useState, useCallback } from "react";
import Modal from "../Modal";
import useLoginModal from "@/hooks/useLogginModel";
import Input from "../Input";
import useRegisterModal from "@/hooks/useRegisterModal";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";

const LoginModal = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      //TODO ADD LOG IN
      await signIn("credentials", { email, password, redirect:false }).then((res) => {
        
        if(res?.error){
          toast.error('Invalid Credentials',)
        }

        if (res?.ok && !res?.error) {
          toast.success("Login success");
        }


      }).catch((error) => toast.error('Something went wrong' , error));

      loginModal.onClose();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [loginModal, email, password]);

  const onToggle = useCallback(() => {
    if (isLoading) {
      return;
    }

    loginModal.onClose();
    registerModal.onOpen();
  }, [isLoading, registerModal, loginModal]);

  const footerContent = (
    <div className="text-neutral-400 text-center mt-4">
      Dont have an account?{" "}
      <span
        className="text-white cursor-pointer hover:underline"
        onClick={onToggle}
      >
        Register
      </span>
    </div>
  );

  const bodyContent = (
    <div className="flex flex-col gap-4">
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

  return (
    <>
      <Modal
        disabled={isLoading}
        isOpen={loginModal.isOpen}
        title="Log In"
        actionLabel="Sign In"
        onClose={loginModal.onClose}
        onSubmit={onSubmit}
        body={bodyContent}
        footer={footerContent}
      />
    </>
  );
};

export default LoginModal;
