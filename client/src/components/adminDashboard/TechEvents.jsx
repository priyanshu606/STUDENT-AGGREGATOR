import axios from "axios";
import React, { useState } from "react";

const TechEventForm = ({ onClose }) => {
  const [techEventForm, setTechEventForm] = useState({
    title: "",
    organizer: "",
    location: "",
    date: "",
    category: "",
    duration: "",
    attendees: "",
    ticketPrice: "",
    speakers: [{ name: "", title: "", image: "" }], 
  });

 
  const handleChange = (e) => {
    setTechEventForm({ ...techEventForm, [e.target.name]: e.target.value });
  };

  const handleSpeakerChange = (index, e) => {
    const newSpeakers = [...techEventForm.speakers];
    newSpeakers[index][e.target.name] = e.target.value;
    setTechEventForm({ ...techEventForm, speakers: newSpeakers });
  };

  
  const addSpeaker = () => {
    setTechEventForm({
      ...techEventForm,
      speakers: [...techEventForm.speakers, { name: "", title: "", image: "" }],
    });
  };

  
  const removeSpeaker = (index) => {
    const newSpeakers = [...techEventForm.speakers];
    newSpeakers.splice(index, 1);
    setTechEventForm({ ...techEventForm, speakers: newSpeakers });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit Tech Event:", techEventForm);

    try {
      const response = await axios.post(
        "http://localhost:3005/api/add/tech-events",
        techEventForm
      );
      console.log("Submitted tech event:", response.data);
      onClose();
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-white/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto p-8 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-2xl font-bold focus:outline-none"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center">Create Tech Event</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Title */}
          <div>
            <label className="block font-medium">Event Title</label>
            <input
              type="text"
              name="title"
              value={techEventForm.title}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
              placeholder="Enter event title"
            />
          </div>

          {/* Organizer */}
          <div>
            <label className="block font-medium">Organizer</label>
            <input
              type="text"
              name="organizer"
              value={techEventForm.organizer}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
              placeholder="Organizer name"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block font-medium">Location</label>
            <input
              type="text"
              name="location"
              value={techEventForm.location}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
              placeholder="Event location"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block font-medium">Date</label>
            <input
              type="date"
              name="date"
              value={techEventForm.date}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block font-medium">Category</label>
            <input
              type="text"
              name="category"
              value={techEventForm.category}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
              placeholder="Tech / Business / Workshop"
            />
          </div>

          {/* Duration */}
          <div>
            <label className="block font-medium">Duration</label>
            <input
              type="text"
              name="duration"
              value={techEventForm.duration}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
              placeholder="e.g., 3 hours / 2 days"
            />
          </div>

          {/* Attendees & Ticket Price */}
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block font-medium">Attendees</label>
              <input
                type="number"
                name="attendees"
                value={techEventForm.attendees}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded"
                placeholder="0"
              />
            </div>
            <div className="w-1/2">
              <label className="block font-medium">Ticket Price</label>
              <input
                type="number"
                name="ticketPrice"
                value={techEventForm.ticketPrice}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded"
                placeholder="0"
              />
            </div>
          </div>

          {/* Speakers */}
          <div>
            <label className="block font-medium">Speakers</label>
            {techEventForm.speakers.map((speaker, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  name="name"
                  value={speaker.name}
                  onChange={(e) => handleSpeakerChange(index, e)}
                  className="w-1/3 border px-2 py-1 rounded"
                  placeholder="Name"
                />
                <input
                  type="text"
                  name="title"
                  value={speaker.title}
                  onChange={(e) => handleSpeakerChange(index, e)}
                  className="w-1/3 border px-2 py-1 rounded"
                  placeholder="Title"
                />
                <input
                  type="file"
                  name="image"
                  value={speaker.image}
                  onChange={(e) => handleSpeakerChange(index, e)}
                  className="w-1/3 border px-2 py-1 rounded"
                  placeholder="Image URL"
                />
                <button
                  type="button"
                  onClick={() => removeSpeaker(index)}
                  className="px-2 text-red-600 font-bold"
                >
                  ✕
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addSpeaker}
              className="mt-2 px-4 py-1 bg-green-500 text-white rounded"
            >
              + Add Speaker
            </button>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
            >
              Submit Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TechEventForm;
