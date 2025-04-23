"use client"

import { useMemo } from "react";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChevronRightIcon, XMarkIcon } from "@heroicons/react/24/outline"

import { PAGES_DICTIONARY } from "@/config/constants";

export default function CategoriesFilter({ name }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();

    const categoryName = useMemo(() => searchParams.get('categoryName'), [searchParams]);
    const isSelected = useMemo(() => name === categoryName, [name, categoryName]);

    const handleFilterByCategory = (name) => () => {
        const params = new URLSearchParams(searchParams);
        params.set('categoryName', name);
        params.set('page', PAGES_DICTIONARY.INIT);
        router.push(`${pathname}?${params.toString()}`);
    }

    const handleCleanFilterByCategory = () => {
        const params = new URLSearchParams(searchParams);
        params.delete('categoryName');
        params.set('page', PAGES_DICTIONARY.INIT);
        router.push(`${pathname}?${params.toString()}`);
    }

    return (
        <div className="flex items-center justify-between">
            <p className={`text-[16px] font-light cursor-pointer ${isSelected? 'text-black' : 'text-gray-400'} hover:text-gray-600`} onClick={handleFilterByCategory(name)}>{name}</p>

            {isSelected && (<XMarkIcon className="h-4 w-4 text-gray-700 cursor-pointer" onClick={handleCleanFilterByCategory} />)}

            {!isSelected && (<ChevronRightIcon className="h-4 w-4 text-gray-700 cursor-pointer" onClick={handleFilterByCategory(name)}/>)}
        </div>
    )
}