import React from 'react'
import AsideBar from '@/components/AsideBar'
import SideBar from '@/components/SideBar'

type formationLayoutType = {
    children: React.ReactNode
    
}

export const metadata = {
  title: 'Formation'
}

const formationLayout = ({children}: formationLayoutType) => {
  return (
    <div className='flex bg-gray-200 dark:bg-gray-700'>
        <AsideBar meta={metadata.title}/>
        <SideBar meta={metadata.title} />
         {children}
    </div>
  )
}

export default formationLayout