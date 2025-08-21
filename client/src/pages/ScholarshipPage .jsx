import { useEffect, useState } from "react";

import axios from "axios";
import ScholarshipCard from "../components/ExporePageComponent/ScholarshipCard ";
import ScholarshipDetails from "../components/ExporePageComponent/ScholarshipDetails ";
import { scholarships } from "../assets/asset";

const ScholarshipPage = () => {
  const [selectedScholarship, setSelectedScholarship] = useState(null);
//   const [scholarships, setScholarships] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get("http://localhost:3005/api/all/scholarship");
//         setScholarships(response.data);
//       } catch (err) {
//         console.error("Error fetching scholarships:", err);
//         setError("Failed to load scholarships. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

  return (
    <div className="flex flex-col mt-15">
      
      <div className="flex h-screen mt-1">
        
        <div className="w-1/3 border-r p-4 overflow-y-auto">
       
         {scholarships.map((scholarship)=>(
              <ScholarshipCard
                key={scholarship._id}
                scholarship={scholarship}
                isSelected={selectedScholarship?._id === scholarship._id}
                onSelect={setSelectedScholarship}
              />
          ))}
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