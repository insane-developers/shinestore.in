"use client";
import React from "react";
import { ArrowRight, MoreHorizontal } from "lucide-react";

const Products = () => {
  return (
    <section id="products" className="py-20 bg-[#323232] w-full">
      <div className="container mx-auto px-4 md:px-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <h2
              className="text-5xl md:text-6xl font-extrabold text-[#1CE594] mb-4 tracking-tight"
              style={{ fontFamily: "Montserrat" }}
            >
              Products
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              From industrial-grade power to refined home care, discover hygiene
              solutions engineered for peak performance.
            </p>
          </div>

          <button className="flex items-center gap-2 text-[#1CE594] font-bold text-sm uppercase tracking-wider hover:text-white transition-colors">
            EXPLORE FULL RANGE
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Top Left - Industrial Products (spans 2 columns on desktop) */}
          <div className="md:col-span-2 group relative rounded-lg overflow-hidden h-[350px] md:h-[450px] bg-black">
            <img
              src="/industrial-proudtcs.jpg"
              alt="Industrial Products"
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              onError={(e) => {
                e.currentTarget.src =
                  "https://images.unsplash.com/photo-1584820927498-cafe8c1c7694?q=80&w=1000";
              }}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

            <div className="absolute bottom-0 left-0 p-8 md:p-10 w-full">
              <span className="inline-block bg-[#1CE594] text-black text-xs font-bold px-3 py-1 mb-4 uppercase tracking-wider">
                Heavy Duty
              </span>
              <h3
                className="text-4xl md:text-5xl font-bold text-white mb-3"
                style={{ fontFamily: "Montserrat" }}
              >
                Industrial Products
              </h3>
              <p className="text-gray-300 max-w-md text-sm md:text-base">
                Precision-engineered tools and chemicals for manufacturing
                plants and high-traffic facilities.
              </p>
            </div>
          </div>

          {/* Top Right - Scrubbers */}
          <div className="md:col-span-1 group relative rounded-lg overflow-hidden h-[350px] md:h-[450px] bg-[#1a2c33]">
            <img
              src="/scrubbing-brush.jpeg"
              alt="Scrubbers"
              className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
              onError={(e) => {
                e.currentTarget.src =
                  "https://images.unsplash.com/photo-1527576539890-dfa815648363?q=80&w=800";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="text-xl font-medium text-white border-b-2 border-[#1CE594] pb-1 inline-block">
                Scrubbers
              </h3>
            </div>
          </div>

          {/* Bottom Left - Bathworks */}
          <div className="md:col-span-1 group relative rounded-lg overflow-hidden h-[300px] md:h-[350px] bg-[#d5dbdf]">
            <img
              src="/bathworks.jpg"
              alt="Bathworks"
              className="w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-700"
              onError={(e) => {
                e.currentTarget.src =
                  "https://images.unsplash.com/photo-1584820927498-cafe8c1c7694?q=80&w=800";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-xl font-bold text-white mb-1">Bathworks</h3>
              <p className="text-gray-200 text-sm">
                Premium residential hygiene
              </p>
            </div>
          </div>

          {/* Bottom Middle - Waste Solutions */}
          <div className="md:col-span-1 group relative rounded-lg overflow-hidden h-[300px] md:h-[350px] bg-black">
            <img
              src="/garbage-rolls.jpeg"
              alt="Waste Solutions"
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              onError={(e) => {
                e.currentTarget.src =
                  "https://images.unsplash.com/photo-1605600000000-000000000000?q=80&w=800";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>

            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-xl font-medium text-white">
                Waste Solutions
              </h3>
            </div>
          </div>

          {/* Bottom Right - And more */}
          <div className="md:col-span-1 relative rounded-lg overflow-hidden h-[300px] md:h-[350px] bg-[#1CE594] flex flex-col items-center justify-center p-8 text-center hover:bg-[#15d185] transition-colors">
            <MoreHorizontal size={48} className="text-[#034A30] mb-4" />
            <h3
              className="text-3xl font-bold text-[#034A30] mb-3 leading-tight"
              style={{ fontFamily: "Montserrat" }}
            >
              and more..
            </h3>
            <p className="text-[#056E47] font-medium text-sm max-w-[200px]">
              Custom formulations & bespoke tools
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
