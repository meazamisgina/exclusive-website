"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "../ProductCard";

export default function FlashSales() {
  const flashSaleProducts = [
    {
      id: "1",
      name: "HAVIT HV-G92 Gamepad",
      price: 120,
      originalPrice: 160,
      discount: 40,
      rating: 5,
      reviewCount: 88,
      image: "/images/gaming.png",
    },
    {
      id: "2",
      name: "AK-900 Wired Keyboard",
      price: 960,
      originalPrice: 1160,
      discount: 35,
      rating: 4,
      reviewCount: 75,
      image: "/images/keyboard.png", 
    },
    {
      id: "3",
      name: "IPS LCD Gaming Monitor",
      price: 370,
      originalPrice: 400,
      discount: 30,
      rating: 5,
      reviewCount: 99,
      image: "/images/tv.png",
    },
    {
      id: "4",
      name: "S-Series Comfort Chair",
      price: 375,
      originalPrice: 400,
      discount: 25,
      rating: 4.5,
      reviewCount: 99,
      image: "/images/chair.png",
      colors: ["#ff0000", "#000000"],
    },
    {
      id: "5",
      name: "S-Series Comfort Chair",
      price: 375,
      originalPrice: 400,
      discount: 26,
      rating: 4.5,
      reviewCount: 99,
      image: "/images/chair.png",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex items-center gap-4 mb-5">
        <div className="w-5 h-10 bg-red-500 rounded" />
        <span className="text-red-500 font-semibold text-base">Today&apos;s</span>
      </div>

      <div className="flex items-end justify-between mb-10">
        <div className="flex items-end gap-20">
          <h2 className="text-4xl font-semibold text-black">Flash Sales</h2>
          <div className="flex items-center gap-4 text-black">
            <div className="text-center">
              <div className="text-xs font-medium text-black">Days</div>
              <div className="text-3xl font-bold text-black">03</div>
            </div>
            <span className="text-red-500 text-3xl font-bold pb-1">:</span>
            <div className="text-center">
              <div className="text-xs font-medium text-black">Hours</div>
              <div className="text-3xl font-bold text-black">23</div>
            </div>
            <span className="text-red-500 text-3xl font-bold pb-1">:</span>
            <div className="text-center">
              <div className="text-xs font-medium text-black">Minutes</div>
              <div className="text-3xl font-bold text-black">19</div>
            </div>
            <span className="text-red-500 text-3xl font-bold pb-1">:</span>
            <div className="text-center">
              <div className="text-xs font-medium text-black">Seconds</div>
              <div className="text-3xl font-bold text-black">56</div>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <button className="w-11 h-11 bg-gray-100 rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="w-11 h-11 bg-gray-100 rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-12">
        {flashSaleProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      <div className="text-center">
        <button className="bg-red-500 text-white font-medium px-12 py-4 rounded hover:bg-red-600 transition-colors">
          View All Products
        </button>
      </div>
    </section>
  );
}
