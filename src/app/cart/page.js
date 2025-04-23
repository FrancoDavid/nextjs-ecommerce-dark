import Breadcrumbs from "@/components/common/Breadcrumbs";
import CartContent from "@/components/layouts/cart/CartContent";

export default async function CartPage() {

    const breadcrumbs = [
        { name: "Home / ", href: "/" },
        { name: "Cart ", href: "" },
    ]

    return (
        <>
            <Breadcrumbs breads={breadcrumbs} />
            <div className="grid grid-cols-5 gap-4 px-[100px] py-[24px]">
                <section className="col-span-5">
                    <h2 className="font-bold color-black text-[40px]">
                        Your cart
                    </h2>
                </section>
                <section className="col-span-3">
                   <CartContent />
                </section>
                <section className="col-span-2 rounded-lg border border-slate-200 bg-white p-4">
                    totales
                </section>
            </div>
        </>
    );
}