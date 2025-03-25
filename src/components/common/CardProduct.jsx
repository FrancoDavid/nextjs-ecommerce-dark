"use client"

import CardImage from "./CardImage"

export default function CardProduct() {
    return (
        <div className="grid grid-cols-1">
            <CardImage image="/imgs/image-7.png" name="image7"/>
            <p className="text-black text-base font-bold">
                T-SHIRT WITH TAPE DETAILS
            </p>
            <span className="text-black text-xl font-bold">
                $120.000
            </span>
        </div>
    )
}