"use client"

import { useScroll } from "@/contexts/ScrollView";

export default function Categories({children}) {
    const { categories } = useScroll();


    return (
        <div className="grid grid-cols-1 py-[80px] px-[100px]" ref={categories}>
            <div className="bg-gray-200 py-[70px] px-[64px] grid grid-cols-1 rounded-[40px]">
                <div className="flex justify-center items-center">
                    <h3 className="text-black font-bold text-5xl mb-[64px]">
                        BROWSE BY DRESS STYLE
                    </h3>
                </div>
    
               {children}
            </div>
        </div>
    )
}