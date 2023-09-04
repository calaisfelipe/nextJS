import React from 'react'
import { ClipLoader } from 'react-spinners'

const Loading = ({isLoading}:{isLoading:boolean}) => {
  return (
    <div className='w-full h-screen flex justify-center items-start mt-10'>
    <ClipLoader color='lightblue' size={80} loading={isLoading} />
    </div>
  )
}

export default Loading