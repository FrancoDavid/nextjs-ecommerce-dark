import { getProductsTopSelling } from "@/services/Product";
import CardProduct from "../../common/CardProduct";

export default async function HighlightTopSeller() {
    const productsResponse = await getProductsTopSelling();
    
    return (
        <>
            <div className="flex justify-center items-center ">
                <h2 className="text-black font-bold text-5xl">TOP SELLING</h2>
            </div>

            <div className="grid grid-cols-4 gap-10 py-[55px] px-[100px]">
                {productsResponse?.data?.slice(0, 4).map((product, index) => (<CardProduct key={index} product={product}/>))}
            </div>
        </>

    )
}