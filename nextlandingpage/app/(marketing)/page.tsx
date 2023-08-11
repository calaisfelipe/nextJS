
import Navbar from "@/components/Navbar"
import { getCurrentUser } from "@/lib/session"




export default async function Home() {

 const user = await getCurrentUser()


  return (
    <>
    <Navbar/>
    <main className="flex min-h-screen flex-col items-center p-2 ">
      
      <div>
        
      hello {user ? user.email : 'Guest'}
      </div>
      

    </main>
    </>
  )
}
