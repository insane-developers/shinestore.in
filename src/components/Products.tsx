import React, { useEffect, useRef } from "react";

const Products = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animate-in classes for Tailwind animations
            entry.target.classList.remove(
              "opacity-0",
              "translate-y-12",
              "scale-90",
              "-translate-x-8",
              "scale-95"
            );
            entry.target.classList.add(
              "opacity-100",
              "translate-y-0",
              "scale-100",
              "translate-x-0"
            );
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(
      "[class*='opacity-0']"
    );
    elements?.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>
        {`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotateX(0deg); }
          50% { transform: translateY(-3px) rotateX(1deg); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(28, 237, 149, 0.3); }
          50% { box-shadow: 0 0 30px rgba(28, 237, 149, 0.6); }
        }
        
        @keyframes rainbow-border {
          0% { border-color: #1CED95; }
          25% { border-color: #9951D7; }
          50% { border-color: #1CED95; }
          75% { border-color: #9951D7; }
          100% { border-color: #1CED95; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        
        .animate-rainbow-border {
          animation: rainbow-border 4s ease-in-out infinite;
        }
        
        .gradient-text {
          background: linear-gradient(45deg, #EBD9D9, #9951D7, #1CED95);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-shift 4s ease-in-out infinite;
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient-shift {
          background: linear-gradient(45deg, #9951D7, #1CED95, #9951D7);
          background-size: 200% 200%;
          animation: gradient-shift 4s ease-in-out infinite;
        }
        `}
      </style>
      <section
        ref={sectionRef}
        id="products"
        className="relative w-full min-h-screen bg-black mx-auto lg:w-[1440px] lg:h-[1024px] lg:max-w-full px-4 lg:px-0 py-8 lg:py-0"
      >
        {/* Main Title - products */}
        <h2
          className="opacity-0 -translate-x-8 scale-95 transition-all duration-1000 ease-out gradient-text flex items-center font-extrabold text-[60px] leading-[50px] lg:text-[130px] lg:leading-[106px] tracking-tighter lowercase text-center lg:text-left lg:absolute w-full lg:w-[578px] h-auto lg:h-[159px] px-4 lg:px-0 mt-4 lg:mt-0"
          style={{
            left: "67px",
            top: "79px",
            fontFamily: "Montserrat",
          }}
        >
          products
        </h2>

        {/* Description Text */}
        <p
          className="opacity-0 -translate-x-8 scale-95 transition-all duration-1000 ease-out flex items-center font-semibold text-sm lg:text-base leading-4 lg:leading-5 tracking-tighter uppercase text-[#605F62] text-center lg:text-left lg:absolute w-full lg:w-[401px] h-auto lg:h-[90px] px-4 lg:px-0 mt-20 lg:mt-0"
          style={{
            left: "853px",
            top: "134px",
            fontFamily: "Open Sans",
          }}
        >
          From homes to industries, Shine Enterprises brings you trusted
          cleaning essentials with unbeatable quality and hygiene
        </p>

        {/* Mobile Layout - Stack of Products */}
        <div className="lg:hidden flex flex-col gap-4 mt-32 w-full">
          {/* Bathworks */}
          <div className="opacity-0 translate-y-12 scale-90 transition-all duration-700 ease-out delay-100 w-full h-[80px] bg-[#1CED95] border border-black rounded-[20px] flex items-center justify-center">
            <span
              className="font-bold text-[24px] tracking-tighter lowercase text-[#030C11]"
              style={{ fontFamily: "Montserrat" }}
            >
              Bathworks, home essentials
            </span>
          </div>

          {/* Scrubbers */}
          <div className="opacity-0 translate-y-12 scale-90 transition-all duration-700 ease-out delay-150 w-full h-[80px] bg-[#9951D7] border border-black rounded-[20px] flex items-center justify-center animate-rainbow-border">
            <span
              className="font-bold text-[24px] tracking-tighter lowercase text-white"
              style={{ fontFamily: "Montserrat" }}
            >
              scrubbers
            </span>
          </div>

          {/* Industrial Products */}
          <div className="opacity-0 translate-y-12 scale-90 transition-all duration-700 ease-out delay-200 w-full h-[80px] bg-[#1CED95] border border-black rounded-[20px] flex items-center justify-center">
            <span
              className="font-bold text-[24px] tracking-tighter lowercase text-[#030C11]"
              style={{ fontFamily: "Montserrat" }}
            >
              industrial products
            </span>
          </div>

          {/* Product Image Boxes */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            {/* Scrubbers */}
            <div className="opacity-0 translate-y-12 scale-90 transition-all duration-700 ease-out delay-250 w-full h-[140px] border border-black rounded-[20px] animate-float overflow-hidden relative">
              <img
                src="/scrubbing-brush.jpeg"
                alt="Scrubbing Brush"
                className="w-full h-full object-cover rounded-[20px]"
                onError={(e) => {
                  e.currentTarget.src =
                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='%23666'%3E%3Crect width='24' height='24' fill='%23f0f0f0'/%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'/%3E%3C/svg%3E";
                }}
              />
            </div>

            {/* Toilet Brush */}
            <div className="opacity-0 translate-y-12 scale-90 transition-all duration-700 ease-out delay-300 w-full h-[140px] border border-black rounded-[20px] animate-float overflow-hidden relative">
              <img
                src="/toilet-brush.jpeg"
                alt="Toilet Brush"
                className="w-full h-full object-cover rounded-[20px]"
                onError={(e) => {
                  e.currentTarget.src =
                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='%23666'%3E%3Crect width='24' height='24' fill='%23f0f0f0'/%3E%3Cpath d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'/%3E%3C/svg%3E";
                }}
              />
            </div>

            {/* Garbage Bags */}
            <div className="opacity-0 translate-y-12 scale-90 transition-all duration-700 ease-out delay-350 w-full h-[140px] border border-black rounded-[20px] animate-float overflow-hidden relative">
              <img
                src="/garbage-rolls.jpeg"
                alt="Garbage Rolls"
                className="w-full h-full object-cover rounded-[20px]"
                onError={(e) => {
                  e.currentTarget.src =
                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='%23666'%3E%3Crect width='24' height='24' fill='%23f0f0f0'/%3E%3Cpath d='M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z'/%3E%3C/svg%3E";
                }}
              />
            </div>

            {/* Industrial Products */}
            <div className="opacity-0 translate-y-12 scale-90 transition-all duration-700 ease-out delay-400 w-full h-[140px] border border-black rounded-[20px] animate-float overflow-hidden relative">
              <img
                src="/industrial-proudtcs.jpg"
                alt="Industrial Products"
                className="w-full h-full object-cover rounded-[20px]"
                onError={(e) => {
                  e.currentTarget.src =
                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='%23666'%3E%3Crect width='24' height='24' fill='%23f0f0f0'/%3E%3Cpath d='M12.5 2C11.67 2 11 2.67 11 3.5V4H8c-.55 0-1 .45-1 1s.45 1 1 1h1v1.5c0 .83.67 1.5 1.5 1.5S12 8.33 12 7.5V6h1c.55 0 1-.45 1-1s-.45-1-1-1h-1v-.5c0-.83-.67-1.5-1.5-1.5zM9 10v11c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2V10H9z'/%3E%3C/svg%3E";
                }}
              />
            </div>

            {/* Bathworks */}
            <div className="opacity-0 translate-y-12 scale-90 transition-all duration-700 ease-out delay-450 w-full h-[140px] border border-black rounded-[20px] animate-float overflow-hidden relative">
              <img
                src="/bathworks.jpg"
                alt="Bathworks"
                className="w-full h-full object-cover rounded-[20px]"
                onError={(e) => {
                  e.currentTarget.src =
                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='%23666'%3E%3Crect width='24' height='24' fill='%23f0f0f0'/%3E%3Cpath d='M12 2l8 8-8 8-8-8 8-8zm0 2.83L7.17 10 12 14.83 16.83 10 12 4.83z'/%3E%3C/svg%3E";
                }}
              />
            </div>

            {/* Kitchen Cleaning */}
            <div className="opacity-0 translate-y-12 scale-90 transition-all duration-700 ease-out delay-500 w-full h-[140px] border border-black rounded-[20px] animate-float overflow-hidden relative">
              <img
                src="/kitchen-cleaning.jpg"
                alt="Kitchen Cleaning"
                className="w-full h-full object-cover rounded-[20px]"
                onError={(e) => {
                  e.currentTarget.src =
                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='%23666'%3E%3Crect width='24' height='24' fill='%23f0f0f0'/%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z'/%3E%3C/svg%3E";
                }}
              />
            </div>
          </div>

          {/* And more... */}
          <div className="opacity-0 translate-y-12 scale-90 transition-all duration-700 ease-out delay-450 w-full h-[100px] bg-[#9951D7] border border-black rounded-[20px] flex items-center justify-center mt-4">
            <span
              className="font-bold text-[28px] tracking-tighter lowercase text-white"
              style={{ fontFamily: "Montserrat" }}
            >
              and more...
            </span>
          </div>
        </div>

        {/* Desktop Layout - Original Bento Grid (hidden on mobile) */}
        <div className="hidden lg:block">
          {/* Rectangle 23 - Top Left */}
          <div
            className="absolute opacity-0 translate-y-12 scale-90 transition-all duration-700 ease-out delay-100 hover:-translate-y-2 hover:scale-105 hover:brightness-110 hover:shadow-2xl animate-float w-[269px] h-[200px] border border-black rounded-[26px] overflow-hidden"
            style={{
              left: "122px",
              top: "245px",
            }}
          >
            <img
              src="/scrubbing-brush.jpeg"
              alt="Scrubbing Brush"
              className="w-full h-full object-cover rounded-[26px]"
              onError={(e) => {
                e.currentTarget.src =
                  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='%23666'%3E%3Crect width='24' height='24' fill='%23f0f0f0'/%3E%3Cpath d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'/%3E%3C/svg%3E";
              }}
            />
          </div>

          {/* Rectangle 25 - Top Center */}
          <div
            className="absolute opacity-0 translate-y-12 scale-90 transition-all duration-700 ease-out delay-150 hover:-translate-y-2 hover:scale-105 hover:brightness-110 hover:shadow-2xl animate-float w-[269px] h-[300px] border border-black rounded-[26px] overflow-hidden"
            style={{
              left: "407px",
              top: "245px",
            }}
          >
            <img
              src="/toilet-brush.jpeg"
              alt="Toilet Brush"
              className="w-full h-full object-cover rounded-[26px]"
              onError={(e) => {
                e.currentTarget.src =
                  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='%23666'%3E%3Crect width='24' height='24' fill='%23f0f0f0'/%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'/%3E%3C/svg%3E";
              }}
            />
          </div>

          {/* Rectangle 28 - Top Right (bathworks) */}
          <div
            className="absolute opacity-0 translate-y-12 scale-90 transition-all duration-700 ease-out delay-200 hover:-translate-y-2 hover:scale-105 hover:brightness-110 hover:shadow-2xl animate-float animate-pulse-glow w-[614px] h-[93px] bg-[#1CED95] border border-black rounded-[26px]"
            style={{
              left: "693px",
              top: "245px",
            }}
          />

          {/* Bathworks, home essentials text */}
          <span
            className="absolute flex items-center justify-center font-bold text-[44px] leading-5 tracking-tighter lowercase text-[#030C11] w-[614px] h-[93px]"
            style={{
              left: "693px",
              top: "245px",
              fontFamily: "Montserrat",
            }}
          >
            Bathworks, home essentials
          </span>

          {/* Rectangle 26 - Middle Left (scrubbers) */}
          <div
            className="absolute opacity-0 translate-y-12 scale-90 transition-all duration-700 ease-out delay-250 hover:-translate-y-2 hover:scale-105 hover:brightness-110 hover:shadow-2xl animate-float animate-rainbow-border w-[263px] h-[93px] bg-[#9951D7] border border-black rounded-[26px]"
            style={{
              left: "125px",
              top: "452px",
            }}
          />

          {/* scrubbers text */}
          <span
            className="absolute flex items-center justify-center font-bold text-[44px] leading-5 tracking-tighter lowercase text-white w-[263px] h-[93px]"
            style={{
              left: "125px",
              top: "452px",
              fontFamily: "Montserrat",
            }}
          >
            scrubbers
          </span>

          {/* Rectangle 27 - Middle Center */}
          <div
            className="absolute w-[553px] h-[200px] border border-black rounded-[26px] overflow-hidden"
            style={{
              left: "125px",
              top: "552px",
            }}
          >
            <img
              src="/industrial-proudtcs.jpg"
              alt="Industrial Products"
              className="w-full h-full object-cover rounded-[26px]"
              onError={(e) => {
                e.currentTarget.src =
                  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='%23666'%3E%3Crect width='24' height='24' fill='%23f0f0f0'/%3E%3Cpath d='M12 2l8 8-8 8-8-8 8-8zm0 2.83L7.17 10 12 14.83 16.83 10 12 4.83z'/%3E%3C/svg%3E";
              }}
            />
          </div>

          {/* Rectangle 29 - Middle Right */}
          <div
            className="absolute w-[269px] h-[407px] border border-black rounded-[26px] overflow-hidden"
            style={{
              left: "693px",
              top: "345px",
            }}
          >
            <img
              src="/garbage-rolls.jpeg"
              alt="Garbage Rolls"
              className="w-full h-full object-cover rounded-[26px]"
              onError={(e) => {
                e.currentTarget.src =
                  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='%23666'%3E%3Crect width='24' height='24' fill='%23f0f0f0'/%3E%3Cpath d='M12.5 2C11.67 2 11 2.67 11 3.5V4H8c-.55 0-1 .45-1 1s.45 1 1 1h1v1.5c0 .83.67 1.5 1.5 1.5S12 8.33 12 7.5V6h1c.55 0 1-.45 1-1s-.45-1-1-1h-1v-.5c0-.83-.67-1.5-1.5-1.5z'/%3E%3C/svg%3E";
              }}
            />
          </div>

          {/* Rectangle 30 - Top Far Right */}
          <div
            className="absolute w-[330px] h-[200px] border border-black rounded-[26px] overflow-hidden"
            style={{
              left: "977px",
              top: "345px",
            }}
          >
            <img
              src="/bathworks.jpg"
              alt="Bathworks"
              className="w-full h-full object-cover rounded-[26px]"
              onError={(e) => {
                e.currentTarget.src =
                  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='%23666'%3E%3Crect width='24' height='24' fill='%23f0f0f0'/%3E%3Cpath d='M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z'/%3E%3C/svg%3E";
              }}
            />
          </div>

          {/* Rectangle 31 - Bottom Far Right (and more...) */}
          <div
            className="absolute w-[330px] h-[373px] bg-[#9951D7] border border-black rounded-[26px]"
            style={{
              left: "977px",
              top: "552px",
            }}
          />

          {/* and more... text */}
          <span
            className="absolute flex items-center justify-center font-bold text-[58px] leading-5 tracking-tighter lowercase text-white w-[330px] h-[373px]"
            style={{
              left: "977px",
              top: "552px",
              fontFamily: "Montserrat",
            }}
          >
            and more...
          </span>

          {/* Rectangle 32 - Bottom Left (industrial products) */}
          <div
            className="absolute w-[269px] h-[166px] bg-[#1CED95] border border-black rounded-[26px]"
            style={{
              left: "125px",
              top: "759px",
            }}
          />

          {/* industrial products text */}
          <span
            className="absolute flex items-center font-bold text-[48px] leading-10 tracking-tighter lowercase text-[#030C11] w-[229px] h-[80px]"
            style={{
              left: "146px",
              top: "802px",
              fontFamily: "Montserrat",
            }}
          >
            industrial products
          </span>

          {/* Rectangle 33 - Bottom Center */}
          <div
            className="absolute w-[560px] h-[155px] border border-black rounded-[26px] overflow-hidden"
            style={{
              left: "402px",
              top: "770px",
            }}
          >
            <img
              src="/kitchen-cleaning.jpg"
              alt="Kitchen Cleaning"
              className="w-full h-full object-cover rounded-[26px]"
              onError={(e) => {
                e.currentTarget.src =
                  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='%23666'%3E%3Crect width='24' height='24' fill='%23f0f0f0'/%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z'/%3E%3C/svg%3E";
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
