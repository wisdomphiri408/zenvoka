'use client'
import { NextPage } from "next";
import { useState } from "react";
import InputField from "../Inputfield";
import { Button } from "../ui/button";

const StayUpdated: NextPage = () => {
    const [email, setEmail] = useState<string>('');
    const [subscribed, setSubscribed] = useState<boolean>(false);

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();



    }
    return(
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <InputField
        type="email"
        placeholder="Your email"
        className="flex-1"
        required
        value={email}
        onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setEmail(e.target.value)}
        />

        <Button
        type="button"
        variant={'primary'}
        onClick={()=>setSubscribed(prev=> !prev)}
        >
            {subscribed ?
                <>subscribed</>:<>subscribe</>
            }
        </Button>
        </form>
    )
}

export default StayUpdated;