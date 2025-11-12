import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ScholarshipForm = ({ onClose }) => {
  const navigate  = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    provider: "",
    eligibility: "",
    amount: "",
    duration: "",
    deadline: "",
    description: "",
    benefits: "",
    applicationProcess: "",
    documentsRequired: "",
    applicationLink: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const processedData = {
        ...formData,
        benefits: formData.benefits
          .split(",")
          .map((b) => b.trim())
          .filter((b) => b.length > 0),
        documentsRequired: formData.documentsRequired
          .split(",")
          .map((d) => d.trim())
          .filter((d) => d.length > 0),
      };

      const response  = await axios.post("http://localhost:3005/api/scholarships", processedData);
      alert("Scholarship added successfully!");
      console.log(response.data)
      setFormData({
        title: "",
        provider: "",
        eligibility: "",
        amount: "",
        duration: "",
        deadline: "",
        description: "",
        benefits: "",
        applicationProcess: "",
        documentsRequired: "",
        applicationLink: "",
      });
      onClose();
    } catch (error) {
      console.error(error);
      alert("Error adding scholarship");
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

        <h2 className="text-2xl font-bold mb-6 text-center">Add Scholarship</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div>
            <label className="block font-medium">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded"
              placeholder="Scholarship title"
              required
            />
          </div>

          {/* Provider */}
          <div>
            <label className="block font-medium">Provider</label>
            <input
              type="text"
              name="provider"
              value={formData.provider}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded"
              placeholder="Organization / Provider name"
              required
            />
          </div>

          {/* Eligibility */}
          <div>
            <label className="block font-medium">Eligibility</label>
            <input
              type="text"
              name="eligibility"
              value={formData.eligibility}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded"
              placeholder="Enter eligibility criteria"
              required
            />
          </div>

          {/* Amount and Duration */}
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block font-medium">Amount</label>
              <input
                type="text"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded"
                placeholder="e.g., ₹50,000 or Full tuition"
                required
              />
            </div>

            <div className="w-1/2">
              <label className="block font-medium">Duration</label>
              <input
                type="text"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded"
                placeholder="e.g., 1 year"
                required
              />
            </div>
          </div>

          {/* Deadline */}
          <div>
            <label className="block font-medium">Deadline</label>
            <input
              type="date"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded h-24"
              placeholder="Describe the scholarship..."
              required
            ></textarea>
          </div>

          {/* Benefits */}
          <div>
            <label className="block font-medium">Benefits (comma-separated)</label>
            <input
              type="text"
              name="benefits"
              value={formData.benefits}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded"
              placeholder="Benefit 1, Benefit 2"
            />
          </div>

          {/* Documents Required */}
          <div>
            <label className="block font-medium">Documents Required (comma-separated)</label>
            <input
              type="text"
              name="documentsRequired"
              value={formData.documentsRequired}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded"
              placeholder="Document 1, Document 2"
            />
          </div>

          {/* Application Process */}
          <div>
            <label className="block font-medium">Application Process</label>
            <textarea
              name="applicationProcess"
              value={formData.applicationProcess}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded h-20"
              placeholder="Describe the application process"
            ></textarea>
          </div>

          {/* Application Link */}
          <div>
            <label className="block font-medium">Application Link</label>
            <input
              type="url"
              name="applicationLink"
              value={formData.applicationLink}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded"
              placeholder="https://example.com"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="mt-4 px-6 py-2 bg-indigo-600 text-white font-semibold rounded hover:bg-indigo-700 transition"
            >
              Submit Scholarship
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ScholarshipForm;
