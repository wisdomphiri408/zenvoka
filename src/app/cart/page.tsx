import CartProducts from "@/components/cart/CartProducts";
import { NextPage } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon} from "lucide-react";
import OrderSummary from "@/components/cart/OrderSummary";

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
            <div className={'flex flex-col gap-8 lg:flex-row mx-auto w-full max-w-[1500px]'}>
                <CartProducts />
                {/* order summary */}
                <OrderSummary />
            </div>
        </div>
    )
}

export default Cart;