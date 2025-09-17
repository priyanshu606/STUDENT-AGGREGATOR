import React from "react";

const TechEventsCard = ({ event, onSelect, isSelected }) => {
  return (
    <div
      onClick={() => onSelect(event)}
      className={`flex rounded-lg p-4 mb-3 w-[400px] items-center cursor-pointer transition hover:shadow-md ${
        isSelected ? "border border-blue-400 bg-blue-50" : "border border-gray-200"
      }`}
    >
      <div className="mr-4">
        <img
          src="https://placehold.co/48x48?text=E"
          alt="Event Logo"
          className="w-12 h-12 rounded object-cover"
        />
      </div>
      <div className="flex-grow">
        <div className="bg-green-50 text-green-600 px-2 py-1 rounded text-xs mb-1 inline-block">
          Tech Event
        </div>
        <h3 className="mt-0 mb-1 text-blue-900 text-xl font-semibold">
          {event.title}
        </h3>
        <p className="text-gray-600 text-sm mb-2">{event.organizer}</p>

        <div className="flex items-center text-gray-600 text-xs mb-2">
          <span className="mr-4">📍 {event.location}</span>
          <span>📅 {event.date}</span>
        </div>

        {/* <div className="flex flex-wrap gap-2">
          {event.speakers.slice(0, 2).map((tag, index) => (
            <div
              key={index}
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs"
            >
              {tag}
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default TechEventsCard;
