import CardProduct from "@/components/common/CardProduct";
import Paginator from "@/components/common/Paginator";

import { getProducts } from "@/services/Product";

export default async function Grid({ search }) {
    const productsResponse = await getProducts(search.category, search.page, search.size);

    return (
        <div className="grid grid-cols-1 gap-3">
            <div className="flex items-center justify-end">
                <span className="text-[16px] text-gray-400">counter</span>
            </div>
            <div className="grid grid-cols-3 gap-6 mx-4">
                {productsResponse?.data?.result?.map((product, index) => (
                    <CardProduct key={index} product={product} />
                ))}
            </div>

            <Paginator />
        </div>
    )
}