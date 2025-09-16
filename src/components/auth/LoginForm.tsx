'use client'

import { Button } from "@/components/ui/button";
import { NextPage } from "next";
import InputField from "@/components/Inputfield";
import { useState } from "react";
import { ArrowLeft, User, Lock, EyeIcon,EyeClosed } from "lucide-react";

const LoginForm: NextPage = () => {
    const [userName, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const togglePassword = () => {
        setShowPassword(prev => !prev)
    }


    return (
            <form className="flex flex-col gap-4 border border-border-light dark:border-border-dark shadow-xl  m-auto p-4 rounded-2xl w-full max-w-[450px]">
                <h5 className="text-h5">Sign In</h5>
                <p className="text-small text-text-secondary">Enter your credentials to access your account</p>

                <div className="flex flex-col gap-2 border-b-2 border-border-light pb-4 dark:border-border-dark">
                    <div className="flex flex-col items-start">
                    <label className="text-body">Username</label>
                    <div className="w-full flex items-center">
                        <User className="w-4 h-4 z-1" />
                        <InputField
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
                    >
                        Sign In
                    </Button>
                </div>

                <div className="flex flex-col gap-2">
                    <p className="text-small text-text-secondary">Don't have an account? Try our demo:</p>
                    <Button
                    variant={"inverted"}
                    >
                        Use Demo Account
                    </Button>
                    <p className="text-sm text-text-secondary">Username: mor_2314 | Password: 83r5^_</p>

                    <div>
                        <Button className="font-semibold">
                            <ArrowLeft className="w-4 h-4"/>
                            Back To Home
                        </Button>
                    </div>
                </div>
            </form>
    )
}

export default LoginForm;