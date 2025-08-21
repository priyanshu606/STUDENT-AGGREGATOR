import React from 'react';

const ScholarshipDetails = ({ scholarship }) => {
  const daysLeft = 13; // Can be made dynamic
  if (!scholarship) {
    return <div className="text-gray-500 text-center mt-10">Select a scholarship to see details.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto my-8 p-6 bg-white rounded-lg shadow-md border border-gray-200 font-inter">
      {/* Header Section */}
      <div className="flex items-center mb-6">
        {/* Provider Logo */}
        <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mr-4 overflow-hidden">
          <img
            src="https://placehold.co/64x64/E5E7EB/4B5563?text=Logo"
            alt="Provider Logo"
            className="w-full h-full object-cover rounded-lg"
            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/64x64/E5E7EB/4B5563?text=Logo"; }}
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">{scholarship.name}</h1>
          <p className="text-gray-600 text-lg">{scholarship.provider}</p>
        </div>
      </div>

      {/* Updated On */}
      <div className="flex items-center text-gray-500 text-sm mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span>Updated On: {new Date(scholarship.date).toLocaleDateString()}</span>
      </div>

      {/* Action Section */}
      <div className="flex items-center justify-between border-t border-b border-gray-200 py-4 mb-6">
        <div className="flex space-x-4">
          {/* Heart Icon for saving */}
          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 22.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
        <button
          onClick={() => window.open(scholarship.applicationLink, "_blank")}
          className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition-colors duration-200 cursor-pointer">
          Apply Now
        </button>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center text-gray-700 mb-2">
            <span className="font-medium">Applicants</span>
          </div>
          <span className="text-xl font-bold text-gray-900">45</span>
        </div>
        <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center text-gray-700 mb-2">
            <span className="font-medium">Deadline</span>
          </div>
          <span className="text-xl font-bold text-gray-900">{daysLeft} days</span>
        </div>
        <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center text-gray-700 mb-2">
            <span className="font-medium">Amount</span>
          </div>
          <span className="text-xl font-bold text-gray-900">{scholarship.amount}</span>
        </div>
        <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center text-gray-700 mb-2">
            <span className="font-medium">Views</span>
          </div>
          <span className="text-xl font-bold text-gray-900">200</span>
        </div>
      </div>

      {/* Eligibility Section */}
      <div className="mt-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4 border-l-4 border-green-600 pl-3">Eligibility</h2>
        <div className="flex flex-wrap gap-3">
          {scholarship.eligibility.map((eligible, index) => (
            <span key={index} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">{eligible}</span>
          ))}
        </div>
      </div>

      {/* About the Scholarship */}
      <h2 className="mt-10 text-2xl font-bold text-gray-900 mb-6 border-l-4 border-green-600 pl-3">About the Scholarship</h2>
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Description:</h3>
        <p className="text-gray-700 leading-relaxed">
          {scholarship.description}
        </p>
      </div>

      {/* Additional Information */}
      <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-green-600 pl-3">Additional Information</h2>
      <div className="flex items-center justify-between p-4 mb-4 bg-blue-50 rounded-lg border border-blue-100">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Application Link</h3>
          <p className="text-gray-700 break-words"><a href={scholarship.applicationLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{scholarship.applicationLink}</a></p>
        </div>
      </div>
      <div className="flex items-center justify-between p-4 mb-4 bg-green-50 rounded-lg border border-green-100">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Amount</h3>
          <p className="text-gray-700">{scholarship.amount}</p>
        </div>
      </div>
      <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg border border-yellow-100">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Application Method</h3>
          <p className="text-gray-700">{scholarship.method}</p>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipDetails;