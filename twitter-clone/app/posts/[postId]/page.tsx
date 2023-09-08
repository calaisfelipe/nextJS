'use client'
import React from 'react'
import useRouter from 'next/navigation'
import usePost from '@/hooks/usePost'
import { ClipLoader } from 'react-spinners'
import Header from '@/components/Header'
import PostItem from '@/components/posts/PostItem'
import Form from '@/components/Form'
import CommentFeed from '@/components/comments/CommentFeed'

export default function  PostPage({params:{postId}}:{params:{postId:string}}){

  const {data:fetchedPost, isLoading } = usePost(postId)

  if(!fetchedPost || isLoading){
    return(
      <div className=' h-full flex items-center justify-center'> 
        <ClipLoader size={60} color='lightblue' />
      </div>
    )
  }


  return (
    <>
    <Header label='Tweet' showBackError/>
    <PostItem data={fetchedPost} postPage/>
    <Form  
    postId={postId}
    isComment
    placeholder='Tweet your reply'
    
    />
    <CommentFeed comments={fetchedPost?.comments} />
    
    
    </>
  )
}

