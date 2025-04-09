"use client"

import { useRouter } from "next/navigation"

export default function Breadcrumbs({ breads }) {
    const router = useRouter();

    const handleRedirect = (href) => (event) => {
        event.preventDefault();
        router.push(href);
    }

    return (
        <section className="grid grid-cols-1 px-[100px] py-[24px]">
            <div>
                {breads && breads.length > 0 && breads.map((bread, index) => (
                    <span key={index} className="text-sm text-slate-400 cursor-pointer hover:text-black" onClick={handleRedirect(bread.href)}>{bread.name}</span>
                ))}
            </div>
        </section>
    )
}