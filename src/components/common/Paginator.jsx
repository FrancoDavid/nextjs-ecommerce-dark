"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Paginator({ page, pages }) {

    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();

    const handlePageChange = (newPage) => (e) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', newPage);
        router.push(`${pathname}?${params.toString()}`);
    }


    return (
        <div className="flex justify-end space-x-2 mt-6">
            { Array.from({ length: pages }, (_, index) => (
                <button 
                    key={index}
                    className={`px-3 py-1 border rounded hover:bg-gray-200 ${page === index ? 'bg-black text-white' : ''}`}
                    onClick={handlePageChange(index)}>
                    {index+1}
                </button>
            ))}
        </div>
    )
}