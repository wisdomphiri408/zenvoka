import { error } from "console";
import { NextPage } from "next";

const Test: NextPage = async () => {
    const res = await fetch('https://fakestoreapi.com/products/categories');

    if(!res.ok){
        throw error('This is not okay')
    }

    const data = await res.json()

    console.log(data)
    return(
        <div>Test</div>
    )
}

export default Test;