import axios from "axios";
import React, { useState } from "react";

const ScholarshipForm = ({onClose}) => {
    const [scholarshipForm,setScholarshipForm] = useState({
        name:"",
        provider:"",
        amount:"",
        date:"",
        applicationLink:"",
        eligibility:"",
        description:"",
        method:"",
        views:"",
        applicants:"",
        deadline:"",
    })

    const handleChange = (e)=>{
        const newscholarshipForm = {...scholarshipForm,[e.target.name]:e.target.value};
        setScholarshipForm(newscholarshipForm);
    }
    const handleSubmit = async(e)=>{
         e.preventDefault();
         console.log("submit scholarship",scholarshipForm);

         try {
            const response = await axios.post("http://localhost:3005/api/add/scholarship",scholarshipForm)
            console.log("Submitted scholarship:", response.data);
            onClose();
         } catch (error) {
            console.log("eror",error);
         }
    }

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
          Create Scholarship
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="block font-medium">Scholarship Name</label>
            <input
              type="text"
              name="name"
              value={scholarshipForm.name}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded"
              placeholder="Enter scholarship name"
            />
          </div>

          {/* Provider */}
          <div>
            <label className="block font-medium">Provider</label>
            <input
              type="text"
              name="provider"
              value={scholarshipForm.provider}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded"
              placeholder="Scholarship provider name"
            />
          </div>

          {/* Amount */}
          <div>
            <label className="block font-medium">Amount</label>
            <input
              type="number"
              name="amount"
              value={scholarshipForm.amount}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded"
              placeholder="e.g., ₹50,000 / Full Tuition"
            />
          </div>

          {/* Application Link */}
          <div>
            <label className="block font-medium">Application Link</label>
            <input
              type="url"
              name="applicationLink"
              value={scholarshipForm.applicationLink}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded"
              placeholder="https://example.com"
            />
          </div>

          {/* Eligibility */}
          <div>
            <label className="block font-medium">Eligibility</label>
            <input
              type="text"
              name="eligibility"
              value={scholarshipForm.eligibility}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded"
              placeholder="Enter eligibility criteria"
            />
          </div>

          {/* Method */}
          <div>
            <label className="block font-medium">Application Method</label>
            <input
              type="text"
              name="method"
              value={scholarshipForm.method}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded"
              placeholder="Online / Offline / Email"
            />
          </div>

          {/* Deadline */}
          <div>
            <label className="block font-medium">Deadline</label>
            <input
              type="date"
              name="deadline"
              value={scholarshipForm.deadline}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded"
            />
          </div>

          {/* Date (Published / Start Date) */}
          <div>
            <label className="block font-medium">Date</label>
            <input
              type="date"
              name="date"
              value={scholarshipForm.date}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium">Description</label>
            <textarea
              name="description"
              value={scholarshipForm.description}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded h-24"
              placeholder="Describe the scholarship..."
            ></textarea>
          </div>

          {/* Views & Applicants (Admin Only, optional) */}
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block font-medium">Views</label>
              <input
                type="number"
                name="views"
                value={scholarshipForm.views}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded"
                placeholder="0"
              />
            </div>

            <div className="w-1/2">
              <label className="block font-medium">Applicants</label>
              <input
                type="number"
                name="applicants"
                value={scholarshipForm.applicants}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded"
                placeholder="0"
              />
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
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
