import React from 'react'
import AsideBar from '@/components/AsideBar'
import SideBar from '@/components/SideBar'

type aboutMeLayoutType = {
    children: React.ReactNode
    
}

export const metadata = {
  title: 'Portfolio'
}

const PortfolioLayout = ({children}: aboutMeLayoutType) => {
  return (
    <div className='flex bg-gray-200 dark:bg-gray-700'>
        <AsideBar meta={metadata.title}/>
        <SideBar meta={metadata.title} />
        {children}
    </div>
  )
}

export default PortfolioLayout