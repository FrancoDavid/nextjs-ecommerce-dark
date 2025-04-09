export default function Paginator() {
    return (
        <div className="flex justify-end space-x-2 mt-6">
            <button className="px-3 py-1 border rounded hover:bg-gray-200">1</button>
            <button className="px-3 py-1 border rounded bg-black text-white">2</button>
            <button className="px-3 py-1 border rounded hover:bg-gray-200">3</button>
            <button className="px-3 py-1 border rounded hover:bg-gray-200">Siguiente</button>
        </div>
    )
}