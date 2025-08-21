import React from 'react';

const InternshipCard = ({ internship, onSelect, isSelected }) => {
  const daysLeft = 13;

  return (
    <div
      onClick={() => onSelect(internship)}
      className={`flex rounded-lg p-4 mb-3 w-[400px] items-center ${
        isSelected ? "border border-blue-400" : "border border-gray-200"
      }`}
    >
      <div className="mr-4">
        <img
          src="https://via.placeholder.com/48"
          alt="Company Logo"
          className="w-12 h-12 rounded object-cover"
        />
      </div>
      <div className="flex-grow">
        <div className="bg-blue-50 text-sky-500 px-2 py-1 rounded text-xs mb-1 inline-block">
          Internship
        </div>
        <h3 className="mt-0 mb-1 text-blue-900 text-xl font-semibold">{internship.title}</h3>
        <p className="text-gray-600 text-sm mb-2">{internship.company}</p>
        <div className="flex items-center text-gray-600 text-xs mb-2">
          {/* Stipend */}
          <span className="flex items-center mr-4">
            💰 <span className="ml-1">{internship.stipend}</span>
          </span>
          {/* Duration */}
          <span className="flex items-center mr-4">
            ⏳ <span className="ml-1">{internship.duration}</span>
          </span>
          {/* Days Left */}
          <span className="flex items-center">
            📅 <span className="ml-1">{daysLeft > 0 ? `${daysLeft} days left` : 'Closed'}</span>
          </span>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {(Array.isArray(internship.eligibility) ? internship.eligibility : [internship.eligibility]).map(
            (item, index) => (
              <div
                key={index}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs"
              >
                {item}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default InternshipCard;
