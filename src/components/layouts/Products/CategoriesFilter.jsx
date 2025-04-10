"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChevronRightIcon } from "@heroicons/react/24/outline"

export default function CategoriesFilter({ name }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();

    const handleFilterByCategory = (name) => () => {
        const params = new URLSearchParams(searchParams);
        params.set('categoryName', name);
        router.push(`${pathname}?${params.toString()}`);
    }

    return (
        <div className="flex items-center justify-between cursor-pointer" onClick={handleFilterByCategory(name)}>
            <p className="text-[16px] font-light text-gray-400 hover:text-gray-600">{name}</p>
            <ChevronRightIcon className="h-4 w-4 text-gray-700" />
        </div>
    )
}