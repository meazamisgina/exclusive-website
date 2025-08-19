"use client";

import Header from "../shared-components/Header";
import Footer from "../shared-components/Footer";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

export default function SignUp() {
  return (
    <div>
      <Header />
      <div className="min-h-screen flex pb-35 pt-16">
        <div className="hidden lg:flex lg:w-3/5 relative h-[820px]">
          <img
            src="images/left-image.png"
            alt="Shopping image with phone and cart"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full lg:w-2/5 flex items-center justify-center p-8 lg:p-16 bg-white">
          <div className="w-full max-w-md space-y-8">
            <div className="space-y-2">
              <h1 className="text-4xl font-inter font-medium text-black leading-tight ">
                Create an account
              </h1>
              <p className="text-base font-poppins font-normal text-black ">
                Enter your details below
              </p>
            </div>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full pb-2 border-0 border-b border-gray-300 focus:border-gray-400 focus:outline-none text-base font-poppins text-black placeholder:text-gray-400 bg-transparent"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email or Phone Number"
                  className="w-full pb-2 border-0 border-b border-gray-300 focus:border-gray-400 focus:outline-none text-base font-poppins text-black placeholder:text-gray-400 bg-transparent pt-5"
                  required
                />
              </div>

              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full pb-2 border-0 border-b border-gray-300 focus:border-gray-400 focus:outline-none text-base font-poppins text-black placeholder:text-gray-400 bg-transparent pt-5"
                  required
                />
              </div>

              <div className="space-y-4 pt-4">
                <button
                  type="submit"
                  className="w-full bg-[#db4444] text-white font-poppins font-medium text-base py-4 rounded hover:bg-red-600 transition-colors"
                >
                  Create Account
                </button>

                <button
                  type="button"
                  className="w-full border border-gray-300 text-black font-poppins font-normal text-base py-4 rounded hover:bg-gray-50 transition-colors flex items-center justify-center gap-3"
                >
                  <FcGoogle className="w-6 h-6" /> Sign up with Google
                </button>
              </div>
            </form>

            <div className="text-center ">
              <span className="text-gray-500 font-normal text-base">
                Already have account?{" "}
                <Link
                  href="/loginPage"
                  className="text-gray-700 font-medium underline hover:no-underline"
                >
                  Log In
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
