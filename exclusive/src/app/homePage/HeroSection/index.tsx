"use client";

import { ChevronRight, ArrowRight } from "lucide-react";

export default function HeroSection() {
  const heroSlide = {
    title: "iPhone 14 Series",
    subtitle: "Up to 10% off Voucher",
    image: "/images/hero-image.png",
    cta: "Shop Now",
  };

  const categories = [
    { name: "Woman's Fashion", hasSubmenu: true },
    { name: "Men's Fashion", hasSubmenu: true },
    { name: "Electronics" },
    { name: "Home & Lifestyle" },
    { name: "Medicine" },
    { name: "Sports & Outdoor" },
    { name: "Baby's & Toys" },
    { name: "Groceries & Pets" },
    { name: "Health & Beauty" },
  ];

  return (
    <section className="container mx-auto px-4 py-10">
      <div className="flex gap-16">
        <div className="hidden lg:block w-56">
          <div className="space-y-4 pr-4 border-r border-gray-300">
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex items-center justify-between hover:text-red-500 cursor-pointer py-1 transition-colors duration-200"
              >
                <span className="text-base">{category.name}</span>
                {category.hasSubmenu && <ChevronRight className="w-4 h-4" />}
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 relative h-[410px] bg-black rounded overflow-hidden">
          <div className="relative h-full flex items-center text-white px-20 py-12 justify-between">
            <div className="max-w-md">
              <div className="flex items-center gap-6 mb-5">
                <img src="/images/apple.png" alt="Apple logo" />
                <span className="text-base">{heroSlide.title}</span>
              </div>

              <h1 className="text-5xl font-semibold mb-8 leading-tight">{heroSlide.subtitle}</h1>

              <button className="flex items-center gap-2 text-white hover:text-gray-300 underline underline-offset-8 transition-colors duration-200">
                {heroSlide.cta}
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>

            <div className="relative flex-shrink-0">
              <img
                src={heroSlide.image}
                alt="iPhone"
                className="h-80 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
