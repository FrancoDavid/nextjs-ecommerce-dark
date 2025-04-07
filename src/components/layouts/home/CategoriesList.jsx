import CardBackground from "@/components/common/CardBackground";
import { getCategories } from "@/services/Category"

export default async function CategoriesList() {
    const categoriesResponse = await getCategories();

    return (
        <div className="grid grid-cols-3 gap-4">
            {categoriesResponse?.data?.map((category, index) => {
                return (
                    <CardBackground category={category} index={index} />
                );
            })}
        </div>
    )
}