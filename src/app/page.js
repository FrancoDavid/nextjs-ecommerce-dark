import Categories from "@/components/layouts/Categories";
import Cover from "@/components/layouts/Cover";
import Highlight from "@/components/layouts/Highlight";

import RegisterModal from "@/components/modals/Register";

export default function Home() {
  return (
    <>
      <Cover />
      <Highlight />
      <Categories />

      <RegisterModal />
    </>
  );
}
