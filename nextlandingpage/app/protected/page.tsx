import React from 'react'
import Link from 'next/link'

const Protected = () => {
  return (
    <div className='flex flex-col p-2 min-h-screen justify-center items-center gap-2 bg-gray-200'> 
    <h2 className='text-slate-700 text-4xl'>Protected Page</h2>
    <Link className='p-2 bg-sky-500 text-white rounded-md hover:opacity-80' href='/'>Return</Link>
    
    </div>
  )
}

export default Protected