import React, { useState } from "react";
import axios from "axios";

const TechEventForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    title: "",
    organizer: "",
    date: "",
    location: "",
    type: "",
    mode: "",
    registrationFee: "",
    banner: "",
    description: "",
    topics: "",
    speakers: [{ name: "", designation: "", image: "" }],
    website: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSpeakerChange = (index, e) => {
    const { name, value } = e.target;
    const updatedSpeakers = [...formData.speakers];
    updatedSpeakers[index][name] = value;
    setFormData((prev) => ({ ...prev, speakers: updatedSpeakers }));
  };

  const addSpeaker = () => {
    setFormData((prev) => ({
      ...prev,
      speakers: [...prev.speakers, { name: "", designation: "", image: "" }],
    }));
  };

  const removeSpeaker = (index) => {
    const updatedSpeakers = formData.speakers.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, speakers: updatedSpeakers }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const preparedData = {
      ...formData,
      topics: formData.topics.split(",").map((t) => t.trim()),
    };

    try {
      const res = await axios.post(
        "http://localhost:3005/api/add/tech-events",
        preparedData
      );
      console.log("Event Created:", res.data);
      alert("Event Created Successfully!");
      setFormData({
        title: "",
        organizer: "",
        date: "",
        location: "",
        type: "",
        mode: "",
        registrationFee: "",
        banner: "",
        description: "",
        topics: "",
        speakers: [{ name: "", designation: "", image: "" }],
        website: "",
      });
      onClose && onClose();
    } catch (err) {
      console.error(err);
      alert("Failed to create event");
    }
  };

  return (
    <div className="fixed inset-0 bg-white/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto p-8 relative">
        {/* Close Button */}
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-2xl font-bold focus:outline-none"
          >
            &times;
          </button>
        )}

        <h2 className="text-2xl font-bold mb-6 text-center">Create Tech Event</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Basic Fields */}
          {[
            { label: "Title", name: "title" },
            { label: "Organizer", name: "organizer" },
            { label: "Date", name: "date" },
            { label: "Location", name: "location" },
            { label: "Type", name: "type" },
            { label: "Mode", name: "mode" },
            { label: "Registration Fee", name: "registrationFee" },
            { label: "Banner URL", name: "banner" },
            { label: "Website", name: "website" },
          ].map((field) => (
            <div key={field.name}>
              <label className="block font-medium">{field.label}</label>
              <input
                type="text"
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded"
                required
              />
            </div>
          ))}

          {/* Description */}
          <div>
            <label className="block font-medium">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded h-24"
              required
            ></textarea>
          </div>

          {/* Topics */}
          <div>
            <label className="block font-medium">Topics (comma separated)</label>
            <input
              type="text"
              name="topics"
              value={formData.topics}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded"
              placeholder="Deep Learning, AI Ethics, Neural Networks"
              required
            />
          </div>

          {/* Speakers Section */}
          <div>
            <label className="block font-medium mb-2">Speakers</label>
            {formData.speakers.map((speaker, index) => (
              <div
                key={index}
                className="mb-4 p-4 border border-gray-200 rounded-lg bg-gray-50 relative"
              >
                <div className="flex gap-4 flex-wrap">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={speaker.name}
                    onChange={(e) => handleSpeakerChange(index, e)}
                    className="p-2 border border-gray-300 rounded flex-1"
                    required
                  />
                  <input
                    type="text"
                    name="designation"
                    placeholder="Designation"
                    value={speaker.designation}
                    onChange={(e) => handleSpeakerChange(index, e)}
                    className="p-2 border border-gray-300 rounded flex-1"
                    required
                  />
                  <input
                    type="text"
                    name="image"
                    placeholder="Image URL"
                    value={speaker.image}
                    onChange={(e) => handleSpeakerChange(index, e)}
                    className="p-2 border border-gray-300 rounded flex-1"
                    required
                  />
                </div>
                {formData.speakers.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeSpeaker(index)}
                    className="absolute top-2 right-2 text-red-500 font-bold text-xl"
                  >
                    ✕
                  </button>
                )}
              </div>
            ))}

            <div className="text-center">
              <button
                type="button"
                onClick={addSpeaker}
                className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
              >
                + Add Speaker
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="mt-4 px-6 py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-700"
            >
              Create Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TechEventForm;
