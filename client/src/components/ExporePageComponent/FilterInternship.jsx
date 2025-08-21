import React from 'react';

const filters = [
  {
    label: "Location",
    name: "location",
    options: [
      { id: 1, name: "Lucknow" },
      { id: 2, name: "Delhi" },
      { id: 3, name: "Mumbai" },
      { id: 4, name: "Bangalore" },
      { id: 5, name: "Pune" },
    ]
  },
  {
    label: "Work Type",
    name: "workType",
    options: [
      { id: 1, name: "Remote" },
      { id: 2, name: "On-Site" },
      { id: 3, name: "Hybrid" }
    ]
  },
  {
    label: "Use Type",
    name: "useType",
    options: [
      { id: 1, name: "Full-Time" },
      { id: 2, name: "Part-Time" },
      { id: 3, name: "Contract" }
    ]
  },
  {
    label: "Category",
    name: "category",
    options: [
      { id: 1, name: "Full Stack" },
      { id: 2, name: "Machine Learning" },
      { id: 3, name: "Data Science" }
    ]
  }
];

const FilterInternship = () => {
  return (
    <div className="flex flex-wrap gap-10 p-6 bg-white rounded-lg justify-center">
      {filters.map((filter) => (
        <div key={filter.name} className="flex flex-col w-36">
          <label className="text-sm font-semibold text-gray-700 mb-1">{filter.label}</label>
          <select
            name={filter.name}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-150"
          >
            <option value="">{filter.label}</option>
            {filter.options.map((option) => (
              <option key={option.id} value={option.name}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};

export default FilterInternship;
