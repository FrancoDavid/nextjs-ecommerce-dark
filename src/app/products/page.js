import Breadcrumbs from "@/components/common/Breadcrumbs";

import Filters from "@/components/layouts/Products/Filters";
import Grid from "@/components/layouts/Products/Grid";

export default function ProductsPage() {

  const breadcrumbs = [
      { name: "Home / ", href: "/" },
      { name: "Products", href: "/products" },
  ]

  return (
    <>
      <Breadcrumbs breads={breadcrumbs} />
      <div className="grid grid-cols-4 gap-4 px-[100px] py-[24px]">
        <section className="col-span-1">
          <Filters />
        </section>
        <section className="col-span-3">
          <Grid />
        </section>
      </div>
    </>
  );
}