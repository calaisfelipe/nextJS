'use client'
import Image from 'next/image'
import { useEffect } from 'react'
import useContextLanguage from '@/hooks/useContextLanguage'
import notfound from '@/public/images/notfound.png'
import HomeButton from '@/components/HomeButton'
import { useRouter } from 'next/navigation'
 
export default function NotFound() {

    const router = useRouter()
    const language = useContextLanguage();

  useEffect(() => {
    const getLanguage = localStorage.getItem("language");

    if (getLanguage === "EN") {
      language.dispatch({ type: "CHANGE_LANG" });
    }

    if (!getLanguage) {
      language.dispatch({ type: "RESET" });
    }
  }, [language]);

  return (
    <div className='h-screen flex flex-col justify-center items-center p-2 dark:bg-gray-700'>
      <h2 className='font-semibold text-cyan-700 dark:text-blue-500 text-sm'>{language.state === 'EN' ? 'Looks like you got lost' : 'Parece que você ficou perdido' }</h2>
      <p className='font-bold text-2xl text-yellow-600 dark:text-blue-400'>{language.state === 'EN' ? 'Page not found!': 'Página não encontrada!'}</p>
    <Image className='dark:hidden' src={notfound} height={188} width={288} alt='page not found' />


        <HomeButton type='button' text={language.state === 'EN' ? 'Return Home': 'Retornar'} action={() => router.push('/')} />
     
    </div>
  )
}