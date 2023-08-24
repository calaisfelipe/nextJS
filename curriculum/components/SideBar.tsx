import React from 'react'
import {AiFillHome} from 'react-icons/ai'
import {BiSolidUser, BiCodeAlt} from 'react-icons/bi'
import {TbPointFilled} from 'react-icons/tb'
import {FaPaperPlane} from 'react-icons/fa'
import {IoSchool} from 'react-icons/io5'

import Link from 'next/link'



const SideBar = ({meta}:{meta:string}) => {
  return (
    <>
    <div className='sm:block bg-yellow-500 dark:bg-blue-900  absolute sm:top-[25%] sm:left-[95%] sm:bottom-auto sm:w-fit w-full flex justify-center bottom-[-5%] z-50 sm:rounded-full py-2 '>
        <div className='flex sm:flex-col flex-row  p-1 '>
            <div className='flex items-center justify-center sm:flex-col flex-row sm:gap-2 gap-3'>
                <Link rel="stylesheet" href="/" className={`hover:text-white  ${meta === 'Home' && 'text-white'}`} > 
                <AiFillHome size={25} />
                </Link>
                <TbPointFilled size={10}/>
                <TbPointFilled size={10}/>
            </div>
            <div className='flex items-center justify-center sm:flex-col flex-row sm:gap-2 gap-3'>
                <Link rel="stylesheet" href="/aboutme" className={`hover:text-white  ${meta === 'About me' && 'text-white'}`}> 
                <BiSolidUser size={25}/>
                </Link>
                <TbPointFilled size={10}/>
                <TbPointFilled size={10}/>
            </div>
            <div className='flex items-center justify-center sm:flex-col flex-row sm:gap-2 gap-3'>
                <Link rel="stylesheet" href="/formation"  className={`hover:text-white  ${meta === 'Formation' && 'text-white'}`}> 
                <IoSchool size={25}/>
                </Link>
                <TbPointFilled size={10}/>
                <TbPointFilled size={10}/>
            </div>
            <div className='flex items-center justify-center sm:flex-col flex-row sm:gap-2 gap-3'>
                <Link rel="stylesheet" href="/portfolio" className={`hover:text-white  ${meta === 'Portfolio' && 'text-white '}`}> 
                <BiCodeAlt size={25}/>
                </Link>
                <TbPointFilled size={10}/>
                <TbPointFilled size={10}/>
            </div>
            <div className='flex items-center justify-center sm:flex-col flex-row gap-2'>
                <Link rel="stylesheet" href="/contact" className={`hover:text-white ${meta === 'Contact' && 'text-white'}`}> 
                <FaPaperPlane size={25}/>
                </Link>
                
            </div>
            

        </div>
        
    </div>  
    
    </>
  )
}

export default SideBar