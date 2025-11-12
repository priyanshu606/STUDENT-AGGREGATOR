import axios from "axios";
import React, { useState } from "react";

const ContestForm = ({ onClose }) => {
  const [contestForm, setContestForm] = useState({
    title: "",
    platform: "",
    startDate: "",
    endDate: "",
    duration: "",
    level: "Beginner",
    participants: "",
    tags: "",
    description: "",
    link: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContestForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const processedData = {
      ...contestForm,
      tags: contestForm.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag.length > 0),
    };

    try {
      const response = await axios.post(
        "http://localhost:3005/api/add/contest",
        processedData
      );
      console.log("Response:", response.data);
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto p-8 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-2xl font-bold focus:outline-none"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center">Create Contest</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Title */}
          <div>
            <label className="block font-medium">Title</label>
            <input
              type="text"
              name="title"
              value={contestForm.title}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded"
              placeholder="Enter contest title"
              required
            />
          </div>

          {/* Platform */}
          <div>
            <label className="block font-medium">Platform</label>
            <input
              type="text"
              name="platform"
              value={contestForm.platform}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded"
              placeholder="e.g., Codeforces, LeetCode"
              required
            />
          </div>

          {/* Dates */}
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block font-medium">Start Date</label>
              <input
                type="datetime-local"
                name="startDate"
                value={contestForm.startDate}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded"
                required
              />
            </div>

            <div className="w-1/2">
              <label className="block font-medium">End Date</label>
              <input
                type="datetime-local"
                name="endDate"
                value={contestForm.endDate}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded"
                required
              />
            </div>
          </div>

          {/* Duration */}
          <div>
            <label className="block font-medium">Duration</label>
            <input
              type="text"
              name="duration"
              value={contestForm.duration}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded"
              placeholder="e.g., 2 hrs"
              required
            />
          </div>

          {/* Level Dropdown */}
          <div>
            <label className="block font-medium">Level</label>
            <select
              name="level"
              value={contestForm.level}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded"
              required
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

          {/* Participants */}
          <div>
            <label className="block font-medium">Participants</label>
            <input
              type="text"
              name="participants"
              value={contestForm.participants}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded"
              placeholder="e.g., 12,000+"
            />
          </div>

          {/* Tags */}
          <div>
            <label className="block font-medium">Tags</label>
            <input
              type="text"
              name="tags"
              value={contestForm.tags}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded"
              placeholder="e.g., algorithms, data-structures"
            />
            <p className="text-sm text-gray-500">
              Comma-separated tags for filtering
            </p>
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium">Description</label>
            <textarea
              name="description"
              value={contestForm.description}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded h-24"
              placeholder="Describe the contest..."
            ></textarea>
          </div>

          {/* Contest Link */}
          <div>
            <label className="block font-medium">Contest Link</label>
            <input
              type="url"
              name="link"
              value={contestForm.link}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded"
              placeholder="https://example.com"
              required
            />
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="mt-4 px-6 py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-700"
            >
              Create Contest
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContestForm;
