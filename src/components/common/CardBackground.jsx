"use client"

import { useRouter } from "next/navigation";

export default function CardBackground({ category, index}) {
    const router = useRouter();

    const gridCicle = 4;
    const secondGrid = 1;
    const thirdGrid = 2;
    const withSpan = index % gridCicle === secondGrid || index % gridCicle === thirdGrid;

    const handleRedirectProductsByCategory = () => {
        router.push(`/products`);
    }


    return (
        <div
            key={index}
            className={`p-4 h-[280px] bg-white bg-[url('/imgs/image-11.png')] bg-cover bg-center rounded-[20px] object-cov cursor-pointer ${withSpan ? "col-span-2" : ""}`}
            onClick={handleRedirectProductsByCategory}    
        >
            <h4 className="font-bold text-4xl">{category.name}</h4>
        </div>
    )
}