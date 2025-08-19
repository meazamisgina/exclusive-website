"use client";

export default function PromoBanner() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="bg-black rounded-lg overflow-hidden relative">
        <div className="flex items-center justify-between p-16 text-white">
          
          <div className="space-y-8 max-w-lg px-12">
            <span className="font-semibold text-base text-[#00FF66]">Categories</span>
            <h3 className="text-5xl font-semibold leading-tight font-inter">
              Enhance Your<br />Music Experience
            </h3>
            <div className="flex gap-6">
              <div className="w-16 h-16 bg-white rounded-full flex flex-col items-center justify-center text-black">
                <div className="font-semibold text-base font-poppins">23</div>
                <div className="text-xs font-poppins">Hours</div>
              </div>
              <div className="w-16 h-16 bg-white rounded-full flex flex-col items-center justify-center text-black">
                <div className="font-semibold text-base font-poppins">05</div>
                <div className="text-xs font-poppins">Days</div>
              </div>
              <div className="w-16 h-16 bg-white rounded-full flex flex-col items-center justify-center text-black">
                <div className="font-semibold text-base font-poppins">59</div>
                <div className="text-xs font-poppins">Minutes</div>
              </div>
              <div className="w-16 h-16 bg-white rounded-full flex flex-col items-center justify-center text-black">
                <div className="font-semibold text-base font-poppins">35</div>
                <div className="text-xs font-poppins">Seconds</div>
              </div>
            </div>
            <button className="bg-[#00FF66] text-white font-medium px-12 py-4 rounded hover:bg-green-600 transition-colors font-poppins">
              Buy Now!
            </button>
          </div>

          <div className="ml-8 flex-shrink-0 pr-12">
            <img
              src="/images/speaker.png"
              alt="Music"
              className="w-full h-auto object-contain rounded"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
}
