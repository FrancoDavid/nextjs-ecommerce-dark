"use client"

import { useEffect, useState, useRef } from "react";
import { toast } from "sonner";
import Link from "next/link";

import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { UserCircleIcon } from '@heroicons/react/24/outline';

import { useScroll } from "@/contexts/ScrollView";
import { useBanner } from '@/contexts/Banner';

import useRegisterModalStore from "@/stores/User/useRegisterModal";
import useLoginModalStore from "@/stores/User/useLoginModal";
import useUserStore from '@/stores/User/useUser';
import useProfileModalStore from "@/stores/User/useProfileModal";

import { SIZE_PAGES_DICTIONARY, PAGES_DICTIONARY } from "@/config/constants";

export default function Header() {
    const { highLighNewArrivals, highLighTopSelling, categories } = useScroll();
    const { isOpenBanner } = useBanner();

    const { open: openRegisterModal } = useRegisterModalStore();
    const { open: openLoginModal } = useLoginModalStore();
    const { user, logout } = useUserStore();
    const { open: openProfileModal } = useProfileModalStore();

    const [isOpenDropdownUser, setIsOpenDropdownUser] = useState(false);

    const userDropdownRef = useRef();
    const isLoggedIn = !!user;

    const handleScrollToNewArrivals = () => {
        highLighNewArrivals.current.scrollIntoView({ behavior: 'smooth' });
    }
    const handleScrollToTopSelling = () => {
        highLighTopSelling.current.scrollIntoView({ behavior: 'smooth' });
    }
    const handleScrollToCategories = () => {
        categories.current.scrollIntoView({ behavior: 'smooth' });
    }
    const handleOpenRegisterModal = () => openRegisterModal();
    const handleOpenLoginModal = () => openLoginModal();
    const handleOpenUserDropdown = () => setIsOpenDropdownUser(!isOpenDropdownUser);
    const handleLogout = () => {
        logout();
        toast.success("User logged out!");
    }
    const handleOpenProfileModal = () => {
        openProfileModal();
    }


    useEffect(() => {
        const handleUserDropdownClickOut = (event) => {
            if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
                setIsOpenDropdownUser(false);
            }
        }

        document.addEventListener("mousedown", handleUserDropdownClickOut)

        return () => document.removeEventListener("mousedown", handleUserDropdownClickOut);
    }, [])

    return (
        <>
            {isOpenBanner && !isLoggedIn && (
                <header className="bg-black stycky top-0 z-50">
                    <div className="container mx-auto flex justify-center items-center p-2">
                        <span className="text-white text-sm">Sign up and get 20% off to your first order.
                            <strong className="cursor-pointer" onClick={handleOpenRegisterModal}> Sign Up Now</strong>
                        </span>
                    </div>
                </header>
            )}
            <header className="bg-white shadow-md stycky top-0 z-50">
                <div className="container mx-auto flex justify-between items-center p-4">
                    <a className="text-3xl font-bold text-black cursor-pointer">DarkShop</a>
                    <nav className="flex items-center space-x-6">
                        <Link className="hover:text-grey-700 cursor-pointer" href="/">Home</Link>
                        <a className="hover:text-grey-700 cursor-pointer" onClick={handleScrollToNewArrivals}>New Arribal</a>
                        <a className="hover:text-grey-700 cursor-pointer" onClick={handleScrollToTopSelling}>Top Seller</a>
                        <a className="hover:text-grey-700 cursor-pointer" onClick={handleScrollToCategories}>Categories</a>
                        <Link className="hover:text-grey-700 cursor-pointer"
                            href={`/products?page=${PAGES_DICTIONARY.INIT}&size=${SIZE_PAGES_DICTIONARY.MEDIUM}`}>Shop</Link>
                    </nav>
                    <div className="flex items-center space-x-4">
                        <a className="cursor-pointer"><ShoppingCartIcon className="h-6 w-6 text-gray-700" /></a>
                        <div className="relative inline-block text-left" ref={userDropdownRef}>
                            <div>
                                <button type="button"
                                    className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50"
                                    id="menu-button" aria-expanded="true" aria-haspopup="true" onClick={handleOpenUserDropdown}>
                                    <UserCircleIcon className="h-6 w-6 text-gray-700" />
                                    <svg className="-mr-1 size-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                        <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                            {isOpenDropdownUser && (
                                <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                                    <div className="py-1" role="none">
                                        {!isLoggedIn && <a className="block px-4 py-2 text-sm text-gray-700 cursor-pointer" role="menuitem" tabIndex="-1" id="menu-item-0" onClick={handleOpenLoginModal}>Log in</a>}
                                        {isLoggedIn && <a className="block px-4 py-2 text-sm text-gray-700 cursor-pointer" role="menuitem" tabIndex="-1" id="menu-item-1" onClick={handleOpenProfileModal}>Profile</a>}
                                    </div>
                                    {isLoggedIn && (
                                        <div className="py-1" role="none">
                                            <a className="block px-4 py-2 text-sm text-gray-700 cursor-pointer" role="menuitem" tabIndex="-1" id="menu-item-6" onClick={handleLogout}>Log out</a>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </header>
        </>

    )
}