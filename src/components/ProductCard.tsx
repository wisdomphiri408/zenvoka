import { NextPage } from "next";
import Image from "next/image";

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
        <div key={product.id} className="p-4 border rounded">
            <div>
            <Image
             src={product.image} 
             alt={product.title}
             width={600}
             height={400} />
            </div>
            <div>
                <p>{product.category}</p>
            </div>
            <div>
                <p>{product.title}</p>
            </div>
            <div>
                <p>${product.price}</p>
                <p>
                    <button>Add</button>
                </p>
            </div>
        </div>
    )
}

export default ProductCard;