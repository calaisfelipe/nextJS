import React from 'react'
import { getServerSession } from 'next-auth/next'
import { options } from '../api/auth/[...nextauth]/options'
import { redirect } from 'next/navigation'

export async function ServerPage() {

    const session = getServerSession(options)

  if(!session){
  redirect('/api/auth/signin?callbackUrl=/server')
}

  return (
    <div className='flex min-h-screen flex-col items-center justify-start p-24'>
      <p className='text-white text-2xl'>Server page</p>
      </div>
  )
}

export default ServerPage