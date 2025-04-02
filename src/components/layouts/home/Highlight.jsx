import HighlightArribals from "./HighlightArribals";
import HighlightTopSeller from "./HighlightTopSeller";

// import { useScroll } from "@/contexts/ScrollView";

export default function Highlight() {
    // const { highLighNewArrivals, highLighTopSelling } = useScroll();

    return (
        <>
            <div className="grid grid-cols-1 py-[75px]">
              <HighlightArribals />
            </div>
            <div className="grid grid-cols-1 py-[75px]">
              <HighlightTopSeller />
            </div>
        </>

    )
}