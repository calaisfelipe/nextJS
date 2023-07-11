import { NextResponse } from "next/server";
import serverAuth from "@/lib/serverAuth";

const handlerCurrent = async function(request: any){

    try{
        const {currentUser } = await serverAuth(request)

        return NextResponse.json(currentUser)

    }catch(error){
        console.log(error)
        return NextResponse.json({message: "Something went wrong"})
    }


}

export { handlerCurrent as GET, handlerCurrent as POST}