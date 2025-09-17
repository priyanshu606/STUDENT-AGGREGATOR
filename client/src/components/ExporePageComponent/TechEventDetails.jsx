import React from "react";

const TechEventDetails = ({ event }) => {
  if (!event) {
    return (
      <div className="text-gray-500 text-center mt-10 p-6 rounded-lg bg-white shadow-md">
        <p className="text-xl font-medium">Select a Tech Event to see details.</p>
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
              src="https://placehold.co/80x80/EEF2FF/4338CA?text=E"
              alt="Event Logo"
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
        <a
          href={event.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-full shadow-lg hover:from-purple-700 hover:to-indigo-700 transition transform hover:scale-105"
        >
          Register Now
        </a>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Column (Details) */}
        <div className="md:col-span-2">
          {/* Date & Location */}
          <div className="flex flex-wrap items-center gap-6 text-base text-gray-600 mb-8">
            <span className="flex items-center">
              <span className="text-2xl mr-2">📅</span>
              {event.date}
            </span>
            <span className="flex items-center">
              <span className="text-2xl mr-2">📍</span>
              {event.location}
            </span>
          </div>

          {/* Description */}
          <Section title="About the Event">
            <p className="text-gray-700 leading-relaxed text-base">{event.description}</p>
          </Section>

          {/* Topics */}
          {/* <Section title="Topics">
            <div className="flex flex-wrap gap-3">
              {event.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 font-medium text-sm rounded-full border border-indigo-200 shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Section> */}

          {/* Speakers */}
          <Section title="Speakers">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {event.speakers.map((speaker, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center bg-white rounded-xl shadow-sm p-4 border hover:shadow-md transition"
                >
                  <img
                    src={speaker.image || "https://placehold.co/100x100?text=👤"}
                    alt={speaker.name}
                    className="w-20 h-20 rounded-full object-cover mb-3 border-2 border-indigo-200"
                  />
                  <p className="text-gray-900 font-semibold">{speaker.name}</p>
                  <p className="text-sm text-gray-500">{speaker.title}</p>
                </div>
              ))}
            </div>
          </Section>
        </div>

        {/* Right Column (Info Cards) */}
        <div className="md:col-span-1 space-y-5">
          <InfoCard title="Category" value={event.category} icon="💡" />
          <InfoCard title="Duration" value={event.duration} icon="⏳" />
          <InfoCard title="Attendees" value={event.attendees} icon="👥" />
          <InfoCard title="Tickets" value={event.ticketPrice} icon="🎟️" />
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

export default TechEventDetails;
