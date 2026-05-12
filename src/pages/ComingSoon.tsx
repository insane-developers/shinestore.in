import React from "react";
import { Construction, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ComingSoon = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F8F9F9] flex flex-col items-center justify-center p-6 text-center">
      <div className="bg-white p-10 md:p-16 rounded-2xl shadow-xl max-w-lg w-full flex flex-col items-center border border-gray-100">
        <div className="bg-[#E8EDEE] p-5 rounded-full mb-8">
          <Construction
            className="text-[#085E39] w-20 h-20"
            strokeWidth={1.5}
          />
        </div>

        <h1
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          style={{ fontFamily: "Montserrat", fontWeight: "800" }}
        >
          Under Construction
        </h1>

        <p className="text-gray-600 text-lg mb-10">
          This page will be available soon. We're working hard to get it ready
          for you!
        </p>

        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 bg-[#085E39] hover:bg-[#06492b] text-white font-semibold py-3 px-8 rounded-md transition-colors"
        >
          <ArrowLeft size={18} />
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ComingSoon;
