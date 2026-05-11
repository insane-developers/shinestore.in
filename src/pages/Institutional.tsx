import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Institutional() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-[#1A1A1A] pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-4 md:px-12 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 z-10 text-white">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              SHINE IN
              <br />
              <span className="text-[#4ADE80]">CLEAN</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8 max-w-md">
              A company of cleaning production and
              maintenance for industrial spaces.
            </p>
            <div className="flex space-x-4">
              <button className="bg-white text-black px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
                Read More
              </button>
            </div>
          </div>
          
          <div className="md:w-1/2 relative mt-12 md:mt-0">
            <div className="relative w-full h-[400px] md:h-[500px] rounded-bl-[100px] rounded-tr-[100px] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581561517409-f8319f3ecbe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Industrial Facility" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#085E39]/20 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section Placeholder */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Bulk Ordering Made Simple</h2>
            <p className="text-gray-600">We partner with institutions to provide reliable, large-scale supply chain solutions.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-green-100 text-[#085E39] rounded-xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Commercial Facilities</h3>
              <p className="text-gray-600">Tailored cleaning solutions for offices, malls, and large commercial spaces.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Hospitals</h3>
              <p className="text-gray-600">Medical-grade cleaning and hygiene products for healthcare environments.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Educational Institutions</h3>
              <p className="text-gray-600">Safe, effective supplies for schools, colleges, and university campuses.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
