'use client'
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"

export default function Home() {

  const {data:session} = useSession({
    required:true,
    onUnauthenticated() {
      redirect('/login')
    },
  })

  return (
    <main className="flex min-h-screen flex-col items-center p-2 ">
      <div>
      hello {session?.user ? session?.user?.email : 'Guest'}
      </div>
      

      


    </main>
  )
}
