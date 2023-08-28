import React from "react";
import { IconType } from "react-icons";
import {
  BsTelephone,
  BsInstagram,
  BsGithub,
  BsTwitter,
  BsWhatsapp,
  BsLinkedin
} from "react-icons/bs";
import SocialMediaLink from "./SocialMediaLink";

type SocialType = {
  icon: IconType;
  label: string;
  href: string;
};

type ParamProps = {
  contact?: boolean
}


const SocialMediaBar = ({contact}:ParamProps) => {
  const social: SocialType[] = [
    {
      icon: BsInstagram,
      label: "Instagram",
      href: "https://www.instagram.com/calaisfelipe/",
    },
    {
      icon: BsGithub,
      label: "GitHub",
      href: "https://github.com/calaisfelipe",
    },
    {
      icon: BsTwitter,
      label: "Twitter",
      href: "https://twitter.com/CalaisFelipe_br",
    },
    {
      icon: BsWhatsapp,
      label: "Whatsapp",
      href: "https://wa.me/5531995196573",
    },
    {
      icon: BsLinkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/felipe-calais/",
    },
  ];

  return (
    <div className={` flex-row gap-5 justify-center items-center mx-10 ${contact ? 'sm:hidden flex mt-1' : 'sm:flex hidden' }` } >
      {social.map((item) => (
        <SocialMediaLink
          href={item.href}
          icon={item.icon}
          label={item.label}
          key={item.label}
        />
      ))}
    </div>
  );
};

export default SocialMediaBar;
