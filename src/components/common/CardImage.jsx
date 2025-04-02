export default function CardImage({image, name}) {
    return (
        <div className="w-full overflow-hidden rounded-md my-3" >
            <img className="object-cover" src={image} alt={name} />
        </div>
    )
}