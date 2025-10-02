'use client'

import { NextPage } from "next";
import { Button } from "@/components/ui/button";
import { Truck } from "lucide-react";
import { useCart } from "@/context/CartContext";

const EstimatedDeliveryPage: NextPage = () => {
    const { shippingType } = useCart();

    const today = new Date();
    const future = new Date(today);

    // Map shipping type -> days to add
    const shippingDays: Record<string, number> = {
        standard: 5,
        express: 3,
        overnight: 1,
    };

    if (shippingType && shippingDays[shippingType]) {
        future.setDate(today.getDate() + shippingDays[shippingType]);
    }

    return (
        <div>
            {shippingType !== "none" && shippingDays[shippingType] && (
                <Button
                    variant={"inverted"}
                    className={"text-xs text-text-secondary mt-2"}
                >
                    <Truck className={"w-4 h-4 inline-block mr-1"} />
                    Estimated delivery: {future.toLocaleDateString()}
                </Button>
            )}
        </div>
    );
};

export default EstimatedDeliveryPage;
