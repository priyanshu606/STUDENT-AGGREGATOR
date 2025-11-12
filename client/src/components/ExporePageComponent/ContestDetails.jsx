import React from "react";
import { useNavigate } from "react-router-dom";

const ContestDetails = ({ contest }) => {
  const navigate = useNavigate();
  const handleQuickApply = ()=>{
    navigate(`/explore/coding-contest/apply/${contest._id}`);
  }
  if (!contest) {
    return (
      <div className="text-gray-400 text-center mt-16 text-lg font-medium animate-pulse">
        Select a contest to view detailed information 🚀
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto  p-8 bg-gradient-to-br from-white via-gray-50 to-green-50 rounded-3xl shadow-2xl border border-gray-200 font-inter backdrop-blur-sm transition-all duration-300 hover:shadow-green-200">
      {/* Header */}
      <div className="flex items-center mb-8">
        <div className="w-20 h-20 bg-gradient-to-tr from-green-200 to-green-400 rounded-2xl flex items-center justify-center mr-6 overflow-hidden shadow-md">
          <img
            src="https://placehold.co/80x80/E5E7EB/4B5563?text=Logo"
            alt="Platform Logo"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-1">
            {contest.title}
          </h1>
          <p className="text-green-600 text-lg font-semibold">
            {contest.platform}
          </p>
        </div>
      </div>

      {/* Date Info */}
      <div className="text-md text-gray-600 mb-8 flex items-center gap-2">
        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium shadow-sm">
          📅 {contest.startDate} – {contest.endDate}
        </span>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        <InfoCard title="Duration" value={contest.duration} icon="⏱" />
        <InfoCard title="Level" value={contest.level} icon="⭐" />
        <InfoCard title="Participants" value={contest.participants} icon="👥" />
      </div>

      {/* Tags */}
      {contest.tags && contest.tags.length > 0 && (
        <Section title="Tags">
          <div className="flex flex-wrap gap-3">
            {contest.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-green-100 text-green-800 font-medium rounded-full text-sm hover:bg-green-200 transition-all"
              >
                #{tag}
              </span>
            ))}
          </div>
        </Section>
      )}

      {/* Description */}
      <Section title="About the Contest">
        <p className="text-gray-700 leading-relaxed text-justify text-md">
          {contest.description}
        </p>
      </Section>

      {/* Quick Apply */}
      <div className="text-center mt-10">
        <button
          onClick={handleQuickApply}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-green-600 text-white font-semibold rounded-full shadow-lg hover:bg-green-700 hover:shadow-green-400 transition-all duration-300 transform hover:scale-105"
        >
          🚀 Join Contest
        </button>
      </div>
    </div>
  );
};

const Section = ({ title, children }) => (
  <div className="mt-10">
    <h2 className="text-2xl font-bold text-gray-900 mb-5 flex items-center gap-2">
      <span className="h-6 w-1.5 bg-green-500 rounded-full"></span>
      {title}
    </h2>
    {children}
  </div>
);

const InfoCard = ({ title, value, icon }) => (
  <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-100 text-center hover:shadow-green-100 hover:-translate-y-1 transform transition-all duration-300">
    <div className="text-3xl mb-2">{icon}</div>
    <h3 className="text-gray-500 text-sm mb-1">{title}</h3>
    <p className="text-lg font-semibold text-gray-900">{value}</p>
  </div>
);

export default ContestDetails;
