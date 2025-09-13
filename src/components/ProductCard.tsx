import { NextPage } from "next";
import Image from "next/image";

interface Props {
    product:{
        id:number;
        image:string;
        title:string;
        price:number;
    }
}

const ProductCard: NextPage <Props>= ({product}) => {
    return(
        <div>
            <div key={product.id} className="p-4 border rounded">
            <Image
             src={product.image} 
             alt={product.title}
             width={600}
             height={400} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            </div>
        </div>
    )
}

export default ProductCard;