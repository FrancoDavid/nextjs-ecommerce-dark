"use client"

import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { UserCircleIcon } from '@heroicons/react/24/outline';

import { useScroll } from "@/contexts/ScrollView";
import { useBanner } from '@/contexts/Banner';

import useRegisterModalStore from "@/stores/useRegisterModal";

export default function Header() {
    const { highLighNewArrivals, highLighTopSelling, categories } = useScroll();
    const { isOpenBanner } = useBanner();

    const { open } = useRegisterModalStore();

    const handleScrollToNewArrivals = () => {
        highLighNewArrivals.current.scrollIntoView({ behavior: 'smooth' });
    }
    const handleScrollToTopSelling = () => {
        highLighTopSelling.current.scrollIntoView({ behavior: 'smooth' });
    }
    const handleScrollToCategories = () => {
        categories.current.scrollIntoView({ behavior: 'smooth' });
    }
    const handleOpenRegisterModal = () => {
        open();
    }

    return (
        <>
            {isOpenBanner && (
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
                        <a className="hover:text-grey-700 cursor-pointer">Home</a>
                        <a className="hover:text-grey-700 cursor-pointer" onClick={handleScrollToNewArrivals}>New Arribal</a>
                        <a className="hover:text-grey-700 cursor-pointer" onClick={handleScrollToTopSelling}>Top Seller</a>
                        <a className="hover:text-grey-700 cursor-pointer" onClick={handleScrollToCategories}>Categories</a>
                        <a className="hover:text-grey-700 cursor-pointer">Shop</a>
                    </nav>
                    <div className="mx-8">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div className="flex items-center space-x-4">
                        <a className="cursor-pointer"><ShoppingCartIcon className="h-6 w-6 text-gray-700" /></a>
                        <a className="cursor-pointer"><UserCircleIcon className="h-6 w-6 text-gray-700" /></a>
                    </div>
                </div>
            </header>
        </>

    )
}