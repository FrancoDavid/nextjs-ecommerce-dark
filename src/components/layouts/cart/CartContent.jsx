"use client";
import useCartStore from "@/stores/Cart/useCart";
import CardImage from "@/components/common/CardImage";

import { TrashIcon } from "@heroicons/react/24/outline"
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

import { IMAGES_DICTIONARY } from "@/config/constants";


export default function CartContent() {
    const { cart: { items } } = useCartStore();

    return (
        <div className="rounded-lg border border-slate-200 bg-white p-4">
            {items?.map((item, index) => (
                <div key={index} className="grid grid-cols-3 border-b border-slate-200 py-4">
                <div className="mr-4">
                    <CardImage
                        image={IMAGES_DICTIONARY.PRODUCTS + item?.url}
                        name={item?.name}
                    />
                </div>
                <div className="ml-4">
                    <h3 className="text-[20px] font-bold color-black">{item?.name}</h3>
                    <p className="text-[14px] font-light color-gray-300">{item?.description}</p>
                    <p className="text-gray-400 text-sm font-light mb-4">
                        Stock: {item?.stock}
                    </p>
                    <p className="text-[24px] font-bold color-black mt-3">${item?.price}</p>
                </div>
                <div className="flex flex-col items-end justify-between">
                    <TrashIcon className="h-6 w-6 text-red-700 cursor-pointer" />
                    <section className="flex items-center justify-center">
                        <ShoppingCartIcon className="h-6 w-6 text-gray-700" />{item?.quantity}
                    </section>
                </div>
            </div>
            ))}
        </div>
    )
}