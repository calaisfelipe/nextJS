import React from 'react'
import Sidebar from '@/components/Sidebar'
import getUsers from '../actions/getUsers'
import UserList from '@/components/UserList'

type layoutType = {
    children: React.ReactNode
}

async function layoutUsers({children}:layoutType) {

  const users = await getUsers()

  return (
    <Sidebar>
    <div className='h-full'>
      <UserList list={users}/>
        {children}
    </div>
    </Sidebar>
  )
}

export default layoutUsers