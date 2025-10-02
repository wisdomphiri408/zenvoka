'use client';

import {NextPage} from "next";
import {useState} from "react";
import {useCart} from "@/context/CartContext";

const ShippingMethod: NextPage = () => {
    const {setShippingCost, setShippingType} = useCart();

    const [selectedMethod, setSelectedMethod] = useState('none');
    const methods = [
        {
            title:'Standard Shipping',
            duration:'5-7 business days',
            name:'standard',
            cost: 9.99,
        },
        {
            title: 'Express Shipping',
            duration: '2-3 business days',
            name: 'express',
            cost: 15.99,
        },
        {
            title: 'Overnight Shipping',
            duration: 'Next business day',
            name: 'overnight',
            cost: 29.99,
        },
        {
            title: 'None',
            duration: '——',
            name:'none',
            cost: 0,
        }
    ];

    const HandleShipping = (name:string, cost:number) => {
        setSelectedMethod(name);
        setShippingCost(cost);
        setShippingType(name);
    }

    return (
        <div className={'card p-4'}>
            <div className={'flex items-center gap-1 mb-4'}>
                <div className={'flex-center w-6 h-6 rounded-full text-xs text-black bg-white'}>2</div>
                <h5 className={'text-h5'}>Shipping Method</h5>
            </div>

            {/*Checkbox for shipping method*/}
            <div>
                {methods.map((method, index)=>
                    <div key={index} className={' card flex items-center justify-between mb-2'}>

                        <div className={'flex items-center'}>
                            <input
                                type="radio"
                                id={method.name}
                                name="shippingMethod"
                                value={method.name}
                                checked={selectedMethod === method.name}
                                onChange={() => HandleShipping(method.name, method.cost)}
                                className="mr-2"
                            />
                            <label htmlFor={method.name}>
                                <p className={'text-sm font-semibold'}>{method.title}</p>
                                <p className={'text-xs '}>{method.duration}</p>
                            </label>
                        </div>

                        <div className={'text-sm font-semibold'}>
                            ${method.cost}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ShippingMethod;