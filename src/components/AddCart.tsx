'use client'

import { NextPage } from "next"
import { Button } from "./ui/button"
import { ShoppingCartIcon } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { title } from "process"
import { image } from "framer-motion/client"


interface Props {
    product: {
        id: number;
        image: string;
        title: string;
        price: number;
        category: string;
        description: string;
    }
}

const AddCart: NextPage <Props>= ({product}) => {
    const {addToCart} = useCart();

    const handleAddToCart = async() =>{
        try{
            const res = await fetch('/api/add-to-cart',{
                method:'POST',
                headers: {
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({productId:product.id, userId:1})
            });

            const result = await res.json();

            //add product to context
            addToCart({
                id:product.id,
                title:product.title,
                price: product.price,
                image:product.image,
                quantity:1,
                category:product.category,
            });

        }catch(err){
            console.log('Error adding to cart:',err);
        }
    }

    return(
        <Button
            variant={"primary"}
            className="p-2"
            onClick={handleAddToCart}
        >
        <ShoppingCartIcon className="w-4 h-4"/>
        Add
        </Button>
    )
}

export default AddCart;