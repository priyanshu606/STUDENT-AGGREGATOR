import axios from "axios";
import React, { useState } from "react";

const InternshipForm = ({ onClose }) => {
  const [internshipForm, setInternshipForm] = useState({
    title: "",
    company: "",
    role: "",
    eligibility: "",
    workType: "",
    duration: "",
    stipend: "",
    location: "",
    startDate: "",
    endDate: "",
    description: "",
    applicationLink: "",
  });

 
  const handleChange = (e) => {
    const newInternshipForm = {
      ...internshipForm,
      [e.target.name]: e.target.value,
    }
    setInternshipForm(newInternshipForm);
  };

 
  const handleSubmit = async(e) => {
    e.preventDefault();

    
    const processedData = {
      ...internshipForm,
      eligibility: internshipForm.eligibility
        .split(",")
        .map(item => item.trim())
        .filter(item => item.length > 0),
    };

    console.log("Submitted Internship:", processedData);
    try {
      const response = await axios.post("http://localhost:3005/api/add/internship",processedData)
      console.log("Submitted Internship:", response.data);
      onClose();
    } catch (error) {
      console.log(error)
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
          Create Internship
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block font-medium">Title</label>
            <input
              type="text"
              name="title"
              value={internshipForm.title}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded"
              placeholder="Enter internship title"
            />
          </div>

          <div>
            <label className="block font-medium">Company</label>
            <input
              type="text"
              name="company"
              value={internshipForm.company}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded"
              placeholder="Company name"
            />
          </div>

          <div>
            <label className="block font-medium">Role</label>
            <input
              type="text"
              name="role"
              value={internshipForm.role}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded"
              placeholder="Internship role"
            />
          </div>

          <div>
            <label className="block font-medium">Eligibility</label>
            <input
              type="text"
              name="eligibility"
              value={internshipForm.eligibility}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded"
              placeholder="Enter eligibility (comma-separated)"
            />
            <p className="text-sm text-gray-500">
              Example: B.Tech 3rd year, MBA, MCA
            </p>
          </div>

          <div>
            <label className="block font-medium">Work Type</label>
            <input
              type="text"
              name="workType"
              value={internshipForm.workType}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded"
              placeholder="Remote / In-office"
            />
          </div>

          <div>
            <label className="block font-medium">Duration</label>
            <input
              type="text"
              name="duration"
              value={internshipForm.duration}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded"
              placeholder="e.g., 6 weeks"
            />
          </div>

          <div>
            <label className="block font-medium">Stipend</label>
            <input
              type="text"
              name="stipend"
              value={internshipForm.stipend}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded"
              placeholder="e.g., ₹10,000/month"
            />
          </div>

          <div>
            <label className="block font-medium">Location</label>
            <input
              type="text"
              name="location"
              value={internshipForm.location}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded"
              placeholder="Location or Remote"
            />
          </div>

          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block font-medium">Start Date</label>
              <input
                type="date"
                name="startDate"
                value={internshipForm.startDate}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded"
              />
            </div>

            <div className="w-1/2">
              <label className="block font-medium">End Date</label>
              <input
                type="date"
                name="endDate"
                value={internshipForm.endDate}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded"
              />
            </div>
          </div>

          <div>
            <label className="block font-medium">Description</label>
            <textarea
              name="description"
              value={internshipForm.description}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded h-24"
              placeholder="Describe the internship..."
            ></textarea>
          </div>

          <div>
            <label className="block font-medium">Application Link</label>
            <input
              type="url"
              name="applicationLink"
              value={internshipForm.applicationLink}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded"
              placeholder="https://example.com"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
            >
              Submit Internship
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InternshipForm;
