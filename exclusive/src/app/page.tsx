"use client";

import Header from "./shared-components/Header";
import Footer from "./shared-components/Footer";
import HeroSection from "./homePage/HeroSection";
import FlashSales from "./homePage/FlashSales";
import Categories from "./homePage/Categories";
import BestSelling from "./homePage/BestSelling";
import PromoBanner from "./homePage/PromoBanner";
import FeaturedProducts from "./homePage/FeaturedProduct";
import NewArrival from "./homePage/NewArrival";
import Services from "./homePage/Services";
import { ArrowUp } from "lucide-react";

export default function Index() {
  return (
    <div>
      <Header />
        <HeroSection />
        <FlashSales />
        <Categories />
        <BestSelling />
        <PromoBanner />
        <FeaturedProducts />
        <NewArrival/>
        <Services />
        <button className="fixed bottom-8 right-8 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-exclusive-red hover:text-white transition-colors">
          <ArrowUp className="w-5 h-5" />
        </button>
      <Footer />
    </div>
  );
}