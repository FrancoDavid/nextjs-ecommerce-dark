import Categories from "@/components/layouts/Categories";
import Cover from "@/components/layouts/Cover";
import Highlight from "@/components/layouts/Highlight";
import LoginModal from "@/components/modals/Login";

import RegisterModal from "@/components/modals/Register";

export default function Home() {
  return (
    <>
      <Cover />
      <Highlight />
      <Categories />

      <RegisterModal />
      <LoginModal />
    </>
  );
}
