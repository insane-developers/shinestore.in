import React from "react";
import { CheckCircle2 } from "lucide-react";

const Hero = () => {
  const scrollToProducts = () => {
    const section = document.getElementById("products");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="bg-[#323232] text-white pt-32 pb-20 md:pt-40 md:pb-28 px-4 md:px-12 w-full"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="max-w-xl">
          <h1
            className="text-5xl md:text-6xl lg:text-7xl mb-6 font-bold leading-tight"
            style={{
              fontFamily: "Montserrat",
              fontWeight: "800",
              letterSpacing: "-0.02em",
            }}
          >
            shine in <span className="text-green-400">clean</span>
            <br />
            solutions for homes and industries.
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-lg">
            Professional grade hygiene products engineered for extreme
            efficiency. From high-traffic industrial floors to pristine home
            environments.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={scrollToProducts}
              className="bg-[#B472F5] hover:bg-[#a15ee6] text-white font-semibold py-3 px-8 rounded-md transition-all"
            >
              Get Started
            </button>
            <button className="bg-transparent border border-gray-400 hover:border-white text-white font-semibold py-3 px-8 rounded-md transition-all">
              View Catalog
            </button>
          </div>
        </div>

        <div className="relative mt-12 md:mt-0 mb-12 md:mb-0 flex justify-end">
          {/* The corridor image container */}
          <div className="relative w-full max-w-[500px] aspect-[4/5] md:aspect-[3/4] rounded-2xl overflow-hidden border-2 border-green-500/20 transform md:rotate-2 shadow-2xl">
            <img
              src="/lovable-uploads/hero-image.jpg"
              alt="Clean corridor space"
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src =
                  "https://images.unsplash.com/photo-1527576539890-dfa815648363";
              }}
            />
            {/* Dark green overlay at the bottom for shading */}
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 via-transparent to-transparent"></div>
          </div>

          {/* Floating Card */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 md:translate-x-0 md:bottom-8 md:-left-12 lg:left-0 bg-[#E8EDEE] text-gray-900 p-6 rounded-xl shadow-xl w-[90%] md:w-[300px]">
            <div className="flex items-center gap-2 mb-2 text-[#7F41C9]">
              <CheckCircle2
                size={24}
                className="flex-shrink-0"
                fill="currentColor"
                color="white"
              />
              <h3 className="font-bold text-[0.9rem] uppercase leading-tight tracking-wider">
                Trusted
                <br />
                Authority
              </h3>
            </div>
            <h4 className="font-bold text-xl mb-2 text-black">
              100% Satisfaction
            </h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              Best quality industrial products for professional procurement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
