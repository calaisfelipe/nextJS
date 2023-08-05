"use client";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState, useContext } from "react";
import { BsChevronDown } from "react-icons/bs";
import Image from "next/image";
import BR from "@/public/images/flag-brazil.png";
import USA from "@/public/images/flag-usa.png";
import { LanguageContext } from "@/context/language";

export default function MenuLang() {
  const [isOpen, setIsOpen] = useState(false);
  const language = useContext(LanguageContext);

  const languageEn = () => {
    const getlang = localStorage.getItem("language");

    if (!getlang) {
      localStorage.setItem("language", "EN");
      language.dispatch({ type: "CHANGE_LANG" });
    }

    return;
  };

  const languageBr = () => {
    const getlang = localStorage.getItem("language");

    if (getlang) {
      localStorage.removeItem("language");
      language.dispatch({ type: "RESET" });
    }

    return;
  };

  return (
    <div className="w-fit">
      <Menu as="div" className="relative inline-block text-left" >
        <div>
          <Menu.Button
            className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 sm:py-2 py-1 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            onClick={() => setIsOpen(!isOpen)}
          >
            Idioma
            <BsChevronDown
              className={`ml-2 -mr-1 h-5 w-5 ${
                isOpen ? "transition rotate-180" : "transition rotate-0"
              }`}
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-fit origin-top-right divide-y divide-gray-100 rounded-md bg-transparent shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 flex flex-col gap-1  ">
              <Menu.Item>
                <button onClick={languageEn}>
                  <Image
                    src={USA}
                    width={36}
                    height={36}
                    alt="English"
                    className="hover:scale-110"
                  />
                </button>
              </Menu.Item>
              <Menu.Item>
                <button onClick={languageBr}>
                  <Image
                    src={BR}
                    width={36}
                    height={36}
                    alt="Português"
                    className="hover:scale-110"
                  />
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
