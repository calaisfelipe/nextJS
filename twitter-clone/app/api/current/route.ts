import { NextResponse } from "next/server";
import { NextApiRequest } from "next";
import serverAuth from "@/lib/serverAuth";


export async function GET(req:NextApiRequest){

    try{
        const {currentUser} = await serverAuth(req)

        if(!currentUser) {
            return new NextResponse('Not logged in',{ status:401})
        }

        return NextResponse.json(currentUser)
    
    }catch(error){
        console.log(error)
        return new NextResponse('Something went wrong', {status:400})
    }
    
}

