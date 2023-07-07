import React from 'react'

 
type NavbarItemType = {
title: string
}

function NavbarItem({title}:NavbarItemType) {



  return (
    <div className='text-white cursor-pointer hover:text-gray-300 transition'>{title}</div>
  )
}

export default NavbarItem