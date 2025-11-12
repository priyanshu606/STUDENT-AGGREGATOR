import { useEffect, useState } from "react";
import axios from "axios";
import { FaSearch, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";

const FilterHackathon = ({ setHackathons }) => {
  const [filters, setFilters] = useState({
    category: "",
    status: "",
    location: "",
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const fetchHackathons = async () => {
      try {
        const query = new URLSearchParams(
          Object.fromEntries(Object.entries(filters).filter(([_, v]) => v))
        ).toString();

        const res = await axios.get(
          `http://localhost:3005/api/all/hackathon${query ? "?" + query : ""}`
        );

        setHackathons(res.data);
      } catch (err) {
        console.error("Error fetching hackathons:", err);
      }
    };

    fetchHackathons();
  }, [filters, setHackathons]);

  return (
    <div className="bg-white rounded-lg p-4 mb-6 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Category Filter */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-500 flex items-center gap-2">
            <FaBriefcase /> Category
          </label>
          <input
            type="text"
            name="category"
            placeholder="AI, Web3, HealthTech..."
            value={filters.category}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Status Filter */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-500 flex items-center gap-2">
            <FaSearch /> Status
          </label>
          <select
            name="status"
            value={filters.status}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          >
            <option value="">All</option>
            <option value="live">Live</option>
            <option value="upcoming">Upcoming</option>
            <option value="closed">Closed</option>
            <option value="expired">Expired</option>
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
            placeholder="Online or Bengaluru"
            value={filters.location}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>
    </div>
  );
};

export default FilterHackathon;
