import React, { useState } from "react";
import FeatureCard from "./FeatureCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { cardData } from "../../assets/asset";


const FeaturesSection = () => {
  const [page, setPage] = useState(0);
  const CARDS_PER_PAGE = 3;
  const totalPage = Math.ceil(cardData.length / CARDS_PER_PAGE);
  const start = page * CARDS_PER_PAGE;
  const end = start + CARDS_PER_PAGE;

  return (
    <div className="py-16 bg-gradient-to-r from-white via-blue-50 to-white">
      {/* Header */}
      <div className="px-6 md:px-16 mb-10 text-center">
        <div className="flex items-center justify-center gap-4 mb-4">
          <p className="text-4xl font-bold text-slate-800">
            Featured Opportunities
          </p>
          <img
            src="feature.jpg"
            alt="featured"
            className="h-16 w-16 rounded-xl border object-cover"
          />
        </div>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Check out curated opportunities handpicked for you from top organizations around the globe.
        </p>
      </div>

      {/* Cards + Navigation */}
      <div className="flex justify-center items-center gap-4 px-6">
        {/* Left Arrow */}
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 0))}
          disabled={page === 0}
          className={`p-3 rounded-full border text-gray-600 bg-white shadow-sm hover:bg-gray-100 transition-all duration-200 ${
            page === 0 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
          }`}
        >
          <FaChevronLeft size={20} />
        </button>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
          {cardData.slice(start, end).map((card, index) => (
            <FeatureCard key={index} card={card} />
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPage - 1))}
          disabled={page >= totalPage - 1}
          className={`p-3 rounded-full border text-gray-600 bg-white shadow-sm hover:bg-gray-100 transition-all duration-200 ${
            page >= totalPage - 1 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
          }`}
        >
          <FaChevronRight size={20} />
        </button>
      </div>

      {/* Page Dots */}
      <div className="flex justify-center mt-8 gap-2">
        {[...Array(totalPage)].map((_, index) => (
          <button
            key={index}
            onClick={() => setPage(index)}
            className={`w-4 h-4 rounded-full transition-all duration-200 ${
              page === index ? "bg-slate-800 scale-110" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
