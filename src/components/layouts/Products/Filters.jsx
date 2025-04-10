import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline"

import { getCategories } from "@/services/Category"

import CategoriesFilter from "./CategoriesFilter";

export default async function Filters() {
    const categoriesResponse = await getCategories();
    
    return (
        <div className="grid grid-cols-1 gap-3 rounded-lg border border-slate-200 bg-white p-4">
            <div className="flex items-center justify-between">
                <p className="text-xl font-bold">Filters</p>
                <AdjustmentsHorizontalIcon className="h-6 w-6 text-gray-700" />
            </div>
            {categoriesResponse?.data?.map((category, index) => {
                return (
                    <CategoriesFilter key={index} name={category.name} />
                );
            })}
        </div>
    )
}
