'use client'
import React from 'react'
import {SessionProvider} from 'next-auth/react'

type AuthProviderType ={
    children: React.ReactNode
}

function AuthProvider({children}: AuthProviderType) {
  return (
    <SessionProvider >
        {children}
    </SessionProvider>
  )
}

export default AuthProvider