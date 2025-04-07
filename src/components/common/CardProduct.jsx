import CardImage from "./CardImage"
import { IMAGES_DICTIONARY } from "../../config/constants";

export default function CardProduct({product}) {
    return (
        <div className="grid grid-cols-1">
            <CardImage image={IMAGES_DICTIONARY.PRODUCTS+product?.url} name={product?.name}/>
            <p className="text-black text-base font-bold">
                {product?.name}
            </p>
            <span className="text-black text-xl font-bold">
                ${product?.price}
            </span>
        </div>
    )
}