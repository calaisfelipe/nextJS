'use client'
import useUser from '@/hooks/useUser'
import React, { useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import placeholder from '@/public/img/placeholder.png'

type AvatarProps = {
    userId: string
    isLarge?: boolean
    hasBoader?: boolean
}


const Avatar = ({userId, isLarge, hasBoader}:AvatarProps) => {

    const router = useRouter()
    const {data:fetchedUser} = useUser({userId})

    const onClick = useCallback((event:any) => {
        event.stopPropagation()

        const url = `/users/${userId}`
        router.push(url)

    }, [router, userId ])

  return (
    <div className={`
    ${hasBoader ? 'border-4 border-black' : ''}
    ${isLarge ? 'h-32 w-32' : 'h-12 w-12'}
   rounded-full
   hover:opacity-90
   transition
    cursor-pointer
    relative
    `}>
        <Image src={fetchedUser?.profileImage || placeholder} 
        fill 
        style={{objectFit: 'cover', borderRadius:'100%'}}
        alt='avatar'
        onClick={onClick}
        
        
        />
    </div>
  )
}

export default Avatar