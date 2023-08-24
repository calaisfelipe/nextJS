'use client'

import Button from '@/components/Button'
import {useRouter} from 'next/navigation'
import {motion} from 'framer-motion'
import { Quicksand } from "next/font/google";
import Loading from '@/components/Loading';


const quicksand = Quicksand({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  
  const router = useRouter()

  return (
    <>
    
    <motion.div initial={{opacity:0}} animate={{opacity: 1}} transition={{delay:1, duration:2, ease:'easeInOut'}} className='flex flex-col justify-center items-center w-screen mt-10 gap-5 '>

      
        <motion.h2  animate={{fontSize:'50px', color:'#ffffff'}} className={`${quicksand.className}`} >Welcome to Pizza Joint</motion.h2>
     
      <Button label='Create Your Pizza' onAction={() => router.push('/base') } />
    </motion.div>

    <Loading />
    </>
    
  )
}
