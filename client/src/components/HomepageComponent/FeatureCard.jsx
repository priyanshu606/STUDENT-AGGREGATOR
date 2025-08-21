import React from "react";

const FeatureCard = ({ card }) => {
  return (
    <div
      className={`relative rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden h-60 sm:h-64 md:h-72 w-64 sm:w-72 md:w-80 ${card.color}`}
      style={{
        backgroundImage: card.backgroundImage ? `url(${card.backgroundImage})` : "none",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        backgroundSize: "contain",
      }}
      role="region"
      aria-label={card.title}
    >
      {/* Overlay for text background if needed */}
      <div className="p-4 z-10 relative">
        <h3 className="text-xl font-semibold text-black leading-snug">
          {card.title}
        </h3>
      </div>
    </div>
  );
};

export default FeatureCard;
