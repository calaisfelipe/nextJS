import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import UserCard from "@/components/UserCard";
import { redirect } from "next/navigation";

export default async function serverPage() {
    const session = await getServerSession(options);
  
    if(!session){
        redirect('/api/auth/signin?callbackUrl=/server')
    }
  
    return (
      <section className="flex min-h-screen flex-col items-center justify-between p-24">
        
          <UserCard user={session?.user} pageType={"Server"} />
       
      </section>
    )};