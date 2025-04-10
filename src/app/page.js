import Categories from "@/components/layouts/home/Categories";
import CategoriesList from "@/components/layouts/home/CategoriesList";
import Cover from "@/components/layouts/home/Cover";
import Highlight from "@/components/layouts/home/Highlight";
import HighlightProducts from "@/components/layouts/home/HighlightProducts";

import { PRODUCT_TYPES_DICTIONARY } from "@/config/constants";

export default function Home() {
  return (
    <>
      <Cover />
      <Highlight sectionType={PRODUCT_TYPES_DICTIONARY.NEW_ARRIBALS} title="NEW ARRIVALS">
        <HighlightProducts productsType={PRODUCT_TYPES_DICTIONARY.NEW_ARRIBALS}/>
      </Highlight>
      <Highlight sectionType={PRODUCT_TYPES_DICTIONARY.TOP_SELLING} title="TOP SELLING">
        <HighlightProducts productsType={PRODUCT_TYPES_DICTIONARY.TOP_SELLING}/>
      </Highlight>
      <Categories>
        <CategoriesList />
      </Categories>
    </>
  );
}
