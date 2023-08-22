import React from 'react'
import { Quicksand } from 'next/font/google'


const quicksand = Quicksand({ subsets: ['latin'], })

const Tittle = ({label}:{label:string}) => {
  return (
    <div className='flex flex-col'>
    <h3 className={`pb-1 text-white font-xl font-semibold  ${quicksand.className} `}>{label}</h3>
    <div className='border-t-[1px] border-gray-300 w-[220px] ml-[12px] opacity-40'></div>
    </div>
  )
}

export default Tittle