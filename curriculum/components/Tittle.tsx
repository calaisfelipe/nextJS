import React from 'react'

type TittleType = {
    text: string
}


const Tittle = ({text}: TittleType) => {
  return (
    <div className='w-fit  text-center px-12 py-1 h-14 border-dashed border border-gray-300 uppercase font-bold text-5xl'>{text}</div>
  )
}

export default Tittle