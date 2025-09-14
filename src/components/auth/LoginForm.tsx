'use client'

import { Button } from "@/components/ui/button";
import { NextPage } from "next";
import InputField from "@/components/Inputfield";
import { ReactHTMLElement, useState } from "react";

const LoginForm: NextPage = () => {
    const [userName, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');


    return (
            <form>
                <h5 className="text-h5">Sign In</h5>
                <p className="text-small text-text-secondary">Enter your credentials to access your account</p>

                <div>
                    <label>Username</label>
                    <InputField
                    type="text"
                    className=""
                    value={userName}
                    placeholder="Enter your username"
                    onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setUserName(e.target.value)}
                    />

                    <label>Password</label>
                    <InputField
                    type="password"
                    placeholder="Enter your password"
                    className=""
                    value={password}
                    onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setPassword(e.target.value)}                    />
                <Button
                variant={"primary"}
                >
                    Sign In
                </Button>
                </div>

                <div>
                    <p className="text-small text-text-secondary">Don't have an account? Try our demo:</p>
                    <Button
                    variant={"inverted"}
                    >
                        Use Demo Account
                    </Button>
                    <p className="text-small text-text-secondary">Username: mor_2314 | Password: 83r5^_</p>

                    <div>
                        <Button>Go To Home</Button>
                    </div>
                </div>
            </form>
    )
}

export default LoginForm;