import Categories from "@/components/layouts/home/Categories";
import CategoriesList from "@/components/layouts/home/CategoriesList";
import Cover from "@/components/layouts/home/Cover";
import Highlight from "@/components/layouts/home/Highlight";
import HighlightProducts from "@/components/layouts/home/HighlightProducts";

import LoginModal from "@/components/modals/Login";
import RegisterModal from "@/components/modals/Register";

import { PRODUCT_TYPES } from "@/config/constants";

export default function Home() {
  return (
    <>
      <Cover />
      <Highlight sectionType={PRODUCT_TYPES.NEW_ARRIBALS} title="NEW ARRIVALS">
        <HighlightProducts productsType={PRODUCT_TYPES.NEW_ARRIBALS}/>
      </Highlight>
      <Highlight sectionType={PRODUCT_TYPES.TOP_SELLING} title="TOP SELLING">
        <HighlightProducts productsType={PRODUCT_TYPES.TOP_SELLING}/>
      </Highlight>
      <Categories>
        <CategoriesList />
      </Categories>

      <RegisterModal />
      <LoginModal />
    </>
  );
}
