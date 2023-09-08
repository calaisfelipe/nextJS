'use client'
import React from 'react'
import Header from '@/components/Header'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import NotificationsFeed from '@/components/notifications/NotificationsFeed'


const NotificationsPage = () => {

    const session = useSession({
        required: true,
        onUnauthenticated(){
            redirect('/')
        }
    })


  return (
   <>
   <Header label='Notifications' showBackError />
   <NotificationsFeed />
   </>
   
  )
}

export default NotificationsPage