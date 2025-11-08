import React from "react";
import AnimatedLogo from "./AnimatedLogo";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="contact"
      className="py-16 bg-black text-white border-t border-purple-900/30"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-20 mb-10 items-start justify-items-center md:justify-items-start">
          {/* Column 1 - Logo & Company Info */}
          <div className="space-y-6 w-full max-w-sm">
            <div className="mb-6">
              <AnimatedLogo />
            </div>

            <div className="space-y-4">
              <h3
                className="text-lg text-purple-300"
                style={{ fontFamily: "Montserrat", fontWeight: "700" }}
              >
                Regd office:
              </h3>
              <div
                className="space-y-1 text-gray-300"
                style={{ fontFamily: "Open Sans", fontWeight: "600" }}
              >
                <p
                  className="text-white"
                  style={{ fontFamily: "Montserrat", fontWeight: "700" }}
                >
                  Shine Enterprises
                </p>
                <p>GSTIN: 33AICPB7047C1ZX</p>
                <p>34 Edyar street</p>
                <p>Coimbatore 641001</p>
                <p>Tamil Nadu</p>
                <p>India</p>
              </div>

              <div className="pt-4">
                <a
                  href="#directions"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("directions");
                  }}
                  className="inline-flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-full hover:bg-yellow-300 transition-all"
                  style={{ fontFamily: "Montserrat", fontWeight: "700" }}
                >
                  GET DIRECTION
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2 - Contact Information */}
          <div className="space-y-6 w-full max-w-sm md:justify-self-end">
            <div className="flex items-center gap-4">
              <Mail size={24} className="text-white" />
              <a
                href="mailto:shinestoredotin@gmail.com"
                className="text-white hover:text-purple-300 transition-colors"
                style={{ fontFamily: "Open Sans", fontWeight: "600" }}
              >
                shinestoredotin@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-4">
              <Phone size={24} className="text-white" />
              <a
                href="tel:+919443106008"
                className="text-white hover:text-purple-300 transition-colors"
                style={{ fontFamily: "Open Sans", fontWeight: "600" }}
              >
                +91 9443106008
              </a>
            </div>

            <div className="flex items-start gap-4">
              <MapPin size={24} className="text-white mt-1" />
              <div style={{ fontFamily: "Open Sans", fontWeight: "600" }}>
                <p className="text-white">34 Edyar Street</p>
                <p className="text-white">Coimbatore 641001</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-10 border-t border-gray-800 text-center">
          <p
            className="text-gray-500"
            style={{ fontFamily: "Open Sans", fontWeight: "600" }}
          >
            © 2025 SHINE ENTERPRISES
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
