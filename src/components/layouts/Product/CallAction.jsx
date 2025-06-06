"use client";
import { useState } from "react";

import Counter from "@/components/common/Counter";
import useCartStore from "@/stores/Cart/useCart";
import { useRouter } from "next/navigation";

export default function CallAction({ item }) {
    const { addToCart } = useCartStore();
    const [quantity, setQuantity] = useState(1);
    const router = useRouter();

    const isAllowBuy = item?.stock > 0;
    
    const handleAddCart = () => {
        addToCart({ ...item, quantity: quantity });
        router.push('/cart');
    }

    return (
        <div className="grid grid-cols-5 gap-4 mt-[50px]">
            <Counter
                counter={quantity}
                disabled={!isAllowBuy}
                limit={item?.stock}
                onChange={setQuantity}
            />

            <button 
                className={`col-span-3 bg-black text-white text-lg font-bold py-2 px-4 rounded-full 
                    ${isAllowBuy ? 'hover:bg-gray-800' : 'bg-gray-400 cursor-not-allowed'}`} 
                disabled={!isAllowBuy}
                onClick={handleAddCart}>
                Add to Cart
            </button>
        </div>
    )
}