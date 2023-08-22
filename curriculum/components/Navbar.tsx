"use client"
import React from 'react'
import MenuLang from '@/components/MenuLang'
import MenuDarkMode from './MenuDarkMode'
import SocialMediaBar from './SocialMediaBar'

const Navbar = () => {
    

  return (
    <>
    <nav className='flex flex-row p-2 fixed top-0 z-50 bg-transparent w-full justify-end gap-1'>
        <SocialMediaBar />
        <MenuDarkMode />
        <MenuLang />


    </nav>
    
    </>
  )
}

export default Navbar