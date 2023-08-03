import React from 'react'

type HomeButtonType = {
    text: string
    action?: () => void
}


const HomeButton = ({text, action}: HomeButtonType) => {
  return (
    <>
    <button className='bg-yellow-500 dark:bg-blue-900 text-white rounded-full p-2 w-40 lg:text-xl lg:w-48  mt-3 hover:opacity-80 ' onClick={action}>{text}</button>
    </>
  )
}

export default HomeButton