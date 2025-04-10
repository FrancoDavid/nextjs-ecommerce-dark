import Breadcrumbs from "@/components/common/Breadcrumbs";

import Filters from "@/components/layouts/Products/Filters";
import Grid from "@/components/layouts/Products/Grid";

export default async function ProductsPage({ searchParams }) {

  const breadcrumbs = [
      { name: "Home / ", href: "/" },
      { name: "Products", href: "/products" },
  ]

  const search = {
    category: searchParams?.categoryName || "",
    page: searchParams?.page || 1,
    size: searchParams?.size || 10,
  }

  return (
    <>
      <Breadcrumbs breads={breadcrumbs} />
      <div className="grid grid-cols-4 gap-4 px-[100px] py-[24px]">
        <section className="col-span-1">
          <Filters />
        </section>
        <section className="col-span-3">
          <Grid search={search}/>
        </section>
      </div>
    </>
  );
}