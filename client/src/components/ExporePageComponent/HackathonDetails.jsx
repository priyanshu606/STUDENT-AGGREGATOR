import React from "react";
import { useNavigate } from "react-router-dom";

const HackathonDetails = ({ hackathon }) => {
  const navigate = useNavigate();
  const handleQuickApply = () => {
    navigate(`/explore/hackathon/apply/${hackathon._id}`);
  }
  if (!hackathon) {
    return (
      <div className="text-gray-500 text-center mt-10">
        Select a Hackathon to see details.
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto my-8 p-6 bg-white rounded-lg shadow-md border border-gray-200 font-inter">
      {/* Header */}
      <div className="flex items-center mb-6">
        <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mr-4 overflow-hidden">
          <img
            src="https://placehold.co/64x64/E5E7EB/4B5563?text=Logo"
            alt="Company Logo"
            className="w-full h-full object-cover rounded-lg"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://placehold.co/64x64/E5E7EB/4B5563?text=Logo";
            }}
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">{hackathon.title}</h1>
          <p className="text-gray-600 text-lg">{hackathon.company}</p>
        </div>
      </div>

      {/* Date Info */}
      <div className="text-sm text-gray-500 mb-6">
        <span>📅 {hackathon.startDate} - {hackathon.endDate}</span>
      </div>

      {/* Key Info */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        <InfoCard title="Location" value={hackathon.location} icon="📍" />
        <InfoCard title="Prize" value={hackathon.prize} icon="🏆" />
        <InfoCard title="Deadline" value={hackathon.registrationDeadline} icon="⏰" />
        <InfoCard title="Team Size" value={hackathon.teamSize} icon="👥" />
        <InfoCard title="Applicants" value={hackathon.apply} icon="🧑‍💻" />
        <InfoCard title="Views" value={hackathon.impression} icon="👁️" />
      </div>

      {/* Eligibility */}
      <Section title="Eligibility">
        <div className="flex flex-wrap gap-3">
          {hackathon.eligibility.map((item, idx) => (
            <span key={idx} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">
              {item}
            </span>
          ))}
        </div>
      </Section>

      {/* Themes */}
      <Section title="Themes">
        <div className="flex flex-wrap gap-3">
          {hackathon.themes.map((theme, idx) => (
            <span key={idx} className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm">
              {theme}
            </span>
          ))}
        </div>
      </Section>

      {/* Description */}
      <Section title="About the Hackathon">
        <p className="text-gray-700 leading-relaxed">{hackathon.description}</p>
      </Section>

      {/* Quick Apply */}
      <div className="text-center mt-8">
        <button
          onClick={handleQuickApply}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

const Section = ({ title, children }) => (
  <div className="mt-8">
    <h2 className="text-xl font-bold text-gray-900 mb-4 border-l-4 border-blue-600 pl-3">{title}</h2>
    {children}
  </div>
);

const InfoCard = ({ title, value, icon }) => (
  <div className="p-4 bg-gray-50 rounded-lg border text-center">
    <div className="text-2xl mb-1">{icon}</div>
    <h3 className="text-sm text-gray-500">{title}</h3>
    <p className="text-lg font-bold text-gray-900">{value}</p>
  </div>
);

export default HackathonDetails;
