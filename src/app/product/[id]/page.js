import Breadcrumbs from "@/components/common/Breadcrumbs";
import CallAction from "@/components/layouts/Product/CallAction";
import CardImage from "@/components/common/CardImage";
import CardProduct from "@/components/common/CardProduct";
import Tag from "@/components/common/Tag";

import { getProduct, getProducts } from "@/services/Product";

import { IMAGES_DICTIONARY, SIZE_PAGES_DICTIONARY, PAGES_DICTIONARY } from "@/config/constants";

export default async function ProductDetailPage({ params }) {

    const breadcrumbs = [
        { name: "Home / ", href: "/" },
        { name: "Products / ", href: "/products" },
        { name: "Product", href: "" },
    ]

    const { data: product } = await getProduct(params?.id);

    if (!product) {
        return (
            <div className="grid grid-cols-1 px-[100px] py-[24px]">
                <div className="text-center">
                    <span className="text-[16px] text-gray-400">No product found</span>
                </div>
            </div>

        )
    }

    const productsResponse = await getProducts(product?.category, PAGES_DICTIONARY.INIT, SIZE_PAGES_DICTIONARY.SMALL)
    const products = productsResponse?.data?.result || [];

    return (
        <>
            <Breadcrumbs breads={breadcrumbs} />
            <div className="grid grid-cols-5 gap-4 px-[100px] py-[24px]">
                <section className="col-span-2">
                    <CardImage image={IMAGES_DICTIONARY.PRODUCTS + product?.url} name={product?.name} />
                </section>
                <section className="col-span-3">
                    <h1 className="text-black text-5xl font-bold mb-2">{product?.name}</h1>
                    <h2 className="text-black text-4xl font-bold mb-4">${product?.price}</h2>

                    <p className="text-gray-400 text-lg font-light">
                        {product?.description}
                    </p>

                    <p className="text-gray-400 text-sm font-light mb-4">
                        Stock: {product?.stock}
                    </p>

                    {product?.stock === 0 && (
                        <Tag text={'Product without stock!'} color={'bg-red-400'} />
                    )}

                    <CallAction item={product} />
                </section>

                {products && products.length > 0 && (
                    <section className="col-span-5 mt-4">
                        <div className="grid grid-cols-1 py-[75px]">
                            <div className="flex justify-center items-center">
                                <h2 className="text-black font-bold text-5xl">You might also like</h2>
                            </div>
                        </div>
                        <div className="grid grid-cols-4 gap-10 py-[55px] px-[100px]">
                            {products.map((product, index) => (<CardProduct key={index} product={product} />))}
                        </div>
                    </section>
                )}
            </div>
        </>
    );
}