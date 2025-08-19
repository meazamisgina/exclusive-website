"use client";

import Link from "next/link";
import { FiShoppingCart, FiHeart, FiSearch, FiChevronDown } from "react-icons/fi";

export default function Header() {
  return (
    <div>
      <div className="bg-black text-white text-mm py-3">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex-1 text-center">
            <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
              <span className="underline font-semibold cursor-pointer hover:no-underline">ShopNow</span>
            </p>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-mm">English</span>
            <FiChevronDown className="w-4 h-4" />
          </div>
        </div>
      </div>

      <header className="bg-amber-50 border-b border-gray-200 py-4 pt-9">
        <div className="max-w-7xl mx-auto px-1">
          <nav className="flex justify-between items-center">
            <div>
              <Link href="/"><span className="font-semibold text-2xl cursor-pointer text-black"> Exclusive </span></Link>
            </div>
            <ul className="hidden md:flex gap-12 list-none m-0 p-0">
              <li><Link href="/" className="no-underline hover:underline">Home</Link></li>
              <li> <Link href="/contact" className="no-underline hover:underline">Contact</Link></li>
              <li><Link href="/about" className="no-underline hover:underline">About</Link></li>
              <li><Link href="/signupPage" className="no-underline hover:underline">Sign Up</Link></li>
            </ul>
            <div className="flex items-center gap-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="bg-gray-200 border-none rounded px-6 py-2 pr-12 text-sm w-70 outline-none  text-black placeholder:text-gray-500 focus:ring-1 focus:ring-gray-300"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer">
                  <FiSearch className="w-6 h-6 text-gray-400" />
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button className="bg-transparent border-none cursor-pointer p-0">
                  <FiHeart className="w-7 h-7" />
                </button>
                <button className="bg-transparent border-none cursor-pointer p-0">
                  <FiShoppingCart className="w-7 h-7" />
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}