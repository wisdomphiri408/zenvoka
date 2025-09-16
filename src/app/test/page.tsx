import { error } from "console";
import { NextPage } from "next";
import { getSession } from "@/lib/session";

const Test: NextPage = async () => {
    const session = await getSession();

    const res = await fetch('https://fakestoreapi.com/products/categories');

    if(!res.ok){
        throw error('This is not okay')
    }

    const data = await res.json()

    console.log(data)
    return(
        <div>
        <div>Test</div>
        <div>
        {session ? (
            <p>You are logged in with token</p>
        ) : (
            <p>Please log in to see this content.</p>
        )}
        </div>

      </div> 
    )
}

export default Test;