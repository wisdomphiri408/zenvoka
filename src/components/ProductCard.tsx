import { NextPage } from "next";
import Image from "next/image";
import { Star} from "lucide-react";
import AddCart from "./AddCart";


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

const ProductCard: NextPage<Props> = ({ product }) => {
    return (
        <div key={product.id} className="flex flex-col gap-2 p-4 border border-border-light dark:border-border-dark rounded-2xl w-full sm:max-w-[250px] ">
            <div className="card aspect-square relative rounded overflow-hidden">
                <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 250px"
                    style={{ objectFit: 'contain' }}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAAH0lEQVR42mP8/5+hP6VQwMDA8J+FhwMDgYGjAwAIHhCqZ8b2swAAAABJRU5ErkJggg=="
                />
            </div>
            <div className="flex items-center mt-2 mb-1 space-x-2">
                <p className="text-sm bg-gray-100 rounded-full dark:bg-background-color-dark px-2 border border-border-light dark:border-border-dark">{product.category}</p>

                <div className="flex items-center ml-auto">
                    <Star className="w-4 h-4 fill-amber-400 dark:fill-amber-300" />
                    <p className="text-sm">4.7</p>
                </div>
            </div>
            <div>
                <p className="text-body line-clamp-2">{product.title}</p>
            </div>
            <div className="flex items-center justify-between ">
                <p className="text-body font-bold">${product.price}</p>
                <AddCart product={product}/>
            </div >
        </div >
    )
}

export default ProductCard;