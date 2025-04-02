import CardImage from "./CardImage"

export default function CardProduct({product}) {
    return (
        <div className="grid grid-cols-1">
            <CardImage image="/imgs/image-7.png" name="image7"/>
            <p className="text-black text-base font-bold">
                {product?.name}
            </p>
            <span className="text-black text-xl font-bold">
                ${product?.price}
            </span>
        </div>
    )
}