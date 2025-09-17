import { useEffect, useState } from "react";

import axios from "axios";
import ScholarshipCard from "../components/ExporePageComponent/ScholarshipCard ";
import ScholarshipDetails from "../components/ExporePageComponent/ScholarshipDetails ";

const ScholarshipPage = () => {
  const [selectedScholarship, setSelectedScholarship] = useState(null);
  const [scholarships, setScholarships] = useState([]);
  const [load, setLoad] = useState(true);
  useEffect(() => {
    setLoad(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3005/api/all/scholarship"
        );
        console.log(response.data);
        setScholarships(response.data);
      } catch (error) {
        console.error("Error fetching internships:", error);
      } finally {
        setLoad(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col mt-15">
      <div className="flex h-screen mt-1">
        <div className="w-1/3 border-r p-4 overflow-y-auto">
          {load ? (
            <p>Loading...</p>
          ) : scholarships.length === 0 ? (
            <p className="text-gray-500">No internships found.</p>
          ) : (
            scholarships.map((scholarship) => (
              <ScholarshipCard
                key={scholarship._id}
                scholarship={scholarship}
                isSelected={selectedScholarship?._id === scholarship._id}
                onSelect={setSelectedScholarship}
              />
            ))
          )}
        </div>

        {/* Right: Details of selected scholarship */}
        <div className="w-2/3 overflow-y-auto">
          <ScholarshipDetails scholarship={selectedScholarship} />
        </div>
      </div>
    </div>
  );
};

export default ScholarshipPage;
