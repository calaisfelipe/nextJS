import React from 'react'
import { getCurrentUser } from '@/lib/session'

const ServerPage = async () => {

    const user = await getCurrentUser()

  return (
    <div>ServerPage - user: {user?.name}</div>
  )
}

export default ServerPage