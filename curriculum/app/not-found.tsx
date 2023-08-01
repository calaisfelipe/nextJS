'use client'
import Image from 'next/image'
import notfound from '@/public/images/notfound.png'
import HomeButton from '@/components/HomeButton'
import { useRouter } from 'next/navigation'
 
export default function NotFound() {

    const router = useRouter()

  return (
    <div className='h-screen flex flex-col justify-center items-center p-2'>
      <h2 className='font-light text-yellow-500 text-sm'>Looks like you got lost</h2>
      <p className='font-bold text-2xl text-yellow-600'>Page not found!</p>
    <Image src={notfound} height={188} width={288} alt='page not found' />


        <HomeButton text='Return Home' action={() => router.push('/')} />
     
    </div>
  )
}