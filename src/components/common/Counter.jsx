"use client";

import { useState } from "react";

export default function Counter({ disabled, limit }) {

    const [count, setCount] = useState(1);
    
    const handleAdd = () => {
        if (count < limit) {
            setCount(count + 1);
        }
    }

    const handleLess = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    return (
        <div className="bg-gray-500 rounded-full flex items-center justify-between px-4 py-2">
            <button
                className={`text-2xl font-bold ${!disabled ? 'text-white' : 'text-gray-400 cursor-not-allowed'}`}
                disabled={disabled}
                onClick={handleLess}>
                -
            </button>
            <span className="text-white text-2xl font-bold">{count}</span>
            <button
                className={`text-2xl font-bold ${!disabled ? 'text-white' : 'text-gray-400 cursor-not-allowed'}`}
                disabled={disabled}
                onClick={handleAdd}>
                +
            </button>
        </div>
    )
}