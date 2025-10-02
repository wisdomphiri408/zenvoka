'use client';

import {NextPage} from "next";
import {useState} from "react";
import {Truck, Lock, Star, CircleCheckBig, Shield} from "lucide-react";
import {Button} from "@/components/ui/button";
import {useCart} from "@/context/CartContext";

const CheckoutSummary: NextPage = () => {
    const {cartItems, subtotal, shippingCost, tax} = useCart();

    if(cartItems.length === 0) return  null;

    return (
            <div className={'card p-4 flex flex-col gap-4 sticky top-20'}>
                <h5 className={'text-h5'}>
                    Checkout Summary
                </h5>
                <div className={'flex flex-col gap-2'}>
                    <p className={'flex justify-between text-sm'}>
                        subtotal
                        <span>${subtotal}</span>
                    </p>
                    <p className={'flex justify-between text-sm'}>
                        Shipping
                        <span>${shippingCost}</span>
                    </p>
                    <p className={'flex justify-between text-sm'}>
                        Tax
                        <span>${tax}</span>
                    </p>
                </div>
                <div className={'border-t border-border-light dark:border-border-dark mt-2 pt-2'}>
                    <p className={'flex justify-between text-sm font-semibold'}>
                        Total
                        <span>${(shippingCost + subtotal + tax).toFixed(2)}</span>
                    </p>
                </div>

                <div className={'flex flex-col gap-4'}>
                    <Button
                        variant={'inverted'}
                        className={'text-xs text-text-secondary mt-2'}>
                        <Truck className={'w-4 h-4 inline-block mr-1'}/>
                        Estimated delivery in 5-7 business days
                    </Button>

                    <Button
                    variant={'primary'}
                    >
                        <Lock className={'w-4 h-4 inline-block mr-1'}/>
                        Place Order
                    </Button>
                </div>

                <div>
                    <div className={'flex items-center gap-4 mb-2 justify-center'}>
                        <p className={'text-sm flex items-center gap-1'}>
                            <Shield className={'w-3 h-3'} />
                            Secure
                        </p>
                        <p className={'flex items-center gap-1 text-sm'}>
                            <CircleCheckBig className={'w-3 h-3'} />
                            Verified
                        </p>
                        <p className={'flex items-center gap-1 text-sm'}>
                            <Star className={'w-3 h-3'} />
                            Trusted
                        </p>
                    </div>
                    <p className={'text-xs text-text-secondary text-center'}>
                        256-bit SSL encryption protects your payment information
                    </p>
                </div>
            </div>
    );
}

export default CheckoutSummary;