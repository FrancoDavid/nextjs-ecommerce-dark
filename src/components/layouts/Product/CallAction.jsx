"use client";

import Counter from "@/components/common/Counter";

export default function CallAction({ stock }) {

    const isEnabled = stock > 0;
    
    const handleAddCart = () => {
        console.log("Add to cart");
    }

    return (
        <div className="grid grid-cols-5 gap-4 mt-[50px]">
            <Counter disabled={!isEnabled} limit={stock}/>

            <button 
                className={`col-span-3 bg-black text-white text-lg font-bold py-2 px-4 rounded-full 
                    ${isEnabled ? 'hover:bg-gray-800' : 'bg-gray-400 cursor-not-allowed'}`} 
                disabled={!isEnabled}
                onClick={handleAddCart}>
                Add to Cart
            </button>
        </div>
    )
}