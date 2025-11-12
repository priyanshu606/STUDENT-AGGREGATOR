import { useEffect, useState } from "react";
import axios from "axios";
import { FaSearch, FaBuilding, FaUserGraduate, FaCalendarAlt } from "react-icons/fa";

const FilterScholarship = ({ setScholarships }) => {
  const [filters, setFilters] = useState({
    provider: "",
    eligibility: "",
    search: "",
    active: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters({
      ...filters,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  useEffect(() => {
    const fetchScholarships = async () => {
      try {
        const queryParams = new URLSearchParams();
        if (filters.provider) queryParams.append("provider", filters.provider);
        if (filters.eligibility) queryParams.append("eligibility", filters.eligibility);
        if (filters.search) queryParams.append("search", filters.search);
        if (filters.active) queryParams.append("active", "true");

        const response = await axios.get(
          `http://localhost:3005/api/all/scholarship?${queryParams.toString()}`
        );
        setScholarships(response.data);
      } catch (error) {
        console.error("Error fetching scholarships:", error);
      }
    };

    fetchScholarships();
  }, [filters, setScholarships]);

  return (
    <div className="w-2/3 mx-auto bg-gradient-to-r from-white to-gray-50 rounded-lg p-4 mb-2">
      <h2 className="text-lg font-bold mb-2 text-indigo-600 flex items-center">
        🎓 Filter Scholarships
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        
        {/* Provider Filter */}

        <div className="flex items-center border border-gray-300 rounded-lg px-2 bg-white shadow-sm">
          <FaBuilding className="text-gray-500 mr-2" />
          <input
            type="text"
            name="provider"
            value={filters.provider}
            onChange={handleChange}
            placeholder="Provider..."
            className="w-36 p-2 text-10px outline-none rounded"
          />
        </div>

        {/* Eligibility Filter */}
        <div className="flex items-center border border-gray-300 rounded-lg px-2 bg-white shadow-sm">
          <FaUserGraduate className="text-gray-500 mr-2" />
          <input
            type="text"
            name="eligibility"
            value={filters.eligibility}
            onChange={handleChange}
            placeholder="Eligibility..."
            className="w-36 p-2 text-sm outline-none rounded"
          />
        </div>

        {/* Search by Keyword */}
        <div className="flex items-center border border-gray-300 rounded-lg px-2 bg-white shadow-sm">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            name="search"
            value={filters.search}
            onChange={handleChange}
            placeholder="Title or description..."
            className="w-40 p-2 text-sm outline-none rounded"
          />
        </div>

        {/* Active Only Checkbox */}
        <div className="flex items-center border border-gray-300 rounded-lg px-3 bg-white shadow-sm">
          <FaCalendarAlt className="text-gray-500 mr-2" />
          <label className="flex items-center space-x-2 text-sm">
            <input
              type="checkbox"
              name="active"
              checked={filters.active}
              onChange={handleChange}
              className="w-4 h-4 accent-indigo-500"
            />
            <span className="text-gray-700">Active Only</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterScholarship;
