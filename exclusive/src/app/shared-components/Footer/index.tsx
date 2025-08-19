"use client";

import { Send, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Exclusive</h3>
            <h4 className="text-lg">Subscribe</h4>
            <p className="text-gray-300 text-sm">Get 10% off your first order</p>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border border-white rounded px-4 py-2 pr-12 w-full text-sm focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Send className="w-5 h-5 cursor-pointer text-white" />
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>111 Bijoy sarani, Dhaka,<br />DH 1515, Bangladesh.</p>
              <p>exclusive@gmail.com</p>
              <p>+88015-88888-9999</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Account</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p className="cursor-pointer hover:text-white">My Account</p>
              <p className="cursor-pointer hover:text-white">Login / Register</p>
              <p className="cursor-pointer hover:text-white">Cart</p>
              <p className="cursor-pointer hover:text-white">Wishlist</p>
              <p className="cursor-pointer hover:text-white">Shop</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Link</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p className="cursor-pointer hover:text-white">Privacy Policy</p>
              <p className="cursor-pointer hover:text-white">Terms Of Use</p>
              <p className="cursor-pointer hover:text-white">FAQ</p>
              <p className="cursor-pointer hover:text-white">Contact</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Download App</h3>
            <p className="text-xs text-gray-300">Save $3 with App New User Only</p>
            <div className="flex gap-2">
              <img
                src="/images/Qr Code.png"
                alt="QR Code"
                className="w-20 h-20 bg-white rounded"
              />
              <div className="flex flex-col gap-2">
                <a href="#" target="_blank" >
                  <img
                    src="/images/GooglePlay.png"
                    alt="Get it on Google Play"
                    className="h-8"
                  />
                </a>
                <a href="#" target="_blank" >
                  <img
                    src="/images/download-appstore.png"
                    alt="Download on the App Store"
                    className="h-8"
                  />
                </a>
              </div>
            </div>
            <div className="flex gap-4 pt-2">
              <Facebook className="w-5 h-5 cursor-pointer hover:text-gray-300" />
              <Twitter className="w-5 h-5 cursor-pointer hover:text-gray-300" />
              <Instagram className="w-5 h-5 cursor-pointer hover:text-gray-300" />
              <Linkedin className="w-5 h-5 cursor-pointer hover:text-gray-300" />
            </div>
          </div>
        </div>

        <div className="w-full border-t border-gray-800 mt-12"></div>
        <div className="pt-4 text-center text-sm text-gray-500">
          © Copyright Rimel 2022. All rights reserved
        </div>
      </div>
    </footer>
  );
}
