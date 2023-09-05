'use client'
import React from 'react'
import useUser from '@/hooks/useUser'
import Loading from '@/components/Loading'
import Header from '@/components/Header'
import UserHero from '@/components/users/UserHero'
import UserBio from '@/components/users/UserBio'
import EditModal from '@/components/modals/EditModal'
import PostFeed from '@/components/posts/PostFeed'



const UserPage = ({params:{userId}}:{params:any}) => {
    const {data:user, isLoading, mutate} = useUser({userId})
    console.log(user)
    
  if(isLoading && !user){
    return <Loading isLoading={isLoading} />
  }


  return (
    <div className='text-white'>
      <EditModal user={user} mutate={mutate}/>
      <Header label={`${user.name}`} showBackError/>
      <UserHero userId={userId as string} />
      <UserBio userId={userId as string}/>
      <PostFeed userId={userId as string}/>

      
      
        
        

    </div>
  )
}

export default UserPage