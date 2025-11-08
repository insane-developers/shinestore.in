import React from "react";
import { ChevronRight } from "lucide-react";

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
      className="pt-32 pb-20 md:pt-40 md:pb-28 px-4 md:px-6 container mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h1
            className="text-5xl mb-6"
            style={{ fontFamily: "Montserrat", fontWeight: "800" }}
          >
            <span className="text-purple-300 text-8xl lg:text-9xl md:text-7xl">
              shine in clean
            </span>
            <br />
            <span className="text-pink-100 text-5xl lg:text-6xl md:text-4xl">
              solutions for
            </span>
            {/* <br /> */}
            {/* <span className="text-pink-100 text-5xl">for</span> */}
            <br />
            <span className="text-pink-100 text-4xl lg:text-6xl md:text-4xl">
              homes and industries
            </span>
            {/* <br />
            <span className="text-pink-100 text-5xl">and</span> */}
            {/* <br />
            <span className="text-pink-100 text-5xl">industries</span> */}
          </h1>
          <div className="hidden md:block">
            <button
              onClick={scrollToProducts}
              className="inline-block mt-6 bg-purple-500 hover:bg-purple-600 text-white py-3 px-6 rounded-full transition-all transform hover:translate-y-[-3px] hover:shadow-lg animate-pulse-slow"
              style={{ fontFamily: "Open Sans", fontWeight: "600" }}
            >
              Get Started
              <ChevronRight className="inline ml-1" size={16} />
            </button>
          </div>
        </div>

        <div className="relative hidden md:block">
          <div className="absolute -right-10 top-0 w-72 h-72 md:w-80 md:h-80 rounded-[40px] overflow-hidden border-4 border-white/20 animate-bounce-subtle">
            <img
              src="/trustimage.jpg"
              alt="Clean kitchen space"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute right-10 bottom-0 md:right-20 w-60 h-60 md:w-96 md:h-96 rounded-[40px] overflow-hidden border-4 border-green-400/30">
            <img
              src="https://images.unsplash.com/photo-1527576539890-dfa815648363"
              alt="Cleaning service"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="block md:hidden">
          <button
            onClick={scrollToProducts}
            className="inline-block mt-6 bg-purple-500 hover:bg-purple-600 text-white py-3 px-6 rounded-full transition-all transform hover:translate-y-[-3px] hover:shadow-lg animate-pulse-slow"
            style={{ fontFamily: "Open Sans", fontWeight: "600" }}
          >
            Get Started
            <ChevronRight className="inline ml-1" size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
