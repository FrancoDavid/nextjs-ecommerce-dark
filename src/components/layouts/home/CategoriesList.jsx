import CardBackground from "@/components/common/CardBackground";
import { getCategories } from "@/services/Category"

export default async function CategoriesList() {
    const categoriesResponse = await getCategories();

    return (
        <div className="grid grid-cols-3 gap-4">
            {categoriesResponse?.data?.map((category, index) => {
                const shouldSpanTwo = index % 4 === 1 || index % 4 === 2;
                return (
                    // <div
                    //     key={index}
                    //     className={`p-4 h-[280px] bg-white bg-[url('/imgs/image-11.png')] bg-cover bg-center rounded-[20px] object-cover 
                    //         ${shouldSpanTwo ? "col-span-2" : ""}`}
                    // >
                    //     <h4 className="font-bold text-4xl">{category.name}</h4>
                    // </div>
                    <CardBackground category={category} key={index} withSpan={shouldSpanTwo}/>
                );
            })}
        </div>
    )
}