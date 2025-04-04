import { getProductsArribal, getProductsTopSelling } from "@/services/Product"

import CardProduct from "@/components/common/CardProduct";

export default async function HighlightProducts({ productsType }) {

    let productsResponse = null

    if (productsType === "TOP_SELLING") {
        productsResponse = await getProductsTopSelling();
    }

    if (productsType === "NEW_ARRIBALS") {
        productsResponse = await getProductsArribal();
    }

    if (!productsResponse || (productsResponse && productsResponse?.data && productsResponse?.data?.length === 0)) {
        return (
            <div className="flex justify-center items-center">
                <h2 className="text-black font-bold text-5xl">No products available</h2>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-4 gap-10 py-[55px] px-[100px]">
            {productsResponse?.data?.slice(0, 4).map((product, index) => (<CardProduct key={index} product={product} />))}
        </div>
    )
}