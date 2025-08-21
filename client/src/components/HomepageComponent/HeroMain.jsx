import React from "react";
import TypingEffect from "./TypingEffect";

const HeroMain = () => {
  return (
    <div className="relative flex flex-col-reverse md:flex-row items-center justify-between mt-32 px-6 md:px-20 z-10">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 opacity-50 -z-10 blur-3xl"></div>

      {/* Left Content */}
      <div className="flex flex-col gap-8 max-w-xl text-center md:text-left">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-transparent bg-clip-text">
            <TypingEffect />
          </h1>
          <p className="text-lg md:text-2xl text-gray-700 leading-relaxed">
            Discover <span className="text-blue-600 font-semibold">Hackathons</span>, 
            <span className="text-purple-600 font-semibold"> Internships</span>, 
            <span className="text-pink-600 font-semibold"> Scholarships</span> and more —
            all in one place!
          </p>
        </div>

        <div className="flex justify-center md:justify-start">
          <button className="bg-gradient-to-r from-blue-500 to-pink-500 hover:from-pink-500 hover:to-blue-600 transition-all duration-300 text-white text-lg md:text-xl px-6 py-3 rounded-full shadow-lg hover:scale-105 transform">
            🚀 Explore Now
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="mb-10 md:mb-0 relative">
        <img
          src="hero.png"
          alt="Hero"
          className="h-[300px] md:h-[400px] animate-float drop-shadow-2xl"
        />
      </div>
    </div>
  );
};

export default HeroMain;
