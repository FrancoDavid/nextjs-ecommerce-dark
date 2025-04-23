"use client";
import { useState } from "react";

import Counter from "@/components/common/Counter";
import useCartStore from "@/stores/Cart/useCart";

export default function CallAction({ item }) {
    const { addToCart, calculateTotal } = useCartStore();
    const [quantity, setQuantity] = useState(1);

    const isAllowBuy = item?.stock > 0;
    
    const handleAddCart = () => {
        console.log("Add to cart", { ...item, quantity: quantity });
        addToCart({ ...item, quantity: quantity });
        // calculateTotal();
    }

    return (
        <div className="grid grid-cols-5 gap-4 mt-[50px]">
            <Counter disabled={!isAllowBuy} limit={item?.stock} counter={quantity} onChange={setQuantity}/>

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