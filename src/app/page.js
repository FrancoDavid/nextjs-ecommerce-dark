import Categories from "@/components/layouts/home/Categories";
import Cover from "@/components/layouts/home/Cover";
import Highlight from "@/components/layouts/home/Highlight";
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
