'use client'

import { Button } from "@/components/ui/button";
import { NextPage } from "next";
import InputField from "@/components/Inputfield";
import { useState } from "react";
import { ArrowLeft, User, Lock, EyeIcon,EyeClosed } from "lucide-react";
import Link from "next/link";

const LoginForm: NextPage = () => {
    const [userName, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false)

    const togglePassword = () => {
        setShowPassword(prev => !prev)
    }

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
       
        const res = await fetch('/api/auth/login',{
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({userName, password})
        });

        const data = await res.json();

        if (!res.ok) {
        setMessage(data.message || "Failed to Login.");
        setError(true);
        setSuccess(false);
        setLoading(false);
        setTimeout(() => setMessage(""), 4000);
        return;
        }

        setMessage(data.message || "Login successful!");
        setError(false);
        setSuccess(true);
        setLoading(false);
        setTimeout(() => setMessage(""), 4000);

    }

    return (
            <form 
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 border border-border-light dark:border-border-dark shadow-xl  m-auto p-4 rounded-2xl w-full max-w-[450px]">
                <h5 className="text-h5">Sign In</h5>
                <p className="text-small text-text-secondary">Enter your credentials to access your account</p>
                
                {message && (
                <div className={`border-x-2 py-2 ${error?'border-x-red-500 bg-red-200 text-black':''} ${success?'border-x-green-500 bg-green-100 text-black':''}`}>
                    {message}
                </div>)}


                <div className="flex flex-col gap-2 border-b-2 border-border-light pb-4 dark:border-border-dark">
                    <div className="flex flex-col items-start">
                    <label className="text-body">Username</label>
                    <div className="w-full flex items-center">
                        <User className="w-4 h-4 z-1" />
                        <InputField
                        required 
                        type="text"
                        className="w-full px-6 ml-[-20px]"
                        value={userName}
                        placeholder="Enter your username"
                        onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setUserName(e.target.value)}
                        />
                    </div>
                    </div>

                    <div className="flex flex-col items-start">
                    <label className="text-body">Password</label>
                    <div className="w-full flex items-center">
                        <Lock className="w-4 h-4 z-1"/>
                        <InputField
                        type= {showPassword?'text':'password'}
                        placeholder="Enter your password"
                        className="w-full px-6 ml-[-20px] mr-[-20px]"
                        value={password}
                        required
                        onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setPassword(e.target.value)}                    
                        />
                        {showPassword?(
                            <EyeIcon className="w-4 h-4 cursor-pointer z-1" onClick={togglePassword}/>
                        ):(
                            <EyeClosed className="w-4 h-4 cursor-pointer z-1" onClick={togglePassword}/>
                        )}
                        
                    </div>
                    </div>
                    <Button
                    variant={"primary"}
                    type="submit"
                    disabled = {loading}
                    className="mt-4"
                    >
                        {loading ? "Signing In ...": "Sign In"}
                    </Button>
                </div>

                <div className="flex flex-col gap-2">
                    <p className="text-small text-text-secondary">Don&apos;t have an account? Try our demo:</p>
                    <Button
                    variant={"inverted"}
                    onClick={()=>{
                        setPassword('83r5^_');
                        setUserName('mor_2314');
                    }}
                    disabled = {loading}
                    >
                        Use Demo Account
                    </Button>
                    <p className="text-sm text-text-secondary">Username: mor_2314 | Password: 83r5^_</p>

                    <div>
                        <Link href="/">
                            <Button className="font-semibold">
                              <ArrowLeft className="w-4 h-4"/>
                             Back To Home
                           </Button>
                        </Link>
                    </div>
                </div>
            </form>
    )
}

export default LoginForm;