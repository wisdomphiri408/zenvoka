'use client'

import { CartContext,cartItem } from "./CartContext";
import { ReactNode, useState } from "react";

export const CartProvider = ({children}:{children:ReactNode}) => {
    const [cartItems, setCartItems] = useState<cartItem[]>([]);
    const [subtotal, setSubtotal] = useState(0);
    const [shippingCost, setShippingCost] = useState(0);
    const [tax, setTax] = useState(15.0);
    const [shippingType, setShippingType] = useState<string>('none');

    const addToCart = (item: cartItem) => {
        setCartItems(prev => {
            const existing = prev.find(p => p.id === item.id);
            if(existing) {
                //increase quantity instead of adding duplicate
                return prev.map(p =>
                    p.id === item.id ? { ...p, quantity:p.quantity + 1 } : p
                );
            }
            return [ ...prev, { ...item, quantity: 1}];
        });
    };

    const decreaseQuantity = (id: number) => {
        setCartItems(prev => {
            const existing = prev.find(p => p.id === id);
            if (existing && existing.quantity > 1) {
                // decrease quantity
                return prev.map(p =>
                    p.id === id ? { ...p, quantity: p.quantity - 1 } : p
                );
            }
            // remove if quantity is 1 or less
            return prev.filter(p => p.id !== id);
        });
    };

    const removeFromCart = (id:number) => {
        setCartItems(prev => prev.filter(Item => Item.id !== id));
    };

    const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return(
        <CartContext.Provider value={{cartCount, addToCart, removeFromCart, cartItems, decreaseQuantity, subtotal, setSubtotal, shippingCost, setShippingCost, tax, setTax, shippingType, setShippingType}}>
            {children}
        </CartContext.Provider>
    )
}