"use client";

import { useEffect } from "react";
import { toast } from "sonner";

import useCartStore from "@/stores/Cart/useCart";
import useUserStore from "@/stores/User/useUser";

export default function CartTotal() {
    const { cart: { subtotal, total, delivery, items }, calculateTotal } = useCartStore();
    const { user } = useUserStore();

    const handleBuy = () => {
        if (!user) {
            toast.warning("Please log in to proceed to checkout.");
            return;
        }
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
                onClick={handleBuy}>
                    Buy Now
            </button>
        </div>
    );
}