import { NextPage } from "next";
import Image from "next/image";
import { Button } from "./ui/button";

interface Props {
    product:{
        id:number;
        image:string;
        title:string;
        price:number;
        category:string;
        description:string;
    }
}

const ProductCard: NextPage <Props>= ({product}) => {
    return(
        <div key={product.id} className="p-4 border rounded w-full max-w-[250px]">
            <div className="card aspect-square relative rounded overflow-hidden">
                <Image
                src={product.image}
                alt={product.title}
                fill
                style={{ objectFit: 'contain' }}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAAH0lEQVR42mP8/5+hP6VQwMDA8J+FhwMDgYGjAwAIHhCqZ8b2swAAAABJRU5ErkJggg=="
            />
            </div>
            <div className="flex">
                <p className="text-sm bg-gray-100 rounded-full dark:bg-background-color-dark px-2">{product.category}</p>
            </div>
            <div>
                <p className="text-body">{product.title}</p>
            </div>
            <div>
                <p className="text-body font-bold">${product.price}</p>
                <p>
                    <Button
                    variant={"primary"}
                    className="p-2"
                    >Add</Button>
                </p>
            </div>
        </div>
    )
}

export default ProductCard;