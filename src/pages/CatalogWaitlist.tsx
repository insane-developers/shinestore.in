import React, { useState } from "react";
import { PenTool, Settings, ArrowLeft, Mail, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CatalogWaitlist = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // Logic to submit the email to your backend would go here
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9F9] flex flex-col items-center justify-center p-6 text-center">
      <div className="bg-white p-10 md:p-14 rounded-2xl shadow-xl max-w-xl w-full flex flex-col items-center border border-gray-100 relative overflow-hidden">
        {/* Background design elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-[#085E39]/5 rounded-bl-full z-0"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#825CD6]/5 rounded-tr-full z-0"></div>

        <div className="relative z-10 flex items-center justify-center mb-8">
          <div className="relative bg-[#E8EDEE] p-6 rounded-full">
            {/* Designing animation (Pen) */}
            <PenTool
              className="text-[#085E39] w-12 h-12 md:w-16 md:h-16 animate-pulse-slow"
              strokeWidth={1.5}
            />
            {/* Working animation (Gear spinning) */}
            <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-md">
              <Settings
                className="text-[#825CD6] w-6 h-6 animate-spin"
                strokeWidth={2}
                style={{ animationDuration: "3s" }}
              />
            </div>
          </div>
        </div>

        <h1
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 relative z-10"
          style={{ fontFamily: "Montserrat", fontWeight: "800" }}
        >
          Crafting Perfection
        </h1>

        <p className="text-gray-600 text-base md:text-lg mb-8 relative z-10">
          Our designers and experts are working on a refined catalog for you.
          Please leave your email so we can send it to you once it's done.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="w-full relative z-10">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3.5 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#085E39] focus:border-[#085E39] sm:text-sm transition-colors"
                  placeholder="Enter your email address"
                />
              </div>
              <button
                type="submit"
                className="bg-[#085E39] hover:bg-[#06492b] text-white font-semibold flex-shrink-0 px-8 py-3.5 rounded-md transition-colors shadow-md hover:shadow-lg"
              >
                Notify Me
              </button>
            </div>
          </form>
        ) : (
          <div className="flex flex-col items-center justify-center p-6 bg-green-50 border border-green-100 rounded-xl w-full relative z-10">
            <CheckCircle2 className="text-[#085E39] w-12 h-12 mb-3" />
            <p className="text-[#085E39] font-bold text-xl mb-1">Thank you!</p>
            <p className="text-green-700 text-sm font-medium">
              We've saved your email and will send you the catalog as soon as
              it's ready.
            </p>
          </div>
        )}

        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-gray-500 hover:text-[#085E39] font-medium mt-10 transition-colors relative z-10"
        >
          <ArrowLeft size={16} />
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default CatalogWaitlist;
