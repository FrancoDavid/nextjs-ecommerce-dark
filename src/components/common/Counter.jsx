export default function Counter({ disabled, limit, counter, onChange }) {
    
    const handleAdd = () => {
        if (counter < limit) {
            onChange(counter + 1);
        }
    }

    const handleLess = () => {
        if (counter > 1) {
            onChange(counter - 1);
        }
    }

    return (
        <div className="bg-gray-500 rounded-full flex items-center justify-between px-4 py-2">
            <button
                className={`text-2xl font-bold ${!disabled ? 'text-white' : 'text-gray-400 cursor-not-allowed'}`}
                disabled={disabled}
                onClick={handleLess}>
                -
            </button>
            <span className="text-white text-2xl font-bold">{counter}</span>
            <button
                className={`text-2xl font-bold ${!disabled ? 'text-white' : 'text-gray-400 cursor-not-allowed'}`}
                disabled={disabled}
                onClick={handleAdd}>
                +
            </button>
        </div>
    )
}