import React, { useState, useEffect } from "react";
import AnimatedLogo from "./AnimatedLogo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/90 py-2" : "py-4"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
          <AnimatedLogo />

          <nav className="hidden md:flex space-x-10">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-300 hover:text-white transition-colors"
              style={{ fontFamily: "Open Sans", fontWeight: "600" }}
            >
              HOME
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="text-gray-300 hover:text-white transition-colors"
              style={{ fontFamily: "Open Sans", fontWeight: "600" }}
            >
              PRODUCTS
            </button>
            <button
              onClick={() => scrollToSection("directions")}
              className="text-gray-300 hover:text-white transition-colors"
              style={{ fontFamily: "Open Sans", fontWeight: "600" }}
            >
              DIRECTIONS
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-300 hover:text-white transition-colors"
              style={{ fontFamily: "Open Sans", fontWeight: "600" }}
            >
              CONTACT
            </button>
          </nav>

          <div className="flex items-center">
            {/* Animated Google Review Button */}
            <div className="relative">
              <a
                href="https://g.page/r/CWw4LYQVMtjhEBM/review"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center bg-gradient-to-r from-yellow-400 to-yellow-500 text-black rounded-full hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 px-3 py-2 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                {/* Star Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-black"
                >
                  <polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9 12 2" />
                </svg>

                {/* Tooltip positioned below and to the left to stay within viewport */}
                <span
                  className="absolute top-full right-0 mt-2 bg-black/90 text-white px-3 py-2 rounded-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50"
                  style={{ fontFamily: "Open Sans", fontWeight: "600" }}
                >
                  Leave a Google Review
                  {/* Arrow pointing up */}
                  <span className="absolute bottom-full right-4 w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-black/90"></span>
                </span>
              </a>
            </div>

            {/* Hamburger menu */}
            <button
              className="md:hidden ml-4 text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-black/95 z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full justify-center items-center space-y-8 text-xl">
          <button
            onClick={() => scrollToSection("home")}
            className="text-gray-300 hover:text-white transition-colors"
            style={{ fontFamily: "Open Sans", fontWeight: "600" }}
          >
            HOME
          </button>
          <button
            onClick={() => scrollToSection("products")}
            className="text-gray-300 hover:text-white transition-colors"
            style={{ fontFamily: "Open Sans", fontWeight: "600" }}
          >
            PRODUCTS
          </button>
          <button
            onClick={() => scrollToSection("directions")}
            className="text-gray-300 hover:text-white transition-colors"
            style={{ fontFamily: "Open Sans", fontWeight: "600" }}
          >
            DIRECTIONS
          </button>
          <button
            onClick={() => scrollToSection("directions")}
            className="text-gray-300 hover:text-white transition-colors"
            style={{ fontFamily: "Open Sans", fontWeight: "600" }}
          >
            CONTACT
          </button>

          {/* Mobile Review Link */}
          <a
            href="https://g.page/r/CWw4LYQVMtjhEBM/review"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-yellow-400 transition-colors flex items-center space-x-2"
            style={{ fontFamily: "Open Sans", fontWeight: "600" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9 12 2" />
            </svg>
            <span>Leave a Google Review</span>
          </a>
        </div>
      </div>
    </>
  );
}
