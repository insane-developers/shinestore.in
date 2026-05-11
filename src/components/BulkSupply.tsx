import React from "react";
import { Briefcase, CheckCircle2 } from "lucide-react";

const BulkSupply = () => {
  const benefits = [
    "Custom Formulations",
    "Direct Factory Shipping",
    "GST Ready Invoicing",
    "Priority Support",
  ];

  return (
    <section className="py-20 bg-[#F8F9F9] px-4 md:px-12">
      <div className="container mx-auto">
        <div className="relative bg-[#08734A] rounded-[2rem] p-8 md:p-14 lg:p-20 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-[80%] h-full bg-white opacity-[0.03] transform skew-x-12 translate-x-32 pointer-events-none" />

          {/* Left Content */}
          <div className="relative z-10 max-w-2xl text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase backdrop-blur-sm mb-6 border border-white/10">
              <Briefcase size={16} />
              B2B & INSTITUTIONAL
            </div>

            <h2
              className="text-4xl lg:text-6xl font-bold mb-6"
              style={{ fontFamily: "Montserrat", fontWeight: "800" }}
            >
              Bulk Supply Solutions
            </h2>

            <p className="text-green-100 text-lg mb-10 leading-relaxed max-w-xl font-medium">
              Dedicated procurement channels for hospitals, hotels, and
              manufacturing units. Get volume-based pricing, tax compliance
              support, and recurring delivery schedules.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-white hover:bg-gray-100 text-[#08734A] font-bold py-3 px-8 rounded-lg transition-colors">
                Inquire Now
              </button>
              <button className="border border-green-300 hover:border-white hover:bg-white/10 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                Download Catalog
              </button>
            </div>
          </div>

          {/* Right Checklist Card */}
          <div className="relative z-10 w-full md:w-auto min-w-[320px]">
            <div className="bg-white rounded-xl p-8 shadow-2xl">
              <ul className="space-y-5">
                {benefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-4 text-gray-800 font-bold text-sm lg:text-base"
                  >
                    <CheckCircle2
                      className="text-[#08734A]"
                      size={24}
                      fill="#08734A"
                      color="white"
                    />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BulkSupply;
