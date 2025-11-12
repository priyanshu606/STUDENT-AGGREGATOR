import React, { useEffect, useState } from "react";
import axios from "axios";
import ScholarshipCard from "../components/ExporePageComponent/ScholarshipCard ";
import ScholarshipDetails from "../components/ExporePageComponent/ScholarshipDetails "
import FilterScholarship from "../components/ExporePageComponent/FilterScholarship";
const ScholarshipPage = () => {
  const [scholarships, setScholarships] = useState([]);
  const [selectedScholarship, setSelectedScholarship] = useState(null);


  useEffect(() => {
    const fetchScholarships = async () => {
      try {
        const res = await axios.get("http://localhost:3005/api/all/scholarship");
        setScholarships(res.data);     
        if (res.data.length > 0) setSelectedScholarship(res.data[0]);
      } catch (err) {
        console.error("Error fetching scholarships:", err);
      }
    };

    fetchScholarships();
  }, []);

  return (
    <div className="flex flex-col mt-12">
      <FilterScholarship setScholarships = {setScholarships}/>
      <div className="flex h-screen">
        
        {/* Left Column: Scholarship List */}
        <div className="w-1/3 border-r p-4 overflow-y-auto">
          {scholarships.map((scholarship) => (
            <ScholarshipCard
              key={scholarship._id}
              scholarship={scholarship}
              onSelect={setSelectedScholarship}
              isSelected={selectedScholarship?._id === scholarship._id}
            />
          ))}
        </div>

        {/* Right Column: Scholarship Details */}
        <div className="w-2/3 overflow-y-auto p-4">
          <ScholarshipDetails scholarship={selectedScholarship} />
        </div>
      </div>
    </div>
  );
};

export default ScholarshipPage;
