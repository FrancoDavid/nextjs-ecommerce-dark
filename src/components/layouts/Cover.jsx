"use client"

export default function Cover() {
    return (
        <div className="grid grid-cols-2 bg-[url('/imgs/Rectangle-2.png')] bg-cover bg-center">
            <div className="text-black p-[100px]">
                <h1 className="font-bold text-5xl mb-5">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                <p className="text-base text-gray-600">Browse through our diverse range of meticulously crafted garments,
                    designed to bring out your individuality and cater to your sense of style.</p>
                <button class="bg-black text-white px-6 py-3 mt-4 rounded-4xl hover:bg-gray-800">
                    Shop now
                </button>
            </div>
        </div>
    )
}