import React from "react";
import { MapPin, MessageCircleQuestion, Clock, Truck, Map } from "lucide-react";

const Directions = () => {
  return (
    <section
      id="directions"
      className="py-20 md:py-28 bg-[#0a0a0a] text-white w-full"
    >
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-10 items-center">
          {/* Left Column - Information */}
          <div className="flex flex-col">
            <h2
              className="text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight"
              style={{ fontFamily: "Montserrat" }}
            >
              Visit Our Hub
            </h2>
            <p className="text-gray-400 text-base md:text-lg mb-12 max-w-lg leading-relaxed">
              Experience our full inventory firsthand. Our flagship facility in
              Coimbatore serves as the primary distribution center for southern
              India.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-6 mb-12">
              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="bg-[#1CE594] p-3 rounded-md shrink-0">
                  <MapPin className="text-black" size={24} />
                </div>
                <div>
                  <h4 className="text-[#1CE594] text-xs font-bold uppercase tracking-wider mb-2">
                    Location
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    34 Edyar street,
                    <br />
                    Coimbatore, Tamil
                    <br />
                    Nadu
                    <br />
                    641001, India
                  </p>
                </div>
              </div>

              {/* Connect */}
              <div className="flex items-start gap-4">
                <div className="bg-[#1CE594] p-3 rounded-md shrink-0">
                  <MessageCircleQuestion className="text-black" size={24} />
                </div>
                <div>
                  <h4 className="text-[#1CE594] text-xs font-bold uppercase tracking-wider mb-2">
                    Connect
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed mb-1">
                    +91 9443106008
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    shinestoredotin@gmail.com
                  </p>
                </div>
              </div>

              {/* Store Hours */}
              <div className="flex items-start gap-4">
                <div className="bg-[#1CE594] p-3 rounded-md shrink-0">
                  <Clock className="text-black" size={24} />
                </div>
                <div>
                  <h4 className="text-[#1CE594] text-xs font-bold uppercase tracking-wider mb-2">
                    Store Hours
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed mb-1">
                    Mon - Sat
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    9:00 AM - 8:00 PM
                  </p>
                </div>
              </div>

              {/* Logistics */}
              <div className="flex items-start gap-4">
                <div className="bg-[#1CE594] p-3 rounded-md shrink-0">
                  <Truck className="text-black" size={24} />
                </div>
                <div>
                  <h4 className="text-[#1CE594] text-xs font-bold uppercase tracking-wider mb-2">
                    Logistics
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed mb-1">
                    Pan-India delivery
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Available safely
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://maps.app.goo.gl/Knm1zcFHeT7z2ted7"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-[350px] bg-[#1CE594] hover:bg-[#15c57e] transition-colors text-black font-bold py-4 px-6 rounded-md flex items-center justify-center gap-3 shadow-lg"
            >
              <Map size={20} />
              Open in Google Maps
            </a>
          </div>

          {/* Right Column - Map Interface */}
          <div className="relative w-full h-[400px] lg:h-[550px] flex items-center justify-center p-6 bg-[#0a0a0a]">
            {/* Offset green border mimicking the design */}
            <div className="absolute inset-0 border border-[#1CE594]/30 rounded-xl transform translate-x-4 translate-y-4 -rotate-1 pointer-events-none"></div>

            {/* Outer map container taking up the entire tan box */}
            <div className="relative w-full h-full bg-[#d0aba0] rounded-xl shadow-2xl z-10 p-6 md:p-10 flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.5512903146805!2d76.95531747509179!3d10.997202189165355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8590eaf737ae9%3A0xe1d83215842d386c!2sShine%20Enterprises!5e0!3m2!1sen!2sin!4v1778599523484!5m2!1sen!2sin"
                className="w-full h-full rounded-lg"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Directions;
