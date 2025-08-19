"use client";
import ProductCard from "../ProductCard";

export default function BestSelling() {
  const bestSellingProducts = [
    {
      id: "5",
      name: "The north coat",
      price: 260,
      originalPrice: 360,
      rating: 5,
      reviewCount: 65,
      image: "/images/jacket.png",
    },
    {
      id: "6",
      name: "Gucci duffle bag",
      price: 960,
      originalPrice: 1160,
      rating: 4.5,
      reviewCount: 65,
      image: "/images/bag.png",
    },
    {
      id: "7",
      name: "RGB liquid CPU Cooler",
      price: 160,
      originalPrice: 170,
      rating: 4.5,
      reviewCount: 65,
      image: "/images/rgb.png",
    },
    {
      id: "8",
      name: "Small BookShelf",
      price: 360,
      rating: 5,
      reviewCount: 65,
      image: "/images/bookshelf.png",
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16 border-t border-gray-200">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-5 h-10 rounded bg-[#db4444]"></div>
        <span className="font-semibold text-base text-[#db4444]">This Month</span>
      </div>
      
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-4xl font-semibold leading-tight text-black">Best Selling Products</h2>
        <button className="bg-[#db4444] text-white font-medium px-12 py-4 rounded hover:bg-red-600 transition-colors">
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {bestSellingProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}