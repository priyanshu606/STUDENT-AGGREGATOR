import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ContestApplicationForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    platform: "",
    type: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send to backend (optional)
      const res = await axios.post(
        "http://localhost:3005/api/apply",
        formData
      );

      console.log("Submitted Data:", res.data);
      setSuccess("🎉 Application submitted successfully!");
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        platform: "",
        type: "",
      });
       navigate("/explore/coding-contest");
    } catch (err) {
      console.error(err);
      alert("⚠️ Failed to submit. Try again.");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto mt-12 p-10 bg-gradient-to-br from-white via-gray-50 to-green-50 rounded-3xl shadow-xl border border-gray-200 font-inter">
      <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-6">
        📝 Apply for Coding Contest
      </h2>

      {success && (
        <p className="text-green-600 text-center font-medium mb-4">{success}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400 outline-none"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400 outline-none"
            required
          />
        </div>

        {/* Preferred Coding Platform */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Coding Platform</label>
          <input
            type="text"
            name="platform"
            placeholder="LeetCode / CodeChef / Codeforces"
            value={formData.platform}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400 outline-none"
            required
          />
        </div>

        {/* Contest Type */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Contest Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400 outline-none"
            required
          >
            <option value="">Select type</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Rated">Rated</option>
            <option value="Team">Team</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-green-600 text-white font-semibold rounded-full shadow-lg hover:bg-green-700 hover:shadow-green-300 transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
        >
          {loading ? "Submitting..." : "🚀 Submit Application"}
        </button>
      </form>
    </div>
  );
};

export default ContestApplicationForm;
