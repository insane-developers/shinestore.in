import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

const Partners = () => {
  const partners = [
    { name: "AAA", logo: "/lovable-uploads/image 4.png" },
    { name: "LuLu", logo: "/lovable-uploads/image 5.png" },
    { name: "EMERALD", logo: "/lovable-uploads/image 6.png", invert: true },
    { name: "AMRITA", logo: "/lovable-uploads/image 10.png", invert: true },
    { name: "Anandhaas", logo: "/lovable-uploads/image 8.png" },
    { name: "MIKRO GRAFIO", logo: "/lovable-uploads/image 9.png" },
  ];

  return (
    <section className="py-16 bg-[#F8F9F9] border-t border-b border-gray-200">
      <div className="container mx-auto px-4">
        <h2
          className="text-sm tracking-[0.2em] text-center mb-10 text-gray-700 uppercase"
          style={{ fontFamily: "Montserrat", fontWeight: "700" }}
        >
          Our Trusted Customers
        </h2>

        {/* Desktop version - show all logos */}
        <div className="hidden md:flex justify-center items-center gap-12 lg:gap-20">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative h-14 w-28 flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className={`max-h-12 max-w-[90%] object-contain ${partner.invert ? "invert brightness-0 opacity-80" : ""}`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile version - carousel */}
        <div className="md:hidden">
          <Carousel
            opts={{
              align: "center",
              loop: true,
              containScroll: "trimSnaps",
              dragFree: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2">
              {partners.map((partner, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 basis-1/3 flex justify-center"
                >
                  <div className="flex items-center justify-center mx-1">
                    <div className="relative h-12 w-20 flex items-center justify-center">
                      <img
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        className={`max-h-10 max-w-[80%] object-contain ${partner.invert ? "invert brightness-0 opacity-80" : ""}`}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Partners;
