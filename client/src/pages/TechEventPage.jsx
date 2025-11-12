import React, { useState, useEffect } from "react";
import axios from "axios";
import TechEventCard from "../components/ExporePageComponent/TechEventsCard";
import TechEventDetails from "../components/ExporePageComponent/TechEventDetails";

const TechEventPage = () => {
  const [techEvents, setTechEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const fetchTechEvents = async () => {
      try {
        const res = await axios.get("http://localhost:3005/api/all/tech-events");
        setTechEvents(res.data);
        if (res.data.length > 0) setSelectedEvent(res.data[0]);
      } catch (err) {
        console.error("Error fetching tech events:", err);
      }
    };

    fetchTechEvents();
  }, []);

  return (
    <div className="flex flex-col mt-18">
      <div className="flex h-screen">
        {/* Left side: Event list */}
        <div className="w-1/3 border-r p-4 overflow-y-auto">
          {techEvents.map((event) => (
            <TechEventCard
              key={event._id}
              event={event}
              onSelect={setSelectedEvent}
              isSelected={selectedEvent?._id === event._id}
            />
          ))}
        </div>

        {/* Right side: Selected Event Details */}
        <div className="w-2/3 overflow-y-auto p-4">
          {selectedEvent ? (
            <TechEventDetails event={selectedEvent} />
          ) : (
            <p className="text-gray-500">Select an event to see details</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TechEventPage;
