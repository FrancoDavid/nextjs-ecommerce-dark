"use client"

import { useRouter } from "next/navigation";

export default function CardBackground({ category, key,  withSpan}) {
    const router = useRouter();

    const handleRedirectProductsByCategory = () => {
        router.push(`/products`);
    }

    return (
        <div
            key={key}
            className={`p-4 h-[280px] bg-white bg-[url('/imgs/image-11.png')] bg-cover bg-center rounded-[20px] object-cov cursor-pointer ${withSpan ? "col-span-2" : ""}`}
            onClick={handleRedirectProductsByCategory}    
        >
            <h4 className="font-bold text-4xl">{category.name}</h4>
        </div>
    )
}