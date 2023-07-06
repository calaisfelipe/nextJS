import { NextResponse } from "next/server";
import serverAuth from "@/lib/serverAuth";

export default async function GET(request: any){

    try{
        const {currentUser } = await serverAuth(request)

        return NextResponse.json(currentUser)

    }catch(error){
        console.log(error)
        return NextResponse.json({message: "Something went wrong"})
    }







}