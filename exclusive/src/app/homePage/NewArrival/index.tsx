"use client";

export default function NewArrival() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-5 h-6 bg-[#db4444] rounded"></div>
          <span className="font-semibold text-base text-[#db4444]">Featured</span>
        </div>
        <h2 className="text-4xl font-semibold leading-tight text-black">New Arrival</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="relative bg-black rounded-lg overflow-hidden flex items-end p-8">
          <img
            src="/images/playstation.png"
            alt="PlayStation 5"
            className="absolute inset-0  h-full object-cover opacity-80"
          />
          <div className="relative z-10 text-white">
            <h3 className="text-2xl font-semibold mb-2">PlayStation 5</h3>
            <p className="text-sm mb-4">Black and White version of the PS5<br/>coming out on sale.</p>
            <button className="bg-white text-black px-5 py-2 rounded font-medium hover:bg-[#db4444] hover:text-white transition-colors">
              Shop Now
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative h-60 bg-black rounded-lg overflow-hidden flex items-end p-8 md:col-span-2">
            <img
              src="/images/collection.png"
              alt="Women's Collections"
              className="absolute inset-0 w-full h-full object-cover opacity-70"
            />
            <div className="relative z-10 text-white">
              <h3 className="text-xl font-semibold mb-2">Women&apos;s Collections</h3>
              <p className="text-sm mb-4">Featured woman collections that <br/>give you another vibe.</p>
              <button className="underline underline-offset-4 font-medium hover:text-[#db4444] transition-colors">
                Shop Now
              </button>
            </div>
          </div>
          <div className="relative  bg-black rounded-lg overflow-hidden flex items-end p-8">
            <img
              src="/images/speakers.png"
              alt="Speakers"
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />
            <div className="relative z-10 text-white">
              <h3 className="text-lg font-semibold mb-2">Speakers</h3>
              <p className="text-xs mb-4">Amazon wireless speakers</p>
              <button className="underline underline-offset-4 font-medium hover:text-[#db4444] transition-colors">
                Shop Now
              </button>
            </div>
          </div>

          <div className="relative h-64 bg-black rounded-lg overflow-hidden flex items-end p-8">
            <img
              src="/images/perfume.png"
              alt="Perfume"
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />
            <div className="relative z-10 text-white">
              <h3 className="text-lg font-semibold mb-2">Perfume</h3>
              <p className="text-xs mb-4">GUCCI INTENSE OUD EDP</p>
              <button className="underline underline-offset-4 font-medium hover:text-[#db4444] transition-colors">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}