import React from 'react'

type User = {
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
} | undefined


type Props = {
  user: User,
  pageType: string,
}

function UserCard({user, pageType}:Props) {
  return (
    <div className='flex flex-col gap-4 justify-center items-center'>
        <h4 className='text-slate-600'>Hello, {user?.name}</h4>
        <p>This is your {pageType} page</p>
    </div>
  )
}

export default UserCard