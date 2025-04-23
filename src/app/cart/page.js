import Breadcrumbs from "@/components/common/Breadcrumbs";

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
            products
        </section>
        <section className="col-span-2">
            totales
        </section>
      </div>
    </>
  );
}