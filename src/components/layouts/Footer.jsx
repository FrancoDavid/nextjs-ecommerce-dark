"use client"

export default function Footer() {
    return (
        <footer className="bg-gray-200 text-gray-700 botton-0 w-full h-full p-4">
            <div className="container mx-auto flex justify-start">
                <div className="p-3">
                    <h1 className="text-xl font-bold text-black cursor-pointer mb-4">DarkShop</h1>
                    <p className="text-sm">We have clothes that suits your style and </p>
                    <p className="text-sm mb-4">which you’re proud to wear. From women to men.</p>

                    <span className="text-xs">© 2025 DarkShop, All rights reserved</span>
                </div>
            </div>
        </footer>
    )
}