
import { NextResponse } from "next/server";

export async function POST(req: Request){

    try {
        //parse body
        const { userName, password } = await req.json();

        //Call Fake Store API
        const res = await fetch("https://fakestoreapi.com/auth/login",{
            method: "POST",
            headers: {
                "Content-Type":"application/json",
            },
            body:JSON.stringify({username:userName, password}),
        });

        if(!res.ok){
            return NextResponse.json({message:"Invalid Credentials."},{status:401})
        }

        const data = await res.json();

        //fake store returns a token if successful
        return NextResponse.json({message:"Login Successful",token:data.token},{status:200})
    } catch(err) {
        console.log("Login error",err)
        return NextResponse.json({message:"Something went wrong"},{status:500})
    }

}