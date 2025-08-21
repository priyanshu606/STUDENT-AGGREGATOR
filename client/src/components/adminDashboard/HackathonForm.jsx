import axios from "axios";
import React, { useState } from "react";

const HackathonForm = ({ onClose }) => {
  const [hackathonForm, setHackathonForm] = useState({
    title: "",
    company: "",
    location: "",
    apply: "",
    daysLeft: "",
    impression: "",
    startDate: "",
    endDate: "",
    registrationDeadline: "",
    prize: "",
    eligibility: "",
    teamSize: "",
    themes: "",
    description: "",
    link: "",
  });

  const handleChange = (e) => {
    setHackathonForm({
      ...hackathonForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const processedData = {
      ...hackathonForm,
      eligibility: hackathonForm.eligibility
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item.length > 0),
      themes: hackathonForm.themes
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item.length > 0),
      apply: hackathonForm.apply ? Number(hackathonForm.apply) : 0,
      daysLeft: hackathonForm.daysLeft ? Number(hackathonForm.daysLeft) : 0,
      impression: hackathonForm.impression
        ? Number(hackathonForm.impression)
        : 0,
    };

    try {
      const response = await axios.post(
        "http://localhost:3005/api/add/hackathon",
        processedData
      );
      console.log("Hackathon created:", response.data);
      onClose();
    } catch (error) {
      console.error("Error creating hackathon:", error);
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

        <h2 className="text-2xl font-bold mb-6 text-center">
          Create Hackathon
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Title */}
          <div>
            <label className="block font-medium">Title</label>
            <input
              type="text"
              name="title"
              value={hackathonForm.title}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded"
              placeholder="Enter hackathon title"
            />
          </div>

          {/* Company */}
          <div>
            <label className="block font-medium">Company</label>
            <input
              type="text"
              name="company"
              value={hackathonForm.company}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded"
              placeholder="Organizer / Company name"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block font-medium">Location</label>
            <input
              type="text"
              name="location"
              value={hackathonForm.location}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded"
              placeholder="City / Remote"
            />
          </div>

          {/* Apply, Days Left, Impressions */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block font-medium">Apply Count</label>
              <input
                type="number"
                name="apply"
                value={hackathonForm.apply}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded"
              />
            </div>
            <div>
              <label className="block font-medium">Days Left</label>
              <input
                type="number"
                name="daysLeft"
                value={hackathonForm.daysLeft}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded"
              />
            </div>
            <div>
              <label className="block font-medium">Impressions</label>
              <input
                type="number"
                name="impression"
                value={hackathonForm.impression}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded"
              />
            </div>
          </div>

          {/* Dates */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block font-medium">Start Date</label>
              <input
                type="date"
                name="startDate"
                value={hackathonForm.startDate}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded"
              />
            </div>
            <div>
              <label className="block font-medium">End Date</label>
              <input
                type="date"
                name="endDate"
                value={hackathonForm.endDate}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded"
              />
            </div>
            <div>
              <label className="block font-medium">Registration Deadline</label>
              <input
                type="date"
                name="registrationDeadline"
                value={hackathonForm.registrationDeadline}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded"
              />
            </div>
          </div>

          {/* Prize */}
          <div>
            <label className="block font-medium">Prize</label>
            <input
              type="text"
              name="prize"
              value={hackathonForm.prize}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded"
              placeholder="e.g., ₹50,000"
            />
          </div>

          {/* Eligibility */}
          <div>
            <label className="block font-medium">
              Eligibility (comma separated)
            </label>
            <input
              type="text"
              name="eligibility"
              value={hackathonForm.eligibility}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded"
              placeholder="B.Tech, MBA, MCA..."
            />
          </div>

          {/* Team Size */}
          <div>
            <label className="block font-medium">Team Size</label>
            <input
              type="text"
              name="teamSize"
              value={hackathonForm.teamSize}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded"
              placeholder="e.g., 1-4 members"
            />
          </div>

          {/* Themes */}
          <div>
            <label className="block font-medium">Themes (comma separated)</label>
            <input
              type="text"
              name="themes"
              value={hackathonForm.themes}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded"
              placeholder="AI, Healthcare, Sustainability..."
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium">Description</label>
            <textarea
              name="description"
              value={hackathonForm.description}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded h-24"
              placeholder="Describe the hackathon..."
            ></textarea>
          </div>

          {/* Link */}
          <div>
            <label className="block font-medium">Hackathon Link</label>
            <input
              type="url"
              name="link"
              value={hackathonForm.link}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded"
              placeholder="https://example.com"
            />
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
            >
              Submit Hackathon
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HackathonForm;
