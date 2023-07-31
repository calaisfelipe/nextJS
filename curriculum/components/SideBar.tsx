import React from 'react'
import {AiFillHome} from 'react-icons/ai'
import {BiSolidUser, BiCodeAlt} from 'react-icons/bi'
import {TbPointFilled} from 'react-icons/tb'
import {FaSuitcase, FaPaperPlane} from 'react-icons/fa'

import Link from 'next/link'



const SideBar = ({meta}:{meta:string}) => {
  return (
    <>
    <div className='sm:block bg-yellow-500 hidden absolute top-[25%] left-[95%] z-50 rounded-full py-2'>
        <div className='flex flex-col p-1 '>
            <div className='flex items-center justify-center flex-col gap-1 '>
                <Link rel="stylesheet" href="/" className={`hover:text-white ${meta === 'Home' && 'text-white'}`} > 
                <AiFillHome size={25} />
                </Link>
                <TbPointFilled size={10}/>
                <TbPointFilled size={10}/>
            </div>
            <div className='flex items-center justify-center flex-col gap-1'>
                <Link rel="stylesheet" href="/aboutme" className={`hover:text-white ${meta === 'About me' && 'text-white'}`}> 
                <BiSolidUser size={25}/>
                </Link>
                <TbPointFilled size={10}/>
                <TbPointFilled size={10}/>
            </div>
            <div className='flex items-center justify-center flex-col gap-1'>
                <Link rel="stylesheet" href="/formation"  className={`hover:text-white ${meta === 'Formation' && 'text-white'}`}> 
                <FaSuitcase size={25}/>
                </Link>
                <TbPointFilled size={10}/>
                <TbPointFilled size={10}/>
            </div>
            <div className='flex items-center justify-center flex-col gap-1'>
                <Link rel="stylesheet" href="/portfolio" className={`hover:text-white ${meta === 'Portfolio' && 'text-white'}`}> 
                <BiCodeAlt size={25}/>
                </Link>
                <TbPointFilled size={10}/>
                <TbPointFilled size={10}/>
            </div>
            <div className='flex items-center justify-center flex-col gap-1'>
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