export default function Tag({ text, color }) {
    return (
        <span
            className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full text-white ${color}`}
        >
            {text}
        </span>
    )   
}