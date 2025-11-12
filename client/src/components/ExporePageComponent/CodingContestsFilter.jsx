import React from "react";
import { FaSearch, FaRedoAlt, FaFilter } from "react-icons/fa";

const CodingContestsFilter = ({ search, setSearch, filter, setFilter, activeTag, setActiveTag }) => {
  const tags = [
    "All tags",
    "advanced",
    "algorithms",
    "beginner",
    "ctf",
    "data-structures",
    "design",
    "frontend",
    "hackathon",
    "intermediate",
    "ml",
    "project",
    "security",
    "shortest-code",
    "team",
  ];

  const handleReset = () => {
    setSearch("");
    setFilter("All");
    setActiveTag("All tags");
  };

  return (
    <div className="w-full bg-white rounded-2xl p-6 space-y-5 shadow-sm">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <FaFilter className="text-green-600" /> Coding Contests
        </h2>

        <div className="flex items-center gap-3 flex-wrap">
          <div className="relative">
            <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
            <input
              type="text"
              value={search}
              placeholder="Search contests..."
              onChange={(e) => setSearch(e.target.value)}
              className="border border-gray-300 rounded-full pl-10 pr-4 py-2 text-sm"
            />
          </div>

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border border-gray-300 rounded-full px-4 py-2 text-sm"
          >
            <option value="All">All</option>
            <option value="Ongoing">Ongoing</option>
            <option value="Upcoming">Upcoming</option>
            <option value="Past">Past</option>
          </select>

          <button
            onClick={handleReset}
            className="flex items-center gap-1 px-4 py-2 border border-gray-300 rounded-full text-sm hover:bg-green-50"
          >
            <FaRedoAlt className="text-sm" /> Reset
          </button>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`px-4 py-1.5 text-sm rounded-full border ${
              activeTag === tag
                ? "bg-green-600 text-white border-green-600"
                : "text-gray-700 border-gray-300 hover:bg-green-50"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CodingContestsFilter;
