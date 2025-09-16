
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: Request){
    const cookieStore = await cookies();

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
            return NextResponse.json(
                {message:"Invalid Credentials."},
                {status:401}
            );
        }

        const data = await res.json();


        // set cookies

        //set accessToken (httpOnly)
        cookieStore.set("accessToken", data.token,{
            httpOnly:true,
            secure:process.env.NODE_ENV === 'production',
            sameSite: "strict",
            maxAge: 60 * 60,
            path: '/'
        });

        //set refreshToken (example — fakestore only returns one token, so we reuse it for demo)
        cookieStore.set({
            name:'refreshToken',
            value: data.token,
            httpOnly:true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 * 7,
            path: '/',
        });

        return NextResponse.json(
            {message:"Login Successful", token:data.token},
            {status:200}
        )
    } catch(err) {
        console.log("Login error",err)
        return NextResponse.json({message:"Something went wrong"},{status:500})
    }

}