import React from 'react'
import { IconType } from "react-icons";
import Link from "next/link";

type SocialMediaType = {
    icon: IconType;
    label: string;
    href: string;
}

const SocialMediaLink = ({icon:Icon, label, href}:SocialMediaType) => {
  return (

    <Link className='hover:opacity-60 hover:scale-125 dark:text-white transition ' href={href} target="_blank" aria-label={label}>
          <Icon size={18}/>
        </Link>
  )
}

export default SocialMediaLink