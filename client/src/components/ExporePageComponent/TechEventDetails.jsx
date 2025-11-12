import React from "react";
import { useNavigate } from "react-router-dom";

const TechEventDetails = ({ event }) => {
  const navigate = useNavigate();
  const handleQuickApply = ()=>{
    navigate(`/explore/events/apply/${event._id}`);
  }
  if (!event) {
    return (
      <div className="text-gray-500 text-center mt-10 p-6 rounded-lg bg-white shadow-md">
        <p className="text-xl font-medium">Select a tech event to see details.</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto my-8 p-8 bg-white rounded-2xl shadow-xl border border-gray-100 font-sans transition-all duration-300 hover:shadow-2xl">
      
      <div className="flex flex-col md:flex-row items-center justify-between pb-6 mb-8 border-b border-gray-200">
        <div className="flex items-center mb-6 md:mb-0">
          <div className="w-20 h-20 bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mr-6 overflow-hidden shadow-md">
            <img
              src={event.banner}
              alt="Event Banner"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 leading-tight mb-1">
              {event.title}
            </h1>
            <p className="text-lg text-gray-600">{event.organizer}</p>
          </div>
        </div>
        <button
          onClick={handleQuickApply}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full shadow-lg hover:from-blue-700 hover:to-indigo-700 transition transform hover:scale-105"
        >
          register
        </button>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Column */}
        <div className="md:col-span-2">
          {/* Basic Info */}
          <Section title="Basic Information">
            <div className="space-y-2">
              <p><strong>Date:</strong> {event.date}</p>
              <p><strong>Location:</strong> {event.location}</p>
              <p><strong>Type:</strong> {event.type}</p>
              <p><strong>Mode:</strong> {event.mode}</p>
              <p><strong>Registration Fee:</strong> {event.registrationFee}</p>
            </div>
          </Section>

          {/* Description */}
          <Section title="About the Event">
            <p className="text-gray-700 leading-relaxed text-base">{event.description}</p>
          </Section>

          {/* Topics Covered */}
          {event.topics && event.topics.length > 0 && (
            <Section title="Topics Covered">
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {event.topics.map((topic, idx) => (
                  <li key={idx}>{topic}</li>
                ))}
              </ul>
            </Section>
          )}

          {/* Speakers */}
          {event.speakers && event.speakers.length > 0 && (
            <Section title="Featured Speakers">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {event.speakers.map((speaker, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-gray-50 rounded-xl border border-gray-200 text-center shadow-sm hover:shadow-md transition"
                  >
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover"
                    />
                    <h3 className="mt-3 text-lg font-semibold text-gray-900">
                      {speaker.name}
                    </h3>
                    <p className="text-sm text-gray-600">{speaker.designation}</p>
                  </div>
                ))}
              </div>
            </Section>
          )}
        </div>

        {/* Right Column (Info Cards) */}
        <div className="md:col-span-1 space-y-5">
          <InfoCard title="Date" value={event.date} icon="📅" />
          <InfoCard title="Location" value={event.location} icon="📍" />
          <InfoCard title="Type" value={event.type} icon="🎯" />
          <InfoCard title="Mode" value={event.mode} icon="💻" />
          <InfoCard title="Fee" value={event.registrationFee} icon="💰" />
        </div>
      </div>
    </div>
  );
};

// Reusable Components
const Section = ({ title, children }) => (
  <div className="mt-10 first:mt-0">
    <h2 className="text-xl font-bold text-gray-900 mb-5 border-l-4 border-blue-600 pl-3">
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

export default TechEventDetails;
