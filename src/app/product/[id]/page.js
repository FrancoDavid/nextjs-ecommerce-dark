import Breadcrumbs from "@/components/common/Breadcrumbs";
import CardImage from "@/components/common/CardImage";
import Highlight from "@/components/layouts/home/Highlight";
import HighlightProducts from "@/components/layouts/home/HighlightProducts";
import Counter from "@/components/common/Counter";

import { getProduct } from "@/services/Product";

import { IMAGES_DICTIONARY, PRODUCT_TYPES_DICTIONARY } from "@/config/constants";

export default async function ProductDetailPage({ params }) {

    const breadcrumbs = [
        { name: "Home / ", href: "/" },
        { name: "Products / ", href: "/products" },
        { name: "Product", href: "" },
    ]

    const productResponse = await getProduct(params?.id);
    const product = productResponse?.data;

    return (
        <>
            <Breadcrumbs breads={breadcrumbs} />
            <div className="grid grid-cols-5 gap-4 px-[100px] py-[24px]">
                <section className="col-span-2">
                    <CardImage image={IMAGES_DICTIONARY.PRODUCTS+product?.url} name={product?.name} />
                </section>  
                <section className="col-span-3">
                    <h1 className="text-black text-5xl font-bold mb-2">{product?.name}</h1>
                    <h2 className="text-black text-4xl font-bold mb-4">${product?.price}</h2>

                    <p className="text-gray-400 text-lg font-light">
                        {product?.description}
                    </p>


                    <div className="grid grid-cols-3 gap-4 mt-4">
                        <Counter />
                        <button className="bg-black text-white text-lg font-bold py-2 px-4 rounded-full">
                            Add to Cart
                        </button>
                    </div>
                </section>
                <section className="col-span-5 mt-4">
                    <Highlight sectionType={PRODUCT_TYPES_DICTIONARY.NEW_ARRIBALS} title="NEW ARRIVALS">
                        <HighlightProducts productsType={PRODUCT_TYPES_DICTIONARY.NEW_ARRIBALS}/>
                    </Highlight>
                </section>
            </div>
        </>
    );
}