"use client";

import Header from "../shared-components/Header";
import Footer from "../shared-components/Footer";
import Link from "next/link";

export default function Login() {
  return (
    <div>
      <Header />
      <div className="min-h-screen flex pt-14 pb-38">
        <div className="hidden lg:flex lg:w-3/5 relative h-[820px]">
          <img
            src="/images/left-image.png"
            alt="Shopping illustration with phone and cart"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full lg:w-2/5 flex items-center justify-center p-8 lg:p-16 bg-white">
          <div className="w-full max-w-md space-y-8">
            <div className="space-y-2">
              <h1 className="text-4xl font-medium font-inter text-black leading-tight">
                Log in to Exclusive
              </h1>
              <p className="text-base font-poppins font-normal text-black">
                Enter your details below
              </p>
            </div>

            <form className="space-y-10">
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email or Phone Number"
                  className="w-full pb-2 border-0 border-b border-gray-300 focus:border-gray-400 focus:outline-none text-base font-poppins text-black placeholder:text-gray-400 bg-transparent"
                  required
                />
              </div>

              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full pb-2 border-0 border-b border-gray-300 focus:border-gray-400 focus:outline-none text-base font-poppins text-black placeholder:text-gray-400 bg-transparent"
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-[#db4444] text-white font-poppins font-medium text-base px-12 py-4 rounded hover:bg-red-600 transition-colors"
                >
                  Log In
                </button>
                <Link
                  href="/forgot-password"
                  className="text-[#db4444] font-poppins font-normal text-base hover:underline"
                >
                  Forget Password?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
