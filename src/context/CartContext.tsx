'use client'

import { createContext, useContext } from 'react';

export interface cartItem {
    id:number;
    title:string;
    price: number;
    image:string;
    quantity:number;
    category:string;
}

interface CreateContextType {
    cartItems:cartItem[];
    addToCart:(item: cartItem) => void;
    removeFromCart: (id:number) => void;
    decreaseQuantity: (id: number) => void;
    cartCount: number;

}

export const CartContext = createContext<CreateContextType | undefined>(undefined);

export const useCart = () => {
    const context =useContext(CartContext);
    if(!context) throw new Error('useCart must be used in a component inside CartProvider');

    return context;
}