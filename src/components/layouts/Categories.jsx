"use client"

export default function Categories() {
    return (
        <div className="grid grid-cols-1 py-[80px] px-[100px]">
            <div className="bg-gray-200 py-[70px] px-[64px] grid grid-cols-1 rounded-md">
                <div className="flex justify-center items-center">
                    <h3 className="text-black font-bold text-4xl mb-[64px]">
                        BROWSE BY dress STYLE
                    </h3>
                </div>
                <div className="grid grid-cols-3 gap-5">
                    <div className="p-4 w-full overflow-hidden rounded-md ">
                        <h4>Casual</h4>
                        <img className="object-cover" src='/imgs/image-11.png' alt={name} />
                    </div>
                    <div className="p-4 col-span-2">
                        <h4>Formal</h4>
                        <img className="object-cover" src='/imgs/image-12.png'alt={name} />
                    </div>
                    <div className="p-4 col-span-2">
                        <h4>Party</h4>
                        <img className="object-cover" src='/imgs/image-13.png' alt={name} />

                    </div>
                    <div className="p-4">
                        <h4>Gym</h4>
                        <img className="object-cover" src='/imgs/image-13.png' alt={name} />
                    </div>
                </div>
            </div>
        </div>
    )
}