import React from 'react'

type TittleType = {
    text: string
}


const Tittle = ({text}: TittleType) => {
  return (
    <div className='w-fit 
    text-center 
    px-12 
    py-1 
    h-14 
    border-dashed 
    border 
    border-gray-300 
    uppercase 
    font-bold 
    text-5xl
    
    lg:text-7xl
    lg:h-20
    lg:px-16
    
    
    '
    

    
    
    >{text}</div>
  )
}

export default Tittle