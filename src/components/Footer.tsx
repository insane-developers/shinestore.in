"use client";
import React from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  const router = useRouter();

  const isHomePage = pathname === "/";

  const scrollToSection = (sectionId: string) => {
    if (!isHomePage && sectionId !== "contact") {
      router.push("/");
      setTimeout(() => {
        if (sectionId === "home") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          const section = document.getElementById(sectionId);
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }
      }, 300);
      return;
    }

    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      id="contact"
      className="bg-white border-t border-gray-200 pt-16 pb-8"
    >
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Column 1 - Company Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 tracking-wide">
              shinestore.in
            </h2>

            <div className="space-y-1 text-sm text-gray-600 font-medium">
              <h3 className="text-[#825CD6] font-bold uppercase tracking-wider mb-3 text-xs">
                REGD OFFICE:
              </h3>
              <p>Shine Enterprises</p>
              <p>GSTIN: 33AICPB7047C1ZX</p>
              <p>34 Edyar street</p>
              <p>Coimbatore 641001</p>
              <p>Tamil Nadu, India</p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => scrollToSection("directions")}
                className="inline-flex items-center gap-2 bg-[#F6C000] text-gray-900 px-5 py-2.5 rounded-full hover:bg-yellow-400 transition-all font-bold text-xs tracking-wider"
              >
                GET DIRECTION
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold text-gray-900 tracking-wider uppercase">
              QUICK LINKS
            </h3>
            <ul className="space-y-4 text-sm text-gray-600 font-medium">
              <li>
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("home");
                  }}
                  className="hover:text-[#08734A] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("products");
                  }}
                  className="hover:text-[#08734A] transition-colors"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="hover:text-[#08734A] transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="hover:text-[#08734A] transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - For Institutions */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold text-gray-900 tracking-wider uppercase">
              FOR INSTITUTIONS
            </h3>
            <ul className="space-y-4 text-sm text-gray-600 font-medium">
              <li>
                <a
                  href="/institutional-login"
                  className="hover:text-[#08734A] transition-colors"
                >
                  Institutional Login
                </a>
              </li>
              <li>
                <a
                  href="/bulk-inquiry"
                  className="hover:text-[#08734A] transition-colors"
                >
                  Bulk Inquiry
                </a>
              </li>
              <li>
                <a
                  href="/sourcing-guide"
                  className="hover:text-[#08734A] transition-colors"
                >
                  Sourcing Guide
                </a>
              </li>
              <li>
                <a
                  href="/safety-datasheets"
                  className="hover:text-[#08734A] transition-colors"
                >
                  Safety Datasheets
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold text-gray-900 tracking-wider uppercase">
              CONTACT
            </h3>
            <div className="space-y-5 text-sm text-gray-600 font-medium">
              <a
                href="mailto:shinestoredotin@gmail.com"
                className="flex items-center gap-3 hover:text-[#08734A] transition-colors"
              >
                <Mail size={18} className="text-[#0A6C4A]" />
                <span>contact@shinestore.in</span>
              </a>
              <a
                href="tel:+919443106008"
                className="flex items-center gap-3 hover:text-[#08734A] transition-colors"
              >
                <Phone size={18} className="text-[#0A6C4A]" />
                <span>+91 9443106008</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#0A6C4A] shrink-0 mt-0.5" />
                <span>
                  34 Edyar Street
                  <br />
                  Coimbatore 641001
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm font-medium">
            &copy; 2026 SHINE ENTERPRISES. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
