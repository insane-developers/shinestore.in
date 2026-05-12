import React from "react";

const Partners = () => {
  const partners = [
    { name: "AAA", logo: "/lovable-uploads/image 4.png" },
    { name: "LuLu", logo: "/lovable-uploads/image 5.png" },
    { name: "EMERALD", logo: "/lovable-uploads/image 6.png" },
    { name: "AMRITA", logo: "/lovable-uploads/image 10.svg" },
    { name: "Anandhaas", logo: "/lovable-uploads/image 8.png" },
    { name: "MIKRO GRAFIO", logo: "/lovable-uploads/image 9.png" },
    { name: "PRESCION", logo: "/lovable-uploads/image 24.png" },
  ];

  // duplicate the array for seamless infinite looping
  const infinitePartners = [...partners, ...partners];

  return (
    <section className="py-16 bg-[#F8F9F9] border-t border-b border-gray-200 overflow-hidden">
      <div className="container mx-auto px-4 mb-10">
        <h2
          className="text-sm tracking-[0.2em] text-center text-gray-700 uppercase"
          style={{ fontFamily: "Montserrat", fontWeight: "700" }}
        >
          Our Trusted Customers
        </h2>
      </div>

      <div className="relative flex overflow-hidden group">
        <div className="flex animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
          {infinitePartners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center mx-6 md:mx-12 transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative h-14 w-28 md:w-36 flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className={`max-h-12 max-w-[90%] object-contain`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
