"use client"

import { createContext, useContext, useState } from "react";

const BannerContext = createContext();

export const BannerProvider = ({children}) => {
    const [isOpenBanner, setBanner] = useState(true);

    const openBanner = () => {
        setBanner(true);
    }
    const closeBanner = () => {
        setBanner(false);
    }

    return (
        <BannerContext.Provider value={{isOpenBanner, openBanner, closeBanner}}>
            {children}
        </BannerContext.Provider>
    )
}

export const useBanner = () => useContext(BannerContext);
