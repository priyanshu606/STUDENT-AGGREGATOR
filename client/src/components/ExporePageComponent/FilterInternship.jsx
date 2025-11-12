import { useEffect, useState } from "react";
import axios from "axios";
import { FaSearch, FaBuilding, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";

const FilterInternship = ({ setInternships }) => {
  const [filters, setFilters] = useState({
    role: "",
    workType: "",
    location: "",
    company: ""
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const fetchInternships = async () => {
      try {
        const query = new URLSearchParams(
          Object.fromEntries(
            Object.entries(filters).filter(([_, v]) => v)
          )
        ).toString();

        const res = await axios.get(
          `http://localhost:3005/api/all/internship${query ? "?" + query : ""}`
        );
        setInternships(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchInternships();
  }, [filters, setInternships]);

  return (
    <div className="bg-white rounded-lg p-4 mb-6 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Role Filter */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-500 flex items-center gap-2">
            <FaBriefcase /> Role
          </label>
          <input
            type="text"
            name="role"
            placeholder="Software Developer"
            value={filters.role}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Work Type Filter */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-500 flex items-center gap-2">
            <FaSearch /> Work Type
          </label>
          <select
            name="workType"
            value={filters.workType}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          >
            <option value="">All Work Types</option>
            <option value="Remote">Remote</option>
            <option value="In-office">In-office</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>

        {/* Location Filter */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-500 flex items-center gap-2">
            <FaMapMarkerAlt /> Location
          </label>
          <input
            type="text"
            name="location"
            placeholder="Bengaluru"
            value={filters.location}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Company Filter */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-500 flex items-center gap-2">
            <FaBuilding /> Company
          </label>
          <input
            type="text"
            name="company"
            placeholder="Google"
            value={filters.company}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>
    </div>
  );
};

export default FilterInternship;
