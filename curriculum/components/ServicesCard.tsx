import React from 'react'
import {IconType} from 'react-icons'
import {BsArrowUp} from 'react-icons/bs'


type ServicesCardType = {
    title:string
    description:string
    icon:IconType,
}

const ServicesCard = ({title, description, icon:Icon}:ServicesCardType) => {
  return (
    <div className='w-48 h-30 p-3 flex flex-col gap-2 bg-black  bg-opacity-10 hover:bg-opacity-20 rounded-md transition-all group cursor-pointer'>
        <div>
            <Icon size={24} color=''/>
        </div>
        <div className='dark:text-white text-yellow-500 text-md font-semibold '>
            {title}
        </div>
        <div className='dark:text-gray-300 font-light text-xs '>
            {description}
        </div>
        <span><BsArrowUp className='text-black dark:text-white
        rotate-[30deg]
        group-hover:rotate-90
        group-hover:text-white
        group-hover:dark:text-blue-400
        font-extrabold
        transition-all ' size={20} /></span>


    </div>
  )
}

export default ServicesCard