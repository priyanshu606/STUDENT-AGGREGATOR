import React, { useEffect, useState } from 'react';
import TechEventsCard from '../components/ExporePageComponent/TechEventsCard';
import TechEventDetails from '../components/ExporePageComponent/TechEventDetails';
import { dummyEvents } from '../assets/asset';
import axios from 'axios';

const TechEventPage = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [techEvents,setTechEvents] = useState([]);

  useEffect(()=>{
    const fetchData = async()=>{
      try {
        const response = await axios.get('http://localhost:3005/api/all/tech-events');
        setTechEvents(response.data);
      } catch (error) {
        console.error("Error fetching internships:", error);
      } finally {
        
      }
      
    }
    fetchData();
  })

  return (
    <div className="flex flex-col mt-19">
      <div className="flex h-screen">
        {/* Left: List of Events */}
        <div className="w-1/3 border-r p-4 overflow-y-auto">
          {techEvents.map((event) => (
            <TechEventsCard
              key={event._id}
              event={event}
              isSelected={selectedEvent?.id === event.id}
              onSelect={setSelectedEvent}
            />
          ))}
        </div>

        {/* Right: Details of selected Event */}
        <div className="w-2/3 overflow-y-auto p-4">
          {selectedEvent ? (
            <TechEventDetails event={selectedEvent} />
          ) : (
            <p className="text-gray-500 text-lg">Select an event to view details</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TechEventPage;
