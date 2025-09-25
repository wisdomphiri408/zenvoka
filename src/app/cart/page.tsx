import CartProducts from "@/components/cart/CartProducts";
import { NextPage } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon} from "lucide-react";

const Cart: NextPage = () => {
    return(
        <div className="px-2">
            <div>
                <Link href={'/'}>
                    <Button className="text-sm">
                        <ArrowLeftIcon className="w-3 h-3"/>
                        Continue Shopping
                    </Button>
                </Link>
            </div>
            <CartProducts />
        </div>
    )
}

export default Cart;