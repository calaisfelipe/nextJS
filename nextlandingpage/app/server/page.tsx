import React from 'react'
import { getCurrentUser } from '@/lib/session'
import Link from 'next/link'

const ServerPage = async () => {

    const user = await getCurrentUser()

  return (
    <div className='flex flex-col justify-center items-center min-h-screen gap-2'>ServerPage - user: {user?.name}
    <div>
     <Link className='p-2 bg-sky-500 text-white rounded-md hover:opacity-80' href='/'>Return</Link>
    </div>
    </div>
  )
}

export default ServerPage