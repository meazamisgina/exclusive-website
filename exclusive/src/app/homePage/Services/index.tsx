"use client";

import { Truck, Headset, CheckCircle2 } from "lucide-react";

export default function Services() {
  return (
    <section className="container mx-auto px-4 py-18 pb-30">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        <div className="text-center space-y-5">
          <div className="w-20 h-20 rounded-full mx-auto flex items-center justify-center bg-gray-200 border-4 border-gray-300">
            <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center">
              <Truck className="w-8 h-8 text-white" strokeWidth={1.5} />
            </div>
          </div>
          <h3 className="text-lg font-poppins font-semibold tracking-wide">FREE AND FAST DELIVERY</h3>
          <p className="text-sm font-poppins text-gray-700">Free delivery for all orders over $140</p>
        </div>

        <div className="text-center space-y-5">
          <div className="w-20 h-20 rounded-full mx-auto flex items-center justify-center bg-gray-200 border-4 border-gray-300">
            <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center">
              <Headset className="w-8 h-8 text-white" strokeWidth={1.5} />
            </div>
          </div>
          <h3 className="text-lg font-poppins font-semibold tracking-wide">24/7 CUSTOMER SERVICE</h3>
          <p className="text-sm font-poppins text-gray-700">Friendly 24/7 customer support</p>
        </div>

        <div className="text-center space-y-5">
          <div className="w-20 h-20 rounded-full mx-auto flex items-center justify-center bg-gray-200 border-4 border-gray-300">
            <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-white" strokeWidth={1.5} />
            </div>
          </div>
          <h3 className="text-lg font-poppins font-semibold tracking-wide">MONEY BACK GUARANTEE</h3>
          <p className="text-sm font-poppins text-gray-700">We return money within 30 days</p>
        </div>
        
      </div>
    </section>
  );
}
