import React from 'react'

type FormationBoxType = {
    title: string
    subtitle: string
    description: string
}

const FormationBox = ({title,subtitle,description}: FormationBoxType) => {
  return (
    <div className='flex flex-col lg:w-80 md:w-48 sm:w-36 w-full  sm:p-0 p-2 mt-2 gap-1'>
        <div className='text-white bg-yellow-500 p-1 font-bold'>
            {title}
        </div>
        <h5 className='font-bold text-md'>{subtitle}</h5>
        <p className='text-sm text-gray-500 '>{description}</p>


    </div>
  )
}

export default FormationBox