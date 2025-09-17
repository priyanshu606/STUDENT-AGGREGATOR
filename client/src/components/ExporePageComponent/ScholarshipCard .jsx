import React from 'react';

const ScholarshipCard = ({ scholarship, onSelect, isSelected }) => {
  const daysLeft = 13; // You can make this dynamic based on the scholarship's deadline

  return (
    <div
      onClick={() => onSelect(scholarship)}
      className={`flex rounded-lg p-4 mb-3 w-[400px] items-center cursor-pointer ${
        isSelected ? "border border-blue-400" : "border border-gray-200"
      }`}
    >
      <div className="mr-4">
        {/* Placeholder for Scholarship Provider Logo */}
        <img
          src="https://via.placeholder.com/48"
          alt="Provider Logo"
          className="w-12 h-12 rounded object-cover"
        />
      </div>
      <div className="flex-grow">
        <div className="bg-green-50 text-green-500 px-2 py-1 rounded text-xs mb-1 inline-block">
          Scholarship
        </div>
        <h3 className="mt-0 mb-1 text-blue-900 text-xl font-semibold">{scholarship.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{scholarship.provider}</p>
        <div className="flex items-center text-gray-600 text-xs mb-2">
          {/* Amount */}
          <span className="flex items-center mr-4">
            💸 <span className="ml-1">{scholarship.amount}</span>
          </span>
          {/* Deadline */}
          <span className="flex items-center mr-4">
            ⏳ <span className="ml-1">{daysLeft > 0 ? `${daysLeft} days left` : 'Closed'}</span>
          </span>
          {/* Eligibility */}
          <span className="flex items-center">
            🎓 <span className="ml-1">{scholarship.eligibility}</span>
          </span>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {/* {(Array.isArray(scholarship.eligibility) ? scholarship.eligibility : [scholarship.eligibility]).map(
            (item, index) => (
              <div
                key={index}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs"
              >
                {item}
              </div>
            )
          )} */}
        </div>
      </div>
    </div>
  );
};

export default ScholarshipCard;