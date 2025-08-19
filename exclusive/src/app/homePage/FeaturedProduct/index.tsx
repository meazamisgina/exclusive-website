"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "../ProductCard";

export default function FeaturedProducts() {
  const exploreProducts = [
    {
      id: "9",
      name: "Breed Dry Dog Food",
      price: 100,
      rating: 3,
      reviewCount: 35,
      image: "/images/dog fod.png",
    },
    {
      id: "10",
      name: "CANON EOS DSLR Camera",
      price: 360,
      rating: 4,
      reviewCount: 95,
      image: "/images/camera.png",
    },
    {
      id: "11",
      name: "ASUS FHD Gaming Laptop",
      price: 700,
      rating: 5,
      reviewCount: 325,
      image: "/images/laptop.png",
    },
    {
      id: "12",
      name: "Curology Product Set",
      price: 500,
      rating: 4,
      reviewCount: 145,
      image: "/images/productset.png",
    },
    {
      id: "13",
      name: "Kids Electric Car",
      price: 960,
      rating: 5,
      reviewCount: 65,
      image: "/images/car.png",
      isNew: true,
      colors: ["bg-red-500", "bg-black"],
    },
    {
      id: "14",
      name: "Jr. Zoom Soccer Cleats",
      price: 1160,
      rating: 4,
      reviewCount: 35,
      image: "/images/shoe.png",
      colors: ["bg-yellow-400", "bg-black"],
    },
    {
      id: "15",
      name: "GP11 Shooter USB Gamepad",
      price: 660,
      rating: 4,
      reviewCount: 55,
      image: "/images/gamepad.png",
      isNew: true,
      colors: ["bg-black", "bg-red-500"],
    },
    {
      id: "16",
      name: "Quilted Satin Jacket",
      price: 660,
      rating: 4,
      reviewCount: 55,
      image: "/images/black-jacket.png",
      colors: ["bg-green-900", "bg-black"],
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16 border-t border-gray-200">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-5 h-10 rounded bg-[#db4444]"></div>
        <span className="font-semibold text-base text-[#db4444]">Our Products</span>
      </div>
      
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-4xl font-semibold leading-tight text-black">Explore Our Products</h2>
        <div className="flex gap-2">
          <button className="w-11 h-11 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#db4444] hover:text-white transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="w-11 h-11 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#db4444] hover:text-white transition-colors">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {exploreProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      <div className="text-center">
        <button className="bg-[#db4444] text-white font-medium px-12 py-4 rounded hover:bg-red-600 transition-colors">
          View All Products
        </button>
      </div>
    </section>
  );
}