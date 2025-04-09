import Breadcrumbs from "@/components/common/Breadcrumbs";

export default function ProductsPage() {

  const breadcrumbs = [
      { name: "Home / ", href: "/" },
      { name: "Products", href: "/products" },
  ]

  return (
    <>
      <Breadcrumbs breads={breadcrumbs} />
    </>
  );
}