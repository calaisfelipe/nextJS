import React from 'react'

type TittleType = {
    text: string
}


const Tittle = ({text}: TittleType) => {
  return (
    <div className='w-fit 
    text-center 
    py-1 
    border-dashed 
    border 
    border-gray-300 
    uppercase 
    font-bold 
    text-4xl
    h-12
    px-8
    
    md:text-5xl
    md:h-14 
    md:px-12 

    lg:text-7xl
    lg:h-20
    lg:px-16
    
    xl:text-8xl
    xl:h-24
    xl:px-20
    
    '
    

    
    
    >{text}</div>
  )
}

export default Tittle