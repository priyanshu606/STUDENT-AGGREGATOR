import React from 'react';

const NewsLetter = () => {
  return (
    <div className="bg-gradient-to-br from-blue-100 via-white to-purple-100 py-16 px-4">
      <div className="md:grid md:grid-cols-2 items-stretch max-w-5xl bg-white mx-auto rounded-2xl shadow-lg overflow-hidden transition-all duration-300">
        
        {/* Full-height Left Image */}
        <div className="hidden md:block h-full">
          <img
            src="newsletter.png"
            alt="newsletter"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Form Content */}
        <div className="relative flex flex-col justify-center items-center p-8 md:p-12 text-center bg-white">
          
          {/* Close Button */}
          <button className="absolute top-6 right-6 md:right-10" aria-label="Close">
            <svg
              width="20"
              height="20"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-600 hover:text-gray-900"
            >
              <path
                d="M13 2 2 13M2 2l11 11"
                stroke="currentColor"
                strokeOpacity=".7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Subscribe to our newsletter
          </h2>
          <p className="mt-4 text-gray-600 text-sm md:text-base max-w-md">
            Be the first to get the latest updates on internships, hackathons, and tech opportunities!
          </p>

          <form className="mt-8 w-full max-w-md flex rounded-lg overflow-hidden shadow-sm">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 p-4 text-gray-800 placeholder-gray-400 border border-r-0 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 md:px-8 py-3 transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
