"use client"

import { createContext, useContext, useRef } from "react";

const ScrollContext = createContext();

export const ScrollProvider = ({children}) => {
    const highLighNewArrivals = useRef(null);
    const highLighTopSelling = useRef(null);
    const categories = useRef(null);

    return (
        <ScrollContext.Provider value={{highLighNewArrivals, highLighTopSelling, categories}}>
            {children}
        </ScrollContext.Provider>
    )
}

export const useScroll = () => useContext(ScrollContext);
