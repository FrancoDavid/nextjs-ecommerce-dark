export default function Counter() {
    return (
        <div className="bg-gray-500 rounded-full flex items-center justify-between px-4 py-2">
            <button className="text-white text-2xl font-bold">-</button>
            <span className="text-white text-2xl font-bold">1</span>
            <button className="text-white text-2xl font-bold">+</button>
        </div>
    )
}