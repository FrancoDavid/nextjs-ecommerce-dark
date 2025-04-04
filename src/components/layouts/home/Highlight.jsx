"use client";

import { useScroll } from "@/contexts/ScrollView";

export default function Highlight({ children, sectionType, title }) {
  const { highLighNewArrivals, highLighTopSelling } = useScroll();

  const sectionsRef = {
    NEW_ARRIBALS: highLighNewArrivals,
    TOP_SELLING: highLighTopSelling,
  }

  return (
    <div className="grid grid-cols-1 py-[75px]" ref={sectionsRef[sectionType]}>
      <div className="flex justify-center items-center">
        <h2 className="text-black font-bold text-5xl">{title}</h2>
      </div>
      {children}
    </div>
  )
}