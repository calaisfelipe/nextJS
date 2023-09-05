'use client'
import React from 'react'
import usePosts from '@/hooks/usePosts'
import useCurrentUser from '@/hooks/useCurrentUser'
import PostItem from './PostItem'

 
type PostFeedProps ={
  userId?:string

}

const PostFeed = ({userId}:PostFeedProps) => {
  //const {data:currentUser} = useCurrentUser()

  
  const {data:posts = []} = usePosts(userId)

  console.log(posts)


  return (
    <div className='text-white'>
      {posts.map((post:Record<string , any>) => <PostItem userId={userId as string} key={post.id} data={post} />)}
    </div>
  )
}

export default PostFeed