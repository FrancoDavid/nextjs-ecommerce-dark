"use client"

import { useRouter } from "next/navigation";

import CardImage from "./CardImage"

import { IMAGES_DICTIONARY } from "../../config/constants";

export default function CardProduct({ product }) {

    const router = useRouter();

    const handleRedirectDetail = () => {
        router.push(`/product/${product?.idProduct}`);
    }
 
    return (
        <div className="grid grid-cols-1 cursor-pointer" onClick={handleRedirectDetail}>
            <CardImage image={IMAGES_DICTIONARY.PRODUCTS+product?.url} name={product?.name}/>
            <p className="text-black text-base font-bold">
                {product?.name}
            </p>
            <span className="text-black text-xl font-bold">
                ${product?.price}
            </span>
        </div>
    )
}