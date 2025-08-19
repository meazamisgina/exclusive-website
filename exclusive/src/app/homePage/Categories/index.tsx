"use client";
import {
  ChevronLeft,
  ChevronRight,
  Smartphone,
  Laptop,
  Watch,
  Camera,
  Headphones,
  Gamepad,
} from "lucide-react";

export default function Categories() {
  const browseCategories = [
    { name: "Phones", icon: <Smartphone className="w-12 h-12 mx-auto mb-4" /> },
    { name: "Computers", icon: <Laptop className="w-12 h-12 mx-auto mb-4" /> },
    { name: "SmartWatch", icon: <Watch className="w-12 h-12 mx-auto mb-4" /> },
    { name: "Camera", icon: <Camera className="w-12 h-12 mx-auto mb-4" /> },
    { name: "HeadPhones", icon: <Headphones className="w-12 h-12 mx-auto mb-4" /> },
    { name: "Gaming", icon: <Gamepad className="w-12 h-12 mx-auto mb-4" /> },
  ];

  return (
    <section className="container mx-auto px-4 py-16 border-t border-gray-200">
      <div className="flex items-center gap-4 mb-6">
        <div
          className="w-5 h-10 rounded"
          style={{ backgroundColor: "#db4444" }}
        ></div>
        <span className="font-semibold text-base text-[#db4444]">Categories</span>
      </div>

      <div className="flex items-center justify-between mb-10">
        <h2 className="text-4xl font-semibold leading-tight text-black">
          Browse By Category
        </h2>
        <div className="flex gap-2">
          <button className="w-11 h-11 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#db4444] hover:text-white transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="w-11 h-11 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#db4444] hover:text-white transition-colors">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {browseCategories.map((category, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg p-6 text-center cursor-pointer transition-colors group hover:bg-[#db4444] hover:border-[#db4444] hover:text-white"
          >
            <div className="text-4xl mb-4">{category.icon}</div>
            <div className="font-normal text-base">{category.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
