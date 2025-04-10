"use client"

import { useRouter } from "next/navigation";
import { IMAGES_DICTIONARY } from "@/config/constants";

import { SIZE_PAGES_DICTIONARY, PAGES_DICTIONARY } from "@/config/constants";


export default function CardBackground({ category, index }) {
    const router = useRouter();

    const gridCicle = 4;
    const secondGrid = 1;
    const thirdGrid = 2;
    const withSpan = index % gridCicle === secondGrid || index % gridCicle === thirdGrid;

    const handleRedirectProductsByCategory = () => {
        router.push(`/products?categoryName=${category.name}&page=${PAGES_DICTIONARY.INIT}&size=${SIZE_PAGES_DICTIONARY.MEDIUM}`)
    }

    return (
        <div
            key={index}
            className={`p-4 h-[280px] bg-white bg-cover bg-center rounded-[20px] object-cover cursor-pointer ${withSpan ? "col-span-2" : ""}`}
            style={{
                backgroundImage: `url(${IMAGES_DICTIONARY.CATEGORIES}${category?.url})`
            }}
            onClick={handleRedirectProductsByCategory}
        >
            <h4 className="font-bold text-4xl">{category.name}</h4>
        </div>
    )
}