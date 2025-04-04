// "use client"

import { getCategories } from "@/services/Category"

//  import { useScroll } from "@/contexts/ScrollView";

export default async function Categories() {
    // const { categories } = useScroll();

    const categoriesResponse = await getCategories();

    return (
        <div className="grid grid-cols-1 py-[80px] px-[100px]">
            <div className="bg-gray-200 py-[70px] px-[64px] grid grid-cols-1 rounded-[40px]">
                <div className="flex justify-center items-center">
                    <h3 className="text-black font-bold text-5xl mb-[64px]">
                        BROWSE BY DRESS STYLE
                    </h3>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    {categoriesResponse?.data?.map((category, index) => (
                        <div key={index} className="p-4 h-[280px] bg-white bg-[url('/imgs/image-11.png')] bg-cover bg-center rounded-[20px] object-cover">
                            <h4 className="font-bold text-4xl">{category?.name}</h4>
                        </div>
                    ))}
                </div>

                {/* <div className="grid grid-cols-3 gap-4">
                    <div className="p-4 h-[280px] bg-white bg-[url('/imgs/image-11.png')] bg-cover bg-center rounded-[20px] object-cover">
                        <h4 className="font-bold text-4xl">Casual</h4>
                    </div>
                    <div className="p-4 h-[280px] col-span-2 bg-white bg-[url('/imgs/image-12.png')] bg-cover bg-center rounded-[20px] object-cover">
                        <h4 className="font-bold text-4xl">Formal</h4>
                    </div>
                    <div className="p-4 h-[280px] col-span-2 bg-white bg-[url('/imgs/image-13.png')] bg-cover bg-center rounded-[20px] object-cover">
                        <h4 className="font-bold text-4xl">Party</h4>
                    </div>
                    <div className="p-4 h-[280px] bg-white bg-[url('/imgs/image-14.png')] bg-cover bg-center rounded-[20px] object-cover">
                        <h4 className="font-bold text-4xl">Gym</h4>
                    </div>
                </div> */}
            </div>
        </div>
    )
}