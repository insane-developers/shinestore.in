import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isInstitutionalPage = location.pathname === "/institutional";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (sectionId: string) => {
    setIsOpen(false);

    if (sectionId === "institutional") {
      navigate("/institutional");
      window.scrollTo(0, 0);
      return;
    }

    if (isInstitutionalPage) {
      // If we're on the institutional page and click a home anchor, go to home first
      navigate("/");
      // Give it a tiny delay to render Home before scrolling
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section)
          section.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
      return;
    }

    // Normal scroll if we're already on the home page
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-gray-100 ${
          isScrolled ? "py-4 shadow-sm" : "py-7"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center px-5 md:px-16">
          <div
            className="font-bold text-2xl text-[#085E39] tracking-tight cursor-pointer"
            onClick={() => handleNavigation("home")}
          >
            SHINE ENTERPRISES
          </div>

          <nav className="hidden md:flex space-x-10 items-center text-[15px]">
            <button
              onClick={() => handleNavigation("home")}
              className={"font-semibold transition-colors "}
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation("products")}
              className="text-gray-600 hover:text-[#085E39] font-semibold transition-colors"
            >
              Products
            </button>
            <button
              onClick={() => handleNavigation("directions")}
              className="text-gray-600 hover:text-[#085E39] font-semibold transition-colors"
            >
              Directions
            </button>
            <button
              onClick={() => handleNavigation("institutional")}
              className={"font-semibold transition-colors "}
            >
              Institutional Orders
            </button>
            <button
              onClick={() => handleNavigation("contact")}
              className="text-gray-600 hover:text-[#085E39] font-semibold transition-colors"
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center space-x-6">
            <button className="hidden md:block bg-[#085E39] hover:bg-[#06492b] text-white px-5 py-2.5 rounded font-semibold transition-colors cursor-pointer">
              Get Started
            </button>

            {/* Hamburger menu */}
            <button
              className="md:hidden ml-4 text-gray-800"
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
        className={
          "md:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out "
        }
      >
        <div className="flex flex-col h-full justify-center items-center space-y-8 text-xl pt-16">
          <button
            onClick={() => handleNavigation("home")}
            className={"transition-colors font-semibold "}
          >
            Home
          </button>
          <button
            onClick={() => handleNavigation("products")}
            className="text-gray-800 hover:text-[#085E39] transition-colors font-semibold"
          >
            Products
          </button>
          <button
            onClick={() => handleNavigation("directions")}
            className="text-gray-800 hover:text-[#085E39] transition-colors font-semibold"
          >
            Directions
          </button>
          <button
            onClick={() => handleNavigation("institutional")}
            className={"transition-colors font-semibold "}
          >
            Institutional Orders
          </button>
          <button
            onClick={() => handleNavigation("contact")}
            className="text-gray-800 hover:text-[#085E39] transition-colors font-semibold"
          >
            Contact
          </button>

          <button className="bg-[#085E39] hover:bg-[#06492b] text-white px-8 py-3 rounded-sm font-semibold transition-colors mt-4">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}
