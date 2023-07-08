"use client"
import React from 'react'
import {useSession} from 'next-auth/react'
import { redirect } from 'next/navigation'

function ClientPage() {

  const {data:session} = useSession({
    required:true,
    onUnauthenticated() {
      redirect('/api/auth/signin?callbackUrl=/')
    },
  })


  return (
    <div className='flex min-h-screen flex-col items-center justify-start p-24'>
      <p className='text-white text-4xl'>logged as: {session?.user?.name}</p>
      <p className='text-white text-4xl'>Client Page</p>
    </div>
  )
}

export default ClientPage