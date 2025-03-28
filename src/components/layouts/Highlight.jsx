"use client"

import CardProduct from "../common/CardProduct";
import { useScroll } from "@/contexts/ScrollView";

export default function Highlight() {
    const { highLighNewArrivals, highLighTopSelling } = useScroll();

    return (
        <>
            <div className="grid grid-cols-1 py-[75px]" ref={highLighNewArrivals}>
                <div className="flex justify-center items-center ">
                    <h2 className="text-black font-bold text-5xl">NEW ARRIBALS</h2>
                </div>

                <div className="grid grid-cols-4 gap-10 py-[55px] px-[100px]">
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                </div>
            </div>

            <div className="grid grid-cols-1 py-[75px]" ref={highLighTopSelling}>
                <div className="flex justify-center items-center ">
                    <h2 className="text-black font-bold text-5xl">TOP SELLING</h2>
                </div>

                <div className="grid grid-cols-4 gap-10 py-[55px] px-[100px]">
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                </div>
            </div>
        </>

    )
}