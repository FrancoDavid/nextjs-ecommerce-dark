"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import useCartStore from "@/stores/Cart/useCart";
import useUserStore from "@/stores/User/useUser";

import SpinLoad from "@/components/common/SpinLoad";

import { postGenerateOrder } from "@/services/Order";

export default function CartTotal() {
    const { cart: { subtotal, total, delivery, items }, calculateTotal, clearCart } = useCartStore();
    const { user } = useUserStore();
    const router = useRouter();
    const [isLoading, setLoading] = useState(false);



    const handleBuy = () => {
        if (!user) {
            toast.warning("Please log in to proceed to checkout.");
            return;
        }

        setLoading(true);

        const order = {
            details: items,
            email: user?.email,
            total: total,
            delivery: delivery,
            subtotal: subtotal
        }

        console.log("Order details: ", order);

        postGenerateOrder(order, user?.token)
            .then(() => {
                toast.success("Order placed successfully!");
                clearCart();
                router.push('/');
            })
            .catch((e) => {
                toast.error("Error placing order. Please try again.");
                console.log(e)
            })
            .finally(() => setLoading(false));
    }

    useEffect(() => calculateTotal(), [items])

    return (
        <div className="grid grid-col-1 rounded-lg border border-slate-200 bg-white p-4">
            <h1 className="font-bold text-[24px] color-black mb-4">Order Summary</h1>
            <div className="flex justify-between">
                <p className="font-ligth text-[20px] color-gray-400">Subtotal</p>
                <p className="font-bold text-[20px]">${subtotal}</p>
            </div>
            <div className="border-b border-slate-200 py-4 flex justify-between mb-4">
                <p className="font-ligth text-[20px] color-gray-400">Delivery</p>
                <p className="font-bold text-[20px]">${delivery}</p>
            </div>
            <div className="flex justify-between">
                <p className="font-bold text-[20px] color-gray-400">Total</p>
                <p className="font-bold text-[20px]">${total}</p>
            </div>
            <button
                className="bg-black text-white px-6 py-3 mt-4 rounded-4xl w-[210px] hover:bg-gray-800"
                disabled={isLoading || !items || items?.length === 0}
                onClick={handleBuy}>
                    {isLoading ? <SpinLoad /> : 'Buy now'}
            </button>
        </div>
    );
}