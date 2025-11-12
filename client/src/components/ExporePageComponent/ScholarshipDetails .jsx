import React from "react";
import {
  FaGraduationCap,
  FaMoneyBillWave,
  FaClock,
  FaFileAlt,
  FaLink,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ScholarshipDetails = ({ scholarship }) => {
  const navigate = useNavigate();
  const handleQuickApply = ()=>{
    navigate(`/explore/scholarship/apply/${scholarship._id}`);
  }
  if (!scholarship) {
    return (
      <div className="text-gray-500 text-center mt-10 p-6 rounded-lg bg-white shadow-md">
        <p className="text-xl font-medium">Select a scholarship to see details.</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto my-8 p-8 bg-white rounded-2xl shadow-xl border border-gray-100 font-sans transition-all duration-300 hover:shadow-2xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between pb-6 mb-8 border-b border-gray-200">
        <div className="flex items-center mb-6 md:mb-0">
          <div className="w-20 h-20 bg-gradient-to-tr from-indigo-100 to-purple-100 rounded-2xl flex items-center justify-center mr-6 overflow-hidden shadow-md">
            <img
              src="https://placehold.co/80x80/EEF2FF/4338CA?text=S"
              alt="Scholarship Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 leading-tight mb-1">
              {scholarship.title}
            </h1>
            <p className="text-lg text-gray-600">{scholarship.provider}</p>
          </div>
        </div>
        <button
          onClick={handleQuickApply}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-full shadow-lg hover:from-purple-700 hover:to-indigo-700 transition transform hover:scale-105"
        >
          Apply Now
        </button>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Column */}
        <div className="md:col-span-2">
          {/* Basic Info */}
          <Section title="Basic Information">
            <div className="space-y-2">
              <p><strong>Eligibility:</strong> {scholarship.eligibility}</p>
              <p><strong>Amount:</strong> {scholarship.amount}</p>
              <p><strong>Duration:</strong> {scholarship.duration}</p>
              <p><strong>Deadline:</strong> {scholarship.deadline}</p>
            </div>
          </Section>

          {/* Description */}
          <Section title="Description">
            <p className="text-gray-700 leading-relaxed text-base">{scholarship.description}</p>
          </Section>

          {/* Benefits */}
          {scholarship.benefits && scholarship.benefits.length > 0 && (
            <Section title="Benefits">
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {scholarship.benefits.map((benefit, idx) => (
                  <li key={idx}>{benefit}</li>
                ))}
              </ul>
            </Section>
          )}

          {/* Application Process */}
          <Section title="Application Process">
            <p>{scholarship.applicationProcess}</p>
          </Section>

          {/* Documents Required */}
          {scholarship.documentsRequired && scholarship.documentsRequired.length > 0 && (
            <Section title="Documents Required">
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {scholarship.documentsRequired.map((doc, idx) => (
                  <li key={idx}>{doc}</li>
                ))}
              </ul>
            </Section>
          )}
        </div>

        {/* Right Column (Info Cards) */}
        <div className="md:col-span-1 space-y-5">
          <InfoCard title="Eligibility" value={scholarship.eligibility} icon="🎓" />
          <InfoCard title="Amount" value={scholarship.amount} icon="💰" />
          <InfoCard title="Duration" value={scholarship.duration} icon="⏳" />
          <InfoCard title="Deadline" value={scholarship.deadline} icon="📅" />
        </div>
      </div>
    </div>
  );
};

// Helper Components
const Section = ({ title, children }) => (
  <div className="mt-10 first:mt-0">
    <h2 className="text-xl font-bold text-gray-900 mb-5 border-l-4 border-indigo-600 pl-3">
      {title}
    </h2>
    {children}
  </div>
);

const InfoCard = ({ title, value, icon }) => (
  <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 text-center shadow-sm hover:shadow-md transition">
    <div className="text-3xl mb-2">{icon}</div>
    <h3 className="text-sm text-gray-500 uppercase tracking-wide">{title}</h3>
    <p className="text-xl font-bold text-gray-900 mt-1">{value}</p>
  </div>
);

export default ScholarshipDetails;
