"use client"

import { IMAGES_DICTIONARY } from "@/config/constants";
import { useRouter } from "next/navigation"

export default function Cover() {
    const router = useRouter();

    const handleRedirectToProducts = () => {
        router.push("/products");
    }

    return (
        <div className="grid grid-cols-2 bg-cover bg-center object-cover h-[663px]" style={{ backgroundImage: `url(${IMAGES_DICTIONARY.COVER}cover.png)` }}>
            <div className="text-black p-[100px]">
                <h1 className="font-bold text-6xl mb-5">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                <p className="text-base text-gray-600">Browse through our diverse range of meticulously crafted garments,
                    designed to bring out your individuality and cater to your sense of style.</p>
                <button className="bg-black text-white px-6 py-3 mt-4 rounded-4xl w-[210px] hover:bg-gray-800" onClick={handleRedirectToProducts}>
                    Shop now
                </button>
            </div>
        </div>
    )
}