import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

const Partners = () => {
  const partners = [
    { name: "AAA", logo: "/lovable-uploads/image 4.png" },
    { name: "LuLu", logo: "/lovable-uploads/image 5.png" },
    { name: "EMERALD", logo: "/lovable-uploads/image 6.png" },
    { name: "AMRITA", logo: "/lovable-uploads/image 10.png" },
    { name: "Anandhaas", logo: "/lovable-uploads/image 8.png" },
    { name: "MIKRO GRAFIO", logo: "/lovable-uploads/image 9.png" },
  ];

  return (
    <section className="py-16 bg-black border-t border-gray-800">
      <div className="container mx-auto px-4">
        <h2
          className="text-2xl text-center mb-10 text-white"
          style={{ fontFamily: "Montserrat", fontWeight: "700" }}
        >
          Our Trusted Partners
        </h2>

        {/* Desktop version - show all logos */}
        <div className="hidden md:flex justify-between items-center gap-4">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="h-16 flex items-center justify-center transition-all duration-300 hover:opacity-100 opacity-80"
            >
              <div className="relative h-12 w-32">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="h-full w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile version - carousel */}
        <div className="md:hidden">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              containScroll: "trimSnaps",
              dragFree: false,
            }}
            className="w-full"
          >
            <CarouselContent className="ml-0">
              {partners.map((partner, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/2 pl-2 sm:basis-1/3"
                >
                  <div className="h-20 flex items-center justify-center mx-2">
                    <div className="relative h-10 w-24 flex items-center justify-center">
                      <img
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-500"
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
